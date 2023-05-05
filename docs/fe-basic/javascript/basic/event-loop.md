# 事件循环

js 单线程执行，在执行时将不同的函数执行上下文压入执行栈来保证代码有序执行。

- 首先执行同步代码，属于宏任务
- 执行完所有同步任务后，执行栈为空，查询是否有异步任务
- 执行所有的微任务
- 执行完所有的微任务后，有必要会渲染页面
- 下一轮 Event Loop

## 为什么需要事件循环

浏览器的当前渲染进程下的 JS 引擎线程是单线程的。如果有的任务耗时很长，后一个任务就需要一直等待，产生阻塞。我们希望协调事件，渲染，网络等执行顺序。

## 执行栈

存储函数调用，栈顶是最近执行的上下文，先进后出。

同步代码的执行：

一个方法执行会向执行栈中加入这个方法的执行环境（执行上下文），在这个执行环境中还可以调用其他方法，甚至是自己，其结果不过是在执行栈中再添加一个执行环境。这个过程可以是无限进行下去的，除非发生了栈溢出，即超过了所能使用内存的最大值。

## 任务队列

js 引擎遇到一个异步事件后并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务。当一个异步事件返回结果后，js 会将这个事件加入与当前执行栈不同的另一个队列，我们称之为任务队列。

被放入任务队列不会立刻执行其回调，而是等待当前执行栈中的所有任务都执行完毕， 主线程处于闲置状态时，主线程会去查找任务队列是否有任务。如果有，那么主线程会从中取出排在第一位的事件，并把这个事件对应的回调放入执行栈中，然后执行其中的同步代码...，如此反复，这样就形成了一个无限的循环。 --事件循环

### 微任务和宏任务

任务队列不止一个，根据任务的种类分成微任务和宏任务。

- 宏任务： script 脚本执行，setTimeout，setInterval，setImmediate，IO 操作，UI 渲染等。
- 微任务：promise.then(async await)，promise.catch，node 的 process.nextTick，new MutationObserver 等

### 事件循环的过程

执行栈执行完同步代码，会先检查微任务队列是否有任务会执行，如果没有再去检查宏任务队列。微任务在当前循环就会执行，而宏任务会到下一次循环。微任务队列只有一个，而宏任务队列可能有多个。

#### 定时器误差

事件循环中总会先执行同步代码，才会去任务队列取任务。

执行 setTimeout ，浏览器会启动新的定时器线程计时，计时结束后触发定时器事件，将回调存入宏任务。如果此时主线程同步代码耗时长为执行完，或总产生微任务，则会影响宏任务的执行。

## async await 执行顺序

浏览器执行顺序发生了改变： [async await 执行顺序](https://juejin.cn/post/6844904079353708557#heading-3)

async 隐式返回 Promise 作为结果的函数，那么可以简单理解为，await 后面的函数执行完毕时，await 会产生一个微任务(Promise.then 是微任务)

```js
console.log("script start");
async function async1() {
  await async2(); //同步
  console.log("async1 end"); //微任务
}
async function async2() {
  console.log("async2 end");
}
async1();
setTimeout(() => {
  console.log("timeout"); //宏任务
}, 0);
new Promise((resolve) => {
  console.log("promise"); //同步
  resolve();
})
  .then(function () {
    console.log("promise1"); //微任务
  })
  .then(function () {
    console.log("promise2"); //微任务
  });
console.log("script end");
// script start => async2 end => Promise => script end => async1 end => promise1 => promise2 => setTimeout
```

![](https://s2.loli.net/2022/05/11/urd1blqZXF8cTsD.png)

```js
console.log("script start");
async function async1() {
  await async2(); //这里执行完就跳出当前函数，先执行其他函数
  console.log("async1 end"); //控制权转移，最后注册的微任务
}
async function async2() {
  //里面有异步
  console.log("async2 end");
  return Promise.resolve().then(() => {
    console.log("async2 end1");
  });
}
async1();
setTimeout(function () {
  console.log("setTimeout");
}, 0);

new Promise((resolve) => {
  console.log("Promise");
  resolve();
})
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });
console.log("script end");
```

## NodeJS 的事件循环

JS 引擎本身不实现事件循环，是由它的宿主实现的，Node.js 的 Event Loop 是基于 libuv。

> libuv 是一个多平台支持库，主要用于异步 I/O

Node 中的事件循环也是循环＋任务队列的流程，以及微任务优先于宏任务的大概机制。不过与浏览器中的也有一些差异，并新增了一些任务类型和任务阶段。

### 异步方法

- 文件 I/O 异步加载本地文件
- setImmediate() 在某些同步任务完成后立马执行
- process.nextTick() 在某些同步任务完成后立马执行
- server.onclose,socket.on('close')

### 事件循环的各个阶段

- timers 定时器阶段。执行所有 setTimeout setInterval 回调。
- pending callback 待定回调阶段。执行延迟到下一个循环迭代的 I/O 回调。
- poll 轮询阶段。检索新的 I/O 事件，执行 I/O 回调。进入 Libuv 引擎后首先进入此阶段。
- check 检测阶段。 执行 setImmediate 回调。
- close callback 关闭的回调函数阶段。关闭回调执行。`socket.on('close', ...)`

上面每个阶段都会执行完当前阶段的任务队列，然后执行当前阶段的微任务队列，当前阶段的微任务都执行完才会进入下一个阶段。 ![](https://s2.loli.net/2022/05/11/n4XrUmpL6uPckVF.jpg)

- [Node.js 事件循环，定时器和 process.nextTick() | Node.js](https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/)

### setTimeout & setImmediate

setImmediate 被设计为一旦在当前轮询阶段完成，就执行这个脚本。

### process.nextTick()

nextTick 比较特殊，它存有自己的队列，独立于 Event Loop，无论 Event Loop 处于何种阶段，都会在阶段结束的时候清空 nextTick 队列。

process.nextTick() 优先于其他的微任务（microtask）执行。

## Reference

- [面试题：说说事件循环机制(满分答案来了) - 掘金](https://juejin.cn/post/6844904079353708557#heading-1)
- [详解 JavaScript 中的 Event Loop（事件循环）机制 - 知乎](https://zhuanlan.zhihu.com/p/33058983)
