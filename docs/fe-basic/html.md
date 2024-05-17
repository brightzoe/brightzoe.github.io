---
sidebar_position: 1
---

# HTML

## DOCTYPE

HTML 中的文档类型声明，告诉浏览器应该以什么样（html 或 xhtml）的方式来解析文档。

`<!DOCTYPE html>` 浏览器进入标准模式，使用 HTML5 标准来解析渲染页面。

## head

```html
<title>我是标题</title>
<link rel="icon" href="https://pbihub.cn/assets/images/logo.png" />
<base href="页面相对 URL 的根 URL " target="页面中所有链接的打开位置" />
<meta charset="UTF-8" />
<!-- HTML 文档的编码类型 -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1"
/>
<!--页面以多宽尺寸渲染，控制视口大小和比例-->
<meta name="keywords" content="关键词" />
<meta name="description" content="页面描述" />
<meta name="robots" content="index,follow" /><!--搜索引擎方式-->
```

## src 与 href

- src: 对资源的引用，指向的内容会嵌在当前标签所在的位置。比如请求 js 脚本，一般情况下当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载，执行完毕。
- href: 表示超文本引用，一般指向一些网络资源，建立和当前元素的链接关系，不会停止对当前文档的处理。

## HTML 语义化

根据内容的结构，选择合适的标签，指用正确的标签做正确的事。

优点：

- 利于搜索引擎爬虫爬取信息，增强 SEO。
- 对开发者友好，提升可读性，结构更加清晰，便于维护。

常见语义化标签：

header nav main footer section

## script 标签 defer 与 async 属性

两个属性只对外部脚本有效。

script 标签的默认行为，是 DOM 解析到此处时，浏览器会立即请求并执行，堵塞 DOM 后续内容的解析。

async：加载时不阻塞后续内容解析，并行进行 HTML 解析与 script 内容请求，script 请求完毕后立即开始执行，此时如果 HTML 还未解析完成，会阻塞后续 HTML 解析。多个 async 的执行顺序先后不能保证，谁的请求先回来谁就先执行。

defer：并行进行 HTML 解析与 script 的请求，到整个 HTML 加载完成后才会进行 script 执行，且多个 defer 的执行顺序可以保证。

了解更多：[**script 标签的使用**](/docs/fe-basic/attributes-and-usage-of-the-script-tag)

## load 事件

onLoad 在整个页面及所依赖资源加载完成后触发。用于检测完全加载的页面。

DOMContentLoaded 事件：html文档完全解析，且所有延迟脚本（defer script/type = module）执行完毕后触发。

## img

`alt`备用文本：网络错误，图片加载失败时显示的文本。

`srcset`响应式图像，在不同分辨率的屏幕加载不同的图片资源。

```html
<img
  src="image-128.png"
  srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w"
  sizes="(max-width: 360px) 340px, 128px"
/>
```

## SVG 与 Canvas

SVG

- 不依赖分辨率
- 支持事件
- 适合大型区域

Canvas

- 依赖分辨率
- 不支持事件
- 不适合渲染文本
- 适合密集型应用：游戏

## 离线存储

创建 manifest.json 文件
