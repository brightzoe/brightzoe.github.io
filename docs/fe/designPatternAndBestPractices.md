# React 设计模式和最佳实践 -掘金小册

1. 在 React 中，界面完全由数据驱动；
2. 在 React 中，一切都是组件；
3. props 是 React 组件之间通讯的基本方式。

## 在设计 React 组件时，要注意以下原则：

保持接口小，props 数量要少；
根据数据边界来划分组件，充分利用组合（composition）；
把 state 往上层组件提取，让下层组件只需要实现为纯函数。

## create-react-app

webpack 配置：
sass: cra 已内置 sass-loader,只需安装 mode-sass/sass(dart-sass)

修改其他配置，不 eject 的方式：

- 需要安装：react-app-rewired customize-cra

  ```js
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

- 通过 craco 配置，antd4 推荐，暂未尝试。[参考](https://juejin.cn/post/6871148364919111688#heading-6)

## pureComponent

自动调用 `shouldComponentUpdate()` ，以浅层对比 prop 和 state(shallowEqual )
//TODO:手写原理和实现: https://segmentfault.com/a/1190000006741060

```js
//https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js
const hasOwnProperty = Object.prototype.hasOwnProperty;

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
```

函数组件：

```js
const MyComponent = React.memo(function Component(props) {
	/* 使用 props 渲染 */
});
```

## 重新渲染 reconciliation

渲染何时触发：

    组件挂载。React 组件构建并将 DOM 元素插入页面的过程称为挂载。当组件首次渲染的时候会调用 render，这个过程不可避免。

    执行 setState 会触发 render。但是这里有个点值得关注，执行 setState 的时候一定会重新渲染吗？答案是不一定。当 setState 传入 null 的时候，并不会触发 render 。

    父组件更新触发子组件重新渲染。父组件重新渲染了，即使传入子组件的 props 未发生变化，那么子组件也会重新渲染，进而触发 render。

js 为单线程执行，显然，不必要的子组件的 render 会浪费 js 线程资源，复杂任务还会长时间占用线程导致假死状态，也就是页面卡顿，react 底层有 Fiber 来优化任务队列，但无法优化业务代码上的问题。

一般子组件可以通过确认 props 是否发生变化来控制自身是否进行 render，比如 react-mobx 中的 observer 高阶方法或者 React.PureComponet 就是用来做浅层比较进行控制处理。

### 减少不必要的重新渲染的使用方式

1. class 组件 shouldComponentUpdate，根据情况决定是否要更新组件。当它的父组件 render 了，会触发该组件的 render 过程，但是进行到 shouldComponentUpdate 判断时会被阻止掉，从而就不调用它的 render 方法了，它自己下面的组件的 render 过程也不会触发了。

2. class 组件的 pureComponent，自动比较组件 props 数据是否改变，注意只能比较一层，比如一个对象，对象中的属性改变，他不会重新渲染，只有对象改变，才重新渲染。(见上面 pureComponent) 函数组件的 React.memo(()=>{})

	pureComponent 不能自定义对比逻辑，而React.memo可以通过第二个参数实现。

   ```js
   //利用React.memo第二个参数进行更深层次的比较
   function arePropsEqual(prevProps, nextProps) {
   	//arePropsEqual 返回 true 时，不会触发 render，如果返回 false，则会。而 shouldComponentUpdate 刚好与其相反。
   	// your code
   	return prevProps === nextProps;
   }

   export default memo(Button, arePropsEqual);
   ```

## Reference

1. React 渲染优化-父组件导致子组件重复渲染 https://blog.csdn.net/hello__word__/article/details/108198812
2. 优化 render,提升性能 https://www.zoo.team/article/react-render
