# 微前端技术

近几年一些应用较多的微前端框架及实现方式：从 Single SPA ，qiankun ,Micro-app, module-federation 等。

微前端简单说就是把原来 iframe 实现的隔离机制通过js实现了一遍，背景是为了解决多个项目同时修改一套系统可能带来的管理问题。

微前端的好处在于 iframe 是完全的隔离，而微前端是可控的隔离，在某些情况下可以分享一些内容。可以使前端应用更加灵活可扩展，更好地满足业务需求。

微前端的架构一般是一个基座项目为中心，加上若干子项目组成的。子项目与子项目间是相互独立的，有些内容是可以共享的。比如组件库、公共依赖、缓存管理、权限管理。曾经的 iframe 很难做到这一点。

## 优点

- 解耦
- 技术栈无关
- 并行开发
- 独立部署

## 缺点

- 性能问题。
- 一致性。保持不同微前端应用在用户体验、设计和行为上的一致性比较困难。
- 状态共享复杂。
- 复杂性，本身架构带来的复杂性，要管理和协调多个独立的应用。
- 安全性。

## JS沙箱

JS沙箱是一种安全机制，可以在不影响全局作用域的情况，限制外部脚本的访问和操作。

实现方式：

- 用 Proxy 对象创建一个沙箱，通过 get 和 set 方法限制不允许访问和修改地全局变量和函数。在安全地范围内通过 get 和 set 进行访问和修改。

```js
function createSandbox(window) {
  const sandbox = new Proxy(window, {
    get(target, prop) {
      // 在这里限制不允许访问的全局变量和函数
      if (
        prop === 'eval' ||
        prop === 'Function' ||
        prop === 'window' ||
        prop === 'document'
      ) {
        throw new Error(`Access to ${prop} is not allowed in this sandbox.`);
      }
      return target[prop];
    },
    set(target, prop, value) {
      // 在这里限制不允许修改的全局变量和函数
      throw new Error(
        `Modification of ${prop} is not allowed in this sandbox.`,
      );
    },
    // // 其他拦截器方法，如has、deleteProperty等
  });
}
```

- 使用iframe 实现沙箱。在一个iframe中加载外部脚本，将外部脚本隔离在一个独立的环境中，避免影响全局作用域。但是使用iframe会增加网络请求和内存占用开销。
- 使用 Worker 实现。 创建一个 Worker，在独立线程中运行JS代码，将外部脚本隔离在一个独立线程中，避免影响主线程作用域。但是需要考虑线程通信和数据同步的问题。
- 一些沙箱库，比如 sandbox.js、vm.js 等。

## CSS隔离

- qiankun 使用 Shadow DOM
- CSS Modules
- postCSS 插件
- tailwind CSS

## 实现通信机制

- 使用 CustomEvent ，派发和监听自定义事件。避免全局污染，也符合模块化的原则。
- 或者实现一个发布订阅模式，通过emit/on来派发和监听事件。
- 通过路由参数或者 localStorage 来实现。

## qiankun

基于 single-spa 的微前端解决方案，通过 js 的 import 功能动态加载子应用，然后在主应用的 dom 中挂载子应用的dom。

- CSS 隔离
  通过 Shadow DOM 实现，是浏览器内置的 web 标准技术，可以创建一个封闭的DOM结构，对外部隔离，包括CSS样式。qiankun挂载子应用，会将子应用的HTML挂载到Shadow DOM上，从而实现CSS隔离。

- 父子项目通信，通信机制

  - 观察者模式。通过 setGlobalState 设置 globalState，并通过 onGlobalStateChange 和 offGlobalStateChange 来注册和取消 观察者 函数，从而实现通信。

- 优缺点
  - 提供完备的沙箱方案，包括js沙箱和CSS沙箱。
  - 支持静态资源预加载。
  - 适配成本高，包括工程化、生命周期、静态资源路径、路由等方面。
  - 不支持vite。

## wujie

微前端框架，基于 iframe 实现。

### 应用加载机制和JS沙箱

将子应用的 js 注入到和主应用同域的 iframe 中运行。利用了 iframe 自己的沙箱机制，且有完整的 history 和location。

- 不用注册，不用改造路由，直接使用组件方式

- 一个页面可以同时激活多个子应用，iframe路由不用担心占用问题

- 天然js沙箱，不会污染主应用环境

- 不污染主应用所以销毁子应用也不需要清理

### CSS沙箱机制

通过 webcomponent 实现页面样式隔离。
子应用的实例 instance 在 iframe 内运行，dom 在主应用的 webcomponent 中，通过代理iframe的document到webcomponent，实现iframe与webcomponet的互联。

### 路由同步

劫持子应用所在 iframe 的 history，将子应用的 url 同步到主应用。刷新浏览器初始化 iframe 时，再使用子应用的 replaceState 进行同步。

## Reference

- [为 iframe 正名，你可能并不需要微前端 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000043251250)
- [你可能并不需要微前端 - 知乎](https://zhuanlan.zhihu.com/p/391248835)
- [你可能不需要微前端，但你一定会需要微内核 | moonrailgun - 兴趣使然的工程师 — 个人技术展示](http://moonrailgun.com/posts/cecd0a5c/)
- [前端面试题 - 18. 谈谈对微前端的理解 - 掘金](https://juejin.cn/post/7216635223534256187?searchId=20240411170348F0EB18B7A367EB254C3B)
- [作为面试官，为什么我推荐微前端作为前端面试的亮点？ - 掘金](https://juejin.cn/post/7252342216843296828?searchId=20240411170348F0EB18B7A367EB254C3B)
