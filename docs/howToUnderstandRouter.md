# 对路由的理解

## 路由的历史

1. 后端路由： 后端路由匹配，拼接模板，返回完整的 HTML，浏览器直接解析展示。服务器渲染。
   缺点：每次不同的 URL 都会访问服务器，没有合理利用缓存，对服务器压力增大，耦合性变重，用户体验差，代码维护也变差。
   1998 年提出的 Ajax，实现异步加载，页面交互不用刷新页面，用户体验提升。
   单页应用页面交互无刷新，页面跳转业务刷新，前端路由的退出，是为了配合单页面应用跳转。
2. 前端路由
   优点：页面不完全刷新就可以切换视图，URL 变了，也不需要重新加载，用户体验接近原生 APP.
   缺点：但页面开发，服务器端的 HTML 是不完整的，通过 JS 进行的动态 DOM 拼接，渲染速度会变慢，也不利于 SEO。
   没有复杂交互，SEO 要求严格的网站，更适合 SSR。

## 核心原理

- 路由描述 URL 与 UI 的映射关系，是单向的映射关系，即 URL 变化如何影响 UI 的变化。

### 前端路由：

原理：检测 URL 变化，截获 URL 地址，解析匹配路由规则，更新 UI。
分类： 1. hash 路由：URL 中有#，即哈希值，不好看，但兼容性高 2. browser 路由：不带#，好看，但部分浏览器不支持，需要后端服务器支持。
在 vue 和 react 中，把两种路由定义成两种模式，hash 模式与 history 模式。

### hash 原理：

hash 值指的 URL 中锚点，用来做页面定位，对应 DOM id，在 HTML5 的 history 特性前，都是通过监听 hash 值实现前端路由.利用 hashchange 事件,操作 dom。
相关特点：

    1. hash 值是网页的一个标志点，与 HTTP 请求无关，对后端没有影响。
    2. HTTP 请求不包含 hash,hash 改变不触发页面重载
    3. hash 改变会改变浏览器历史记录
    4. hash 改变会触发 window.onhashchange 事件(pushState 不会触发 hashchange)

如何改变 hash 值：

    1. a 标签 `<a href="#footer"></a>`
    2. js window.location.hash = "gg"
    3. 浏览器的前进后退 history.back(),history.forward(),history.go(1)

### History 原理

浏览器的历史记录，类似于栈，先进后出，你可以自由前进后退。浏览器的历史记录，通过history对象实现。URL的每次改变，包括hash的变化，都会形成一条历史记录。
 相关方法：
  - history.length
  - history.back()/go()/forward()
  - pushState(state,title,URL):页面不加载，不刷新
    state：用于存储该 URL 对应的状态对象，可以通过 history.state 获取
    title：标题，目前浏览器并不支持
    URL：定义新的历史 URL 记录，需要注意，新的 URL 必须与当前 URL 同源，不能跨域
  - replaceState()替换当前页面历史记录，history.length不改变
  - window.onpopstate事件




reference:

1. [SPA 路由三部曲之核心原理](https://juejin.cn/post/6895882310458343431#heading-0)
