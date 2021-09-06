# 布局

## 字体配置

字体的显示效果对于一个网站的美观可读程度有很大的影响。

先配置西文字体，数字字体，然后才是中文字体。因为西文字体一般不包含中文字体，不会对中文字体效果产生覆盖，反之中文字体对英文，数字的显示效果一般不是很好看。

后面配置 fallback,提供两种以上的字体，最后提供一种通用字体族，比如 serif/sans-serif(衬线字体，非衬线字体)

示例：
`font-family: -apple-system, Helvetica, Arial, 'Noto Sans SC', 'PingFangSC', 'Microsoft Yahei', sans-serif;`

1. 如何优雅的选择字体(font-family) https://segmentfault.com/a/1190000006110417
2. Web 字体 font-family 浅谈 https://segmentfault.com/a/1190000038284125
3. font-family MDN https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family

## 搞不懂的 height

- height:100%
  写的 height 以及 overflow 的设置方式总是出问题，对 height：100% 的理解有问题。
- html,body 高度的设置：https://www.freecodecamp.org/news/html-page-width-height/

## 浏览器是如何计算高度和宽度的？

- 宽度
  对于一个块级元素，浏览器计算的有效宽度，会考虑浏览器窗口的打开宽度，如果不设置宽度，浏览器会自动将该元素平铺填满整个横向宽度。

- 高度
  浏览器对于高度的计算方式与宽度完全不一样。事实上，浏览器根本不计算内容的高度，除非内容超出了视窗的范围，导致出现滚动条。或者你给页面设置一个绝对高度，那么浏览器会根据 css 设置这个元素的高度。否则，浏览器的行为只会简单的让内容向下堆砌，页面的高度不会被考虑。

  如果你给一个块级元素的高度设定为百分比高度，他的百分比是根据父元素高度来计算的。如果父元素元素没有一个绝对高度，那么无法获取父元素的高度，自然无法计算自己的高度。

  各个浏览器对于 CSS 宽高的解析不完全相同。

  > 使用非绝对高度时的，如何让 `height:100%`生效，撑满整个高度？从 html>body 到目标元素，全部设置`height:100%`,如下所示：

```html
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

## 水平居中，垂直居中的设置方式

## Reference:

1. 为什么你写的 height:100% 不生效？ https://segmentfault.com/a/1190000012707337
