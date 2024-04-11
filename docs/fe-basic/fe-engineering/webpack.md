# webpack

## 作用

模块打包。整合文件，保证引用正确和执行顺序。

编译兼容。通过各种 loader 可以使用浏览器不支持的新特性，新语法，提高开发效率。

能力扩展。通过 plugin 机制，实现比如代码压缩，按需加载等功能，提升功能工程效率和打包质量。

## 构建流程

初始化

- 初始化参数 option
- 解析项目。创建 Compiler 对象并开始解析项目

编译构建

- 确定入口。从入口文件（entry）开始解析，并且找到其导入的依赖模块，递归遍历分析，形成依赖关系树
- 编译模块。根据入口的依赖，调用 loader 进行转换
- 完成编译进行输出，形成不同的 chunk
- 输出完成。将 chunk 输出到文件系统

整个过程中 webpack 会通过发布订阅模式，向外抛出一些 hooks，而 webpack 的插件即可通过监听这些关键的事件节点，执行插件任务进而达到干预输出结果的目的。

<!-- - [面试官：webpack原理都不会？ - 掘金](https://juejin.cn/post/6859538537830858759#heading-21) -->

## loader 与 plugin

loader:

是一个函数，接收匹配到的内容，对内容进行转换，将转换后的内容返回。算是一个文件转换器的角色，在 modules.rules 里配置。

- 对资源预处理，将不是 js 的资源转换为 js
- 执行有顺序，支持链式调用
- 一个 loader 职责是单一的
- webpack 默认会缓存 loader 的执行结果

常见 loader:

- 样式类 css-loader，style-loader，less-loader postcss-loader
- 文件类 url-loader file-loader image-loader
- 编译类 babel-loader ts-loader

plugin：

插件。在初始化参数后就加载所有插件，创建插件的实例。不直接处理文件，通过钩子涉及 webpack 整个事件流程，监听生命周期的钩子在合适的时机使用 webpack 提供的 api 做一些事情。

常见 plugin：

- html-webpack-plugin 打包后自动生成 html 文件，将打包后的 js 引入到 html 文件内。
- mini-css-extract-plugin 将 style 内的 css 抽离成 link 导入的 css 文件。
- hot-module-replacement-plugin 热更新，只配置在开发阶段，提高重新构建时间

编写 plugin：

- 是一个类。
- 有一个 apply 方法，绑定 complier.hooks 事件。
- 处理 webpack 内部实例的特定数据。
- 功能处理完后调用 webpack 提供的回调。

loader 负责文件转换，plugin 负责功能扩展。

## complier 和 compilation

文件的解析与构建是一个比较复杂的过程，在 webpack 源码中主要依赖于 compiler 和 compilation 两个核心对象实现。

complier 对象暴露 webpack 整个生命周期相关的钩子，是初始化参数的产物，包含 options, entry, plugins 等属性可以简单的理解为 webpack 的一个实例。

compilation 对象是 complier 的实例，是每一次构建的上下文对象，它包含了当次构建所需要的所有信息，每次热更新和重新构建，compiler 都会重新生成一个新的 compilation 对象，负责此次更新的构建过程。

## sourceMap

将编译，打包，压缩后的代码映射回源代码的技术，方便定位开发中遇到的问题。

分为内联方式和外部方式，外部方式有一份映射的文件以.map 结尾，标记源码位置，内联方式不生成文件，构建速度更快。

`devtool:source-map/eval-source-map/cheap-module-source-map`等

| 参数   | 参数解释                                                                |
| ------ | ----------------------------------------------------------------------- |
| eval   | 打包后的模块都使用 eval() 执行，行映射可能不准；不产生独立的 map 文件   |
| cheap  | map 映射只显示行不显示列，忽略源自 loader 的 source map                 |
| inline | 映射文件以 base64 格式编码，加在 bundle 文件最后，不产生独立的 map 文件 |
| module | 增加对 loader source map 和第三方模块的映射                             |

生产环境勿用内联方式，会增大代码体积，可以配置 cheap-module-source-map。

- [webpack 的 sourse-map 中 eval、cheap、inline 和 module 各是什么意思？ - 卤蛋实验室 - 博客园](https://www.cnblogs.com/skychx/p/webpack-sourse-map-eval-cheap-inline-module.html)

## 文件缓存

三种类型：

- hash：每次都是用同一个全局唯一的 hash 值。如果重新打包会使所有的缓存都失效。
- chunkhash：同一个 chunk 生成同一个 hash。
- contenthash： 根据文件内容生成 hash，不同文件 hash 值不一样。

```js
output: {
  filename: "js/built.[contenthash:10].js",
  path: resolve(__dirname, "build"),
},
plugins: [
  new MiniCssExtractPlugin({
    filename: "css/built.[contenthash:10].css",
  })
]

```

一般使用 contenthash 比较好。

- [webpack 中，hash、chunkhash、contenthash 的区别是什么？ - 卤蛋实验室 - 博客园](https://www.cnblogs.com/skychx/p/webpack-hash-chunkhash-contenthash.html)

## tree shaking

不需要用到的代码将不会进入到打包结果中，减少打包体积。

此功能主要依赖 es module 语法，因为它提供静态分析（即不运行代码对代码进行分析，不会因为逻辑成立与否而引入或导出某个模块，import/export 不会存在 if 里面）的可能性。其他方式书写的模块很难去做 tree shaking 分析。

- 在开发环境开启
- 注意副作用的问题。比如 polyfill/css 等有副作用的文件可能被删除掉，需要在 package.json 中配置

## code spliting

代码分割，可以实现按需加载。

比如网络应用，一次性下载所有功能的代码是不必要的。code spliting 用户在打开界面的时候，只加载基本功能/入口页面的功能，随着用户的交互能更快打开入口页面。

配置方式

- 配置多入口

  ```js
  // 单入口
  // entry: './src/js/index.js',
  entry: {
    // 多入口：有一个入口，最终输出就有一个bundle
    index: "./src/js/index.js",
    test: "./src/js/test.js",
  },
  output: {
    // [name]：取文件名
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "build"),
  }

  ```

- optimization
  ```js
  optimization: {
    splitChunks: {
      chunks: 'all'; //自动分析多入口chunk中有没有公共的文件，公共文件会生成单独的chunk
    }
  }
  ```
- 动态 import 返回 promise

## bundle 与 chunk

chunk 数据块

- 被分割的代码文件。可能是公用的代码，也可能是第三方库，被 webpack 分割出来的数据块，不是最终产物。

bundle

- 最终输出的文件，一堆 chunk 的集合，经历了加载和编译的环节最后输出的文件，可以在浏览器中运行。

> 我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。

## webpack optimization

**构建时间优化**

- speed-measure-webpack-plugin 分析打包耗时
- 比较耗时的包可以使用 cdn 分包。或者预编译资源为 dll

  dll 思想也就是缓存，已经不推荐使用。webpack5 中内置 HardSourceWebpackPlugin 提升第二次构建速度。

- thread-loader 并行构建，放在费时间的 loader 之前。（开启 worker，也有开销，仅在耗时的操作中使用）
- 并行压缩 terser-webpack-plugin 的一个选项
- cache-loader 缓存，提高二次构建速度（webpack5 已内置 cache 模块可不添加此 loader）
- hot-module-replacement-plugin 热更新，修改一个文件不刷新整个项目

区分构建环境

- 开发环境：不需要代码压缩，gzip，体积优化，提高构建速度
- 生产环境：代码压缩，gzip，体积优化

**打包体积优化**

- webpack-bundle-analyzer 打包体积分析，定位问题
- 比较大的包使用 cdn 引入或者按需加载。 使用 cdn 引入的，在配置中要在打包时排除掉。
  <!-- - [【包真】我的第一次webpack优化，首屏渲染从9s到1s - 掘金](https://juejin.cn/post/7071928099847274509#heading-4) -->
- css-minimizer-webpack-plugin 压缩 CSS，去重
- mini-css-extract-plugin 抽离 CSS 文件 只在生产环境
- purgecss-webpack-plugin 移除无用 CSS 只在生产环境
- terser-webpack-plugin 打包后 js 压缩
- tree-shaking 默认开启的，只打包有用的代码
- source-map 方便定位代码位置，不同环境不同选项，生产环境可以不开
- compression-webpack-plugin 将资源压缩为 gzip ，配合服务端开启静态压缩

监控面板

- speed-measure-webpack-plugin 分析打包耗时，每个 loader ，plugin 构建耗费的时间
- webpack-dashboard 了解当前构建现状，进度，每个 chunk 大小等

## Reference

- [当面试官问 webpack 的时候他想知道什么 - 掘金](https://juejin.cn/post/6943468761575849992#heading-0)
- [关于 loader 和 plugins - 掘金](https://juejin.cn/post/6971220402466979848#heading-8)
- [一套骚操作下来，webpack 项目打包速度飞升 🚀、体积骤减 ↓ - 掘金](https://juejin.cn/post/7046616302521155614#heading-1)
- [【webpack】性能优化配置 - HMR - 缓存 -tree shaking - 代码分割 - 懒加载 - 预加载 - PWA - 多进程打包 - 掘金](https://juejin.cn/post/7017775849818554376#heading-0)
