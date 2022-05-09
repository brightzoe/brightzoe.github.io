# 一些问题

## 0.1+0.2!==0.3

浏览器对于 64 位双精度浮点数的处理，1 位符号位，11 位指数位，52 位尾数。表现为二进制时超出 53 位后被舍弃。

对于 2 的倍数不存在精度问题，1/2，1/4 这种。

## 深拷贝浅拷贝

- 浅拷贝只复制对象的第一层。第一层的值如果是对象，拷贝的是对象的引用。

  浅拷贝：`Object.assign({}, obj)`

- 深拷贝递归复制对象的所有层级

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
