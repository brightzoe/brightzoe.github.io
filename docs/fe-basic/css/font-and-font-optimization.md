# 字体设置以及字体优化

## 字体设置

字体的显示效果对于一个网站的美观可读程度有很大的影响。

`font-family`先配置西文字体，数字字体，然后才是中文字体。因为西文字体一般不包含中文字体，不会对中文字体效果产生覆盖，反之中文字体对英文，数字的显示效果一般不是很好看。

后面配置 fallback,提供两种以上的字体，最后提供一种通用字体族，比如 `serif/sans-serif`(衬线字体，非衬线字体)

示例：

`font-family: -apple-system, Helvetica, Arial, 'Noto Sans SC', 'PingFangSC', 'Microsoft Yahei', sans-serif;`

## 加载自定义字体

1. @font-face 加载自定义字体：

   ```css
   @font-face {
     font-family: "Raleway";
     font-style: normal;
     font-weight: 500;
     /* 指定项目内部或网络字体，比如Google Fonts */
     src: url(/fonts/raleway.woff2) format("woff2"), url(/fonts/raleway.woff)
         format("woff");
     /*解决可能的兼容性问题，使用woff兜底*/
     /*字体不大的情况下也可以直接base64，提升加载体验*/
     font-dispaly: swap; /* 控制字体的加载方式 */
   }
   ```

   按照上面`@font-face` 定义的`font-family`就可以使用了。

2. 或者可以使用链接直接引用外部字体：

   `<link href="https://fonts.font.im/css?family=Noto+Sans+SC:100,300,400,500,700,900" as="font" crossorigin>` 由于 wall 的问题把 googleapis.com 改为 font.im。

## 控制字体的加载和替换时机

### 加载 Web Fonts 时按顺序会有三个时期：

1. 阻塞期（Block Period）。在此期间如果字体没有加载完成，那么浏览器会使用 font-family 指定的字体列表中的后备字体（Fallback）进行渲染，但是显示为空白，也就是对于用户是不可见的。在此期间字体加载完成之后才能正常显示该字体。
2. 交换期（Swap Period）。跟阻塞期类似，但是在这个时期内，它会在字体加载时，先用后备字体渲染文本并显示出来（而不是显示空白），在此期间字体加载完成之后才能正常的显示该字体。
3. 失败期（Failure Period）。如果字体加载失败，则使用后备字体显示文本。

**font-display:**

1. auto 。默认值，字体的加载过程由浏览器自行决定，不过基本上和取值为 block 时的处理方式一致。
2. block 。在字体加载前，会使用备用字体渲染，但是显示为空白，使得它一直处于阻塞期，当字体加载完成之后，进入交换期，用下载下来的字体进行文本渲染。不过有些浏览器并不会无限的处于阻塞期，会有超时限制，一般在 3 秒后，如果阻塞期仍然没有加载完字体，那么直接就进入交换期，显示后备字体（而非空白），等字体下载完成之后直接替换。
3. swap 。基本上没有阻塞期，直接进入交换期，使用后备字体渲染文本，等用到的字体加载完成之后替换掉后备字体。
4. fallback 。阻塞期很短（大约 100 毫秒），也就是说会有大约 100 毫秒的显示空白的后备字体，然后交换期也有时限（大约 3 秒），在这段时间内如果字体加载成功了就会替换成该字体，如果没有加载成功那么后续会一直使用后备字体渲染文本。
5. optional 。与 fallback 的阻塞期一致，但是没有交换期，如果在阻塞期的 100 毫秒内字体加载完成，那么会使用该字体，否则直接使用后备字体。这个就是说指定的网络字体是可有可无的，如果加载很快那么可以显示，加载稍微慢一点就不会显示了，适合网络情况不好的时候，例如移动网络。

> 一般使用 swap 为好。

`font-display`的两种使用方式：

1. 添加到 URL：

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
     rel="stylesheet" />
   ```

2. 直接在`@font-face` 中使用：

   ```css
   @font-face {
     font-family: "Raleway";
     src: url(/fonts/raleway.woff2) format("woff2");
     /* 控制字体的加载方式 */
     font-dispaly: swap;
   }
   ```

## 字体格式介绍

体积由大到小： ttf，eof， woff，woff2

ttf 与 eof 字体格式无压缩，可以使用服务器端压缩。

woff，woff2 是进行过内部压缩的，尤其是 woff2 字体的体积小。到目前 woff2 的兼容性已经很好，可以放心使用。

- 对字体文件进行转换(ttf=>woff2)：[ttf2woff2 - npm](https://www.npmjs.com/package/ttf2woff2)

## 页面字体优化

主要逻辑是如何通过加载策略来降低甚至消除 FOIT。

- 提前加载字体：`<link rel="preload" as="font">`

  预加载的字体将有更大几率在首次绘制中出现，而在这种情况下将不会发生布局偏移。

- 减少 FOIT 的显示时间。

  FOIT (Flash of Invisible Text) 不可见文本。在字体加载期间，浏览器默认不展示文本内容，FOIT 时间过长，影响页面显示体验。

  使用`font-display:swap` 可以优化这一点。

- 按需压缩字体，字体裁剪：

  1. font-spider [aui/font-spider: Smart webfont compression and format conversion tool](https://github.com/aui/font-spider) 只提取网页中用到的文字，适合页面内容是静态的不经常发生变化的，必须提供 ttf 版本字体文件。

  font-spider 的原理是直接分析本地 CSS 与 HTML 文件获取使用的字符，对于动态生成的文字没办法使用。 (配合 fontmin )

  2. font-spider-plus [allanguys/font-spider-plus: font-spider-plus（字蛛+）是一个智能 WebFont 压缩工具，它能自动分析出本地页面和线上页面使用的 WebFont 并进行按需压缩。](https://github.com/allanguys/font-spider-plus)

  利用 puppeteer 来将本地构建后的 web 包放到 headless 模式下进行指定页面的渲染，将渲染后的完整 html 内容先持久化到本地，进而再使用 font-spider 达到适应 SPA 项目的目的。

- 内联字体，将字体文件直接变成 base64 编码，可以避免异步加载字体时的 FOIT ，FOUT 。
  ```css
  @font-face {
    font-family: "Samplefont";
    src: url("data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAHyoABMAAAAA4XQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABG…")
      format("woff2");
  }
  ```
- 使用 Service Worker 进行缓存字体。 Service Worker 是浏览器在后台独立于网页运行的、用 JavaScript 编写的脚本。一般与 PWA 一起提起。暂未深入了解。

//todo: 学习如何将比较大的字体文件，分包加载，以及如何放在 cdn 上。 参考 [chawyehsu/lxgw-wenkai-webfont: webfont package for the LXGW WenKai typeface](https://github.com/chawyehsu/lxgw-wenkai-webfont) 。

## Reference

- [如何优雅的选择字体(font-family) - SegmentFault 思否](https://segmentfault.com/a/1190000006110417)
- [Web 字体 font-family 浅谈 - SegmentFault 思否](https://segmentfault.com/a/1190000038284125)
- [font-family - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)
- [【微信公众号：三分钟学前端 2021-09-18】Web 性能优化：使用 CSS font-display 控制字体加载和替换](https://mp.weixin.qq.com/s/ceFNHqKCkb-F21mnJx8VIQ)
- [Ensure text remains visible during webfont load](https://web.dev/font-display/)
- [前端网页字体优化指南 - 掘金](https://juejin.cn/post/6984971905069482021#heading-3)
- [【前端性能优化指南】5.4 - 字体的优化 - 掘金](https://juejin.cn/post/6970152547193454623)
- [web 自定义字体(@font-face)的现阶段终极解决方案来了！！ - 掘金](https://juejin.cn/post/7022897665302560782#heading-2)
- [了解 woff2 字体及转换 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2018/07/known-woff2-mime-convert/)
