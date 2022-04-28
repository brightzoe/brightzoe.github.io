# React 设计模式和最佳实践

1. 在 React 中，界面完全由数据驱动；
2. 在 React 中，一切都是组件；
3. props 是 React 组件之间通讯的基本方式。

生命周期图： https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## 设计 React 组件的原则

保持接口小，props 数量要少；

根据数据边界来划分组件，充分利用组合（composition）；

把 state 往上层组件提取，让下层组件只需要实现为纯函数。

## create-react-app

webpack 配置：
sass: cra 已内置 sass-loader,只需安装 node-sass/sass(dart-sass)

修改其他配置，不 eject 的方式：

- 需要安装：react-app-rewired customize-cra

  ```js title='config-overrides.js'
  const { override, addBabelPlugin, addBabelPreset, addWebpackAlias, adjustStyleLoaders } = require("customize-cra");
  const path = require("path");
  module.exports = override(
    //写样式的方式
    addBabelPlugin("styled-jsx/babel"),

    //别名
    addWebpackAlias({
      "@": path.resolve(__dirname, ".", "src"),
    }),

    //sass-resources-loader共享公共样式文件
    adjustStyleLoaders((rule) => {
      if (rule.test.toString().includes("scss")) {
        rule.use.push({
          loader: require.resolve("sass-resources-loader"),
          options: {
            resources: "./src/styles/shared.scss", //地址
          },
        });
      }
    })
  );
  ```

- 通过 craco 配置，antd4 推荐。 [无 eject 重写 CRA 配置 — Craco 详解 - 掘金](https://juejin.cn/post/6871148364919111688#heading-6)

## React 中的性能优化

跳过不必要的组件更新。

### 重新渲染 reconciliation

#### 渲染触发时间

- 组件挂载。React 组件构建并将 DOM 元素插入页面的过程称为挂载。当组件首次渲染的时候会调用 render，这个过程不可避免。

- 执行 setState 会触发 render。但是这里有个点值得关注，执行 setState 的时候一定会重新渲染吗？答案是不一定。当 setState 传入 null 的时候，并不会触发 render 。

- 父组件更新触发子组件重新渲染。父组件重新渲染了，即使传入子组件的 props 未发生变化，那么子组件也会重新渲染，进而触发 render。

js 为单线程执行，显然，不必要的子组件的 render 会浪费 js 线程资源，复杂任务还会长时间占用线程导致假死状态，也就是页面卡顿，react 底层有 Fiber 来优化任务队列，但无法优化业务代码上的问题。

一般子组件可以通过确认 props 是否发生变化来控制自身是否进行 render，比如 react-mobx 中的 observer 高阶方法或者 React.PureComponet 就是用来做浅层比较进行控制处理。

#### 减少不必要的重新渲染

- 合理的组件结构。将变的部分与不变的部分抽离，可以在不使用任何性能优化 api 的情况下优化你的组件。

1. class 组件 shouldComponentUpdate，根据情况决定是否要更新组件。当它的父组件 render 了，会触发该组件的 render 过程，但是进行到 shouldComponentUpdate 判断时会被阻止掉，从而就不调用它的 render 方法了，它自己下面的组件的 render 过程也不会触发了。

2. class 组件的 pureComponent，对类组件的 Props 和 State 进行浅比较， React.memo 是对函数组件的 Props 进行浅比较。pureComponent 不能自定义对比逻辑，而 React.memo 可以通过第二个函数参数实现深层次比较。

   ```js
   //利用React.memo第二个参数进行更深层次的比较
   function arePropsEqual(prevProps, nextProps) {
     //arePropsEqual 返回 true 时，不会触发 render，如果返回 false，则会。而 shouldComponentUpdate 刚好与其相反。
     // your code
     return prevProps === nextProps;
   }

   export default memo(Button, arePropsEqual);
   ```

### pureComponent

自动调用 `shouldComponentUpdate()` ，以浅层对比 prop 和 state(shallowEqual )

浅比较：比较 state & props 的第一层`Object.keys(state | props)`，长度是否相等，每一个 key 是否都有，并且是否是同一个引用。

手写原理和实现: [React PureComponent 源码解析 - SegmentFault 思否](https://segmentfault.com/a/1190000006741060)

react 源码中的浅比较：

```js
//https://github.com/facebook/fbjs/blob/main/packages/fbjs/src/core/shallowEqual.js
const hasOwnProperty = Object.prototype.hasOwnProperty;

function shallowEqual(objA: mixed, objB: mixed): boolean {
  // 首先对基本类型进行比较
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 长度不相等直接返回false
  if (keysA.length !== keysB.length) {
    return false;
  }

  // key相等的情况下，再去循环比较
  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/**
 * is 方法来判断两个值是否是相等的值，为何这么写可以移步 MDN 的文档
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x: mixed, y: mixed): boolean {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
```

函数组件：

```js
const MyComponent = React.memo(function Component(props) {
  /* 使用 props 渲染 */
});
```

### useMemo,useCallback

如果传给子组件的是派生状态或函数，每次都是新的引用，那么 PureComponent 和 React.memo 优化就会失效。所以需要使用 useMemo 和 useCallback 来生成稳定值，并结合 PureComponent 或 React.memo 避免子组件重新 Render。

useCallback 是「useMemo 的返回值为函数」时的特殊情况.

### 发布者订阅者跳过中间组件 Render 过程

很多种方法实现发布订阅模式：redux、use-global-state、React.createContext 等。

使用 React.createContext 进行实现,from reference3: https://codesandbox.io/s/fabuzhedingyuezhemoshitiaoguozhongjianzujiande-render-guocheng-nm7nt?file=/src/PubSubCommunicate.js

### 状态下放，缩小状态影响范围

https://juejin.cn/post/6935584878071119885#heading-10

如果一个状态只在某部分子树中使用，那么可以将这部分子树提取为组件，并将该状态移动到该组件内部。

如果一个状态在父组件以及部分子组件使用，可以将不使用这个状态的子组件变为一个插槽，通过 props 传递进来，使得该状态不影响不使用这个状态的子组件。

详细使用方法，见上面链接。

### 添加 key , 使用数据的 ID 作为 key ,尽量不使用索引。

## Reference

- [React 实战：设计模式和最佳实践 - 程墨 - 掘金课程](https://juejin.cn/book/6844733754326401038)
- [React 前端渲染优化——父组件导致子组件重复渲染\_DominicElvira 的博客-CSDN 博客\_react 父组件渲染为什么会导致子组件渲染](https://blog.csdn.net/hello__word__/article/details/108198812)
- [性能！！让你的 React 组件跑得再快一点 - 政采云前端团队](https://www.zoo.team/article/react-render)
- [React 性能优化 | 包括原理、技巧、Demo、工具使用 - 掘金](https://juejin.cn/post/6935584878071119885#heading-1)
