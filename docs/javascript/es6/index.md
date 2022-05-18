# 一些语法

- symbol bigInt
- Map Set WeakMap WeakSet WeakRef
- const/let
- 扩展运算符，剩余参数 ...
- class
- Promise async await
- generator iterator
- Proxy/Reflect

## 扩展运算符

拷贝可遍历的属性，浅拷贝。

```js
let bar = { a: 1, b: 2 };
let baz = { ...bar }; // { a: 1, b: 2 } 与Object.assign 一致
```

## 解构赋值

```js
const { a, b: y } = { a: 3, b: 4 };
//a :3 y:4  y 是对 b 的重命名。外边声明的是y，取值取 b 的值。

let { foo, bar } = { foo: "aaa", bar: "bbb" };
foo; // "aaa"
bar; // "bbb"
```

提取高度嵌套对象里的指定属性：

```js
const school = {
  classes: {
    stu: {
      name: "Bob",
      age: 24,
    },
  },
};

const {
  classes: {
    stu: { name },
  },
} = school;
console.log(name); // 'Bob'
```

## 箭头函数

- 简洁
- 没有自己的 this，继承上层作用域的 this，永远不会改变。不能通过 call，apply，bind 等去改变。
- 不能作为构造函数，因为 this 的问题。

## Array API

- 扩展运算符。 是浅拷贝
- Array.from
- array.find array.findIndex
- array.fill(value,[from],[to])
- array.includes
- array.flat 默认只拍平一层
- array.flatMap
- array.at(index)

<details>
  <summary> 实现 flat</summary>

```js
//flat 实现 不带层级
function flatDeep(arr) {
  return arr.reduce((acc, curr) => (Array.isArray(curr) ? [...acc, ...flatDeep(curr)] : [...acc, curr]), []);
}

//flat 带层级展开
//1 借助外部函数递归
const flat = (arr, level = 1) => {
  return helper(arr, level, []);
};
const helper = (arr, level = 1, res = []) => {
  for (let item of arr) {
    if (Array.isArray(item) && level > 0) {
      res = [...res, ...flat(item, level - 1)];
    } else {
      res = [...res, item];
    }
  }
  return res;
};
console.log(flat([1, 2, 3, [1, 2, [1, 2, 3]]], 2));

//2 reduce 递归
function flat(arr, level = 1) {
  return arr.reduce(
    (acc, curr) => (Array.isArray(curr) && level > 0 ? [...acc, ...flat(curr, level - 1)] : [...acc, curr]),
    []
  );
}
```

- [Array.prototype.flat() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#try_it)

</details>

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

## Proxy

修改某些操作的默认行为，在语言层面的修改，属于元编程。

在目标对象前的拦截，可以外界访问目标对象时进行过滤或改写。支持 13 种拦截操作。

- 代理属性时要考虑该属性是否 configurable ，是否 writable。

Proxy.revocable() 方法返回一个对象，该对象的 proxy 属性是 Proxy 实例，revoke 属性是一个函数，可以取消 Proxy 实例。

```js
let target = {};
let handler = {};

let { proxy, revoke } = Proxy.revocable(target, handler);

proxy.foo = 123;
proxy.foo; // 123

revoke();
proxy.foo; // TypeError: Cannot perform 'get' on a proxy that has been revoked
target; //{foo: 123}
```

[ES6 常用但被忽略的方法（第四弹 Proxy 和 Reflect） - 掘金](https://juejin.cn/post/6844904200971747335#heading-16)

## Reflect

Reflect 对象的方法与 Proxy 对象的方法一一对应，只要是 Proxy 对象的方法，就能在 Reflect 对象上找到对应的方法。每一个 Proxy 对象的拦截操作（get、delete、has...），内部都调用对应的 Reflect 方法。

让 Object 操作都变成函数行为。

```js
// 老写法
"assign" in Object; // true

// 新写法
Reflect.has(Object, "assign"); // true
```

## Proxy and Reflect

- 代理对象的属性

  ```js
  const jay = {
    name: "jay",
    phone: "188888888",
    age: "30",
  };

  const handler = {
    get(target, key, receiver) {
      console.log("hh", target, key, receiver);
      if (key === "phone") {
        return "代理的电话12222";
      }
      //return target[key] //有可能还是被代理了，代理陷阱
      return Reflect.get(target, key, receiver);
    },
  };
  const proxy = new Proxy(jay, handler);

  proxy.phone; //代理的电话12222
  proxy.name; // ’jay‘
  ```

- 使用 Proxy Reflect 实现通过复数数组下标访问数组元素

  ```js
  let arr = [1, 2, 3, 4];

  arr = new Proxy(arr, {
    get: function (target, key, receiver) {
      let idx = Number(key);
      if (key < 0) {
        return target[target.length + idx];
      }
      return Reflect.get(target, key, receiver);
    },
  });

  arr[-1];
  ```

## Reference

- [对象的新增方法 - ECMAScript 6 入门](https://es6.ruanyifeng.com/#docs/object-methods)
