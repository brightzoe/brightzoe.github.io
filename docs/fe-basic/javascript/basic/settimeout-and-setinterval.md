# 定时器： setTimeout 与 setInterval

## 基本含义

`setTimeout` 允许我们将函数推迟到一段时间间隔之后再执行。

`setInterval` 允许我们重复运行一个函数，从**一段时间间隔之后开始运行**，之后以该时间间隔连续重复运行该函数。

## 定时器标识符与取消定时器

`setInterval` 返回一个时间间隔 ID，该 ID 唯一地标识时间间隔，稍后可以通过 `clearInterval(ID)` 来清除，返回的 intervalID 是一个非零数值。

```js
let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // 定时器标识符

clearTimeout(timerId); // 在运行前取消了定时器
alert(timerId); // 还是这个标识符（并没有因为调度被取消了而变成 null）
```

> 在浏览器中，定时器标识符是一个数字。在其他环境中，可能是其他的东西。例如 Node.js 返回的是一个定时器对象，这个对象包含一系列方法。

`setInterval()`和 `setTimeout()`共享同一个 ID 池，并且 `clearInterval()`和 `clearTimeout()`在技术上是可互换使用的。但是，我们必须去匹配 `clearInterval()`和 `clearTimeout()`对应的 id，以避免代码杂乱无章，增强代码的可维护性。

## setInterval 的执行时间

是设定的时间间隔后才开始第一次执行，并不会立即执行，如何让他先立即执行再定时执行呢？

1. 常规方法封装一个立即执行的 `setInterval`：

   ```js
   const target = () => {
     console.log("Do something...");
   };

   target(); //先调用一次然后再setInterval
   setInterval(target, 1000);
   ```

   :::tip

   可以封装一下，在调用之前判断是否已经调用过，已经调用过先清除，再重新调用。

   ```js
   const setIntervalImmediately = (func, interval) => {
     func();
     return setInterval(func, interval);
   };

   // 定义一个全局的定时器变量timer，用于保存和清除定时器
   // 调用之前，检查定时器是否存在，存在则清除
   timer && clearInterval(timer);
   timer = setIntervalImmediately(target, 1000);
   ```

   :::

2. 让调用的函数返回它本身：

   ```js
   const target = () => {
     console.log("Do something...");
     return target;
   };

   timer && clearInterval(timer);
   timer = setInterval(target(), 1000); //这里目标函数是target函数的返回结果，会先执行一次，然后将返回值放到setInterval的队列里，很巧妙！
   ```

:::caution

1. 使用 `setImmediatelyInterval` 比较通用，比较灵活，多人合作也可以当作公用函数 utils。
2. 目标函数返回自身缺少一定的灵活性，如果想要有其他的返回值就不行了。同时 `setinterval` 与 `target` 增加了耦合性，独自开发可以使用，使用的场景受限。

:::

## 周期性调度

> [调度：setTimeout 和 setInterval](https://zh.javascript.info/settimeout-setinterval#setinterval)

1. setInterval 进行周期性调度。
2. 嵌套的 setTimeout 也可以实现周期性运行的结果。

   ```js
   let timerId = setTimeout(function tick() {
     alert("tick");
     timerId = setTimeout(tick, 2000); //第一次执行了tick 之后又挂上了第二次
   }, 2000);
   ```

   嵌套的 setTimeout 要比 setInterval 灵活得多。采用这种方式可以**根据当前执行结果来调度下一次调用**，因此下一次调用可以与当前这一次不同。

   **嵌套的 setTimeout 能够相对精确地设置两次执行之间的延时，而 setInterval 却不能。**

   - setInterval 是每间隔固定时间后，向任务队列添加一次目标函数。不会关心前一次执行耗费了多久，前一次执行是否执行完毕。
   - setTimeout 是在当前目标函数执行完毕后，才设置在间隔时间后执行下一次调用。

## setInterval 存在的问题

1. 对自己调用的代码是否报错这件事漠不关心。每间隔固定时间后，向任务队列添加一次目标函数。不会关心前一次执行耗费了多久，前一次执行是否执行完毕，前一次是否正确执行。
2. 无视函数运行时间，尤其是在异步调用中。假如在 setInterval 里添加了 ajax 调用，返回时间长于 delay 的时间，网络队列会塞满 ajax 调用。
3. 不保证一定会执行，有些调用可能直接会被忽略。 当到了要添加任务到任务队列中的时间，如果上一个目标任务还在任务队列中，此次任务将会被跳过。

> 每个 setTimeout 产生的任务会直接 push 到任务队列中；而 setInterval 在每次把任务 push 到任务队列前，都要进行一下判断(看上次的任务是否仍在队列中，如果有则不添加，没有则添加)。

::: tip 嵌套的 setTimeout 比 setInterval 使用范围更广，尤其是在异步操作，涉及 ajax 时（不考虑 websocket），无法预知多久才能有返回结果。

如果确实要保证事件“匀速”被触发，那可以用希望的延迟减去上次调用所花时间，然后将得到的差值作为延迟动态指定给 setTimeout。

:::

## 定时器是准时的吗？

:::note

指定的时间（或延迟）不能保证在指定的确切时间之后执行，而是最短的延迟执行时间。在主线程上的堆栈为空之前，传递给这些函数的回调将无法运行。

:::

## Reference

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval)
- [JS setInterval 函数从立即执行到定时执行的三种方案](https://blog.csdn.net/qq_39075021/article/details/110137215)
- [调度：setTimeout 和 setInterval](https://zh.javascript.info/settimeout-setinterval#setinterval)
- [深度解密 setTimeout 和 setInterval——为 setInterval 正名！ - 掘金](https://juejin.cn/post/6844903773622501383#heading-15)
