# 四种 React 组件存放数据的方式

## State

- 作用范围：

  当数据不参与 dataFlow 时可以考虑使用。

  存储 UI 的状态而不是数据。将 UI 的状态及一些临时的数据保存。

  当组件的展示内容会随之改变时，可以将数据放在 state 里，即涉及到 UI 的变化。

- 注意事项：

  只有 class 组件可以使用。

  state 改变时，会 re-render 组件，除非 shouldComponentUpdate() 返回 false。

  state 中的数据只影响当前组件，除非将 state 作为 props 传给子组件。

  不能直接修改 state,state 的更新可能是异步的。[setState](https://zh-hans.reactjs.org/docs/react-component.html#setstate)

## this

- 注意事项：

  this 上存放的数据的改变不会引起 re-render。

  任何情况都可以使用，无论是 class 还是 function

  注意 this 的绑定，通过 bind 或箭头函数=>

## Static

- 作用范围：
  //todo:用处

  可以直接通过 class 的名字访问，并且不会 re-render。作用于当前组件，同类型组件共享这个数据。

- 实例：

  react 组件中，propTypes 和 defaultProps 可以提高代码可读性和组件强壮性。这两个属性就是 static 类型的。

## Store

- 作用范围：

  任何组件，用来进行组件间的数据交互。存储多个组件之间共享的数据。存储组件的状态而不是 UI 的状态，例如登录态。

  store 是存放数据的 state 和处理数据的一些方法的集合。state 只读，通过 store 提供的方法修改，修改的方法应该是纯函数。通过 dispatch 一个 action ，然后由 reducer 处理。

## Props

- 写在 HTML 标签上，给子组件添加属性，传递给子组件的 props

- 注意事项：

  key 和 ref 不会传递给子组件的 props

  子组件内部不能改变 this.props 的值

## reference:

[Where to Hold React Component Data: state, store, static, and this](https://www.freecodecamp.org/news/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00/)
