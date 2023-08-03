# 网络请求解析

## 常用请求库

我们常用的请求库，axios 居多，fetch 的占比也在增大。简单进行对比：

### axios

- 使用更简单
- 拦截器： 请求拦截器和响应拦截器
- 浏览器支持：兼容性更好，尤其是针对低版本浏览器
- 超时设置：内置超时设置

## fetch

- 无依赖性：现代浏览器的原生 API，不需要额外的依赖
- 更灵活和底层：更精确地控制请求和响应

## fetch 的一些功能如何实现？

- 超时设置

  使用 Promise.race 来在 fetch 请求和一个定时器之间设置竞态条件，以便在达到超时时间限制时中止请求。

- 取消请求

  使用 AbortController,浏览器兼容性还是不错的。

  > [AbortController - Web APIs | MDN --- AbortController - Web API | AbortController - Web API | AbortController - Web API | AbortController - Web API MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

:::note

test admonition.

:::
