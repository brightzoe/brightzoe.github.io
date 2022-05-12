# 对路由的理解

## 为什么产生前端路由

在前面使用后端路由的时代，渲染页面时 DOM 直出，后端返回完整的 HTML。历史的车轮滚滚向前，前端发展到组件化，模块化的时代，目前使用的优秀前端框架(React 、 Vue 、 Angular 等)，都是单页面应用框架，通过 JS 渲染页面。

### 解决了什么问题

解决在单页面网站中，通过切换浏览器地址路径，来匹配相对应的页面组件，实现页面内容的切换。前端控制页面的切换，而不需要向后端请求页面。前端更多的负责了展示相关的内容，减少了向后端的请求，节约资源，减小了服务器的压力。

![](https://s2.loli.net/2022/03/05/DJ3zv4mXkif2NeQ.png)

图片来自 [谈谈对前端路由的理解](https://juejin.cn/post/6917523941435113486#heading-0)

> 拓展： 无刷新切换页面，所以前端框架中每个组件都有自己的生命周期，来在切换到当前页面，切换走等等的时候做一些事情。

## 路由的历史

后端路由

- 是什么：后端路由匹配，拼接模板，返回完整的 HTML，浏览器直接解析展示。服务器渲染。

- 缺点：每次不同的 URL 都会访问服务器，没有合理利用缓存，对服务器压力增大，耦合性变重，用户体验差，代码维护也变差。

1998 年提出的 Ajax，实现异步加载，页面交互不用刷新页面，用户体验提升。单页应用页面交互无刷新，页面跳转业务刷新，前端路由的推出，是为了配合单页面应用跳转。

前端路由

- 优点：页面不完全刷新就可以切换视图，URL 变了，也不需要重新加载，用户体验接近原生 APP。

- 缺点：但页面开发，服务器端的 HTML 是不完整的，通过 JS 进行的动态 DOM 拼接，渲染速度会变慢，也不利于 SEO。没有复杂交互，SEO 要求严格的网站，更适合 SSR。

## 核心原理

路由描述 URL 与 UI 的映射关系，是单向的映射关系，即 URL 变化如何影响 UI 的变化。

### 前端路由

原理：检测 URL 变化，截获 URL 地址，解析匹配路由规则，更新 UI。

分类：

1. hash 路由：URL 中有#，即哈希值，不好看，但兼容性高,兼容 IE 8 ，不过 2021 年了基本不存在兼容性问题了。
2. browser 路由(history 模式)：不带#，好看，但部分浏览器不支持，需要后端服务器支持。

在 vue 和 react 中，把两种路由定义成两种模式，hash 模式与 history 模式。

### hash 原理

- window.Location 对象

  ![location](https://i.loli.net/2021/07/16/u67A4ixONwfjKbt.png)

hash 值指的 URL 中锚点，用来做页面定位，对应 DOM id，在 HTML5 的 history 特性前，都是通过监听 hash 值实现前端路由.利用 hashchange 事件,操作 dom。

相关特点：

1. hash 值是网页的一个标志点，与 HTTP 请求无关，对后端没有影响。
2. HTTP 请求不包含 hash, hash 改变不触发页面重载
3. hash 改变会改变浏览器历史记录
4. hash 改变会触发 window.onhashchange 事件(pushState 不会触发 hashchange)

> hash 改变不触发页面重载

如何改变 hash 值：

1. a 标签 `<a href="#footer"></a>`
2. js `window.location.hash = "gg"`
3. 浏览器的前进后退 history.back(),history.forward(),history.go(1)

### History 原理

- window.history - Html5 的特性

![history](https://i.loli.net/2021/07/16/5I4JETHks2qgdMB.png)

浏览器的历史记录，类似于栈，先进后出，你可以自由前进后退。浏览器的历史记录，通过 history 对象实现。URL 的每次改变，**包括 hash 的变化**，都会形成一条历史记录。

相关方法：

- history.length
- history.back()/go()/forward()
- pushState(state,title,URL):页面不加载，不刷新

  state：用于存储该 URL 对应的状态对象，可以通过 history.state 获取

  title：标题，目前浏览器并不支持

  URL：定义新的历史 URL 记录，需要注意，新的 URL 必须与当前 URL 同源，不能跨域

- replaceState(): 替换当前页面历史记录，history.length 不改变
- window.onpopstate 事件

### 监听 URL 改变

```js
//hashchange:只能监听 url hash 的变化 location.hash
window.addEventListener("hashchange", function (e) {
  console.log(e);
});

//popstate:
//监听点击浏览器的前进后退，以及 history.back()/go()/forward()
//监听不到: history.pushState() 和 history.replaceState()
window.addEventListener("popstate", function (e) {
  console.log(e);
});
```

`<a href="/page1">page1</a>`,history 模式下，a 标签的点击导致 URL 的切换不会被 popstate 事件监听到。 如果希望被监听，可以覆盖 a 的点击事件，通过点击 a，调用 history api 实现。

> [router 实现](https://github.com/brightzoe/Playground/tree/master/router)

### 一些相关的问题

- hash，history 在浏览器中刷新页面，会不会到服务器？ 重定向怎么处理

  history 路由的情况下，刷新页面，会根据实际的 URL 向服务器发请求。

  hash 路由，hash 值不会发送到服务器。

## Reference

- [SPA 路由三部曲之核心原理](https://juejin.cn/post/6895882310458343431#heading-0)
- [Location - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Location)
- [History - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/History)
- [谈谈对前端路由的理解](https://juejin.cn/post/6917523941435113486#heading-0) - 包含如何实现两种模式的路由
