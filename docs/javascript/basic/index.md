# basic

一些问题。

## 0.1+0.2!==0.3

浏览器对于 64 位双精度浮点数的处理，1 位符号位，11 位指数位，52 位尾数。表现为二进制时超出 53 位后被舍弃。

对于 2 的倍数不存在精度问题，1/2，1/4 这种。

## 相等判断

Object.is() 与比较操作符 “===”、“==”

== 进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。

=== 进行相等判断时，类型不一致时，不会做强制类型准换，直接返回 false。

使用 Object.is 来进行相等判断时，一般情况下和 === 的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的。

## 深拷贝浅拷贝

- 浅拷贝只复制对象的第一层。第一层的值如果是对象，拷贝的是对象的引用。

  浅拷贝：扩展运算符，`Object.assign({}, obj)`。

  > `Object.assign(targetObj, obj1,[obj2])` 将源对象的所有可枚举属性复制到目标对象。返回的是目标对象本身。

  ```js
  let outObj = {
    inObj: { a: 1, b: 2 },
  };
  let newObj = { ...outObj };
  newObj.inObj.a = 2;
  console.log(outObj); // {inObj: {a: 2, b: 2}}

  let outObj = {
    inObj: { a: 1, b: 2 },
  };
  let newObj = Object.assign({}, outObj);
  newObj.inObj.a = 2;
  console.log(outObj); // {inObj: {a: 2, b: 2}}
  ```

- 深拷贝复制对象的所有层级。

  `JSON.parse(JSON.stringify(data))` 是深拷贝。但不能拷贝 `function`，不能拷贝循环引用的对象等。

### 手写深拷贝

对象/原始数据类型：递归复制一份。

带环引用：用 map 建立映射做缓存，防止循环引用。

正则类/Date 类单独处理。

<details>
  <summary> 手写代码 </summary>

```js
//如果带环，需要缓存，确认当前对象是否复制过，如果复制过，就直接指向它。用map防止循环引用
function cloneDeep(obj) {
  let cache = new Map(); //由原对象映射到其复制品
  function clone(obj) {
    if (cache.has(obj)) {
      return cache.get(obj);
    }
    let res;
    if (obj && typeof obj === "object") {
      //引用数据类型，且不是null
      if (Array.isArray(obj)) {
        //数组
        res = [];
      } else {
        res = {};
      }
      cache.set(obj, res);
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          res[key] = clone(obj[key]);
        }
      }
      return res;
    } else {
      return obj;
    }
  }
  return clone(obj);
}
```

</details>

## 纯函数

一个函数的返回结果只依赖它的参数，并在执行过程中没有任何的副作用，被称为纯函数。

### 为什么用纯函数

纯函数非常靠谱，稳定，不会产生不可预料的行为，不会对外部产生影响。

## for in 与 for of

1. for in 主要用于遍历对象所有可枚举属性，且会遍历对象原型链上的属性，性能较低。也可遍历数组，但是遍历出来的是数组的索引。
2. for of 用于遍历所有有 iterator 接口的数据结构。可以遍历数组，类数组对象、Map，Set，字符串等，不会遍历原型链。普通的对象使用 for of 会报错，如果需要可以自己定义相应的 Iterator 接口，默认的 Iterator 接口部署在数据结构的 `Symbol.iterator` 属性。

## js 内存机制

### 内存回收

#### 栈内存回收

函数调用结束，该函数的执行上下文所在的栈内存会自定被回收。如果出现闭包的情况，闭包的数据会组成一个对象保存在堆空间内。

#### 堆内存回收

:::tip
垃圾回收方式：

- 引用计数。有可能循环引用无法被回收。

- 标记清除：运行时给变量和值设置标记，如果没有被引用的变量将被垃圾回收器清除，释放相应的内存。

垃圾回收一般都有相同的执行流程（标记清除）：

1. 标记空间中活动对象和非活动对象

2. 回收非活动对象所占据的内存

3. 内存整理，这步是可选的，因为有的垃圾回收器工作过程会产生内存碎片，这时就需要内存整理防止不够连续空间分配给大数据

:::

JS 把堆空间分成新生代和老生代两个区域，新生代中存放的是生存时间短的对象，通常只支持 1 ～ 8M 的容量；老生代中存放的生存时间长的对象，一些大的数据也会被直接分配到老生区中。

针对这两个区域，JS 存在两个垃圾回收器：主垃圾处理器和副垃圾处理器。

栈内存会随着函数调用结束而被释放(覆盖)，所以 JS 中的内存泄漏一般发生在堆中。

#### 内存泄漏

什么是内存泄漏

- 程序中动态分配的堆内存由于某些原因没有释放。

内存泄漏的场景

- 使用未声明的变量导致意外创建全局变量
- 没有取消的定时器，定时器内部有对外部变量的引用
- 获取了 DOM 的引用但删除 DOM 后，该引用存在就不会回收 DOM
- 不合理的闭包

排查内存泄漏

- window 对象上的属性数量
- fps 是否稳定，请求资源大小，DOM 层级深度，http 请求时长

- [JS 变量存储？栈 & 堆？NONONO! - 掘金](https://juejin.cn/post/6844903997615128583#heading-0)
- [【微信公众号：奇舞精选 2022-04-20 19:00】浅谈 JS 内存机制](https://mp.weixin.qq.com/s/dtEciFpNSrPGR63aScaoww)
- [【微信公众号：ELab 团队 2022-04-26 22:02】浅谈 V8 垃圾回收机制](https://mp.weixin.qq.com/s/wT8_cz82Y5Ur74xGKpPgtQ)
- [那些资深/专家的前端是如何回答 JavaScript 面试题的 （一） - 掘金](https://juejin.cn/post/6981467496742125604#heading-1)

## 基础综合题

- 以下函数的输出结果?

  ```js
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  ```

  如何改为每隔一秒，递增?

  ```js
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * (i + 1));
  }
  ```

  实现 sleep

  ```js
  // sleep(1000).then(x=>console.log(x))
  function sleep(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  //通过 sleep 实现每一秒输出递增数字
  for (let i = 0; i < 5; i++) {
    sleep(1000 * i).then(() => {
      console.log(i);
    });
  }

  //改成async await
  (async () => {
    for (let i = 0; i < 5; i++) {
      await sleep(1000);
      console.log(i);
    }
  })();
  ```

- [JS - 纯函数 - 掘金](https://juejin.cn/post/6949518756141875231#heading-0)
