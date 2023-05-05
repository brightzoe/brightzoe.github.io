# 项目中的 CSS 方案

迄今为止，我是用的 CSS 方案，都是语义化的命名，加上 sass/less 的使用。

## Sass/Less

在个人项目中，习惯使用 less，公司项目中中一般使用 sass(与团队保持一致)。

最多使用的功能点:

- 嵌套语法
- 全局变量

偶尔也会用循环来处理一些多个类似元素的情况。而其他语法，在刚开始看文档的时候简单实践过，但基本不太使用。

## BEM

CSS 方案的一种方法论 [BEM — Block Element Modifier](http://getbem.com/introduction/)

- Blocks, Elements and Modifiers

在 HTML 中添加更多的类，这样就可以直接针对它们，保持选择器的低特异性。 ![](https://s2.loli.net/2021/12/08/eibYSCRELKdt326.png)

## PostCSS

依赖各种插件转换 CSS 的工具。

- Autoprefixer ：为 css 添加特定前缀。比如浏览器相关：`:-webkit-full-screen`，解决浏览器兼容问题。
- PostCSS Preset Env：将最新 CSS 语法转换成更多浏览器支持的语法。
- CSS modules：解决全局命名冲突，命名会被编译。 PostCSS 或 css loader 都可以开启 css-modules。
- postcss-px-to-viewport-8-plugin： 移动端适配。写 px 自动转换为 vw/vh
- stylelint：检查 CSS 语法。

## Tailwind CSS

这两年是很火的。一句话定义：基于 原子化（Atomic） CSS 的功能类优先的 CSS 设计系统。

:::note

「Atomic/Utility-First CSS」，是和「Semantic CSS 」(语义化 CSS ) 相对的一种 CSS 规范。语义化 CSS 通常是我们最常用，最传统的 CSS 规范。

:::

语义化 CSS 的问题:

- 命名困难。取个类名实在太难了,尤其是在前期已成系统，在添加一些模块的情况下，如何符合语义，又符合规范？

- 复用困难。 每个类中通常有很多的 CSS 规则，只有规则完全相同的情况下才能复用，存在差异很难复用，会产生很多重复的 CSS 规则。

- 重构成本高。

- 大量重复 CSS ，CSS 文件大小膨胀速度过快。

<!-- //TODO: 练习使用 Tailwind CSS ，体验一下。 -->

## HTML 与 CSS 的关系

关注点分离： HTML 应该只包含关于内容的信息，而所有的样式决定都应该在 CSS 中进行。

如果从关注点分离的角度思考，只能是符合关注点分离、或者违背关注点分离，不能说哪种就一定好的。践行关注点分离的原则，写的语义化 CSS，导致上面语义化 CSS 的问题。

换一个角度： 从依赖的方向：是 CSS 依赖于 HTML 还是 HTML 依赖于 CSS

- CSS 依赖于 HTML

  **关注点分离**，CSS 命名规则依赖于 HTML 的内容。

  这种方式下，CSS 需要了解 HTML 暴露了哪些类名，并根据这些类名来设计样式，但 CSS 不能重用。

- HTML 依赖于 CSS

  **混合关注** ，以内容无关的方式将类命名为你的 UI 中的重复模式（比如 .media-card ）。

  CSS 是独立的，它并不关心被应用于什么内容，而只是暴露了一组可以应用于 HTML 的构件。

  HTML 不是独立的，它使用的是 CSS 提供的类，它需要知道有哪些类存在，以便根据需要将它们组合起来，以实现所需的设计。

> CSS Zen Garden 采用的是第一种方法，而像 Bootstrap 这样的 UI 框架采用的是第二种方法。这两种思路都没有绝对的好坏，要看项目更专注什么。是可重用的 HTML 还是 可复用的 CSS 。

### 尽可能可重用的方式来命名所有的东西

一个组件做的事情越多，或者一个组件越具体，就越难重用。

关注可重用性，细化 CSS 规则，使用小型，可组合的功能类。

Tailwind CSS，是围绕着这种功能类优先的理念设计的，并从重复的模式中提取组件。

## Reference

- [使用 Tailwind CSS 一年后，我的一些感受 - 掘金](https://juejin.cn/post/6951300894684577823)
- [CSS 功能类与关注点分离 | TailwindCSS 中文网](https://tailwindchina.com/translations/css-utility-classes-and-separation-of-concerns.html)
- [Tailwind CSS （可能）是名过其实的 - SegmentFault 思否](https://segmentfault.com/a/1190000039218688)
