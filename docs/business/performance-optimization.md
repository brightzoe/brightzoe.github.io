# 性能优化

对用户来说，性能的好坏体现在是否有明显的掉帧卡顿或者操作延迟，首屏加载时间最好控制在 3s 内。

## 如何衡量一个项目/网站的性能

1. Google Lighthouse 工具。
   Lighthouse 是一个开源的自动化工具，用于改进网络应用的质量。有对应 chrome extension
   使用参考：https://juejin.cn/post/6950855971379871757

   - First Contentful Paint 渲染出首个文本/首张图片的时间
   - Time to Interactive 可交互时间。大部分可视区域的事件都可以操作
   - Total Blocking Time ：TTI-FCP
   - Largest Contentful Paint
   - Cumulative Layout Shift

2. https://www.webpagetest.org/

## 相关指标

- 首屏时间： 从浏览器输入地址并回车后到首屏内容渲染完毕的时间。
- 白屏时间：从输入地址回车后到页面出现第一个元素的时间。
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
    performance.mark("cal-start");
    // 模拟耗时任务
    for (let i = 0; i < 1000000; i++) {}
    performance.mark("cal-end");
    // 该 measure 的名字：my-cal
    // measure 开始的时间点：cal-start
    // measure 结束的时间点：cal-end
    performance.measure("my-cal", "cal-start", "cal-end");
    ```

- [你的页面为什么慢，Performance Timeline 简介 - 掘金](https://juejin.cn/post/6844904020109164552#heading-5)

## 选择合适的优化方式

- 打包体积优化：tree shaking，css/js 代码压缩，code spliting，cdn 引入第三方包
- 网络优化： 静态资源多放 cdn ，使用 http2 突破 tcp 连接数限制，gzip 压缩，小图转 base64
- 运行时加载：组件动态加载，图片懒加载
- 缓存：http 缓存

- 渲染优化
  1. 存在不必要的组件更新。--跳过不需要的组件更新，减少重新渲染。
  2. 页面挂载太多不可见的组件。--选择懒加载，虚拟渲染等方式。
  3. 多次设置状态，引发多次更新。--选择批量更新，debounce/throttle 优化频繁触发的函数。
  4. 组件渲染阶段耗时，需要定位到具体耗时代码，考虑通过缓存优化，或者按优先级更新，先响应用户才做。
  5. 有时需要预加载，提前请求资源，放在缓存里，在需要的适合读取。比如九宫格抽奖，对于图片切换的效率要求很高，或者活动动画中的每帧图片等都对交互效率要求很高。

## Webpack 优化

主要分为

- 构建速度 先定位哪里耗时长（speed-measure-webpack-plugin）
- 打包体积 先定位哪里大（webpack-bundle-analyzer）

[Webpack 优化](/docs/business/fe-engineering/webpack#webpack-优化)

## [ React 性能优化](/docs/react/design-pattern-and-best-practices#react-中的性能优化)

## 代码优化

### 组件按需加载

1. 懒加载

场景：SPA 应用中， 路由跳转后的页面，或者在用户操作后才需要展示的组件，比如复杂弹窗。

- React.lazy [代码分割 – React](https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy)
- Webpack 动态导入

- 图片懒加载：[react-lazyload](https://www.npmjs.com/package/react-lazyload)
  ```js
  <LazyLoad placeholder={<img width="100%" height="100%" src={require("./music.png").default} alt="music" />}>
    <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music" />
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

[防抖和节流](/docs/javascript/debounce-and-throttle)
优化频繁触发的回调。

input 输入搜索场景：debounce，只需响应用户的最后一次输入，无需响应用户中间输入值。

throttle 更适合需要实时响应的场景：拖拽进行放大缩小,滚动事件。实时响应用户操作场景中，如果回调耗时小，甚至可以用 requestAnimationFrame 代替 throttle。

### 添加的 setTimeout,监听事件等要及时清除。

## 使用的一些工具

- Vercel
  部署静态网站，运行 python/node/go/ruby 脚本，充当服务器。
  零配置部署，访问速度快，构建快。

## Reference

- [React 性能优化 | 包括原理、技巧、Demo、工具使用 - 掘金](https://juejin.cn/post/6935584878071119885#heading-10)

1. 聊一聊前端性能优化 https://juejin.cn/post/6911472693405548557
2. Lighthouse 如何使用 https://juejin.cn/post/6950855971379871757
3. 性能优化思维导图 https://docs.qq.com/mind/DWnljWm52eEVjWWNE
