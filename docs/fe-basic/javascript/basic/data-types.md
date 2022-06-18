# 数据类型

## 基本数据类型

string,number,boolean,undefined,null,symbol,bigInt

### Boolean

被当作 falsy 的值：`false` `null` `''` `0` `NaN` `undefined`

转换为布尔类型

```js
!0; //true
![]; //false
!![]; //true
```

### String

```js
//一些方法
let str = "gdagffasd";
str.indexOf("d");
str.lastIndexOf("g");

str.split(""); //转为数组
str.split("g"); //['', 'da', 'ffasd']
```

### number

```js
typeof NaN === "number"; // true

NaN !== NaN; //true

Number.isNaN(NaN); // true
```

`Number.MAX_SAFE_INTEGER` ：2^53 -1 。大于这个范围的数是可以表示的，但不能保证精确，溢出的位会被截断。

- 判断是整数
  - Number.isInteger
  - number % 1
  - Math.floor/Math.ceil/Math.round 之后与原值是否相等

### bigInt

表示任意大的整数。

```js
const a = BigInt(9007199254740991);
const b = 9007199254740991n;
const hugeHex = BigInt("0x1fffffffffffff");
```

### symbol

基本数据类型。 创建后独一无二不可变，可以解决全局变量冲突的问题。

```js
const a = Symbol("这是描述符");
const b = Symbol();
```

`Symbol()`函数会返回`symbol`类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的`symbol`注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法：`new Symbol()`。

每个从 `Symbol()`返回的 `symbol` 值都是唯一的。一个 `symbol` 值能作为对象属性的标识符。

```js
//唯一的，每次创建的都是新的symbol类型
Symbol("foo") === Symbol("foo"); // false

const sym = new Symbol(); // TypeError 不能new,语法错误
```

共享 Symbol

- `Symbol()` 函数的语法，不会在你的整个代码库中创建一个可用的全局的 symbol 类型。 要创建跨文件可用的 symbol，甚至跨域（每个都有它自己的全局作用域）， 使用 `Symbol.for()` 方法和 `Symbol.keyFor()` 方法从全局的 symbol 注册表设置和取得 symbol。

> symbol 注册表通常构建在 JavaScript 编译器基础设施，所以 symbol 注册表的内容不会出现 JavaScript 运行时环境，除了通过它们的反射方法。`Symbol.for("tokenString")` 方法从注册表返回一个 symbol 值，`Symbol.keyFor(symbolValue)` 方法从注册表返回"tokenString"；

```js
Symbol.keyFor(Symbol.for("tokenString")) == "tokenString"; // true

let a = Symbol.for("唯一的");
Symbol.keyFor(a); // 唯一的

Symbol.for("foo"); //向全局搜寻是否有通过Symbol.for('foo') 全局注册的symbol ，没有的话就注册一个
```

[Symbol - 术语表 | MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol)

应用

- 避免对象的 key 被覆盖，用来扩展对象的属性。对于一个对象由多个模块构成的情况很有用。
  **Symbol 作为对象属性名时读取时不能用.运算符，要用方括号。**

  Symbol 值作为属性名时，该属性是公有属性不是私有属性，但 for in 不能遍历 Symbol 属性。

  ```js
  const foo = Symbol("a");
  const obj = {};
  obj[foo] = "xx";

  foo in obj; //true

  for (let t in obj) {
    console.log(t); //没有symbol
  }

  Object.keys(obj); //[]

  obj.hasOwnProperty(foo); //true

  Reflect.ownKeys(obj); //[Symbol(a)]
  ```

## 引用数据类型

object,array,function

## 判断数据类型

- `typeof` 一元运算符，返回类型

  返回值：`string`/`number`/`boolean`/`undefined`/`object`/`function`/`symbol`/`bigInt`

  - 无法区分 array 和普通对象
  - `typeof null `=> `object`

- `instanceof` 二元运算符，判断某个对象是否继承自某个特定的构造函数，不能判断基本数据类型。

  ```js
  [1] instanceof Array; //true
  "str" instanceof String; // false
  true instanceof Boolean; // false
  ```

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
  ary.__proto__ === Array.prototype;

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
  接受 JavaScript 值并返回 JSON 编码的字符串
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

- parseInt(string,radix) 解析一个字符串并返回指定基数的十进制整数。解析失败返回 NaN
- parseFloat(string) 将字符串转换为浮点数，解析失败返回 NaN。
- number.toFixed(n) 四舍五入保留 n 位小数
- `==` 隐含强制类型转换 [相等（==） - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)
  ```js
  NaN == NaN; //false
  null == undefined; //true
  [] == 0; //转换为数字
  "" == 0; //true
  ```
- 逻辑运算符

  - 优先级： ! > && > ||
  - 短路特性。右边的值只在必要时计算

  ```js
  //前面的判断转换为布尔类型
  2 && 3; //3
  1 && null && 2; //null 从左到右返回第一个为 falsy 的值
  false || null || "" || 0 || NaN || "Hello" || undefined; // "Hello"

  null || false || undefined; //undefined
  0 || 2 || alert(3); //2  从左到右返回第一个为 true 的值
  1 && [] && {} && true && "World" && null && 2010; // null
  ```

## 基本类型与引用类型的区别

引用类型的本质是相同的内存地址

## Reference

- [Symbol - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [Symbol - 术语表 | MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol)
- [What's the best way to convert a number to a string in JavaScript? - Stack Overflow](https://stackoverflow.com/questions/5765398/whats-the-best-way-to-convert-a-number-to-a-string-in-javascript)
- [How to convert a string to an integer in JavaScript? - Stack Overflow](https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript)
