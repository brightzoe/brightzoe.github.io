# 布局

## 字体配置

字体的显示效果对于一个网站的美观可读程度有很大的影响。

`font-family`先配置西文字体，数字字体，然后才是中文字体。因为西文字体一般不包含中文字体，不会对中文字体效果产生覆盖，反之中文字体对英文，数字的显示效果一般不是很好看。

后面配置 fallback,提供两种以上的字体，最后提供一种通用字体族，比如 `serif/sans-serif`(衬线字体，非衬线字体)

示例：

`font-family: -apple-system, Helvetica, Arial, 'Noto Sans SC', 'PingFangSC', 'Microsoft Yahei', sans-serif;`

外部字体由于 wall 的问题把 googleapis.com 改为 font.im：

`<link href="https://fonts.font.im/css?family=Noto+Sans+SC:100,300,400,500,700,900" as="font" crossorigin>`

### 控制字体的加载和替换

@font-face 加载自定义字体：

```css
@font-face {
	font-family: "Raleway";
	font-style: normal;
	font-weight: 500;
	/* 指定项目内部或网络字体，比如Google Fonts */
	src: url(/fonts/raleway.woff2) format("woff2");
	/* 控制字体的加载方式 */
	font-dispaly: swap;
}
```

加载 Web Fonts 时按顺序会有三个时期：

1. 阻塞期（Block Period）。在此期间如果字体没有加载完成，那么浏览器会使用 font-family 指定的字体列表中的后备字体（Fallback）进行渲染，但是显示为空白，也就是对于用户是不可见的。在此期间字体加载完成之后才能正常显示该字体。
2. 交换期（Swap Period）。跟阻塞期类似，但是在这个时期内，它会在字体加载时，先用后备字体渲染文本并显示出来（而不是显示空白），在此期间字体加载完成之后才能正常的显示该字体。
3. 失败期（Failure Period）。如果字体加载失败，则使用后备字体显示文本。

font-display:

1. auto 。默认值，字体的加载过程由浏览器自行决定，不过基本上和取值为 block 时的处理方式一致。
2. block 。在字体加载前，会使用备用字体渲染，但是显示为空白，使得它一直处于阻塞期，当字体加载完成之后，进入交换期，用下载下来的字体进行文本渲染。不过有些浏览器并不会无限的处于阻塞期，会有超时限制，一般在 3 秒后，如果阻塞期仍然没有加载完字体，那么直接就进入交换期，显示后备字体（而非空白），等字体下载完成之后直接替换。
3. swap 。基本上没有阻塞期，直接进入交换期，使用后备字体渲染文本，等用到的字体加载完成之后替换掉后备字体。
4. fallback 。阻塞期很短（大约 100 毫秒），也就是说会有大约 100 毫秒的显示空白的后备字体，然后交换期也有时限（大约 3 秒），在这段时间内如果字体加载成功了就会替换成该字体，如果没有加载成功那么后续会一直使用后备字体渲染文本。
5. optional 。与 fallback 的阻塞期一致，但是没有交换期，如果在阻塞期的 100 毫秒内字体加载完成，那么会使用该字体，否则直接使用后备字体。这个就是说指定的网络字体是可有可无的，如果加载很快那么可以显示，加载稍微慢一点就不会显示了，适合网络情况不好的时候，例如移动网络。

> 一般使用 swap 为好。

使用方式：

添加到 URL：

```html
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />
```

在`@font-face` 中使用：

```css
@font-face {
	font-family: "Raleway";
	src: url(/fonts/raleway.woff2) format("woff2");
	/* 控制字体的加载方式 */
	font-dispaly: swap;
}
```

提前加载字体：`<link rel="preload" as="font">`

预加载的字体将有更大几率在首次绘制中出现，而在这种情况下将不会发生布局偏移。

- [【微信公众号：三分钟学前端 2021-09-18】Web 性能优化：使用 CSS font-display 控制字体加载和替换](https://mp.weixin.qq.com/s/ceFNHqKCkb-F21mnJx8VIQ)
- [Ensure text remains visible during webfont load](https://web.dev/font-display/)

## 搞不懂的 height

- height:100%
  写的 height 以及 overflow 的设置方式总是出问题，对 height：100% 的理解有问题。

:::note 百分比基于什么计算？

如果一个块级元素的高度是百分数，这个值是包含块高度的百分数。如果没有显式声明包含块的高度，子元素的百分比高度无效；

如果用百分数表示 margin 或 padding, 值是包含块宽度的百分数。

:::

- html,body 高度的设置：https://www.freecodecamp.org/news/html-page-width-height/

使用非绝对高度时的，如何让 `height:100%`生效，撑满整个高度？

```html
<!--从 html>body 到目标元素，全部设置`height:100%`,如下所示：  -->
<html>
	<head>
		<style>
			html,
			body {
				height: 100%;
				margin: 0;
				padding: 0;
			}
			div {
				height: 100%;
				background: red;
			}
		</style>
	</head>

	<body>
		<div>
			<p>这样这个div的高度就会100%了</p>
		</div>
	</body>
</html>
```

如果要设置全屏的高度，也可以这样：

```css
body {
	min-height: 100vh;
	width: 100%;
}
/* 注意宽度上尽量不要使用100vw,由于超过100vh的内容，出现纵向滚动条占了8px 。如果里面的元素写了100vw ,会导致横向滚动条的出现。 */
```

### 浏览器是如何计算高度和宽度的？

- 宽度
  对于一个块级元素，浏览器计算的有效宽度，会考虑浏览器窗口的打开宽度，如果不设置宽度，浏览器会自动将该元素平铺填满整个横向宽度。

- 高度
  浏览器对于高度的计算方式与宽度完全不一样。事实上，浏览器根本不计算内容的高度，除非内容超出了视窗的范围，导致出现滚动条。或者你给页面设置一个绝对高度，那么浏览器会根据 css 设置这个元素的高度。否则，浏览器的行为只会简单的让内容向下堆砌，页面的高度不会被考虑。

  如果你给一个块级元素的高度设定为百分比高度，他的百分比是根据父元素高度来计算的。如果父元素元素没有一个绝对高度，那么无法获取父元素的高度，自然无法计算自己的高度。

  各个浏览器对于 CSS 宽高的解析不完全相同。

## 水平居中，垂直居中的设置方式

## 常见布局实现

- 假设高度已知，实现三栏布局，左右均为 300px ,中间自适应

  选取方案： 浮动、绝对定位、flex,table-cell,grid

  https://codepen.io/brightzoe/pen/NWvPmJe

  :::note
  如何抉择：

  浮动： 清除浮动的问题，兼容性好。

  绝对定位：脱离文档流，下面的也要注意。快捷方便。

  flex: 没有以上两种的缺点，最好用的。

  table: 兼容性好。其中一个单元格增高时其他单元格也会跟着变化，可能不符合要求。

  grid: 可能有一定兼容性问题。

  :::

  如果高度不限，该如何？

  float 将失效，中间内容超出会从左边开始。通过创建 BFC 解决。

  grid 布局也有问题：`grid-template-rows:100%` 调整高度就可以了。

## Reference:

- 为什么你写的 height:100% 不生效？ https://segmentfault.com/a/1190000012707337
- 如何优雅的选择字体(font-family) https://segmentfault.com/a/1190000006110417
- Web 字体 font-family 浅谈 https://segmentfault.com/a/1190000038284125
- font-family MDN https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family
