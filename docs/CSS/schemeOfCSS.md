# 项目中的 CSS 方案

迄今为止，我是用的 CSS 方案，都是语义化的命名，加上 sass/less 的使用。

## Sass/Less

在个人项目中,习惯使用 less,公司项目中中一般使用 sass(与公司保持一致,我决定不了).

最多使用的功能点:

- 嵌套语法
- 全局变量

偶尔也会用循环来处理一些多个类似元素的情况.而其他语法,在刚开始看文档的时候简单实践过,但基本不太使用.

## Tailwind CSS

这两年是很火的.
一句话定义:基于 原子化 CSS 的功能类优先的 CSS 设计系统.

:::note

「Atomic/Utility-First CSS」，是和「Semantic CSS 」(语义化 CSS ) 相对的一种 CSS 规范。语义化 CSS 通常是我们最常用,最传统的 CSS 规范.

语义化 CSS 的问题:

- 命名困难. 取个类名实在太难了,尤其是在前期已成系统,在添加一些模块的情况下,如何复合语义,又符合规范?

- 复用困难. 每个类中通常有很多的 CSS 规则,只有规则完全相同的情况下才能复用,存在差异很难复用,会产生很多重复的 CSS 规则.

- 重构成本高

- 大量重复 CSS ，CSS 文件大小膨胀速度过快

:::

//TODO: 练习使用Tailwind CSS ,体验一下.
## Reference

- [使用 Tailwind CSS 一年后，我的一些感受 - 掘金](https://juejin.cn/post/6951300894684577823)
- [CSS 功能类与关注点分离 | TailwindCSS 中文网](https://tailwindchina.com/translations/css-utility-classes-and-separation-of-concerns.html)
