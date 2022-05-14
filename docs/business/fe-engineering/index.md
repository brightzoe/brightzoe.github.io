# 前端工程化

## Webpack

## 作用

模块打包。整合文件，保证引用正确和执行顺序。

编译兼容。通过各种 loader 可以使用浏览器不支持的新特性，新语法，提高开发效率。

能力扩展。通过 plugin 机制，实现比如代码压缩，按需加载等功能，提升功能工程效率和打包质量。

## 构建流程

- 初始化参数
- 解析项目。创建 Compiler 对象并开始解析项目
- 确定入口。从入口文件（entry）开始解析，并且找到其导入的依赖模块，递归遍历分析，形成依赖关系树
- 编译模块。根据入口的依赖，调用 loader 进行转换
- 完成编译进行输出，形成不同的 chunk
- 输出完成。将 chunk 输出到文件系统
- 整个过程中 webpack 会通过发布订阅模式，向外抛出一些 hooks，而 webpack 的插件即可通过监听这些关键的事件节点，执行插件任务进而达到干预输出结果的目的。

### loader 与 plugin

loader:

是一个函数，接收匹配到的内容，对内容进行转换，将转换后的内容返回。算是一个文件转换器的角色，在 modules.rules 里配置。

- 对资源预处理，将不是 js 的资源转换为 js
- 执行有顺序，支持链式调用
- 一个 loader 职责是单一的
- webpack 默认会缓存 loader 的执行结果

常见 loader:

- 样式类 css-loader,style-loader,less-loader postcss-loader
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

### complier 和 compilation

文件的解析与构建是一个比较复杂的过程，在 webpack 源码中主要依赖于 compiler 和 compilation 两个核心对象实现。

complier 对象暴露 webpack 整个生命周期相关的钩子，是初始化参数的产物，包含 options, entry, plugins 等属性可以简单的理解为 webpack 的一个实例。

compilation 对象是 complier 的实例，是每一次构建的上下文对象，它包含了当次构建所需要的所有信息，每次热更新和重新构建，compiler 都会重新生成一个新的 compilation 对象，负责此次更新的构建过程。

### sourceMap

将编译，打包，压缩后的代码映射回源代码的技术，方便定位开发中遇到的问题。

有一份映射的文件以.map 结尾，标记源码位置。

### webpack 优化

构建时间优化

- thread-loader 并行构建，放在费时间的 loader 之前
- cache-loader 缓存，提高二次构建速度
- hot-module-replacement-plugin 热更新，修改一个文件不刷新整个项目

区分构建环境

- 开发环境：不需要代码压缩，gzip,体积优化，提高构建速度
- 生产环境：代码压缩，gzip,体积优化

打包体积优化

- css-minimizer-webpack-plugin 压缩 css，去重 只在生产环境
- terser-webpack-plugin 打包后 js 压缩 只在生产环境
- tree-shaking 默认开启的，只打包有用的代码
- source-map 方便定位代码位置，不同环境不同选项
- webpack-bundle-analyzer 打包体积分析，只在生产环境开启

### 用户体验优化

模块懒加载：以路由分割

gzip: 前后端配合 compression-webpack-plugin 在生产环境配置

小图转 base64，减少网络请求次数

## Reference

- [当面试官问 Webpack 的时候他想知道什么 - 掘金](https://juejin.cn/post/6943468761575849992#heading-0)
- [关于 loader 和 plugins - 掘金](https://juejin.cn/post/6971220402466979848#heading-8)
