## 使用 setTimeOut 与 setInterval 的注意事项

setInterval 返回一个时间间隔 ID，该 ID 唯一地标识时间间隔，稍后可以通过 `clearInterval(ID)` 来清除，返回的 intervalID 是一个非零数值.

setInterval()和 setTimeout()共享同一个 ID 池，并且 clearInterval()和 clearTimeout()在技术上是可互换使用的。但是，我们必须去匹配 clearInterval()和 clearTimeout()对应的 id，以避免代码杂乱无章，增强代码的可维护性。

:::note
指定的时间（或延迟）不能保证在指定的确切时间之后执行，而是最短的延迟执行时间。在主线程上的堆栈为空之前，传递给这些函数的回调将无法运行。
:::

## Reference

1. [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval)
