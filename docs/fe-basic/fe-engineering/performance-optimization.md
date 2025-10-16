# 性能优化

对用户来说，性能的好坏体现在是否有明显的掉帧卡顿或者操作延迟，首屏加载时间最好控制在 3s 内。

## 如何衡量一个项目/网站的性能

1. Google Lighthouse 工具。

Lighthouse 是一个开源的自动化工具，用于改进网络应用的质量。有对应 chrome extension 使用参考：https://juejin.cn/post/6950855971379871757

- First Paint 第一个像素绘制到屏幕的时间
- First Contentful Paint 渲染出首个文本/首张图片的时间

  测量**加载**性能，最好在 2.5s 内。

  ```js
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      console.log(entry);
    });
  });
  observer.observe({ type: 'paint', buffered: true });
  ```

- Time to Interactive 可交互时间。大部分可视区域的事件都可以操作
- Total Blocking Time ：= TTI - FCP
- Largest Contentful Paint 视口中可见的最大图像或文本块的渲染时间

  ```ts
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log(lastEntry);
  });
  observer.observe({ type: 'largest-contentful-paint', buffered: true });
  ```

- Cumulative Layout Shift 布局偏移分数

[如何使用 Lighthouse 性能检测工具 - 掘金](https://juejin.cn/post/6950855971379871757#heading-6)

2. https://www.webpagetest.org/

## 相关指标

- 首屏时间： 从浏览器输入地址并回车后到首屏内容渲染完毕的时间。可以使用performance.timing 的 domContentLoadedEventEnd - fetchStart
- 白屏时间：从输入地址回车后到页面出现第一个元素的时间。FP
- 可操作时间： 点击事件有反应。window.DOMContentLoaded
- 总下载时间： window.onload

## 定位问题

1.  React：Profiler，识别出应用中渲染较慢的部分。 除了相关 api，在 react-devtools 也有。

2.  window.performance

    timing 属性 包含了网络、解析等一系列的时间数据。

    - DNS 查询耗时 = domainLookupEnd - domainLookupStart
    - TCP 链接耗时 = connectEnd - connectStart
    - request 请求耗时 = responseEnd - responseStart
    - 解析 dom 树耗时 = domComplete - domInteractive
    - 白屏时间 = domloading - fetchStart
    - domready 可操作时间 = domContentLoadedEventEnd - fetchStart
    - onload 总下载时间 = loadEventEnd - fetchStart

    使用 performance.mark 打点测量时间

    ```js
    performance.mark('cal-start');
    // 模拟耗时任务
    for (let i = 0; i < 1000000; i++) {}
    performance.mark('cal-end');
    // 该 measure 的名字：my-cal
    // measure 开始的时间点：cal-start
    // measure 结束的时间点：cal-end
    performance.measure('my-cal', 'cal-start', 'cal-end');
    ```

    [你的页面为什么慢，Performance Timeline 简介 - 掘金](https://juejin.cn/post/6844904020109164552#heading-5)

3.  NetWork 面板

## 加载网站全过程

- DNS 解析
  - 减少解析次数或者把解析前置：浏览器DNS缓存和DNS prefetch
- TCP 连接
  - 长连接、预连接
- HTTP 请求

  - 减少请求次数：长连接、预连接、缓存、CDN
  - 减小请求体积：图片压缩、gzip、base64
  - 请求慢：CDN

  :::tip 资源的压缩与合并
  通常由构建工具实现，见下方webpack的处理。

  - 减少打包时间
  - 减小打包体积

    HTTP压缩：内置到网页服务器和客户端中以改进传输速度和带宽利用率的方式。最常见的HTTP压缩方式有：deflate、br、gzip。

    gzip原理：在文本文件中找出重复出现的字符串，临时替换他们，使整个文件变小。文件中重复率越高，压缩率越高。

    gzip通常由服务端实现。以服务器的压缩时间和CPU的开销为代价，省下一些传输过程中的时间开销。Webpack中的Gzip压缩才做，在构建过程中做了一部分服务器的操作，为服务器分压。

  :::

- HTTP 响应
- 渲染

## 选择合适的优化方式

- 网络层面

  - 构建策略 主要是 webpack 处理
    - 减少打包时间：缩小范围，缓存副本，定向搜索，并行构建
    - 减少打包体积：代码分割，摇树优化，按需加载，资源压缩，cdn 引入而不打包
  - 传输策略 静态资源 cdn 且放在不同域名，HTTP2 突破 tcp 连接数限制，gzip 压缩，小图转 base64
  - 缓存策略 浏览器缓存，不常变动的资源使用强缓存，缓存时间加长。频繁变动使用协商缓存 Etag
  - 图片策略 图像类型处理

- 渲染层面

  - CSS 策略 减少嵌套，避免使用通配符选择器。
  - DOM 策略 避免过多 DOM 操作，使用 DOMFragment 缓存批量化 DOM 操作
  - 阻塞策略 defer async
  - 回流重绘策略 修改类而不直接修改对应 CSS，transform 代替 top
  - 异步更新 异步修改 DOM 时包装为微任务

- 浏览器资源优先级优化

  - prefetch 预先请求并缓存未来可能使用的资源
  - dns-prefetch 优化域名解析的时间，适用于加载第三方域名资源
  - preconnect 涵盖了 DNS 查询、TLS 协商以及 TCP 握手等步骤
  - preload 提前下载的重要资源，比如关键css/影响lcp的资源

- 运行时加载：组件动态加载，图片懒加载

### 首屏优化

- 组件/路由懒加载，图片懒加载
- 图片压缩，字体优化（font-display+preload）

## webpack 优化

主要分为

- 构建速度 先定位哪里耗时长（speed-measure-webpack-plugin）
- 打包体积 先定位哪里大（webpack-bundle-analyzer）

[webpack 优化](./webpack#webpack-optimization)

## [ React 性能优化](/docs/react/design-pattern-and-best-practices#react-中的性能优化)

## 代码优化

1. 存在不必要的组件更新。--跳过不需要的组件更新，减少重新渲染。
2. 页面挂载太多不可见的组件。--选择懒加载，虚拟渲染等方式。
3. 多次设置状态，引发多次更新。--选择批量更新，debounce/throttle 优化频繁触发的函数。
4. 组件渲染阶段耗时，需要定位到具体耗时代码，考虑通过缓存优化，或者按优先级更新，先响应用户才做。
5. 有时需要预加载，提前请求资源，放在缓存里，在需要的适合读取。比如九宫格抽奖，对于图片切换的效率要求很高，或者活动动画中的每帧图片等都对交互效率要求很高。

### 组件按需加载

1. 懒加载

场景：SPA 应用中， 路由跳转后的页面，或者在用户操作后才需要展示的组件，比如复杂弹窗。

- React.lazy [代码分割 – React](https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy)
- webpack 动态导入

- 图片懒加载：[react-lazyload](https://www.npmjs.com/package/react-lazyload)
  ```js
  <LazyLoad
    placeholder={
      <img
        width="100%"
        height="100%"
        src={require('./music.png').default}
        alt="music"
      />
    }
  >
    <img
      src={item.picUrl + '?param=300x300'}
      width="100%"
      height="100%"
      alt="music"
    />
  </LazyLoad>
  ```

> 懒加载需要考虑加载态以及加载错误的处理。

2. 懒渲染

虚拟列表

### 批量更新

### 按优先级更新，及时响应操作

与批量更新相反，先响应用户行为，再完成耗时操作。

将耗时任务移动到下一个宏任务中执行，优先响应用户行为。

- [优先级更新，立即响应用户操作 - CodeSandbox](https://codesandbox.io/s/youxianjigengxinlijixiangyingyonghucaozuo-eb740?file=/src/App.js)

### 缓存优化

比如 React.memo

### 节流，防抖

[防抖和节流](/docs/fe-basic/javascript/basic/debounce-and-throttle) 优化频繁触发的回调。

input 输入搜索场景：debounce，只需响应用户的最后一次输入，无需响应用户中间输入值。

throttle 更适合需要实时响应的场景：拖拽进行放大缩小,滚动事件。实时响应用户操作场景中，如果回调耗时小，甚至可以用 requestAnimationFrame 代替 throttle。

### 添加的 setTimeout,监听事件等要及时清除。

## Reference

- [React 性能优化 | 包括原理、技巧、Demo、工具使用 - 掘金](https://juejin.cn/post/6935584878071119885#heading-10)

- [聊一聊前端性能优化](https://juejin.cn/post/6911472693405548557)
- [如何使用 Lighthouse 性能检测工具 - 掘金](https://juejin.cn/post/6950855971379871757#heading-6)
- [性能优化-思维导图](https://docs.qq.com/mind/DWnljWm52eEVjWWNE)
- [**写给中高级前端关于性能优化的 9 大策略和 6 大指标 | 网易四年实践 - 掘金**](https://juejin.cn/post/6981673766178783262#heading-6)
- [【微信公众号：量子前端 2024-05-07 12:01】前端如何体系化性能优化？](https://mp.weixin.qq.com/s/SYM7iGrUeRZ5K6LlC_0WEw)
