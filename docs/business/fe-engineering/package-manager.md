# 包管理器

`npm`，`yarn`，`pnpm`

<!-- todo:包管理器 npm yarn pnpm 。node npm npx 怎么理解？ dependencies/devDependencies -->

## npm

### 切换 node 版本

在多个项目之间切换，会遇到不同的项目所需要的 node 版本不一致，会有切换 node 版本的需求。

linux/Mac OS 可以使用 n /nvm ,仅限了解。

个人目前还是使用 windows 比较多，可以使用 nvm [coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go.](https://github.com/coreybutler/nvm-windows)进行管理。但是使用 nvm 之前需要卸载电脑上已有的所有版本的 node，有点麻烦。

也可以使用 npx 进行 node 版本切换。

针对一个项目，临时使用另一个版本的 node ，并执行一些命令。

`npx -p node@16 yarn start` // 临时使用 node v16+ 的版本，并启动项目

### npm 与 npx

npm 使用最多的功能是作为一个在线的包管理工具。npm 本身不能执行任何包，对于本地项目的包，需要写入 `package.json` 文件，然后通过 npm 解析 `package.json` 文件，解析到包的 `.bin` 目录下，在 bash 中执行。

> `.bin`文件夹存储了当前项目里使用的所有模块的软连接，连接到对应模块的安装目录。

#### npx

npm 内置了 npx 的包，可以直接使用。

npx 算是一个简单的 cli 工具，可以更方便地执行一些 npm 的包，也可以减少环境污染。

npx 原理：运行时检查`node_modules/.bin`路径以及环境变量。

npx 功能：

1. 不安装包的情况下直接执行一些包。
2. 方便切换 node 版本，临时执行一些命令。
3. 可以直接执行 Github 的模块源码。（必须是包含`package.json`和入口的模块代码）
   ```bash
   npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
   ```

## Reference

- [npx 使用教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2019/02/npx.html)

- [简单聊聊 npx 和 npm - 掘金](https://juejin.cn/post/6886818067913900046#heading-3)
