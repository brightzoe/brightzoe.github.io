---
title: 为博客添加评论功能
authors: [zoe]
tags: [docusaurus, disqus, gitalk, blog]
---

为本博客（docusaurus）添加 disqus 评论系统。

首先需要在 disqus 有一个账号，没有需要先[注册](https://disqus.com/)。选择 "get started" =>" I want to install Disqus on my site" 。在 disqus 上配置对应的网站信息，配置的 Website Name 就是后面组件中要用到的 shortname。

<!--truncate-->

![](https://s2.loli.net/2022/06/20/kTYx62bD4oc5KaP.png)

disqus 准备好，接下来我们就要在 docusaurus 中去使用了 🐾~

## 暴露出要添加部分的组件代码

为 blog 功能添加评论，docusaurus 中对应的组件名是 `BlogPostPage`，我们将它 `swizzle` 出来。

```bash
yarn swizzle @docusaurus/theme-classic BlogPostPage  --danger
```

> 如果需要 typescript，在 `--danger` 后面加上 `--typescript`。

`swizzle` 命令会把当前 theme 的组件代码暴露出来，然后把它们替换到当前项目的目录下。`swizzle` 命令是有一定风险的，使用前先阅读文档。 [Swizzling | Docusaurus](https://docusaurus.io/docs/next/swizzling)

`swizzle` 有两个选项，一个是`wrap`，一个是`eject`。`wrap`是包裹当前的组件，添加一些内容。`eject`是暴露出当前组件的所有结构，进行一些修改，暴露更彻底，风险更大，如果`wrap`能满足要求则不必使用`eject`。

这里为了调整评论组件的位置，我选择了`eject` 选项。

## 添加对应评论组件

当 `swizzle` 命令执行完毕后，在`src/theme/`下会多出一个文件名为`BlogPostPage`。

需要安装 disqus 对应组件包 `disqus-react`

```bash
yarn add disqus-react
```

在`src/theme/BlogPostPage`文件中添加如下代码：

```tsx
import { DiscussionEmbed } from "disqus-react";

// BlogPostPageContent 组件中
const { title, description, tags, permalink } = metadata; //docusaurus 暴露出来的
const fmtId = permalink.replace(/^\//, "").replaceAll(/[\s\/]/gi, "-");
const disqusId = fmtId == "" ? "main" : fmtId;

// 在想放置的位置添加DiscussionEmbed组件。一般放在nextItem/prevItem之后。
<DiscussionEmbed
  shortname="yourshortname" //在disqus 配置的
  config={{
    url: "https://brightzoe.top" + permalink, //完整网址
    identifier: disqusId, //识别符
    title: title,
  }}
/>;
```

## 为 doc 部分添加评论组件

前面只是为 docusaurus 的 blog 部分添加了评论组件，如果需要为 doc 部分添加评论组件，那就暴露出 doc 部分对应的组件，名字叫做`DocItem`

```bash
yarn swizzle @docusaurus/theme-classic DocItem  --danger
```

同上添加对应`DiscussionEmbed` 组件即可。

## 遇到的问题

- disqus 不能加载，可能是因为没有配置 disqus 的网址，或者是因为 disqus 的网址配置错误。

  url 不完整。必须完整，例如：`https://zoe.me/blog/xx`

## 一些可选用的评论系统

disqus：第三方评论托管系统，用户量大，lazy-loaded。

> [disqus/disqus-react: A React component for Disqus](https://github.com/disqus/disqus-react)

gitalk： 开源，利用 GitHub issues，被广泛使用的。

> [gitalk/gitalk: Gitalk is a modern comment component based on GitHub Issue and Preact.](https://github.com/gitalk/gitalk)

giscus：开源的，利用 GitHub Discussions。

> [giscus/giscus: A comment system powered by GitHub Discussions.](https://github.com/giscus/giscus)

## Reference

- [Add Disqus Comments to Docusaurus Blog Posts | Madrus's Webdings](https://madrus4u.com/blog/blog-comments#prepare-the-frontmatter)
- [blog/index.js at 5d61d247e53071b399c81b3b7873023d4cb4ad76 · Chasen-Zhang/blog](https://github.com/Chasen-Zhang/blog/blob/5d61d247e53071b399c81b3b7873023d4cb4ad76/src/theme/BlogPostPage/index.js)
- [Integrate with Disqus | kdmw](https://kdmw.dev/docusaurus/disqus-integration)
- [kdmw/index.js at main · kkdm/kdmw](https://github.com/kkdm/kdmw/blob/main/src/theme/DocItem/index.js)
