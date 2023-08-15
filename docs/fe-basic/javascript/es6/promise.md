# Promise

## 为什么产生

异步操作，通过回调函数实现，下面的操作依赖上一个回调的结果。则下面的操作都要写在上面的回调里面，回调里面嵌套回调，以致产生回调地狱。

## 特点

- Promise 对象代表一个异步操作，包含三种状态：pending fulfilled rejected。只有异步操作的结果才可以决定当前 promise 的状态。
- 状态已经改变就不会变。由 pending->fulfilled 或者 pending->rejected。

## 语法

```js
const p = new Promise((resolve, reject) => {});
```

Promise 接收一个函数作为参数，该函数中的两个参数为函数，分别为 resolve，reject。

通过调用 resolve/reject 函数 来改变 Promise 的状态。

```js
const p = new Promise((resolve, reject) => {
  // reject();
  resolve(); //成功时调用，状态改为 fulfilled
});

const p = new Promise((resolve, reject) => {
  resolve('成功的结果'); //改变当前 promise 对象的结果
  //reject("失败的结果");
});
```

then 方法是一个函数，在 Promise.prototype 上 。then 方法接收两个函数作为参数，返回值是一个新的 promise 实例。

```js
p.then(
  (value) => {
    console.log(value); // p 的状态为 fulfilled 时执行。value 是上面resolve 的参数
  },
  (reason) => {
    console.log(reason); // p 的状态为 rejected 时执行
  },
);
```

前面 promise 的状态不改变，后面的 then 方法就不会执行。在 then 方法中，通过 return 将返回的 promise 实例改为 fulfilled 状态。如果在 then 方法中出现错误，会将返回的 promise 实例改为 rejected 状态。

```js
new Promise((resolve, reject) => {
  resolve('给then 的参数');
})
  .then(
    (value) => {
      console.log(value);
      return '123'; //改变这个 promise 的状态为fulfilled，给下一个promise 的参数
      // throw error 如果这里的代码出错，当前 promise 的状态就变为 rejected
    },
    (error) => {
      console.log(error);
    },
  )
  .then(
    (value) => {
      console.log(value);
    },
    (error) => {
      console.log(error);
    },
  );
```

catch 方法是一个函数，在 Promise.prototype 上。catch 的第一个参数与 then 方法的第二个参数一致。

当 promise 的状态为 rejected 或代码出错时，会执行 catch 里的第一个参数方法。

```js
new Promise((res, rej) => {
  // rej("rej");
  throw error;
}).catch((error) => {
  //上面promise rejected 或出错时，会执行这里
  console.log(error);
});
```

穿透

```js
new Promise((resolve, reject) => {
  resolve();
})
  .then((value) => {
    //成功时被执行
    console.log(value);
  })
  .catch((error) => {
    //失败时被执行
    console.log(error);
  });
```

## 使用

```js
function request(method, url, data) {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send(data);
    xhr.onreadystateChange = function () {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status === 200) {
        res(xhr.responseText);
      } else {
        rej(xhr.statusText);
      }
    };
  });
}

request('GET', '../data.json')
  .then((val) => {
    return request('GET', `../data.json`, val);
  })
  .then((val) => {
    return request('GET', `../data.json`, val);
  })
  .then((val) => {
    console.log(val);
  });
```

将现有对象转为 promise

```js
const a = Promise.resolve('foo');
// 等同于
const a = new Promise((resolve) => resolve('foo'));

const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'));
```

## API

### Promise.resolve

```js
Promise.resolve(value);

Promise.resolve(Promise.reject(1)).catch((err) => console.log(err));
```

返回一个 promise ，如果 value 为 thenable ，则跟踪这个 thenable 的状态，采用它的最终状态，否则返回一个以 value 值为结果的 promise。

### Promise.reject

```js
Promise.reject(error);
```

返回一个 reject 状态的 promise，值为 error

### Promise.all

```js
Promise.all(promises: Iterable<Promise>): Promise<Array>
```

接收 `Iterable<promise>` 类型，返回一个新的 promise 实例。

> iterable: array, map, set 等。

当所有 promise 都成功时 resolve，value 为所有 promise 的 value 数组。

有一个失败时则 reject，error 为第一个 reject 的 promise 的 error。

参数为空数组时，立刻 resolve。

```js
const promises = [
  Promise.resolve('a'),
  Promise.resolve('b'),
  Promise.reject('c'),
];
Promise.all(promises)
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
```

使用：

```js
// 结合 map
function timesTwoAsync(x) {
  return new Promise((resolve) => resolve(x * 2));
}
const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);
Promise.all(promiseArr).then((result) => {
  console.log(res);
});
```

简易实现：

```js
// 异步返回的promise 要确定所有promise都返回了才最终resolve
// 参数可能不是promise要用promise 包一层
function all(promises) {
  return new Promise((resolve, reject) => {
    const res = [];
    let count = 0;
    if (promises.length === 0) {
      resolve(res);
      return;
    }
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((val) => {
          res[i] = val;
          count++;
          if (count === promises.length) {
            resolve(res);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
```

### Promise.race

```js
Promise.race(promises: Iterable<Promise>): Promise
```

返回一个 promise，是第一个结束(resolve/reject)的 promise。

虽然只返回第一个结束的 promise，其他跑的慢的 promise 也都会执行。

参数为空数组时，返回的 promise 的状态永远为 pending。

使用：

可以用于超时控制。

```js
function resolveAfter(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
}

function timeout(ms, promise) {
  return Promise.race([
    promise,
    resolveAfter(ms, Promise.reject('(⊙o⊙)超时了')),
  ]);
}
```

[Promise 中的三兄弟 .all(), .race(), .allSettled() - 掘金](https://juejin.cn/post/6844903912592375821#heading-7)

简易实现：

```js
function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      Promise.resolve(p).then(
        (value) => {
          resolve(value);
        },
        (error) => {
          reject(error);
        },
      );
    });
  });
}
```

### Promise.finally

在 promise 结束时，无论成功或者失败都会执行的指定的回调函数。避免了相同的语句需要在 then()和 catch()中各写一次。

### Promise.allSettled

```js
Promise.allSettled(promises: Iterable<Promise>):  Promise<Array<SettlementObject>>
```

所有 promise 都结束了，返回一个 resolve 状态的 promise，value 为 promises 的状态数组。

```js
Promise.allSettled([Promise.reject(1), Promise.resolve(2)]).then((res) =>
  console.log(res),
);
```

## 请求并发

### 为什么需要

- 一次性发送过多请求，浏览器有请求并发控制，超出并发数，后面请求会排队等候，请求等候过久，可能会超时，或者导致浏览器卡死
- 一次只发一个请求，则添加次数过多，效率很低

### 实现

```js
function poolLimit(limit, urls, callback) {
  //先并发limit 个请求，当有请求回来时，发送一个新的请求
  let index = limit; //通过闭包维护添加请求的index
  for (let i = 0; i < index; i++) {
    addRequest(i);
  }

  // 添加第几个请求，请求完成后发起新的一个请求
  function addRequest(i) {
    console.log('添加任务', i);
    request(urls[i]).then((res) => {
      callback(res);
      if (index < urls.length - 1) {
        index++;
        addRequest(index); //有完成了的，从之前添加到的索引 index 开始取新的 url 发起请求
      }
    });
  }

  //请求函数
  function request(url) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(`任务${url} 完成`);
      }, Math.random() * 2000);
    });
  }
}

const urls = [
  'bytedance.com',
  'tencent.com',
  'alibaba.com',
  'microsoft.com',
  'apple.com',
  'hulu.com',
  'amazon.com',
];
poolLimit(3, urls, (data) => console.log(data));
```

## async await

async/await 只是 promise 的语法糖。

在任何函数前面添加 async，该函数的返回值一定为 promise，不是 promise 的值将被包裹在 resolved 的 promise 中。

await 只在 async 函数内工作。

## Reference

- [Promise 中的三兄弟 .all(), .race(), .allSettled() - 掘金](https://juejin.cn/post/6844903912592375821#heading-7)
