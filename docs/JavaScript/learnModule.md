# 学习模块化

老实讲，之前一直没有学明白模块化，AMD，require,requirejs,CMD,es Module 这类与模块化相关的概念以及具体怎么使用怎么区分。只是在项目中照着使用罢了。

> 小声 bb： 都长得太像了，cmd -amd-commonjs ，里面的变量 require,exports 也都是相似的单词，确实容易搞得头昏 😵

### 概述

- 产生的原因：
  代码量大，广泛使用第三方库，需要将代码拆分并通过某种方式连接起来。

- 模块模式背后的基本思想
  将逻辑分块，各自封装，相互独立，每个块自行决定对外暴露什么，同时自行决定引入执行哪些外部的代码。

- 模块系统的核心：管理依赖
  模块系统的核心是管理依赖。当前的模块向模块系统声明一组外部模块，这些外部模块对于当前的模块正常运行是必需的。模块系统检视这些依赖，进而保证这些依赖能够被加载，并在当前模块运行时初始化所有依赖。每个模块都有唯一的标识符。

- 模块加载：
  在浏览器中，加载模块并执行模块需要先加载所有的依赖以及执行所有的依赖。如果没有收到依赖代码，需等待请求。收到依赖代码之后，浏览器需要确定刚收到的模块是否也有依赖，递归地评估并加载所有依赖，直至所有依赖模块都加载完成。整个依赖图加载完成，才会执行入口模块。

### 解决的问题

1. 变量间的相互污染，变量名冲突等问题
2. 提高代码可维护性，可拓展性，可复用性

可以使用 IIFE 模拟实现模块化，通过函数作用域解决了命名冲突、污染全局作用域的问题。

## 模块加载器

### CommonJS 同步模块规范

CommonJS 规范概述了同步声明依赖的模块定义，主要用于在服务器端实现模块化代码组织，读取模块文件不受网络原因限制。

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

CommonJS 依赖几个全局属性如 `require` 和 `module.exports`。如果想在浏览器中使用 CommonJS 模块，就需要与其非原生的模块语法之间构筑“桥梁”。模块级代码与浏览器运行时之间也需要某种“屏障”，因为没有封装的 CommonJS 代码在浏览器中执行会创建全局变量。

常见的解决方案是提前把模块文件打包好，把全局属性转换为原生 JavaScript 结构，将模块代码封装在函数闭包中，最终只提供一个文件。为了以正确的顺序打包模块，需要事先 生成全面的依赖图。

> Node.js 是 commonJS 规范的主要实践者。 由于模块的个数往往有限，且 Node 会自动缓存已经加载的模块，再加上访问的都是本地文件，产生的 IO 开销几乎可以忽略。另外，Node 程序运行在服务器端，很少遇到需要频繁重启服务的情况，那么就算在服务启动时在加载上花点时间（几秒）也没有什么影响。

### AMD 异步模块定义

异步模块定义（AMD,Asynchronous Module Definition）的模块定义系统则以浏览器为目标执行环境，这需要考虑网络延迟的问题。AMD 的一般策略是让模块声明自己的依赖，而运行在浏览器中的模块系统会按需获取依赖，并在依赖加载完成后立即执行依赖它们的模块。

核心：用函数包装模块定义，全局 define 函数包装模块。这样防止声明全局变量，并允许加载器库控制何时加载模块。AMD 加载器会在所有依赖模块加载完毕后立即调用模块工厂函数。

通俗的解释：异步加载模块，加载模块的过程不影响后面语句的执行。所有依赖模块的语句，都定义在一个回调函数中，等所有依赖都加载完，执行回调函数。【依赖前置，提前执行】

```js
//moduleA.js
//我的名字叫moduleA,我依赖moduleB，ModuleC,赶紧去加载，执行依赖。 异步加载依赖，不影响后面的语句
define("moduleA", ["moduleB", "moduleC"], function (moduleB) {
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
		//里面使用require 实现延迟加载
		var moduleB = require("moduleB");
	}
});
```

> AMD 模块规范的代表框架是 requireJS.

### CMD 同步模块规范

写法与 AMD 看起来比较像，但思想是‘依赖就近，延迟执行’

```js
// AMD 默认推荐的是
define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
a.doSomething()
// 此处略去 100 行
b.doSomething()
...
})

// CMD 就近书写依赖
define(function(require, exports, module) {
var a = require('./a')
a.doSomething()
// 此处略去 100 行
var b = require('./b') // 依赖可以就近书写，需要的时候在声明需要，而不是在开头声明
b.doSomething()
// ...
})



```

> CMD 模块规范的代表框架为 SeaJS。 AMD CMD 现在非常少使用了。ESModule,CommonJS 统一了浏览器端和 Node 端的模块加载。

### UMD 通用模块定义

为了统一 CommonJS 和 AMD 生态系统，使用 UMD(UniversalModule Definition)可以创建这两个系统都可以使用的模块代码。
本质：UMD 定义的模块会在启动时检测要使用哪个模块系统，然后进行适当配置，并把所有逻辑包装在一个立即调用的函数表达式（IIFE）中。虽然这种组合并不完美，但在很多场景下足以实现两个生态的共存。我们熟悉的 jQuery 和很多的工具库都是使用这种模块化的方式进行引入。

## ES6 模块规范

前面提到的模块系统都是非官方的，JS 并没有官方的模块的功能，ESModule 是 es6 实现的标准模块功能。
CommonJS 与 AMD 之间的冲突正是我们现在享用的 ECMAScript 6 模块规范诞生的温床。带有`type="module"`属性的`<script>`标签会告诉浏览器相关代码应该作为模块执行，而不是作为传统的脚本执行。

现在各种项目工作中大部分都是这样使用的： 确实很熟悉

```js
/** 定义模块 math.js **/
var basicNum = 0;
var add = function (a, b) {
	return a + b;
};
export { basicNum, add };

/** 引用模块 **/
import { basicNum, add } from "./math";
function test(ele) {
	ele.textContent = add(99 + basicNum);
}
```

ESModule 中 import 的模块会被 JS 引擎静态分析。模块代码是在编译时就引入的，而不是在运行时才加载，所以无法实现条件加载。

## CommonJS 与 ESModule 区别

1.  CommonJS 输出的是值的拷贝，ESModule 输出的是值的引用。

    CommonJS 输出的是值的**浅拷贝**，如果导出对象后，修改对象的值，另一个模块的也会变。[对于输出的值到底是深浅拷贝有疑问]

    ESModule 在 JS 引擎对脚本静态分析时，遇到`import`模块，就会生成一个只读引用，会指向模块里对应的变量，是动态引用，并不会缓存模块里的值。

2.  CommonJS （ AMD / CMD / CommonJS 都是）是运行时加载，ESModule 是编译时输出接口，编译阶段就确定了依赖关系。
3. ESModule 导出的模块是只读的，不能变更，否则报错。

## Reference：

- [第 26 章 JavaScript 高级程序设计（第 4 版）-马特·弗里斯比-微信读书](https://weread.qq.com/web/reader/751326d0720befab7514782k9dc32ad02bc9dcb88e010da)
- [模块化 - 前端面试指南](https://mitianyi.gitbook.io/frontend-interview-guide/javascript-basics/modularization#wei-shen-me-shi-yong-mo-kuai-hua)
- [你可能不知道的 JavaScript 模块化野史 - 掘金](https://juejin.cn/post/6844904056847073293#heading-0)
- [前端模块化：CommonJS,AMD,CMD,ES6 - 掘金](https://juejin.cn/post/6844903576309858318#heading-2) - 推荐，并包含每种实现方式的小 demo
- [JavaScript Modularization Journey](https://huangxuan.me/js-module-7day/#/) - slides
- [你可能不知道的 JavaScript 模块化野史 - 掘金](https://juejin.cn/post/6844904056847073293#heading-0) - 了解一下历史，有个整体的有时间轴的认识
