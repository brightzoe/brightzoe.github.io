# 闭包

## 什么是闭包

### 如何定义闭包

**函数和函数对其词法环境的引用捆绑在一起，这样的组合就是闭包。** - MDN

上级作用域中的变量，因为被下级作用域内引用，而没有被释放，导致上级作用域内的变量，等到下级作用域执行完后才得到正常释放。

函数和函数内部能够访问到的变量的总和，就构成一个闭包。

闭包包含函数创建时作用域中的所有变量，它类似于背包。函数定义附带一个小背包，它的包中存储了函数定义创建时所处作用域中的所有变量。**闭包在函数创建时产生。**

[我从来不理解 JavaScript 闭包，直到有人这样向我解释它 - 掘金](https://juejin.cn/post/6844903858636849159#heading-4)

```js
function createCounter() {
  let counter = 0;
  const myFunction = function () {
    //counter 在myFunction 创建时就放在它的包包里啦
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment(); //这行执行完后，闭包的counter=1，这个increment函数被销毁，但下面还存在对increment 的引用，counter 还在不被销毁，下面使用的counter 初始值为1
const c2 = increment();
const c3 = increment();
console.log("example increment", c1, c2, c3); //example increment 1 2 3
```

是否任何函数都具有闭包，甚至是在全局范围内创建的函数？

答案是肯定的。在全局作用域中创建的函数也创建闭包，但是由于这些函数是在全局作用域中创建的，所以它们可以访问全局作用域中的所有变量，而全局作用域不被销毁，所以闭包的概念并不重要。

而当函数返回函数时，闭包的概念就变得更加重要了。返回的函数可以访问不属于全局作用域的变量，但它们仅存在于其闭包中。

## 闭包的应用场景

#### 模拟私有方法

使用闭包来定义公共函数，并令其可以访问私有函数和变量。这个方式也称为模块模式（module pattern）。

```js
var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

var Counter1 = makeCounter();
var Counter2 = makeCounter(); //每个闭包都是引用自己词法作用域内的变量 privateCounter ,在一个闭包内对变量的修改，不会影响到另外一个闭包中的变量。
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
```

这次我们只创建了一个词法环境，为三个函数所共享：`Counter.increment`，`Counter.decrement` 和 `Counter.value`。

该共享环境创建于一个立即执行的匿名函数体内。这个环境中包含两个私有项：名为 `privateCounter` 的变量和名为 `changeBy` 的函数。这两项都无法在这个匿名函数外部直接访问。必须通过匿名函数返回的三个公共函数访问。

这三个公共函数是共享同一个环境的闭包。多亏 JavaScript 的词法作用域，它们都可以访问 `privateCounter` 变量和 `changeBy` 函数。

[闭包 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)

## 问题

```js
// 函数作为返回值
function create() {
  let a = 100;
  return function () {
    console.log(a);
  };
}
let fn = create();
let a = 200;
fn(); // 100
```

```js
//函数作为参数
function print(fn) {
  let a = 200;
  fn();
}
let a = 100;
function fn() {
  console.log(a);
}
print(fn); // 100
```

## Reference

- [我从来不理解 JavaScript 闭包，直到有人这样向我解释它 - 掘金](https://juejin.cn/post/6844903858636849159#heading-4)
- [闭包 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)
