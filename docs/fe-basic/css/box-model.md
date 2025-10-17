---
sidebar_position: 1
description: css box-model
keywords: [css, box-model]
---

# 盒模型

从外到内：`margin-box`,`border-box`,`padding-box`,`content-box`。

`margin` 可以为负值，`padding` 不能为负值。

`background-color` 会充满 `content`，`padding`，`border`。

标准盒模型和 IE 盒模型：标准盒模型`box-sizing` 默认为`content-box`，而 IE 盒模型`box-sizing` 默认为`border-box`。

> 若不声明 DOCTYPE 类型，IE 浏览器会将盒子模型解释为 IE 盒子模型.

- `box-sizing: content-box` : 设置的 `width`，`height` 为 `content-box` 的宽高。
- `box-sizing: border-box` : 设置的 `width`，`height` 为 `border-box `的宽高。(`content`+`padding`+`border`)

## 获取盒模型对应的宽和高

1. `element.offsetWidth/offsetHeight` 包括高度（宽度）、内边距和边框，不包括外边距。最常用，兼容性最好。
2. `element.getBoundingClientRect().width/height` 得到最终渲染后的宽和高，大多浏览器支持，IE9 以上支持。除此外还可以取到相对于视窗的上下左右的距离。
3. `window.getComputedStyle(element).width/height` 得到最终渲染后的宽和高，多浏览器支持，IE9 以上支持。
4. `element.style.width/height` 只能取到行内样式的宽和高，style 标签中和 link 外链的样式取不到。

## 块元素垂直格式化

### 边框合并

边框合并：如果一个包含块高度为 auto, 没有 border，padding，且只有块级子元素，其默认高度为最高块级子元素的边框边界到最低块级子元素边框，也就是说不包含子元素上下的 margin, 子元素 margin 会成为包含块 margin。

边框不合并：但是如果包含块有 padding 或 border， 则包含子元素上下的 margin， 是从最高子元素的上外边距边界到最低子元素下外边距边界的距离。如果子元素 margin 为负，包含块高度越来越小，但最低为 0, 不会为负值。

### 外边距重叠问题

在 CSS 中，两个或多个毗邻（父子元素或兄弟元素）的普通流中的块元素垂直方向上的 margin 会发生叠加。这种方式形成的外边距即可称为外边距叠加 (collapsed margin)。

叠加后的计算:

    两个盒子相邻，两个正 margin 重合，取其中最大的 margin 为合并后共用的 margin.

    两个盒子相邻，两个负 margin 重合，取其中绝对值最大的 margin 为合并后共用的 margin.

    两个盒子相邻，两个正负 margin 重合，取正负相加的值为合并后共用的 margin.

解决 margin 重叠问题： 创建 BFC，或通过对父元素建立 border，padding，或者间隔可以使外边距不合并。

- [CSS 使用 BFC 阻止 margin 合并](https://codepen.io/SHERlocked93/pen/eVOevN)

> 水平方向 margin 不会合并，左右 margin 会紧挨着排列

### BFC 块级格式化上下文

概念： 块级格式化上下文。自身形成一个布局单元：布局此元素内部时不用考虑其外部，可以理解为完全隔离的独立容器，容器里面的元素不会在布局上影响到外面的元素。

创建 BFC：

- html/body 元素
- overflow 值不为 visible 的块元素 hidden/auto/scroll
- float:（元素的 float 不是 none）
- position:（position 不是 static/relative） absolute/fixed
- display 值为 flow-root 的元素： 成为块级元素，并创建 BFC
- display:inline-block/table-cell/table

[创建 BFC](https://codepen.io/brightzoe/pen/LYjVbee)

使用场景：

- 清除浮动
- 解决外边框折叠
- 布局 子元素设置浮动的高度塌陷问题

  BFC 元素的子元素即使是 float，也会参与父元素高度计算。

  浮动元素一般不参与父元素高度计算，如果给父元素创建了 BFC,浮动元素的高度也会参与父元素高度计算，解决“高度塌陷”的问题。 BFC 元素不会与浮动的元素发生重叠。

- 两栏自适应布局 float + BFC

  ```html
  <style>
    .left {
      width: 100px;
      height: 200px;
      background: red;
      float: left;
    }
    .right {
      height: 300px;
      background: blue;
      overflow: hidden;
    }
  </style>
  <div class="left"></div>
  <div class="right"></div>
  ```

## Reference

- [快速了解 CSS display:flow-root 声明 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2020/05/css-display-flow-root/)
- [CSS 中重要的 BFC - 掘金](https://juejin.cn/post/6844903641485148173#heading-8)
- [CSS 使用 BFC 阻止 margin 合并](https://codepen.io/SHERlocked93/pen/eVOevN)
