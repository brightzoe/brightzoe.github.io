# zoom 和 transform：scale

都是对页面进行缩放的操作，用来做自适应浏览器窗口大小变化，或不同分辨率的适配情况。

## zoom

```css
zoom: normal; // zoom:1
zoom: 50%;
zoom: 1.5; //同百分比
```

> zoom 并不是标准属性， **Firefox 至今不支持**。IE 时代用于处理一些兼容性问题，现在可以用来适配。

- 相对于页面左上角进行缩放，xy 方向同时进行缩放。
- 是 dom 元素所占空间大小的真实改变，会导致布局变化，引发重绘。如果用来做动画，需要考虑性能问题。
- <del>受浏览器最小字号的限制：zoom 缩放后的最小字号为 12 像素。</del>（实际测试，Chrome 支持 zoom 缩放到小于 12px）
- 不支持负数。

## transform:scale

```css
transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
```

- 默认相对于元素的中心进行缩放。可以通过`transform-origin`进行设置缩放位置。
- 可以单独设置 x 方向的缩放或者 y 方向的缩放。
- 元素所占的空间大小是不变的，所以不会导致布局变化，不会引发重绘。
- 完完全全的等比缩放，包括文字不会受最小字体大小的限制。

> zoom 与 transform 共同使用，效果会叠加显示。

## 使用哪种？

如果本来就有 transform 的设置： rotate,translate 等，为了不让 scale 覆盖，可以使用 zoom 做一些静态内容的控制。

但是使用 zoom 需要注意性能问题，尤其是移动端。

// todo: 检测用户是否缩放页面？

[如何使用 JS 检测用户是否缩放了页面？ « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2021/02/js-if-page-zoom/)

## Reference

- [小 tips: zoom 和 transform:scale 的区别 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2015/11/zoom-transform-scale-diff/)
- [zoom - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/zoom)
- [小 tip: IE 下 zoom 或 Matrix 矩阵滤镜中心点变换实现 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2015/02/ie-zoom-transform-filter/)
