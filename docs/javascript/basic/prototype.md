# 原型和原型链

在访问对象自身不包含的属性时,会从对象原型中搜索属性.

每个对象除了拥有自己的属性外,都包含一个隐式原型`__proto__`属性.指向另一个对象(创建该对象的构造函数的显式原型`prototype`),是对象的属性来源.

获取一个对象的原型:`Object.getPrototypeOf(obj)` or `obj.__proto__`

每个函数都拥有自己的`prototype`属性。一个函数的`prototype`含有一个`constructor`属性，指向这个函数。`Function.prototype.constructor===Function`

> 以下 隐式原型：`__proto__` 显式原型：`prototype`

![](https://i.loli.net/2021/10/21/uT3n6x8p7BFgIaf.png)

可以改变一个对象的原型,也可以设置为 null `obj.__proto__=null`

创建一个具有特定原型的对象:`let obj =Object.create(proto, [propertiesObject])` 它接收两个参数，第二个可选参数是属性描述符（不常用，默认是 undefined）。

## 原型链

所有对象的父原型,终极原型:`Object.prototype`,再终极是 null.`Object.prototype.__proto__ === null`

> 对象的原型关系树形结构,整个树根是`Object.prototype`,提供了可以在所有对象中使用的方法. 许多对象并不直接将`Object.prototype`作为其原型，而会使用另一个原型对象，用于提供一系列不同的默认属性。函数继承自`Function.prototype`，而数组继承自`Array.prototype`。

![](https://i.loli.net/2021/10/21/SQhZbroGAqMjTCi.png)

## 构造函数

`new F(xx)`用来创建新对象，该对象是构造函数 F 的实例。

构造函数一般以大写开头，创建的对象的隐式原型指向构造函数的 prototype 属性。

构造函数中包含指向新对象的变量 this ,返回新创建的对象，新创建的对象是构造函数的实例，除非构造函数显式返回另一个对象的值。

```js
// 构造函数:
function myFunction(arg1, arg2) {
	this.firstName = arg1;
	this.lastName = arg2;
}

// This  creates a new object
var a = new myFunction("Li", "Cherry");
a.firstName; //li
a.lastName; //Cherry
```

- new 的原理

  创建一个新对象。

  该对象的隐式原型指向它的构造函数的显式原型。

  构造函数内部的 this 被赋值为这个新对象。

  如果构造函数返回一个对象则返回该对象，否则返回刚刚创建的对象。

- 简单实现 new

```js
function myNew(Fn, ...args) {
	if (typeof Fn !== "function") {
		//要被new 的构造函数必须是函数
		throw new Error("constructor must be a function");
	}
	// const obj = {}; //创建新对象
	// obj.__proto__ = Fn.prototype; // 新对象的隐式原型指向构造函数的显式原型
	const obj = Object.create(Fn.prototype); //创建新对象,原型指向构造函数
	const result = Fn.call(obj, ...args); //调用构造函数，并绑定this 给新对象
	//return typeof result === "object" ? result : obj; //如果构造函数显式返回了对象就返回这个对象，如果没有则返回前面创建的空对象obj
	return result instanceof Object ? result : obj; //构造函数显式返回了函数也算返回，用instanceof 不用typeof
}
```

:::note 构造函数与普通的函数有什么不同？

唯一区别是调用方式不同，除此之外，构造函数就是函数。
并没有把某个函数定义为构造函数的特殊语法。任何函数只要使用 new 操作符调用就是构造函数。(除了箭头函数，箭头函数不能用作构造器，使用 new 会抛出错误。)

构造函数首字母通常大写，也可以算一个区别吧。

:::

[520， 学废 new 对象的过程 - 掘金](https://juejin.cn/post/6964169557569175565#heading-0)

### instanceof

js 的继承基于原型链实现，instanceof 用来判断该实例的构造函数的 prototype 属性是否出现在对象原型链中的任何位置。

[instanceof - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)

- 实现简易 instanceof

```js
// 变量R的原型 存在于 变量L的原型链上
function myInstanceof(left, right) {
	//基本数据类型肯定不是
	const basicTypes = ["string", "number", "boolean", "undefined", "symbol"];
	if (basicTypes.includes(typeof left)) {
		//typeof 判断不了array,null,其他都可以
		return false;
	}
	//不是基本数据类型
	let lp = left.__proto__;
	let rp = right.prototype;
	//循环向上找原型，直到找到或者到头找到null
	while (true) {
		if (lp === rp) {
			return true;
		}
		if (lp === null) {
			return false;
		}
		lp = lp.__proto__;
	}
}
```

## 一些题

```js
// 1
var foo = {};
var F = function () {};
Object.prototype.a = "value a";
Function.prototype.b = "value b";

console.log(foo.a); //value a
console.log(foo.b); //undefined
console.log(F.a); //value a
console.log(F.b); //value b

// 2
Function.prototype.a = () => alert("a");
Object.prototype.b = () => alert("b");
function A() {}
const a = new A();

a.a(); //a.a is undefined
//a.a();a.__proto__.a();a.__proto__.__proto__.a()
a.b(); //b
```

**如何判断一个函数当前是否被当做构造函数调用？**

1. `instanceof ` 检查是否通过 new 调用，this 是否是构造函数的实例。

   但不完全可靠，用 Person.call()/apply()也可以得到 Person 的实例。

2. 当调用函数的 Constructor 方法时，new.target 被赋值给构造函数名(===Person).如果不是通过构造函数调用，new.target===undefined。
   很可靠。在函数外使用 new.target 是语法错误。
3. 用 class 声明的函数必须被 new 调用，不然会报错，就规定了这一种方法。

## Reference

- [面不面试的，你都得懂原型和原型链 - 掘金](https://juejin.cn/post/6934498361475072014#heading-0)
- [深度解析原型中的各个难点 · Issue #2 · KieSun/Dream](https://github.com/KieSun/Dream/issues/2)
- [520， 学废 new 对象的过程 - 掘金](https://juejin.cn/post/6964169557569175565#heading-0)
- [new 运算符 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
- [JS | 前端进阶之道](https://yuchengkai.cn/docs/frontend/#new)
- [面试官问：能否模拟实现 JS 的 new 操作符 - 掘金](https://juejin.cn/post/6844903704663949325#heading-1)
