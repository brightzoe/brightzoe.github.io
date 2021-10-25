# 执行上下文和作用域

执行语句前创建的环境：

![](https://i.loli.net/2021/09/26/kFej7CAxVTsW42v.png)

创建执行上下文：

![](https://i.loli.net/2021/09/26/ghD145oFv9zOLME.png)

## 执行上下文

- var 和 function 声明创建的变量和函数在全局对象中（浏览器环境是 window 对象），而 let,const,class 声明的变量创建在全局 scope 中。

```js
let a = "a";
console.log(a);
console.log(window.a); //没有
```

```js
var a = "a";
console.log(a);
console.log(window.a); //a
```

创建全局执行上下文：

<!-- ![](https://i.loli.net/2021/09/26/Rr63yYwAt4DMJx2.png) -->

![](../../../static/img/09262157.svg)

暂时性死区：

![](https://i.loli.net/2021/09/26/tRu9X2mKk4HpFNq.png)

```js
var a = "123";
function foo() {
	console.log(a);
	let a;
}
foo(); //Uncaught ReferenceError: Cannot access 'a' before initialization
```

## 作用域

作用域：当前执行上下文或当前上下文的词法环境。

    全局作用域： 全局执行上下文。全局作用域为程序的最外层作用域，一直存在。

    函数作用域： 函数执行上下文。只有函数被定义时才会创建，包含在父级函数作用域 / 全局作用域内。

函数调用时的执行上下文： 函数在哪里创建，他就处于哪个执行上下文。

函数的作用域在函数创建时决定(词法作用域):

```js
var a = 2;
function foo() {
	console.log(a);
}

function bar() {
	var a = 3;
	foo();
}

bar(); //2 执行的foo 作用域在全局，则a 为全局的a
```

> 词法作用域（Lexical Scopes）是 javascript 中使用的作用域类型，词法作用域 也可以被叫做 静态作用域，与之相对的还有 动态作用域。 意味着函数被定义的时候，它的作用域就已经确定了，和拿到哪里执行没有关系，因此词法作用域也被称为 “静态作用域”。

### 作用域嵌套

![](https://i.loli.net/2021/10/22/YT4vOU6dL9QgCi3.png)
用图片表示，上述代码一共有三层作用域嵌套，分别是：

1. 全局作用域
2. foo 作用域
3. bar 作用域

当可执行代码内部访问变量时，会先查找本地作用域，如果找到目标变量即返回，否则会去父级作用域继续查找...一直找到全局作用域。我们把这种作用域的嵌套机制，称为 作用域链。

[面试官：说说作用域和闭包吧 - 掘金](https://juejin.cn/post/6844904165672484871#heading-3)

### 块级作用域 ES6

在 ES5 即之前并没有块级作用域的概念。

```js
if (true) {
	var a = 1;
}

console.log(a); // 结果??? 1
```

ES6 使用 let 和 const 代替 var 关键字，来“创建块级作用域”。

```js
if (true) {
	let a = 1;
}

console.log(a); // ReferenceError
```

ES6 新增的 let 关键字跟 var 很相似，但它的作用域是块级的，这也是 JavaScript 中的新概念。块级作用域由最近的一对包含花括号{}界定。换句话说，if 块、while 块、function 块，甚至连单独的块也是 let 声明变量的作用域。

```js
if (true) {
	let a;
}
console.log(a); // ReferenceError: a没有定义

while (true) {
	let b;
}
console.log(b); // ReferenceError: b没有定义

function foo() {
	let c;
}
console.log(c); // ReferenceError: c没有定义
// 这没什么可奇怪的
// var声明也会导致报错
// 这不是对象字面量，而是一个独立的块
// JavaScript解释器会根据其中内容识别出它来

{
	let d;
} //单独的块也是 let 声明变量的作用域。
console.log(d); // ReferenceError: d没有定义
```

#### IIFE

ES5 使用 IIFE 可以模拟块级作用域，即在一个函数表达式内部声明变量，然后立即调用这个函数。这样位于函数体作用域的变量就像是在块级作用域中一样。

```js
// module1.js
(function () {
	//内嵌块级作用域
	var a = 1;
	console.log(a);
})();

// module2.js
(function () {
	var a = 2;
	console.log(a);
})();
```

模拟块级作用域锁定值（闭包+IIFE）：

```js
let divs = document.querySelectorAll("div");
for (var i = 0; i < divs.length; i++) {
	divs[i].addEventListener(
		"click",
		(function (frozenCounter) {
			return function () {
				console.log(frozenCounter);
			};
		})(i)
	);
}
```

> 延申： [闭包 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures) 提供了更多解决遍历问题的方式。
> 可以使用forEach

:::note 通过 IIFE 实现 UMD 模块化

1. 使用 IIFE 完成封装，解决了模块名污染全局作用域的问题。
2. 赋予选择的权力，根据不同的环境条件选择不同的执行

```js
// UMD 模块化
(function (root, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD
		define(["jquery"], factory);
	} else if (typeof exports === "object") {
		// Node, CommonJS-like
		module.exports = factory(require("jquery"));
	} else {
		// Browser globals (root is window)
		root.returnExports = factory(root.jQuery);
	}
})(this, function ($) {
	// methods
	function myFunc() {}

	// exposed public method
	return myFunc;
});
```

:::

> [10.15 立即调用表达式 JavaScript 高级程序设计（第 4 版）-马特·弗里斯比-微信读书](https://weread.qq.com/web/reader/751326d0720befab7514782kfe932230253fe9fc289c8a3) > [面试官：说说作用域和闭包吧 - 掘金](https://juejin.cn/post/6844904165672484871#heading-8)

### 如何创建/改变作用域

1. 定义一个函数，创建函数作用域

```js
function foo() {}
```

2. 创建一个块级作用域，使用 let/const

```js
// 内嵌块级作用域
{
	let i;
	for (i = 0; i < count; i++) {
		console.log(i);
	}
}
console.log(i); // 抛出错误

// 循环的块级作用域
for (let i = 0; i < count; i++) {
	console.log(i);
}
console.log(i); // 抛出错误
```

3. 使用 eval/with 修改作用域，不推荐。

### 作用域的应用场景

模块化。
[面试官：说说作用域和闭包吧 - 掘金](https://juejin.cn/post/6844904165672484871#heading-8)

## 一些问题

对象里写函数,对象的 fn 属性指向这个函数,函数并不属于这个对象,相对独立.

这个函数是全局的,对象不是语句块,不会产生作用域.

```js
var obj = {
	val: 3,
	fn: function () {
		return this.val;
	},
};
obj.fn(); //this=>obj, 3
```

### var,let,const

**let 与 var**

1. let 与 var 的另一个不同之处是在同一作用域内不能声明两次。重复的 var 声明会被忽略，而重复的 let 声明会抛出 SyntaxError。

2. let 的行为非常适合在循环中声明迭代变量。**使用 var 声明的迭代变量会泄漏到循环外部**，这种情况应该避免.

   ```js
   for (var i = 0; i < 10; ++i) {}
   console.log(i); // 10

   for (let j = 0; j < 10; ++j) {}
   console.log(j); // ReferenceError: j没有定义
   ```

3. let 在 JavaScript 运行时中也会被提升，但由于“暂时性死区”（temporal dead zone）的缘故，实际上不能在声明之前使用 let 变量。因此，从写 JavaScript 代码的角度说，let 的提升跟 var 是不一样的。

**const**

使用 const 声明的变量必须同时初始化为某个值。一经声明，在其生命周期的任何时候都不能再重新赋予新值.

```js
const a; //Uncaught SyntaxError: Missing initializer in const declaration,定义时没有初始化
```

除了以上这点，其他与 let 相同。

## Reference

- [js 执行上下文与作用域\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1wD4y1D7Pp?from=search&seid=2212534765957722610)
- [面试官：说说作用域和闭包吧 - 掘金](https://juejin.cn/post/6844904165672484871#heading-3)
- [4.2 执行上下文与作用域 JavaScript 高级程序设计（第 4 版）-马特·弗里斯比-微信读书](https://weread.qq.com/web/reader/751326d0720befab7514782k182326e0221182be0c5ca23)
