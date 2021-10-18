# 盒模型

# 盒模型

从外到内：margin-box,border-box,padding-box,content-box.

margin 可以为负值，padding 不能为负值。

background-color 会充满 content,padding,border.

标准盒模型和 IE 盒模型：`box-sizing` 默认为`content-box`

> 若不声明 DOCTYPE 类型，IE 浏览器会将盒子模型解释为 IE 盒子模型.

- `box-sizing: content-box` : 设置的 width,height 为 content-box 的宽高。
- `box-sizing: border-box` : 设置的 width,height 为 border-box 的宽高。(content+padding+border)

## 获取盒模型对应的宽和高

（1）`dom.style.width/height` 只能取到行内样式的宽和高，style 标签中和 link 外链的样式取不到。

（2）`dom.currentStyle.width/height` （只有 IE 兼容）取到的是最终渲染后的宽和高

（3）`window.getComputedStyle(dom).width/height` 同（2）但是多浏览器支持，IE9 以上支持。

（4）`dom.getBoundingClientRect().width/height` 也是得到渲染后的宽和高，大多浏览器支持。IE9 以上支持，除此外还可以取到相对于视窗的上下左右的距离。

（5）`dom.offsetWidth/offsetHeight` 包括高度（宽度）、内边距和边框，不包括外边距。最常用，兼容性最好。

## 外边距重叠问题

在 CSS 中，两个或多个毗邻（父子元素或兄弟元素）的普通流中的块元素垂直方向上的 margin 会发生叠加。这种方式形成的外边距即可称为外边距叠加 (collapsed margin)。

叠加后的计算:

    两个盒子相邻，两个正 margin 重合，取其中最大的 margin 为合并后共用的 margin.

    两个盒子相邻，两个负 margin 重合，取其中绝对值最大的 margin 为合并后共用的 margin.

    两个盒子相邻，两个正负 margin 重合，取正负相加的值为合并后共用的 margin.

解决 margin 重叠问题： 创建 BFC

## BFC 块级格式化上下文

概念： 块级格式化上下文。自身形成一个布局单元：布局此元素内部时不用考虑其外部，可以理解为完全隔离的独立容器，容器里面的元素不会在布局上影响到外面的元素

规则：

1. BFC 垂直方向

创建 BFC：

- overflow 值不为 visible 的块元素
- 浮动元素（元素的 float 不是 none）
- 定位元素（position 不是 static/relative)
- display 值为 flow-root 的元素： 成为块级元素，并创建 BFC

使用场景：

[创建 BFC](https://codepen.io/brightzoe/pen/LYjVbee)

- 清除浮动
- 解决边框合并
- 布局
  BFC 元素的子元素即使是 float,也会参与父元素高度计算。
  
  浮动元素一般不参与父元素高度计算，如果给父元素创建了 BFC,浮动元素的高度也会参与父元素高度计算。

## Reference

1. [快速了解 CSS display:flow-root 声明 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2020/05/css-display-flow-root/)
