# 介绍闭包

## 什么是闭包

闭包包含函数创建时作用域中的所有变量，它类似于背包。函数定义附带一个小背包，它的包中存储了函数定义创建时所处作用域中的所有变量。**闭包在函数创建时产生**

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

是否任何函数都具有闭包，甚至是在全局范围内创建的函数?答案是肯定的。在全局作用域中创建的函数创建闭包，但是由于这些函数是在全局作用域中创建的，所以它们可以访问全局作用域中的所有变量，而全局作用域不被销毁，所以闭包的概念并不重要。

当函数返回函数时，闭包的概念就变得更加重要了。返回的函数可以访问不属于全局作用域的变量，但它们仅存在于其闭包中。

### 如何解释闭包

上级作用域中的变量，因为被下级作用域内引用，而没有被释放，导致上级作用域内的变量，等到下级作用域执行完后才得到正常释放。

函数和函数内部能够访问到的变量的总和，就构成一个闭包。

**函数和函数对其词法环境的引用捆绑在一起，这样的组合就是闭包。**

## 闭包的作用是什么

## 常见场景

## Reference

- [我从来不理解 JavaScript 闭包，直到有人这样向我解释它 - 掘金](https://juejin.cn/post/6844903858636849159#heading-4)
