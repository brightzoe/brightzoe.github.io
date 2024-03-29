# 工具集

一些工具推荐，或提升效率，或提升使用体验等。

工具是为了更好地工作生活，不要为了使用工具而使用工具。确实能解决实际问题的工具才是好工具。

## 工具推荐

### Gitpod

算作 GitHub 的扩展，一个线上的 IDE 编辑环境，类 VS Code 的界面与功能。使用方式：在 GitHub 的一个仓库 URL 前添加`https：//gitpod.io#`即可，或者安装为 GitHub 的扩展。集成 GitHub,且是一个完整终端，并且可以用完即走。

在看到一些项目想在线上运行一下，之前总是搞到 codesandbox,但好像没有 Terminal，终端不完整。可能我使用 codesandbox 的方式不对？不能用于比较大比较复杂的项目的线上调试吗？

### codesandbox

线上运行一些小的 demo,以各种框架为主。大型的，结构比较复杂的好像不太好运行,没有 terminal,切换运行目录，执行一些 bash 好像不行。

### winSCP

用来在本机与服务器端传输文件，可以通过 ssh 连接，可以直接拖动的可视化界面，类似于 win 文件管理器。类似于 XShell，很好用。

## 个人管理

使用一些工具，辅助自己进行时间管理，任务管理，笔记管理等，迫于记性烂，尽量减轻大脑负担。写在这里，既是总结过去使用的管理工具和方法，也是思考该如何更完整地管理自己的精力与任务。

### Lepton

常用的代码片段管理，同步到 GitHub gist 上的。

### 滴答清单

任务管理。

1. 每日 todo：生活安排，工作安排等。
2. 一些朋友的生日提醒
3. 临时的一些想法，或者摘要等，当个仓库。

开了会员，但是从目前的使用还没有很大程度的利用，要想一下怎么更好为我所用。

### 浏览器书签跨平台同步

目前主要使用的浏览器为 Chrome,但经常使用 Edge,FireFox，时不时会换浏览器尝个鲜，需求是跨浏览器，跨设备同步书签。

Floccus 插件 + 坚果云 webDev。

参考配置指南： [困扰我多年的“跨浏览器书签同步”问题终于解决了 - 掘金](https://juejin.cn/post/6909814992120315911#heading-4)

### 密码管理

使用 KeePass 进行管理，并使用坚果云的 webDev 进行跨平台（Win + android）同步管理。

目前对 keePass 的更多功能没有尝试，只是基本的存储与查看搜索密码。

### utools

使用电脑上的一些快捷方式，目前个人习惯使用 Ctrl + Space 打开。

- 更好地使用 everything 搜索文件，文件夹；
- 更好地使用沙拉查词，粘贴到剪贴板，然后唤醒 utools ,识别到英文，沙拉查词一般会展示在第一项。

目前就以上两个用的比较多，但它有很多插件可以选择，增强各种各样的功能。

### 静态文档网站生成

比较好的工具：

1. 本 blog 正在使用的：[Docsify](https://github.com/docsifyjs/docsify/)
2. 学习 ts 的时候看到的： [Pagic](https://github.com/xcatliu/pagic)

   同作者提供了很好的[TS 入门文档](https://ts.xcatliu.com/)

3. Facebook 推出的 [Docusaurus](https://docusaurus.io/)

## 行为方式

一些改进自己做项目，写代码的规范等，算是软工具。

- 保护自己的隐私。在我们进行一些自己的项目开发，尤其是开源项目，例如将所有的源码都传到 GitHub 等开源代码托管平台，有很多人没有注意到把自己的一些账号信息连同密码等都一并传到了网络上，这实在是太危险了。

  我之前也是有过这样的行为，当意识到这一点后，也在思考到底如何保护自己的账号隐私安全。在保护账号隐私安全的同时，也要保证项目的完整性，能够方便其他人看到这个项目可以正常运行。 在目前个人了解的范围内，准备实施的方案如下：

  > - 当在完整的项目中，需要填写一些需要的隐私信息，比如账号，密码，token 等。我们可以把它抽出来，全部写在一个配置文件中。这里我取名为`personalConfig.js`,项目中需要这个文件的时候直接引用这个文件，读取文件的字段进行使用。
  >
  > - 当使用 git 管理工具时，记得把自己的配置文件添加到`.gitignore`里面，不将个人的配置信息传到公开的网络环境上，公开的网络环境实在太危险啦。
  > - 那如果你的项目是开源项目，当有其他的人了解到你的项目想要运行该怎么办呢？我们需要在自己的项目目录里建立一个配置模板文件，这里我叫他`configTemplate.js`。在这个文件里，我们把个人配置里的字段做一个模板，并做好每个字段的注释，用于方便其他人的使用。
  > - 然后在 readme 里标明，运行本项目，需要配置 xx 等个人账号信息，你需要在`configTemplate.js`中配置自己的信息，并将其重命名为`personalConfig.js`即可。这样就完成了对其他用户使用本项目的配置指导，同时也保护了自己的隐私安全。( •̀ ω •́ )y(写的好像有点啰嗦嗷)

## 前端工具

- [reset-css - npm](https://www.npmjs.com/package/reset-css) 解决各个浏览器有一些预置的渲染方式的问题，全部把样式 reset 掉。
- [NGINXConfig | DigitalOcean](https://www.digitalocean.com/community/tools/nginx?domains.0.php.php=false&domains.0.routing.index=index.html&domains.0.routing.fallbackHtml=true&global.app.lang=zhCN) 可视化生成 nginx 配置文件。

### 图标

-[lucide-icons/lucide: Beautiful & consistent icon toolkit made by the community. Open-source project and a fork of Feather Icons. --- lucide-icons/lucide：由社区制作的美丽且一致的图标工具包。开源项目和 Feather Icons 的一个分支。](https://github.com/lucide-icons/lucide)

- [Heroicons --- 英雄图标](https://heroicons.com/)
