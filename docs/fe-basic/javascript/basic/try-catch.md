# try catch

try catch 用于捕获运行时错误，前提条件是代码可以执行。无法捕获编译时错误。

一般来说，try catch捕获同步代码中的错误，异步代码中的错误无法捕获。

```js
// 异步中的错误无法捕获
try {
  setTimeout(() => {
    throw new Error('err');
  }, 200);
} catch (err) {
  console.log(err);
}

// promise中的错误无法捕获
try {
  Promise.resolve().then(() => {
    throw new Error('err');
  });
} catch (err) {
  console.log(err);
}
```

Promise 中使用reject()或通过throw抛出错误会导致Promise被拒绝，此时可以通过.catch()方法捕获到错误，不能使用try catch。

```js
async function getData() {
  try {
    const rollnodata = await report1;
    console.log(rollnodata);
    const biodatas = await getnames(rollnodata[1]);
    console.log(biodatas);
    return biodatas;
  } catch (error) {
    console.log(`The error is: ${error}`);
  }
}
```

使用async 关键字声明一个异步函数，该函数是一个返回Promise并可等待的函数。await 关键字在async函数内使用，以暂停函数的执行，直到Promise被解决或拒绝。

try catch 可以捕获 async 函数中 await关键字 异步的错误。await 关键字导致函数执行暂停，等待异步返回后继续执行，并且异步操作中的错误可以被try catch 捕获。

## Reference

- [【微信公众号：量子前端 2024-04-29 10:01】面试中的try ...catch](https://mp.weixin.qq.com/s/NWgGnsV0l9KH6UE2SdIanQ)

```

```
