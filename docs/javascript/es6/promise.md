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
  resolve("成功的结果"); //改变当前 promise 对象的结果
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
  }
);
```

前面 promise 的状态不改变，后面的 then 方法就不会执行。
在 then 方法中，通过 return 将返回的 promise 实例改为 fulfilled 状态。
如果在 then 方法中出现错误，会将返回的 promise 实例改为 rejected 状态。

```js
new Promise((resolve, reject) => {
  resolve("给then 的参数");
})
  .then(
    (value) => {
      console.log(value);
      return "123"; //改变这个 promise 的状态为fulfilled，给下一个promise 的参数
      // throw error 如果这里的代码出错，当前 promise 的状态就变为 rejected
    },
    (error) => {
      console.log(error);
    }
  )
  .then(
    (value) => {
      console.log(value);
    },
    (error) => {
      console.log(error);
    }
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

request("GET", "../data.json")
  .then((val) => {
    return request("GET", `../data.json`, val);
  })
  .then((val) => {
    return request("GET", `../data.json`, val);
  })
  .then((val) => {
    console.log(val);
  });
```

将现有对象转为 promise

```js
const a = Promise.resolve("foo");
// 等同于
const a = new Promise((resolve) => resolve("foo"));

const p = Promise.reject("出错了");
// 等同于
const p = new Promise((resolve, reject) => reject("出错了"));
```

## api

- Promise.all
- Promise.race
- Promise.allSettled
- Promise.any
- Promise.resolve
- Promise.reject
