# CSS

## 搞不懂的 height

- height:100%
  写的 height 以及 overflow 的设置方式总是出问题，对 height：100% 的理解有问题。

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

## 水平居中，垂直居中的设置方式

## reference:

1. 为什么你写的 height:100% 不生效？ https://segmentfault.com/a/1190000012707337