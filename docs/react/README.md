---
sidebar_position: 1
# description:
# keywords:
#   -
#   -
---

# React

## `react` 与 `react-dom`库的区别

`react` package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web.

`react-dom` package serves as the entry point to the DOM and server renderers for React.

```js
import ReactDOM from "react-dom";
ReactDOM.render(<App />, document.getElementById("root"));
```

## `react-router` 与 `react-router-dom`库的区别

`react-router`是路由核心库。`react-router-dom`基于`react-router`，加入了一些在浏览器运行的功能，与 dom 相关。一般二者要一起使用。

## Class Component 与 Function Component 的区别

1. 类组件相对复杂，并且含有 this,比较难以理解
2. 类组件相对较大，从长远角度难以维护。而 Hooks 组件相对较短，更容易拆分，可读性高也更方便维护。
3. 组件复用成本低，更容易抽象出单独的组件或单独的逻辑。
4. 函数组件更加灵活，更适合做到逻辑和 UI 的解耦。
5. 思考模式不同。
   Class 组件的模式是先做什么再做什么，按照时间维度划分，比如 this.setState 的第二个参数，比如生命周期的使用。
   函数组件的思考模式是依赖，副作用。围绕着 state,props 的变化而做什么事情。

## 相关生态，常用的库

### 动画
- [react-spring](https://react-spring.io/)