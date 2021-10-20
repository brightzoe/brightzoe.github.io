# 原型和原型链

在访问对象自身不包含的属性时,会从对象原型中搜索属性.

每个对象除了拥有自己的属性外,都包含一个原型属性.原型是另一个对象,是对象的属性来源.

所有对象的父原型,终极原型:`Object.prototype`

> 对象的原型关系树形结构,整个树根是`Object.prototype`,提供了可以在所有对象中使用的方法. 许多对象并不直接将`Object.prototype`作为其原型，而会使用另一个原型对象，用于提供一系列不同的默认属性。函数继承自`Function.prototype`，而数组继承自`Array.prototype`。

获取一个对象的原型:`Object.getPrototypeOf(obj)` or `obj.__proto__`

可以改变一个对象的原型,也可以设置为 null `obj.__proto__=null`

创建一个具有特定原型的对象:`let obj =Object.create(obj,{})`

## 构造函数

 `new F(xx)`用来创建新对象.