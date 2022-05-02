# 受控组件与非受控组件

## 受控组件

**从 input 说起**

HTML 中原生的 input，随着用户的输入可以改变 UI 的显示，内部有一个我们看不见的状态进行控制。
如果我们要控制这个 input 的内容，可以定义一个 state：name，并在 input 的 value 设置为 this.state.name，这样 input 的内容不会随着用户的输入而改变，value 完全取决于 state，但目前 input 是只读的。

现在要控制 input，可以设置一个 onChange 事件，通过 onChange 事件监听输入内容，并 setState 更新 state。

我们设置 input.value 完全取决于 state，再通过事件更新 state,控制用户的输入过程中，input 的数据如何显示，state 是唯一的数据源。

## 非受控组件

最好是用受控组件来处理表单数据，受控组件中，表单数据完全由 React 组件管理。

而非受控组件，表单数据是由 DOM 节点处理的。要拿到表单中的数据，需要通过 ref 获取。非受控组件中如果需要默认值，可以设置 defaultValue 属性来指定表单元素的默认值。

> file 类型的表单控件始终是一个不受控制的组件，只能由用户设置。

## 不要以非受控的组件的使用方式调用受控组件

```jsx live noInline
// 组件提供方
function Input({ defaultValue }) {
  const [value, setValue] = React.useState(defaultValue);
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}

// 调用方
function Demo() {
  return <Input defaultValue={1} />;
}
render(<Demo />);
```

此时 Input 组件本身是一个受控组件, 但与之相对的调用方失去了更改 Input 组件值的控制权, 所以对调用方而言, Input 组件是一个非受控组件。

应改为：

```jsx live noInline
// 组件提供方
function Input({ value, onChange }) {
  return <input value={value} onChange={onChange} />;
}

// 调用方
function Demo() {
  const [value, setValue] = React.useState(1);
  return <Input value={value} onChange={(e) => setValue(e.target.value)} />;
}
render(<Demo />);
```

子组件交出控制权，通过父组件实现控制组件。

受控以及非受控组件的边界划分取决于**当前组件对于子组件值的变更是否拥有控制权。**如若有则该子组件是当前组件的受控组件；如若没有则该子组件是当前组件的非受控组件。

## Reference

- [受控组件](https://zh-hans.reactjs.org/docs/forms.html#controlled-components)
- [非受控组件](https://zh-hans.reactjs.org/docs/uncontrolled-components.html)
- [何时使用受控组件，何时使用非受控组件](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)
- [重新认识受控组件和非受控组件](https://muyunyun.cn/posts/8bdf2cdf/)
- [派生状态中遇到的问题](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#common-bugs-when-using-derived-state)
