# 学习模块化

老实讲，之前一直没有学明白模块化，AMD，require,requirejs,CMD,es Module 这类与模块化相关的概念以及具体怎么使用怎么区分。只是在项目中照着使用罢了。

- 产生的原因：
  代码量大，广泛使用第三方库，需要将代码拆分并通过某种方式连接起来。

- 模块模式背后的基本思想：
  将逻辑分块，各自封装，相互独立，每个块自行决定对外暴露什么，同时自行决定引入执行哪些外部的代码。

- 模块系统的核心：管理依赖
  模块系统的核心是管理依赖。当前的模块向模块系统声明一组外部模块，这些外部模块对于当前的模块正常运行是必需的。模块系统检视这些依赖，进而保证这些依赖能够被加载，并在当前模块运行时初始化所有依赖。每个模块都有唯一的标识符。

- 模块加载：
  在浏览器中，加载模块并执行模块需要先加载所有的依赖以及执行所有的依赖。如果没有收到依赖代码，需等待请求。收到依赖代码之后，浏览器需要确定刚收到的模块是否也有依赖，递归地评估并加载所有依赖，直至所有依赖模块都加载完成。整个依赖图加载完成，才会执行入口模块。

## 一些模块加载器

### CommonJS 同步模块规范

CommonJS 规范概述了同步声明依赖的模块定义，主要用于在服务器端实现模块化代码组织。

CommonJS 模块定义需要使用 require()指定依赖，而使用 exports 对象定义自己的公共 API。

```js
//moduleA.js
var moduleB = require("./moduleB");
module.exports = {
  stuff: moduleB.doStuff(),
};

//可以支持动态依赖
if (condition) {
  var A = require("./moduleA");
}
```

CommonJS 依赖几个全局属性如 require 和 module.exports。如果想在浏览器中使用 CommonJS 模块，就需要与其非原生的模块语法之间构筑“桥梁”。模块级代码与浏览器运行时之间也需要某种“屏障”，因为没有封装的 CommonJS 代码在浏览器中执行会创建全局变量。

常见的解决方案是提前把模块文件打包好，把全局属性转换为原生 JavaScript 结构，将模块代码封装在函数闭包中，最终只提供一个文件。为了以正确的顺序打包模块，需要事先生成全面的依赖图。

### AMD 异步模块定义

异步模块定义（AMD,Asynchronous Module Definition）的模块定义系统则以浏览器为目标执行环境，这需要考虑网络延迟的问题。AMD 的一般策略是让模块声明自己的依赖，而运行在浏览器中的模块系统会按需获取依赖，并在依赖加载完成后立即执行依赖它们的模块。

核心：用函数包装模块定义，全局 define 函数包装模块。这样防止声明全局变量，并允许加载器库控制何时加载模块。AMD 加载器会在所有依赖模块加载完毕后立即调用模块工厂函数。

```js
//moduleA.js
//依赖moduleB,异步加载依赖
define("moduleA", ["moduleB"], function (moduleB) {
  return {
    stuff: moduleB.doStuff(),
  };
});
```

在 AMD 模块的工厂函数内部可以定义 CommonJS 风格的模块，可以像请求模块一样请求他们。

```js
define("moduleA", ["require", "exports"], function (require, exports) {
  var moduleB = require("moduleB");
  exports.stuff = moduleB.doStuff();
});

//也可以支持动态依赖
define("moduleA", ["require", "exports"], function (require, exports) {
  if (condition) {
    var moduleB = require("moduleB");
  }
});
```

### UMD 通用模块定义

为了统一 CommonJS 和 AMD 生态系统，使用 UMD(UniversalModule Definition)可以创建这两个系统都可以使用的模块代码。
本质：UMD 定义的模块会在启动时检测要使用哪个模块系统，然后进行适当配置，并把所有逻辑包装在一个立即调用的函数表达式（IIFE）中。虽然这种组合并不完美，但在很多场景下足以实现两个生态的共存。

## ES6 模块规范

CommonJS 与 AMD 之间的冲突正是我们现在享用的 ECMAScript 6 模块规范诞生的温床。带有`type="module"`属性的`<script>`标签会告诉浏览器相关代码应该作为模块执行，而不是作为传统的脚本执行。

## reference：

1. JavaScript 高级程序设计(第四版) - 第 26 章
