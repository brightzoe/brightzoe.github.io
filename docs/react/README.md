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
2. 类组件相对较大，从长远角度难以维护。而 Hooks 组件相对较短，更容易拆分，可读性高也更方便维护

## 相关生态，常用的库
