---
title: 谈谈Script 标签
---

说说`<script>`标签，通常用作嵌入或引用可执行脚本。

## script 标签的属性

### 一些属性

- src:这个属性定义引用外部脚本的 URI，这可以用来代替直接在文档中嵌入脚本。指定了 src 属性的 script 元素标签内不应该再有嵌入的脚本。

- type:该属性定义 script 元素包含或 src 引用的脚本语言(text/javascript)。如果 type 属性为 module，代码会被当作 JavaScript 模块。

- crossorigin:默认不使用 CORS。"anonymous"配置文件请求不必设置凭据标志。"use-credentials"设置凭据标志，意味着出站请求会包含凭据。

  ![](https://i.loli.net/2021/06/29/Est72uLzZgnA9Qp.png)

:::tip 关于跨域

通过 script 标签直接引入的外部资源，是不受跨域限制的。通过 html 原始标签的 src 属性引入也一样，比如（img/video/script），不受跨域限制。

同时，通过 script 引入的其他域的资源，会自动执行，而不能拿到对应的资源源码。

默认情况下（即未指定 crossOrigin 属性时），CORS 根本不会使用，网络请求的请求头是没有 origin 字段的。

:::

- integrity:允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI,Subresource Integrity）。可以用于确保内容分发网络（CDN, Content Delivery Network）不会提供恶意内容。
- type:MIME 类型，通常为`type=application/javascript`/`application/javascript`

  - `type=module`代码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。

### async 与 defer 属性

async 与 defer 属性只对外部脚本有效。

#### 普通的 script 标签加载与执行均会堵塞 DOM 解析。

浏览器对 HTML 的解析是从上到下的，遇到没有 async 或 defer 属性的 script 标签，会暂停对 HTML 的解析，去请求加载 js 的内容，加载完毕请求 JS 引擎执行该段代码，执行完毕后恢复解析 HTML。

遇到普通 script 标签时的 DOM 执行顺序图：

<img src="https://i.loli.net/2021/06/30/18pQLdCr9bFxg46.png" width="800" />

> 多个 script 标签严格按顺序执行。如果加载 js 的请求响应很慢，或者 JS 执行时间较长，会导致白屏，影响用户体验。（//TODO:浏览器对 dom 的解析过程，渲染过程）

#### 带有 async 属性的 script 标签加载不堵塞 DOM 解析，执行堵塞 DOM 解析。(异步执行)

async:并行请求，并尽快解析和执行.并行请求从而消除解析阻塞。

遇到 async 标签的 DOM 执行顺序图：

<img src="https://i.loli.net/2021/06/30/HhnVkjQDleB2GRS.png" width="800" />

> 有可能在加载 js 的时候，html 已经加载完了,如下图，就不存在堵塞 DOM 了。

<img src="https://i.loli.net/2021/06/30/KqlVkNiBPmhgzDr.png" width="800" />

> 如果存在多个 async 的时候，它们之间的执行顺序不确定，完全依赖于网络传输结果，谁先到执行谁。

> 异步脚本不应该在加载期间修改 DOM。异步脚本保证会在页面的 load 事件前执行，但可能会在 DOMContentLoaded（参见第 17 章）之前或之后。[来自红宝书]

![async](https://i.loli.net/2021/06/29/whkljaHErv38XTi.png)

#### 带有 defer 属性的 script 标签不堵塞 DOM 解析，并行加载，延迟执行。(推迟执行)

defer: 并行请求，等 HTML 加载完再执行。

遇到 defer 标签的 DOM 执行顺序图：

<img src="https://i.loli.net/2021/06/30/XjimSPQscuy9eMp.png" width="800" />

> 如果存在多个 defer script 标签，浏览器（IE9 及以下除外）会保证它们按照在 HTML 中出现的顺序执行，不会破坏 JS 脚本之间的依赖关系。

> HTML5 规范要求脚本应该按照它们出现的顺序执行，因此第一个 defer 的脚本会在第二个 defer 的脚本之前执行，而且两者都会在 DOMContentLoaded 事件之前执行（关于事件，请参考第 17 章）。不过在实际当中，推迟执行的脚本不一定总会按顺序执行或者在 DOMContentLoaded 事件之前执行，因此最好只包含一个这样的脚本。[来自红宝书]

![defer](https://i.loli.net/2021/06/29/6eGygP7tkXLOuAx.png)

#### 总结

| script 标签      | JS 执行顺序      | 是否阻塞解析 HTML                          |
| ---------------- | ---------------- | ------------------------------------------ |
| `<script>`       | 在 HTML 中的顺序 | 阻塞(加载与执行均阻塞)                     |
| `<script async>` | 网络请求返回顺序 | 可能阻塞，也可能不阻塞(并行加载，执行阻塞) |
| `<script defer>` | 在 HTML 中的顺序 | 不阻塞(并行加载，延迟执行)                 |

### 动态加载脚本

```js
let script = document.createElement('script');
script.src = 'lodash.js';
document.body.append(script);
```

默认情况下，以这种方式创建的`<script>`元素是以异步方式加载的，相当于添加了 async 属性，但 async 可能存在兼容性问题，统一动态脚本的加载行为，最好添加`script.async=false`[红宝书]

> 动态加载脚本获取的资源对浏览器预加载器是不可见的。这会严重影响它们在资源获取队列中的优先级。根据应用程序的工作方式以及怎么使用，这种方式可能会严重影响性能。要想让预加载器知道这些动态请求文件的存在，可以在文档头部显式声明它们： `<link rel="preload" src="lodash.js">`。

### 内容预加载(rel="preload")

用户十分有可能需要在当前浏览中加载目标资源，所以浏览器必须预先获取和缓存对应资源。对于这种即刻需要的资源，你可能希望在页面加载的生命周期的早期阶段就开始获取，在浏览器的主渲染机制介入前就进行预加载。这一机制使得资源可以更早的得到加载并可用，且更不易阻塞页面的初步渲染，进而提升性能。[MDN]

通过 href 和 as 属性指定需要被预加载资源的资源路径及其类型.`<link rel="preload" href="font.woff" as="font">`

### 行内代码与外部文件

最佳实践是尽可能将 JavaScript 代码放在外部文件中，原因如下：

1. 可维护性。JavaScript 代码如果分散到很多 HTML 页面，会导致维护困难。而用一个目录保存所有 JavaScript 文件，则更容易维护，这样开发者就可以独立于使用它们的 HTML 页面来编辑代码。
2. 缓存。浏览器会根据特定的设置缓存所有外部链接的 JavaScript 文件，这意味着如果两个页面都用到同一个文件，则该文件只需下载一次。这最终意味着页面加载更快。

在 SPDY/HTTP2 中，预请求的消耗已显著降低，以轻量、独立 JavaScript 组件形式向客户端送达脚本更具优势。(推荐把文件拆小)[红宝书]

### `<noscript>`元素

基本已经没有浏览器不支持`<script>`,但是对于禁用 JavaScript 的浏览器来说,仍然有用。

### 其他的注意事项

- 使用行内 JavaScript 代码时，要注意代码中不能出现字符串`</script>`,要加"\\"进行转义。HTML 中的特殊字符都要转义
- `script`标签可以加载不同域的 js 文件，不受同源策略限制，可以完成跨域，这种方式被称作 jsonp。
- 通常将所有 JavaScript 引用放在`<body>`元素中的页面内容后面。页面会在处理 JavaScript 代码之前完全渲染页面。用户会感觉页面加载更快了，因为浏览器显示空白页面的时间短了。

## Reference

- [`<script>` - HTML（超文本标记语言） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script)
- [图解 script 标签中的 async 和 defer 属性 - 掘金](https://juejin.cn/post/6894629999215640583)
- [async vs defer attributes - Growing with the Web](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)
- JavaScript 高级程序设计(第四版) - 2 .1`<script>`元素
- [Subresource Integrity - Web 安全 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity)
- [HTMLScriptElement - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLScriptElement)
- [链接类型：preload - HTML（超文本标记语言） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types/preload)
- [script crossorigin 属性 - 掘金](https://juejin.cn/post/6969825311361859598)
