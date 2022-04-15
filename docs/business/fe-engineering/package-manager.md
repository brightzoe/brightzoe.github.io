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

#### node_modules 结构

npm@3 之前，node_modules 结构是干净、可预测的。node_modules 下的每个依赖都有自己的 node_modules 文件夹，且在 package.json 中指定了所有的依赖。

```
node_modules
└─ foo
   ├─ index.js
   ├─ package.json
   └─ node_modules
      └─ bar
         ├─ index.js
         └─ package.json
```

产生了的问题：

1. 嵌套安装，node_modules 依赖过深。
2. 当多个不同的依赖依赖同一个依赖时，相同的依赖会被多次安装，占用大量的空间资源。

npm@3+ 和 yarn 之后，node_modules 结构发生了变化，变成了扁平安装。

```
node_modules
├─ foo
|  ├─ index.js
|  └─ package.json
└─ bar
   ├─ index.js
   └─ package.json

```

如果一个包的多个版本在项目中被依赖，node_modules 会提升该包第一个安装的版本到顶层，而其他的版本还是按照之前的方式会被放在各自的依赖里。

![](https://s2.loli.net/2022/04/16/ZgfXIxde7v6qJTj.png)

#### npx

npm 内置了 npx 的包，可以直接使用。

npx 算是一个简单的 cli 工具，可以更方便地执行一些 npm 的包，也可以减少对环境变量的污染。

npx 原理：运行时检查`node_modules/.bin`路径以及环境变量。

npx 功能：

1. 不安装包的情况下直接执行一些包，减少对磁盘的使用。

   下载到临时目录，过一段时间会自动清除。

2. 方便切换 node 版本，临时执行一些命令。
3. 可以直接执行 Github 的模块源码。（必须是包含`package.json`和入口的模块代码）
   ```bash
   npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
   ```

## yarn

yarn 也是包管理器，与 npm 没有本质的区别，都是管理和安装包的，解决了早期 npm 的一些问题并提升了管理包的效率。但在最新版的 npm 和 yarn 安装速度和使用体验并没有太大的差距。

早期的 yarn 相对于 npm 比较大的优势：

1. 采用缓存机制，支持离线安装（npm@5 已支持）
2. 依赖扁平化结构（npm@3 已支持）
3. 依赖安装确定性 yarn.lock（npm@5 增加了 package-lock.json）
4. 安装速度快并行下载
5. 安装失败自动重试

```bash
yarn add [pkg]

yarn remove [pkg]
```

### npm 和 yarn 存在的问题

#### Phantom dependencies 幽灵依赖

某个包没有在 `package.json`中被依赖，但用户还是可以引用到这个包。

原因是`node_modules`的扁平结构。如果使用 npm 或 yarn 安装项目依赖，间接依赖（第三方包的依赖）会被提升在`node_modules`顶层目录下。

- [nodejs 的寻址方式](https://nodejs.org/api/modules.html#loading-from-the-global-folders)

### pnpm

一个更新的包管理器。

优势：

1. 包安装速度快。
2. 磁盘空间利用非常高效。
   不会重复安装同一个包。
3. 继承了 npm 与 yarn 的其他优势，比如安装确定性与离线模式。

<!-- todo:- [One For All：基于pnpm + lerna + typescript的最佳项目实践 - 理论篇 - 掘金](https://juejin.cn/post/7043998041786810398) -->

## Reference

- [npx 使用教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2019/02/npx.html)
- [简单聊聊 npx 和 npm - 掘金](https://juejin.cn/post/6886818067913900046#heading-3)
- [关于现代包管理器的深度思考——为什么现在我更推荐 pnpm 而不是 npm/yarn? - 掘金](https://juejin.cn/post/6932046455733485575#comment)
- [One For All：基于 pnpm + lerna + typescript 的最佳项目实践 - 理论篇 - 掘金](https://juejin.cn/post/7043998041786810398)