---
slug: welcome
title: Welcome
authors: [zoe]
tags: [about, docusaurus]
---

## About

你好，这里是我的 blog，或者可以说是我的 wiki 文档。

本博客使用 `docusaurus` 搭建，想要进一步了解请参阅官方文档 [Docusaurus docs](https://docusaurus.io/docs)

前期使用`docsify` 作为文档网站，2021.09 迁移至`docusaurus`。 [Docsify docs](https://docsify.js.org/#/zh-cn/)

欢迎来到这里，如果对你有些帮助，我会很开心。有任何想说的或建议都欢迎留言。

:::info
本 blog 中技术相关的文档，有参考来自网络的很多内容，包括来自 StackOverFlow, 掘金，思否，微信公众号，知乎等等。
我在撰写文章，参考一些优秀内容时会记得添加到 References 注明出处, 若有疏漏，或者不小心侵权了，请放心联系我，尊重所有人的版权。
:::

<!--truncate-->

## 撰写思路

截至目前，本 blog 的技术相关文档还是以笔记为主，记录本人在技术学习过程中对参考资料的整理，以及练习某些技术的总结。

以后在整理文档时，会在相关内容处直接放上参考，来源链接，并同时把链接放到最后‘Reference’处，方便使用。

> 近期阅读参考‘掘金’比较多。 2021-10

## ChangeLog

1. 2021.10 添加@codesandbox/sand-pack，直接在 md 文档里放可以运行预览的代码。

## How to use docusaurus

以下为个人使用 docusaurus 的 doc 参考，更多请直接参考官方文档。

[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

A blog post folder can be convenient to co-locate blog post images:

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

The blog supports tags as well!

Use a `<!--truncate-->` comment to limit blog post size in the list view.

:::note
Some **content** with _markdown_ `syntax`.
:::

:::info
Some **content** with _markdown_ `syntax`.
:::

:::caution
Some **content** with _markdown_ `syntax`.
:::

:::danger
Some **content** with _markdown_ `syntax`.
:::

Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).

:::tip
Use the power of React to create interactive blog posts.
<button onClick={() => alert('button clicked!')}>Click me!</button>
:::

## Reference

1. [Docusaurus docs](https://docusaurus.io/docs)
