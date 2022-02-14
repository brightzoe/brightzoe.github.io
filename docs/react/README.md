---
sidebar_position: 1
# description:
# keywords:
#   -
#   -
---

## 一些常识

- `react` 与 `react-dom`库的区别，都是用来干嘛的？

  `react` package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web.

  `react-dom` package serves as the entry point to the DOM and server renderers for React.

  ```js
  import ReactDOM from "react-dom";
  ReactDOM.render(<App />, document.getElementById("root"));
  ```

- `react-router` 与 `react-router-dom`库的区别，都是用来干嘛的？
  `react-router`是路由核心库。`react-router-dom`基于`react-router`，加入了一些在浏览器运行的功能，与dom 相关。一般二者要一起使用。

## 相关生态，常用的库
