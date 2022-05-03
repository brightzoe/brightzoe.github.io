---
sidebar_position: 1
# description:
# keywords:
#   -
#   -
---

# React

## `react` 与 `react-dom`库

`react` package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web.

`react-dom` package serves as the entry point to the DOM and server renderers for React.

```js
import ReactDOM from "react-dom";
ReactDOM.render(<App />, document.getElementById("root"));
```

## `react-router` 与 `react-router-dom`库

`react-router`是路由核心库。`react-router-dom`基于`react-router`，加入了一些在浏览器运行的功能，与 dom 相关。一般二者要一起使用。

## 问题汇总

### Class Comp 与 Function Comp

1. 类组件相对**复杂**，并且含有 this，比较难以理解。在一个生命周期函数中，可能有很多不想管的逻辑，而函数组件可以按照代码的用途拆分，做到关注点分离。
2. 类组件相对较大，从长远角度难以维护，而 Hooks 组件相对较短，更容易拆分，可读性高也更方便维护。
3. 函数组件**复用成本低**，更容易抽象出单独的组件或单独的逻辑。
4. 函数组件更加灵活，更适合做到逻辑和 UI 的解耦。但类组件的逻辑也更清晰：构造函数以及生命周期的角度。
5. 思考模式不同。

   Class 组件的模式是先做什么再做什么，按照时间维度划分，比如 this.setState 的第二个参数，比如生命周期的使用。

   函数组件的思考模式是依赖，副作用。围绕着 state，props 的变化而做什么事情。

> 函数式组件捕获了渲染所使用的值。hooks 追求的是渲染一致性，当执行一些方法时，读到的 state,props 是当时的状态快照，是不可变的。而类组件有 this，this.state/this.props 上的值都是变化的。---- [函数式组件与类组件有何不同？ — Overreacted](https://overreacted.io/zh-hans/how-are-function-components-different-from-classes/)

### React 元素与组件

react 组件可以用 jsx 创建，（jsx 是`React.createElement`的简写），是 react 中的最小单位，并不是真实的 dom，实际是一个 js 对象。

组件由元素构成，元素的数据结构是对象，而组件的数据结构是类或函数。

### PureComponent

自动调用 shouldComponentUpdate，比较 props 和 state，如果没有变化，不会调用 render。

使用 Object.is 进行浅比较。

### 生命周期

![](https://s2.loli.net/2022/05/02/AcLCE2GQ8WsPOjh.png)

- [React lifecycle methods diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

挂载阶段

1. constructor
   初始化 state，进行方法绑定
2. static getDerivedStateFormProps
   在初始挂载及后续更新都会被调用，返回一个对象来更新 state，state 的值在任何时候都取决于 props, 如果返回 null 则不更新任何内容。
3. render
   渲染组件
4. componentDidMount
   在组件第一次挂载完成（渲染到 DOM）后调用，只会被调用一次

更新阶段

1. static getDerivedStateFromProps
2. shouldComponentUpdate(nextProps,nextState)
   根据返回值决定是否更新，返回 true 时才会调用 render，返回 false 时不会调用 render。默认行为是返回 true ，每次 props 或 state 发生变化都会调用。
3. render()
4. getSnapshotBeforeUpdate(prevProps, prevState)
   在组件被更新之前调用，返回值会作为 componentDidUpdate 的第三个参数。

   在最近一次渲染输出（提交到 DOM 节点）之前调用，这个函数运行完真实 DOM 会被渲染。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）

5. componentDidUpdate(prevProps, prevState, snapshot)

卸载阶段

1.  componentWillUnmount() 在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作

#### 被废弃的生命周期

- `componentWillMount`
- `componentWillReceiveProps`
- `componentWillUpdate`

原因：

react 架构或渲染机制改变带来的问题

Fiber 架构

1.  解决 DOM 树过深同步渲染整个 DOM 性能下降问题
2.  将 DOM 拆分渲染，分不同时间片段异步渲染
3.  由于异步的存在，根据用户行为灵活调整 DOM
4.  异步渲染导致 render 之前的函数可能执行多次，所有 render 之前的函数都必须是纯函数/static 方法函数

### 错误边界

捕获并打印在子组件的 js 错误，并渲染备用 UI

在 class 组件中定义 `static getDerivedStateFromError`或 `ComponentDidCatch`，然后直接当作常规组件使用，此组件就会形成错误强，错误组件中子组件的错误会被捕获。

类似在组件层面实现 try catch 机制，一般只需要声明一次，并在整个应用使用。

错误边界无法捕捉事件处理、异步、服务端渲染、自身错误等非子组件的错误。

> 事件处理器不会在渲染阶段触发，可以在事件处理内部使用 try catch 语句。

### setState 同步异步问题

有时同步，有时异步。

React 早期（使用 Fiber 架构之前）实现更新批处理导致的，更新优先级的问题。

在事件处理函数（同步函数）中，state 的更新是异步的，浏览器事件处理结束后批量合并后批量更新。

在自己写的函数（异步函数）里是同步更新的。

### 受控组件

受控组件：通过组件控制用户输入的值，包括 value,onChange 事件，实现双向数据绑定。组件对子组件的变更有控制权。

非受控组件：可以设置 defaultValue，但不能控制值的变更，通过 ref 获取当前组件的值。

### 状态提升

几个组件共用状态数据，将这部分状态提升到他们最近的父组件进行管理，并通过 props 传给子组件使用。

### Refs

用于父元素访问子元素的方法。
也可以用于缓存一个值。

### Context

通过组件树传递数据的方法，实现在组件间共享数据，可以避免一层层地手动 props 传递数据。

### Portals

将子节点渲染到存在于父组件以外的 DOM 节点，常用于对话框、悬浮卡以及提示框。

`ReactDOM.createPortal(child, container)` child 是 React 子元素，container 是一个 DOM 元素，child 会渲染到容器里，而不是父类；使用在组件的 render 函数里。

除了在 DOM 树中的位置，其他行为和普通的 react 子节点行为一致。 react 内的事件处理逻辑等还是在原来的 react 组件中(比如冒泡)

### 为什么必须在组件的顶层使用 hook

只能在顶层，且不能在循环/条件语句中使用。

React 内部使用链表，保存每个 hook 调用的顺序，完全依赖 hook 的调用顺序。比如使用多个 useState，需要把每个 state 和对应的 setState 关联。

### Fiber 架构

相对以前的递归更新组件有优势。递归更新组件会让 JS 调用栈占用很长时间。

Fiber 将组件分段渲染。

Fiber 的作用是建立了一个虚拟栈机制，将各个事件的执行顺序进行优化排序，然后执行。

### reconciliation 协调阶段

主要进行 React 的 diff 过程，前后虚拟 DOM 树 的对比

对比方式：

同层比较两颗 dom 树。

1. 无 key 时，效率为 O(n)。先对比根元素，根元素类型不同就替换为新的，类型相同就比较属性，属性不同就替换为新的，属性相同就比较子元素，比较方式与根元素一致。
2. 有 key 时，新旧虚拟 DOM 对比时，key 相同的进行对比，减少对比次数。

进行遍历、对比等操作可以中断。

#### 为什么要使用 key

DOM 对比效率

#### key 为什么最好不要用 index

相同子元素移动位置会被认为都是新增了，而不是替换了，影响对比效率。
#### 为什么使用虚拟DOM

### commit 阶段

对于 reconciliation 协调阶段比较完成后，将获取到的变化部分应用到真实的 DOM 树上。要维护较复杂的 DOM 状态，中断后再继续会对用户体验造成影响。一般来说此阶段的耗时比 diff 计算等耗时少。

### 调度

requestIdleCallback

### React 事件机制

当用户使用 onClick 时，React 并不会把事件直接绑定在 DOM 上。

在 document 上监听所有支持的事件，当事件发生并冒泡到 document 上时，React 会封装事件内容给中间层 SyntheticEvent（合成事件）处理

当事件触发时，使用统一的分发函数 dispatchEvent 来分发事件。

## 相关生态，常用的库

### 动画

- [react-spring](https://react-spring.io/)

## Future Learning

//todo:

- [React Hooks 的原理，有的简单有的不简单 - 掘金](https://juejin.cn/post/7075701341997236261#heading-5)
- [Hooks 数据流 · 语雀](https://www.yuque.com/lxylona/note/nz6gk4)
