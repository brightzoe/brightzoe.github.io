# 如何存储 React 中的数据和状态

## 四种 React 组件存放数据的方式

### State

- 作用范围：

  当数据不参与 dataFlow 时可以考虑使用。

  存储 UI 的状态而不是数据。将 UI 的状态及一些临时的数据保存。

  当组件的展示内容会随之改变时，可以将数据放在 state 里，即涉及到 UI 的变化。

- 注意事项：

  只有 class 组件可以使用。

  state 改变时，会 re-render 组件，除非 shouldComponentUpdate() 返回 false。

  state 中的数据只影响当前组件，除非将 state 作为 props 传给子组件。

  不能直接修改 state,state 的更新可能是异步的。[setState](https://zh-hans.reactjs.org/docs/react-component.html#setstate)

### this

- 注意事项：

  this 上存放的数据的改变不会引起 re-render。

  任何情况都可以使用，无论是 class 还是 function

  注意 this 的绑定，通过 bind 或箭头函数=>

### Static

- 作用范围：


  可以直接通过 class 的名字访问，并且不会 re-render。作用于当前组件，同类型组件共享这个数据。

- 实例：

  react 组件中，propTypes 和 defaultProps 可以提高代码可读性和组件强壮性。这两个属性就是 static 类型的。

### Store

- 作用范围：

  任何组件，用来进行组件间的数据交互。存储多个组件之间共享的数据。存储组件的状态而不是 UI 的状态，例如登录态。

  store 是存放数据的 state 和处理数据的一些方法的集合。state 只读，通过 store 提供的方法修改，修改的方法应该是纯函数。通过 dispatch 一个 action , 然后由 reducer 处理。

### Props

- 写在 JSX 标签上，给子组件添加属性，传递给子组件的 props

- 注意事项：

  key 和 ref 不会传递给子组件的 props

  子组件内部不能改变 this.props 的值

## 状态管理

### 逻辑和交互

从逻辑和交互的角度来分析整个应用的状态，可以分为领域状态和视图状态两种。

从应用的功能逻辑上，可以拆出一个概念，叫领域状态，用来描述，处理实际应用功能的各种情况。比如在文件上传中，区分文件上传进度，上传成功，上传失败等各种情况，是业务的逻辑。

如果要测试，也是基于领域状态来编写测试。

目前使用的前端应用框架，比如 React,官网上是这样描述的：“用于构建用户界面的 JavaScript 库”。基于领域逻辑，来开发整个应用的视图交互，在构建界面的时候会涉及很多组件在显示上的状态，比如 loading,打开关闭的状态等，被称为视图状态。

### 数据如何存放，何时使用状态管理？

大多数视图库是以组件为模块边界的，组件中的逻辑，有些是受其他的组件影响的，并不一定是完全自己就可以控制的。

各种状态到底该如何管理，要存放在哪里？

我们可以从以下几个方向去考虑：

#### 视图状态

1. 完全受当前组件控制，不受其他组件影响。 ----自己组件内管理
2. 组件间互相影响，要根据应用复杂度，组件间的跨度决定如果跨度比较近，则存放在共同父组件如果跨度相对较远且应用不复杂，可以把状态提升到共同的 Context 中如果应用复杂，再考虑使用状态管理方案

#### 领域状态

对于业务的各种逻辑状态，本来就是分布在不同的组件中的。

1. 简单的小应用可以任其分布在组件中，或者提升到共同的 Context 中。
2. 其他的情况，推荐使用状态管理，比如 Redux,Vuex,mobx。

:::caution

切勿一股脑将所有状态都交给 Redux 处理，杀鸡焉用宰牛刀。全部由 Redux 处理是可行的，但是会影响项目的可读性，扩展性和性能。

甚至，对于领域状态中的子领域，可以在有状态管理方案的基础上再抽象出来单独处理。

比如对于服务端请求的数据这一领域状态，其性质更类似于缓存，在 React 中可以使用 SWR 或 React Query 处理。

:::

## reference:

- [Where to Hold React Component Data: state, store, static, and this](https://www.freecodecamp.org/news/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00/)
- [数据都放在 Redux 里吗？](https://juejin.cn/post/6986202846903402503#heading-0)
- [扩展： SWR-用于数据请求的 React Hooks 库](https://github.com/vercel/swr)
- [React-Query](https://github.com/tannerlinsley/react-query)
