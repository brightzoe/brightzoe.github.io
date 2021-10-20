# 数据类型

## 基本数据类型

string,number,boolean,undefined,null

## 引用数据类型

object,array,function

## 判断数据类型

- `typeof` 一元运算符，返回类型
  返回值：`string`/`number`/`boolean`/`undefined`/`object`/`function`/`symbol`

  - 无法区分 array 和普通对象
  - `typeof null `=> `object`

- `instanceof` 二元运算符，判断某个对象是否继承自某个特定的构造函数
  `[1] instanceof Array` =>true

- `Object.prototype.toString` 可以准确判断所有的类型，Array、String 等都重写了该方法，因此就需要借助 call/apply 来调用 Object.prototype 上的方法。

  ```js
  Object.prototype.toString.call([1, 2, 3]) === "[object Array]";
  Object.prototype.toString.call("foo") === "[object String]";
  ```

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
  所有 key 都要有双引号
  只允许使用简单的数据格式，不能有函数调用/绑定或涉及实际计算
  只支持数组、对象、string、number、boolean、null
  支持转义，不支持明文空格
  不能有多余的逗号
- `JSON.stringify()`//序列化
  - 接受 JavaScript 值并返回 JSON 编码的字符串
- `JSON.parse()`//反序列化
