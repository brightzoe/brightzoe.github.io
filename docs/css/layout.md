# 布局


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
