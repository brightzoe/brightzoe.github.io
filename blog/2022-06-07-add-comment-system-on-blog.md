---
title: 为博客添加评论功能
authors: [zoe]
tags: [docusaurus, disqus, gitalk, blog]
---

为本博客（docusaurus）添加 disqus 评论系统。

首先需要在 disqus 有一个账号，没有需要先[注册](https://disqus.com/)。然后在 disqus 上配置对应的网站信息，包括网址等内容。

## 遇到的问题

- disqus 不能加载，可能是因为没有配置 disqus 的网址，或者是因为 disqus 的网址配置错误。

  url 不完整。必须完整，例如：`https://zoe.me/blog/xx`

## 一些可选用的评论系统

disqus：第三方评论托管系统，用户量大，lazy-loaded。

> [disqus/disqus-react: A React component for Disqus](https://github.com/disqus/disqus-react)

gitalk： 开源，利用 Github issues，被广泛使用的。

> [gitalk/gitalk: Gitalk is a modern comment component based on Github Issue and Preact.](https://github.com/gitalk/gitalk)

giscus：开源的，利用 Github Discussions。

> [giscus/giscus: A comment system powered by GitHub Discussions.](https://github.com/giscus/giscus)

## Reference

- [Add Disqus Comments to Docusaurus Blog Posts | Madrus's Webdings](https://madrus4u.com/blog/blog-comments#prepare-the-frontmatter)
- [blog/index.js at 5d61d247e53071b399c81b3b7873023d4cb4ad76 · Chasen-Zhang/blog](https://github.com/Chasen-Zhang/blog/blob/5d61d247e53071b399c81b3b7873023d4cb4ad76/src/theme/BlogPostPage/index.js)
- [Integrate with Disqus | kdmw](https://kdmw.dev/docusaurus/disqus-integration)
- [kdmw/index.js at main · kkdm/kdmw](https://github.com/kkdm/kdmw/blob/main/src/theme/DocItem/index.js)
