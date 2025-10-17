# Web workers

允许一段 JavaScript 程序运行在主线程之外的另外一个线程中，独立于主线程，进行大量的计算活动，不影响主线程的 UI 渲染。计算结束之后可以把结果发送给主线程。细分为 普通的 Web Worker ，Shared Worker ,Service Worker 。

## 为什么需要

面临大量计算的场景，比如视频解码等，在主线程操作会阻塞 UI 渲染，甚至导致浏览器卡死。

## 普通 Web Worker

使用：

```js
//index.js
const worker = new Worker('./worker.js'); //必须与创建者同源
worker.postMessage({ type: 'start', payload: { count: 666 } }); // 发送信息给worker
worker.onmessage = function (messageEvent) {
  //监听 worker message
  console.log(messageEvent);
};
worker.onmessageerror = function (messageEvent) {
  //监听worker 错误信息
  console.log(messageEvent);
};
worker.terminate(); //终止 Worker 的运行

//worker.js
importScripts('./foo.js'); //引入脚本，只能是同源的
self.onmessage = (messageEvent) => {
  const { type, payload } = messageEvent.data;
  switch (type) {
    case 'start':
      // 通过 type 去区分不同的业务逻辑，payload 是传过来的数据
      const result = 0;
      // 通过一系列处理之后，把最终的结果发送给主线程
      this.postMessage(result);
      break;
  }
};
```

> 引入的 worker 文件必须同源，解决这个限制可以通过创建 Blob URL 来解决。

特点：

- worker 的 作用域与主线程的 Window 相互独立，且 worker 中获取不到 dom 元素，全局对象是 self

注意：

- 兼容性判断：window.Worker
- 不能访问 sessionStorage，localStorage

使用场景：

- 视频网站，视频解码
- 大量计算，比如设计相关的网站，解析 sketch 文件
- 解决定时器问题。由于浏览器的节能策略，对后台标签的定时器的执行进行了限制。可以使用worker中执行定时postMessage绕过定时器的节能限制。

### Shared Worker

共享 worker，可以被多个浏览器环境访问，只要页面同域即可，为跨浏览器 tab 共享数据提供了解决方案。

```js
//index.js
const sharedWorker = new SharedWorker('./sharedWorker.js'); // 参数是url，这个url必须与创建者同源
sharedWorker.port.start(); //主线程通过此方法开启 SharedWorker 之间的通信
sharedWorker.port.postMessage({ type: 'increase', payload: { count: 666 } }); //主线程给worker 发送信息

sharedWorker.port.onmessage = function (messageEvent) {
  console.log(messageEvent); //SharedWorker 的方法都在 port 上
};

sharedWorker.port.close(); //主线程通过此方法关闭 SharedWorker

// shareWorker.js
let count = 666;
importScripts('./foo.js'); //引入脚本，只能是同源的

port.onmessage = (messageEvent) => {
  const { type, payload } = messageEvent.data;

  switch (type) {
    case 'increase':
      port.postMessage(++count);
      break;
    case 'decrease':
      port.postMessage(--count);
      break;
  }
};
```

特点：

- SharedWorker 的作用域是公用的。

## Service Worker

一般用来提高离线体验，拦截网络请求，根据网络是否可用来采取适当的手段或者更新来自服务器的资源。

```js
// index.js
//注册
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('./serviceWorker.js', { scope: '/page/' })
      .then(
        function (registration) {
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope,
          );
        },
        function (err) {
          console.log('ServiceWorker registration failed: ', err);
        },
      );
  });
}

// serviceWorker.js
const CACHE_NAME = 'cache-v1';
// 需要缓存的文件
const urlsToCache = [
  '/style/main.css',
  '/constant.js',
  '/serviceWorker.html',
  '/page/index.html',
  '/serviceWorker.js',
  '/image/131.png',
];
self.oninstall = (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME) // 这返回的是promise
      .then(function (cache) {
        return cache.addAll(urlsToCache); // 这返回的是promise
      }),
  );
};
```

特点：

- 运行在 worker 上下文，不能访问 DOM
- 完全异步，不能使用同步 api 比如 xhr ，localStorage
- 只能由 HTTPS 承载。修改网络请求的能力暴露给中间人攻击很危险

使用场景：

- 后台数据同步
- 集中接受计算成本高的数据更新
- 后台服务钩子
- 性能增强，比如预取用户可能需要的资源，比如相册后面的很多图片
- 缓存资源，加快渲染速度

## Reference

- [Web Worker - 掘金](https://juejin.cn/post/7091068088975622175#heading-2)
- [前端魔法堂：可能是你见过最详细的 WebWorker 实用指南 - 掘金](https://juejin.cn/post/6906714992071213064#heading-5)
- [你不知道的 Web Workers （上）[7.8K 字 | 多图预警] - 掘金](https://juejin.cn/post/6844904198639714311#heading-3)
