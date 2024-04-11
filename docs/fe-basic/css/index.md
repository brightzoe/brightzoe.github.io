# CSS

## 选择器优先级

- !important 最优先
- 内联样式

### css 选择器优先级

- 1，1，1，1 从大到小依次：
  - id 选择器
  - 类选择器/属性选择器/伪类选择器
  - 标签/伪元素选择器
  - 连接符选择器：相邻元素/后代元素/
  - 通配符选择器
  - 继承选择器 0，0，0，0

伪类： :last-chid， :hover

伪元素：::after

### 伪元素与伪类

- 伪元素： 不存在文档中。 例如：::after
- 伪类： 存在文档中。 例如： :last-child

## 可继承属性

字体属性 font-family font-weight font-size

文本属性 color line-height

可见属性 visibility

## display

display:inline 水平方向的 margin，padding 有效，垂直方向无效。

## 隐藏元素

- `display: none` 不会渲染该元素，不占据页面空间。
- `visibility: hidden` 会渲染，仍占据页面空间，不响应绑定的监听事件。
- `opacity: 0` 会渲染，占据空间，响应绑定的监听事件。
- 绝对定位到视口之外。

### display:none 与 visibility:hidden

- 是否渲染
- 修改是否会引发回流与重绘
- 是否被继承。display:none 会使他以及后代在页面都不能出现，而 hidden 对于未设置 visible 的子代继承，设置了则可以显示。

## transition 与 animation

- transition 过渡效果。需要事件触发，比如 hover，focus 等，需要设置开始效果和结束效果。
- animation 动画效果。不需要触发，设定好事件后可以自己执行。但可以设置多个关键帧（@keyframe）。

了解更多：[transform,translation](/docs/fe-basic/css/simple-anime)

## transform 与绝对定位

- transform：不触发浏览器回流和重绘，利用 GPU，效率高。
- 绝对定位： 触发回流和重绘，利用 CPU，效率低。

## [盒模型](/docs/fe-basic/css/box-model)

## 图片格式

- gif 动图，只有 256 色
- jpeg/jpg 有损压缩，色彩丰富，适合存储照片
  > 处理矢量图形和Logo等线条感强、色彩对比强烈的压缩后模糊会相当明显。不支持透明度
- png 无损压缩，支持透明度，适合大块相同颜色区域的图像
- svg 矢量图、文本文件、体积小
- webp 有损压缩，体积小
- bmp 无损，不压缩，体积大，不适合网页

## CSS Sprites

雪碧图，过时技术。将一个页面涉及到的所有图片都包含到一张大图，利用 background-repeat，background-position 实现图片的重复利用。

### 特点

- 减少网页 http 请求，提高页面性能。
- 维护麻烦，需要手动更新雪碧图，维护位置。

## 物理像素 逻辑像素

设备像素（物理像素）device pixels

设备独立像素 device independent pixels

> 一个设备独立像素里可能包含 1 个或者多个物理像素点，包含的越多则屏幕看起来越清晰。一般没有缩放的情况下，1 个 CSS 像素 等于 1 个设备独立像素。

像素密度 devicePixelRatio

> devicePixelRatio = 物理像素 / 设备独立像素。手机上像素密度（DPR）一般为 3，即一个逻辑像素（CSS 像素）=3 个物理像素

## 常见单位

- 百分比：相对父元素的百分比。
- em ：相对父元素的文本的倍数。如果父元素没有 font-size，则相对浏览器默认字体的倍数。
- rem：相对根元素的倍数。可以实现简单响应式布局。
- vw/vh/vmax/vmin

### 移动端适配

- 适配不同像素密度 媒体查询图片切换不同精度
- 适配不同屏幕大小 rem/vw 等相对单位或媒体查询

## CSS 提升性能

### 加载

- CSS 文件压缩，减小体积。
- 减少使用 @import，使用 link 效率更高。link 在页面加载时一起加载，import 在页面加载完成后再加载。

### 选择器

- 减少选择器层级
- 少用后代选择器 ，通配符选择器

### 渲染

减少页面回流与重绘。

- 少用浮动，定位

### 可维护性

- 样式与内容抽离。

## 预处理器 与 后处理器

- 预处理器： less，sass 用于预编译。

  增强 CSS 复用性。

  使用层级，循环，变量等更易于开发，易于维护。

- 后处理器：postCSS

### PostCSS

依赖各种插件转换 CSS 的工具。

- Autoprefixer ：为 css 添加特定前缀。比如浏览器相关：`:-webkit-full-screen`，解决浏览器兼容问题。
- PostCSS Preset Env：将最新 CSS 语法转换成更多浏览器支持的语法。
- CSS modules：解决全局命名冲突，命名会被编译。 PostCSS 或 css loader 都可以开启 css-modules。
- postcss-px-to-viewport-8-plugin： 移动端适配。写 px 自动转换为 vw/vh
- stylelint：检查 CSS 语法。

## 浮动

浮动元素脱离正常流，不占据空间（引起高度塌陷），吸附到父元素的左边或右边。

浮动元素可以左右移动，直到遇到另一个浮动元素或者遇到它外边缘的包含框。

浮动元素会触发 BFC。

浮动不影响块元素，只影响行内元素。

- 清除浮动 clear:left/right/both，用于块元素，使其下移到两边没有浮动元素。块元素的 border box 和浮动元素的 margin box 紧挨着。

- [float - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)

## 定位

- absolute 与 fixed

  都脱离普通文档流。

  absolute：可以设置根元素，是相对根元素的位置。以根元素的 padding 为标准进行位移。

  fixed： 相对视口的位置，不随滚动条滚动。

- sticky

  粘连定位。粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定值前为相对定位，之后为固定定位,固定定位相对于他的包含块。
