# 执行上下文和作用域

摘要（总结）：

> 来源： [面试官：说说作用域和闭包吧 - 掘金](https://juejin.cn/post/6844904165672484871#heading-3)

1. javascript 语言层面只原生支持两种作用域类型：全局作用域 和 函数作用域 。全局作用域程序运行就有，函数作用域只有定义函数的时候才有，它们之间是包含的关系。
2. 作用域之间是可以嵌套的，我们把这种嵌套关系称为**作用域链**。
3. 可执行代码在作用域中查询变量时，只能查询 本地作用域 及 上层作用域，不能查找内部的函数作用域。JS 引擎搜索变量时，会先询问本地作用域，找到即返回，找不到再去询问上层作用域...层层往上，直到全局作用域。
4. javascript 中使用的是 “词法作用域”（静态作用域），因此**函数作用域的范围在函数定义时就已经被确定**，和函数在哪执行没有关系。
5. 有权访问另一个函数内部变量的函数，我们称为 闭包。闭包的本质是利用了作用域的机制，来达到外部作用域访问内部作用域的目的。
6. 闭包的使用场景非常广泛，然而过度使用会导致闭包内的变量所占用的内存空间无法释放，带来**内存泄露**的问题。
7. 我们可以借助于 chrome 开发者工具查找代码中导致了内存泄露的代码。
8. 避免内存泄露的几种方法：避免使用全局变量、谨慎地为 DOM 绑定事件、避免过度使用闭包。最重要的，还是代码规范。

执行语句前创建的环境可以这样类比：

<img src='https://i.loli.net/2021/09/26/kFej7CAxVTsW42v.png' width='80%' />

## 执行上下文

var 和 function 声明创建的变量和函数在全局对象中（浏览器环境是 window 对象），而 let,const,class 声明的变量创建在全局 scope 中。

```js
let a = 'a';
console.log(a);
console.log(window.a); //没有
```

```js
var a = 'a';
console.log(a);
console.log(window.a); //a
```

创建全局执行上下文：

![全局执行上下文](https://i.loli.net/2021/09/26/Rr63yYwAt4DMJx2.png)

暂时性死区：

![暂时性死区](https://i.loli.net/2021/09/26/tRu9X2mKk4HpFNq.png)

```js
var a = '123';
function foo() {
  console.log(a);
  let a;
}
foo(); //Uncaught ReferenceError: Cannot access 'a' before initialization
```

## 作用域

作用域：当前执行上下文或当前上下文的词法环境。

- 全局作用域： 全局执行上下文。全局作用域为程序的最外层作用域，一直存在。
- 函数作用域： 函数执行上下文。只有函数被定义时才会创建，包含在父级函数作用域 / 全局作用域内。

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

![作用域嵌套](https://i.loli.net/2021/10/22/YT4vOU6dL9QgCi3.png) 用图片表示，上述代码一共有三层作用域嵌套，分别是：

1. 全局作用域
2. foo 作用域
3. bar 作用域

当可执行代码内部访问变量时，会先查找本地作用域，如果找到目标变量即返回，否则会去父级作用域继续查找...一直找到全局作用域。我们把这种作用域的嵌套机制，称为 “作用域链”。

[面试官：说说作用域和闭包吧 - 掘金](https://juejin.cn/post/6844904165672484871#heading-3)

### 块级作用域 ES6

在 ES5 及之前并没有块级作用域的概念。

为什么需要块级作用域？

- 内层变量可能覆盖外层变量
- 用来计数的循环变量泄露为全局变量

```js
if (true) {
  var a = 1;
}

console.log(a); // 结果??? 1
```

ES6 使用 let 和 const 代替 var 关键字，和它最近的{}就会创建块级作用域。

```js
if (true) {
  let a = 1;
}

console.log(a); // ReferenceError
```

ES6 新增的 let 关键字跟 var 很相似，但它的作用域是块级的。块级作用域由最近的一对包含花括号{}界定。换句话说，if 块、while 块、function 块，甚至连单独的块也是 let 声明变量的作用域。

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
// 这没什么可奇怪的，var声明也会导致报错
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
let divs = document.querySelectorAll('div');
for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener(
    'click',
    (function (frozenCounter) {
      return function () {
        console.log(frozenCounter);
      };
    })(i),
  );
}
```

> 延申： [闭包 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures) 提供了更多解决遍历问题的方式。可以使用 forEach

:::note

通过 IIFE 实现 UMD 模块化

1. 使用 IIFE 完成封装，解决了模块名污染全局作用域的问题。
2. 赋予选择的权力，根据不同的环境条件选择不同的执行

```js
// UMD 模块化
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS-like
    module.exports = factory(require('jquery'));
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
  for (i = 0; i < 5; i++) {
    console.log(i);
  }
}
console.log(i); // 抛出错误

// 循环的块级作用域
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // 抛出错误
```

3. 使用 eval/with 修改作用域，不推荐。

### 作用域的应用场景

模块化。 [面试官：说说作用域和闭包吧 - 掘金](https://juejin.cn/post/6844904165672484871#heading-8)

## 一些问题

对象里写函数，对象的 fn 属性指向这个函数，但是函数并不属于这个对象，相对独立。

这个函数是全局的，对象不是语句块，不会产生作用域。

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

#### let 与 var

都是用于声明变量。

1. var 声明的变量会被提升到当前所在作用域最前面，但不赋值，到赋值的行才会赋值。

   let 在 JavaScript 运行时中也会被提升，但由于“暂时性死区”（temporal dead zone）的缘故，实际上不能在声明之前使用 let 变量。因此，let 的提升跟 var 是不一样的。

   ```js
   // TDZ 块级作用域中也不能使用外部作用域的同名变量
   var a = 8;
   {
     console.log(a); //ReferenceError: Cannot access 'a' before initialization
     let a = 9;
   }
   ```

2. let 与 var 的一个不同之处是在同一作用域内不能声明两次。重复的 var 声明会被忽略，而重复的 let 声明会抛出 SyntaxError。

3. let 的行为非常适合在循环中声明迭代变量。**使用 var 声明的迭代变量会泄漏到循环外部**，这种情况应该避免。

   ```js
   for (var i = 0; i < 10; ++i) {}
   console.log(i); // 10

   for (let j = 0; j < 10; ++j) {}
   console.log(j); // ReferenceError: j没有定义
   ```

4. 如果在浏览器的全局作用域中，使用 var 声明的变量会作为 window 的属性，而 let 声明的变量不会。

#### const

使用 const 声明的变量必须同时初始化为某个值。一经声明，在其生命周期的任何时候都不能再重新赋予新值.

```js
const a; //Uncaught SyntaxError: Missing initializer in const declaration,定义时没有初始化
```

除了以上这点，其他与 let 相同，建立块级作用域，存在暂时性死区的问题，不能在同一作用域声明两次。

### JS 里变量的存储

理想情况下会认为原始数据类型存储在栈内，引用数据类型存储在堆内，栈内存储的是堆内地址的引用，但这不准确的。

实际上：

局部变量中未捕获的基础变量会存储在栈内，其他在栈内存储的都是地址。

被捕获的变量比如闭包中引用的变量会存在特殊的对象 Scope 中。

全局变量 global，var/let 不一致，let 声明的变量是放在全局的 Scope 中。

> 栈： 先进后出，占用空间小，读取速度快。堆： 占用空间大，大小不固定。

了解更多： [JS 变量存储？栈 & 堆？NONONO! - 掘金](https://juejin.cn/post/6844903997615128583#heading-0)

## Reference

- [js 执行上下文与作用域\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1wD4y1D7Pp?from=search&seid=2212534765957722610)
- [面试官：说说作用域和闭包吧 - 掘金](https://juejin.cn/post/6844904165672484871#heading-3)
- [4.2 执行上下文与作用域 JavaScript 高级程序设计（第 4 版）-马特·弗里斯比-微信读书](https://weread.qq.com/web/reader/751326d0720befab7514782k182326e0221182be0c5ca23)
- [10.15 立即调用表达式 JavaScript 高级程序设计（第 4 版）-马特·弗里斯比-微信读书](https://weread.qq.com/web/reader/751326d0720befab7514782kfe932230253fe9fc289c8a3)

<!-- //TODO: - [JS 变量存储？栈 & 堆？NONONO! - 掘金](https://juejin.cn/post/6844903997615128583#heading-0)-->
