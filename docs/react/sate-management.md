# 状态管理库

## Redux

对所有状态进行集中管理的容器。

当应用变复杂之后，每个组件自己管理状态已经不能满足需求，而 redux 可以做到对应用状态进行集中管理，当需要更新状态时，只需要维护这个集中的状态，而不用关心状态时如何分发到每个组件内部的。

基本原则：

1. 单一数据源。整个应用的状态存储在单个 store 内。
2. state 只读，改变状态的唯一方法是触发一个动作。
3. 使用纯函数进行修改。

#### 工作原理

数据都存在 store 公共空间，一个组件改变了 store 的数据内容，其他组件就能感知到 store 的变化，取到最新的数据，从而实现统一状态管理的功能。

#### 工作流

![redux 工作流](https://s2.loli.net/2024/03/14/JGI4MfrAOjFtwTm.png)

```js
//action
{
   type:"SEND_EMAIL",
   payload: data//可选
}

// action creator 创建action 的函数
export function sendEmail(data) {
    return { type:"SEND_EMAIL", payload: data};
}

//reducer 接收 action和当前 state，纯函数不会改变 state ，返回新的state
export default function emailReducer(state = [], action){
  switch(action.type) {
      case "SEND_EMAIL":  return Object.assign({}, state, {
       email: action.payload
      });
      default: return state;
  }
}

```

#### 异步请求

通过 redux-thunk 中间件处理异步状态管理请求。redux-thunk 允许我们 dispatch 一个包含异步处理逻辑的函数（thunk）。

#### Redux 中间件

其实是一个函数，用来扩展 redux 。具体体现在对 action 的处理上，当组件触发一个 action ，会优先被中间件处理，当中间件处理完之后才会把 action 传递给 Reducer。

常用中间件：

- redux-thunk 处理异步请求
- redux-saga
- redux-actions

加入中间件后 redux 工作流程：

![加入中间件后redux 工作流程](https://s2.loli.net/2024/03/14/IEQMmweok1Ttyup.png)

#### react-redux 使用

react-redux 将组件分成：

- 容器组件：存在逻辑处理

- UI 组件：只负责现显示和交互，内部不处理逻辑，状态由外部控制

通过 redux 将整个应用状态存储到 store 中，组件可以派发 dispatch 行为 action 给 store，其他组件通过订阅 store 中的状态 state 来更新自身的视图

组件使用：

```jsx
import { Provider } from "react-redux";
<Provider store = {store}>
    <App />
<Provider>
```

```jsx
import { connect } from "react-redux";

function User (props) {
  handleSubmit() {
    // dispatch an action
    props.sendEmail(this.state.email);
  }
}
// you are mapping you state props
const mapStateToProps = (state, ownProps) => ({ user: state.user });
// you are binding your action creators to your props
const mapDispatchToProps = (dispatch) => ({ sendEmailDispatch(data){
   dispatch(sendEmail(data))
} });

export default connect(mapStateToProps, mapDispatchToProps)(User);
```

#### 项目组织方式

1. 按角色组织

```
reducers/
  todoReducer.js
  filterReducer.js
actions/
  todoAction.js
  filterActions.js
components/
  todoList.js
  todoItem.js
  filter.js
containers/
  todoListContainer.js
  todoItemContainer.js
  filterContainer.js
```

2. 按业务模块组织

```
todoList/
  actions.js //定义 action创建函数
  actionTypes.js //定义 action 类型
  index.js //把所有的角色导入，统一导出
  reducer.js //响应actions的动作
  views/ //功能模块中所有的React组件，包括展示组件和容器组件
    components.js
    containers.js
filter/
  actions.js
  actionTypes.js
  index.js
  reducer.js
  views/
    components.js
    container.js
```

## Zustand

将所有state放在全局store，使用的时候通过selector选取需要的部分。

### 优点

- 状态管理简单。api轻量，不需要很多样板代码。
- hooks方式在函数组件中访问和更新状态很容易。
- 可以创建多个独立store,灵活。
- 性能：允许组件仅订阅状态的一部分，减少不必要的渲染。
- 支持中间件。可以轻松扩展，添加persist,devtools等功能。

## Jotai

主要特点是原子化，通过atom定义一个原子状态，可以组合成新的状态。（和 tailwind 类似的思路）

产生的初衷：解决React中的额外重新渲染的问题。

- 比如数据透传通常使用Context，但导致不必要的重新渲染。组件消费了Context，就会在value 修改时重新渲染，即使引用的值并未变化。
  - 解决此问题，通过将Context的值进行拆分，但是会导致Context.Provider 层数变多，产生嵌套地狱问题。
  - 拆分组件，将 re-render expensive 的组件拆分出来，并进行memo(comp)，以此优化性能。
- 或者添加非常多层的Context导致嵌套地狱。

核心使用：

- 通过 atom 创建原子状态，定义的时候可以单独指定 get、set，用于实现状态派生和异步修改。

- 使用的时候通过 useAtom 获取`[get,set]`，也可以通过 useAtomValue，useSetAtom 分别获取 get、set。

## Reference

- [【微信公众号：JS 每日一题 2021-07-16 08:31】说说你对 Redux 的理解？其工作原理？](https://mp.weixin.qq.com/s/w33yWPg-CO0FBAZbPS_gdg)
- [【微信公众号：JS 每日一题 2021-07-20 08:31】面试官：你在 React 项目中是如何使用 Redux 的? 项目结构是如何划分的？](https://mp.weixin.qq.com/s/fJqZqgQQkHyBjdnnyUB5uA)
