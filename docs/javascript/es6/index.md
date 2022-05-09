# 一些语法

- symbol bigInt
- Map Set WeakMap WeakSet WeakRef
- const/let
- 扩展运算符，剩余参数 ...
- 箭头函数
- class
- Promise async await
- generator iterator
- Proxy/Reflect

## 解构赋值

```js
const { a, b: y } = { a: 3, b: 4 };
//a :3 y:4  y 是对 b 的重命名

let { foo, bar } = { foo: "aaa", bar: "bbb" };
foo; // "aaa"
bar; // "bbb"
```

## Array API

- 扩展运算符。 是浅拷贝
- Array.from
- array.find array.findIndex
- array.fill(value,[from],[to])
- array.includes
- array.flat 默认只拍平一层
- array.flatMap
- array.at(index)

## Object API

- Object.is

  使用同值相等的算法。基本与严格相等`===`一致。

  ```js
  Object.is("foo", "foo"); //true
  Object.is({}, {}); //false

  //与严格相等不同：
  Object.is(+0, -0); // false
  Object.is(NaN, NaN); // true
  ```

- Object.assign

  对象合并，将源对象的所有可枚举属性复制到目标对象。返回的是目标对象本身。

  ```js
  const target = { a: 1 };

  const source1 = { b: 2 };
  const source2 = { c: 3 };

  Object.assign(target, source1, source2);
  ```

  > 该方法是浅拷贝。复制到目标对象上的属性如果是一个对象，是对原来对象的引用。

- 遍历相关
  Object.keys，Object.values ，Object.entries

  以上都是遍历对象自身（不含继承的），所有可遍历属性。

  ```js
  const obj = { foo: "bar", baz: 42 };
  Object.entries(obj);
  // [ ["foo", "bar"], ["baz", 42] ]
  ```

  Object.fromEntries()方法是 Object.entries()的逆操作.

- Object.setPrototypeOf

  Object.setPrototypeOf 方法的作用与**proto**相同，用来设置一个对象的原型对象（prototype），返回参数对象本身

- Object.getPrototypeOf

## Reference

- [对象的新增方法 - ECMAScript 6 入门](https://es6.ruanyifeng.com/#docs/object-methods)
