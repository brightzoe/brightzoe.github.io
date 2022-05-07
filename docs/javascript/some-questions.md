# 一些问题

## 深拷贝浅拷贝

- 浅拷贝只复制对象的第一层
- 深拷贝递归复制对象的所有层级

### 手写深拷贝

对象/原始数据类型：递归复制一份。

带环引用：用 map 建立映射做缓存，防止循环引用。

正则类/Date 类单独处理。

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

## 纯函数

一个函数的返回结果只依赖它的参数，并在执行过程中没有任何的副作用，被称为纯函数。

### 为什么用纯函数

纯函数非常靠谱，稳定，不会产生不可预料的行为，不会对外部产生影响。

- [JS - 纯函数 - 掘金](https://juejin.cn/post/6949518756141875231#heading-0)
