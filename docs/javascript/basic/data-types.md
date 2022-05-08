# 数据类型

## 基本数据类型

string,number,boolean,undefined,null,symbol,bigInt

### symbol

基本数据类型。

```js
const a = Symbol(1);
const b = Symbol();
```

`Symbol()`函数会返回`symbol`类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的`symbol`注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法：`new Symbol()`。

每个从 `Symbol()`返回的 `symbol` 值都是唯一的。一个 `symbol` 值能作为对象属性的标识符；这是该数据类型仅有的目的。

```js
//唯一的，每次创建的都是新的symbol类型
Symbol("foo") === Symbol("foo"); // false

const sym = new Symbol(); // TypeError 不能new,语法错误
```

共享 Symbol：

上面使用 `Symbol()` 函数的语法，不会在你的整个代码库中创建一个可用的全局的 symbol 类型。 要创建跨文件可用的 symbol，甚至跨域（每个都有它自己的全局作用域）， 使用 `Symbol.for()` 方法和 `Symbol.keyFor()` 方法从全局的 symbol 注册表设置和取得 symbol。

symbol 注册表通常构建在 JavaScript 编译器基础设施，所以 symbol 注册表的内容不会出现 JavaScript 运行时环境，除了通过它们的反射方法。`Symbol.for("tokenString")` 方法从注册表返回一个 symbol 值，`Symbol.keyFor(symbolValue)` 方法从注册表返回"tokenString"；

```js
Symbol.keyFor(Symbol.for("tokenString")) == "tokenString"; // true
```

[Symbol - 术语表 | MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol)

## 引用数据类型

object,array,function

## 判断数据类型

- `typeof` 一元运算符，返回类型

  返回值：`string`/`number`/`boolean`/`undefined`/`object`/`function`/`symbol`/`bigInt`

  - 无法区分 array 和普通对象
  - `typeof null `=> `object`

- `instanceof` 二元运算符，判断某个对象是否继承自某个特定的构造函数
  `[1] instanceof Array` =>true

- `Object.prototype.toString` 可以准确判断所有的类型，Array、String 等都重写了该方法，因此就需要借助 call/apply 来调用 Object.prototype 上的方法。

  ```js
  Object.prototype.toString.call([1, 2, 3]) === "[object Array]";
  Object.prototype.toString.call("foo") === "[object String]";
  ```

  [Object.prototype.toString() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)

- 判断是不是数组：

  ```js
  Array.isArray(ary)
  Object.prototype.toString.call(ary)==='[object Array]'
  ary.instanceof Array
  ```

## 其他相关数据类型，数据结构

### JSON（文件格式）

- 序列化数据(e.g. yaml)，方便传输数据，或者作为配置文件。
  - 序列化:把一个东西在不损失信息量的前提下，转换为由连续字节表示的数据，比如字符串。
- 看起来很像 JS 的数组和对象的表示方式，但有一些限制。
  所有 key 都要有双引号。
  只允许使用简单的数据格式，不能有函数调用/绑定或涉及实际计算。
  只支持数组、对象、string、number、boolean、null。
  支持转义，不支持明文空格。
  不能有多余的逗号。
- `JSON.stringify()`//序列化
  - 接受 JavaScript 值并返回 JSON 编码的字符串
- `JSON.parse()`//反序列化

## 数据类型转换

- number to string

  ```js
  String(233);
  (233).toString(); // 或 233..toString()  //遇到null，undefined会报错，不安全

  "" + 233;

  233 + "";
  ```

  > 孰优孰劣见 reference。 个人一般采用 String()，比较明确，存在 null,undefined 等不会报错。

## 基本类型与引用类型的区别

引用类型的本质是相同的内存地址

## Reference

- [Symbol - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [Symbol - 术语表 | MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol)
- [What's the best way to convert a number to a string in JavaScript? - Stack Overflow](https://stackoverflow.com/questions/5765398/whats-the-best-way-to-convert-a-number-to-a-string-in-javascript)
- [How to convert a string to an integer in JavaScript? - Stack Overflow](https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript)
