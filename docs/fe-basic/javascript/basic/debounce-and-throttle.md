# 防抖和节流

- 描述防抖和节流
- 如何实现
- 使用场景

## 对概念的理解

防抖 debounce：在事件被触发了一段时间后再执行回调，如果在这段时间内又被触发，则重新计时。即单位时间内没有被触发再执行。

节流 throttle：在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

> 比较片面的理解（也有一定道理）：防抖：单位时间内只有最后一次触发有效。节流：单位时间内只有第一次触发有效。

:::note **生动的解释**

防抖：

- moba 游戏回城，在一定时间内再次点击则重新计时
- 刷卡乘公交车，一直有乘客刷卡上车，司机则不能开动，若一定 delay 后没人上车就可以走了

节流：

- moba 游戏的不停普通攻击，单位时间点击多次，只有一次生效，或者技能 cd
- 上厕所，不是喝一口水就立刻上厕所，每过一段时间才回去上厕所

:::

栗子：

- 防抖：搜索，输入关键词搜索。输入了，然后一段时间内(1s)没有再输入，执行相应操作，若 1s 内重新输入了，重新计时。

- 节流：鼠标不断点击触发，mousedown(单位时间内只触发一次)

二者共同点：

- 函数防抖和函数节流都是防止某一时间频繁触发，但是这两兄弟之间的原理却不一样。
- 函数防抖是某一段时间内只执行一次，而函数节流是间隔时间执行。

## 简单实现

```js
//debounce
//debounce(fn,1000)
function debounce(fn, delay) {
  let timer;
  return function () {
    const context = this;
    const _args = arguments;
    timer && clearTimeout(fn.id);
    timer = setTimeout(() => fn.apply(context, _args), delay);
  };
}
```

```js
//throttle(定时器标记版)
function throttle(fn, delay) {
  let timer;
  return function () {
    if (timer) {
      //已经安排上了，就不再安排了
      return;
    }
    const context = this;
    const _args = arguments;
    timer = setTimeout(() => fn.apply(context, _args), delay);
  };
}

//throttle(时间戳版)
function throttle(fn, delay) {
  let last = 0;
  return function () {
    const context = this;
    const _args = arguments;
    const now = Date.now();
    if (now - last > delay) {
      fn.call(context, _args);
      last = now;
    } else {
      console.log('时间差不满足要求,不执行');
    }
  };
}
//上面时间戳版和定时器版的节流函数的区别是，时间戳版的函数触发是在时间段内开始的时候，而定时器版的函数触发是在时间段内结束的时候。

//throttle时间戳且最后一次也要执行
function throttle(fn, delay) {
  let last, timer;
  return function () {
    const context = this;
    const _args = arguments;
    const now = Date.now();
    clearTimeout(timer);
    if (last && now < last + delay) {
      //加上这段会使单位时间内最后一次请求也执行,有没有必要是存在争议的,具体是否需要要看具体场景。
      const diff = delay - (now - last);
      timer = setTimeout(function () {
        last = now;
        fn.apply(context, _args);
      }, diff);
      //我们要限制1s中只有1个请求是有用的。假设用户1s中点了100次。按理来说，第2-100次都是无用的。但是在第100次的时候，由于执行了上面的代码块后，第100次的点击事件由于定时器操作，造成它变成有效的请求了，感觉有点违背函数节流的定义。
    } else {
      last = now;
      fn.apply(context, _args);
    }
  };
}
```

## 应用场景

### debounce

- search 搜索，用户不断输入，在一定时间没有输入后再发请求，节约请求资源。
- 登录注册等表单提交操作用户点击过快触发多次请求.
- resize 触发，由于可视区变大，我们可能需要向服务器请求更多内容来填充可视区。但可视区变大的过程中，resize 事件会被触发多次...每次触发都去请求一次的话没有必要，防抖只触发单位时间最后一次。

### throttle

- 点击事件，mousedown 单位时间只触发一次。
- 滚动事件，滑动到底部加载更多

:::note 复杂场景：

search 向后台发请求返回搜索值，与接口返回的先后顺序有关，只使用最后一次请求的返回。

:::

## Reference

- [7 分钟理解 JS 的节流、防抖及使用场景 - 掘金](https://juejin.cn/post/6844903669389885453#heading-3)
- [防抖和节流原理分析 - 掘金](https://juejin.cn/post/6844903662519599111#heading-5)
- [防抖节流场景及应用 - 掘金](https://juejin.cn/post/7018296556323340324#heading-3) 含 lodash 源码分析
