# pnpm workspace monorepo 实践

## 为什么使用

workspace 将 一个仓库分成不同的工作空间。在根目录下执行 pnpm install ，会将 workspace 内所有的依赖都下载到 node_modules/.pnpm 目录下，而各个子包的 workspace 的依赖，对应目录下将通过软链接的方式添加。

所有的依赖只会下载一次，下载快，体积也小。

monorepo 适用于几个项目互相依赖，共同开发的场景，解决不同项目中代码复用的问题。

- 代码互相依赖，可以实时更新。
- 减少项目安装时间，减少空间占用，相同的第三方依赖不会被多次安装。

## 将原来的项目调整至 monorepo

- [brightzoe/transfer-file](https://github.com/brightzoe/transfer-file)

结构调整：

```
├── packages
│   ├── pkg1
│   │   ├── package.json
│   │   └── pnpm-lock.yaml
│   ├── pkg2
│   │   ├── package.json
│   │   └── pnpm-lock.yaml
│   └── app
│       ├── package.json
│       └── pnpm-lock.yaml
├── package.json # 公用依赖
├── pnpm-lock.yaml
└── pnpm-workspace.yaml

```

添加`pnpm-workspace.yaml`文件，配置 workspace

```yaml title='pnpm-workspace.yaml'
packages:
  # root directory
  - "."
  # all packages in subdirs of packages/
  - "packages/**"
  # exclude packages that are inside test/ directories
  - "!**/test/**" # '!' means exclude
```

执行`pnpm install` 将下载所有的依赖，包括子包的依赖。

在外层的 package.json 配置常用指令

```json title='package.json'
// --filter 是过滤器，可以进行筛选操作
{
  "scripts": {
    "dev:server": "cross-env nodemon --icu-data-dir=node_modules/full-icu './packages/server/index.js'",
    "dev:client": "pnpm run --filter=\"./packages/client\" start", //执行client 包的start命令
    "dev": "pnpm run --filter=\"./packages/*\" start" //执行所有子包的start
  }
}
```

复用同仓库依赖代码

```json title='packages/pkg1/package.json'
{
  "dependencies": {
    "pkg3": "workspace:1.5.1"
  }
}
```

## Reference

- [基于 pnpm 搭建 monorepo 项目 - 掘金](https://juejin.cn/post/7084582387060834340#heading-3)
- [【微信公众号：code 秘密花园 2022-04-28 09:37】Monorepo 的过去、现在、和未来](https://mp.weixin.qq.com/s/U8_30S9B0S_SU3jdgUxFGQ)
<!--//todo: - [rushjs+pnpm之monorepo初探 - 掘金](https://juejin.cn/post/6958360065577320485#heading-0) -->
