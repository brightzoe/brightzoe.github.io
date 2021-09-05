# 碰到的一些奇奇怪怪的问题

## 启动本地服务，停止，没有解除端口占用。

问题描述：yarn start 启动，Ctrl+C 停止服务。在同一窗口启动服务，或者未关闭窗口在另一个窗口启动此服务，提示当前端口还在占用，并没有停止。
环境：WIN 10，git bash
原因：webpack-dev-server 端口占用的问题
解决方案： 1. 使用 windows 自带的 cmd 执行 npm run dev ,可以通过 ctrl+c 杀死 node 进程 2. 直接在 git Bash 中 task kill node,直接 kill node 进程 3. 多按几次 ctrl+c(个人习惯此种方式)

NOTE: 思考：有些项目没有这个问题，构建方式有何不同？
cra 没有 eject 的的项目没有这个问题。脚手架的后端服务是怎么实现的？

- reference
  1. [windows 系统下 webpack-dev-server 占用端口](https://juejin.cn/post/6844903609528745991)

<hr/>

## 前端

### react 中 less 样式未生效

- 产生了什么问题？
 配置好了less-loader，但引用.less 文件，样式并未生效，以下是对应的webpack配置。

```js
{
  test: /\.less$/,
  exclude: /node_modules/,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        modules: true,//开启了css modules
        localIdentName: '[path][name]__[local]--[hash:base64:5]'//定义哈希类名
        importLoaders: 2,
        localsConvention: "camelCase",
        esModule: true,
        sourceMap: true,
      },
    },
    {
      loader: "postcss-loader",
      options: {
      sourceMap: true,
      },
   },
    {
      loader: "less-loader",
      options: {
        sourceMap: true,
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  ],
}
```
- 上网查询，分析原因：
  css-loader自带css modules,会把所有类名编译为哈希字符串.less文件中写的样式已经被重命名了，但react中的className并没有一起被处理。
- 解决方案：
  1. 按css modules的方式引用样式，使用`style.cptbutton`
  ```js
     import style from './index.less';
  ```
  2. css modules使用全局作用域。
  在less文件中，所有内容外用:global语法包裹住。:global声明一个全局规则，凡是这样声明的class，都不会被编译成哈希字符串。
  3. webpack css-loader,可以直接设置禁用css modules.

- 好的，那么什么是css modules?像sass/less一样的预处理器吗？
  css Modules,是通过构建工具达到样式的scope。
  - 解决了什么问题？
    避免全局命名冲突，只需要保证组件内的命名不冲突，因为命名会被编译。

    解决选择器嵌套层次过深的问题。

    模块化：可以使用composes来引入自身模块中的样式以及另一个模块的样式。


<hr/>

### checkbox 监听不生效

- 产生了什么问题？
  react 组件里的 checkbox 上的监听事件不生效。

- 问题的背景？
  组件用 react,antd,但整体项目是 jsp。事件，请求使用 requirejs,jquery。

  原来写在普通 dom 结构里的 checkbox，点击事件正常。移动至 react 组件内 checkbox 的点击事件不生效，监听不见了。

  react 是用 script 标签，以及 babel 运行时进行转换的。

- 分析原因？
  可能监听事件的函数在先，react 的 checkbox 在后，监听事件没拿到对应的元素。所以将 react 的 script 标签移动至最前面，但未生效。

  通过简单的 demo 尝试，在 cra 脚手架的 react 组件里写 checkbox,并在 index.html 添加 dom 事件，发现事件生效。所以与单纯的框架，组件没有关系，原因应该就是监听的元素丢失。

  为什么没有监听到对应的元素呢？通过在浏览器调试，添加监听的时候控制台打出这个元素，发现监听事件时的元素与在后面点击的元素不是一个 😂

  为什么不是同一个元素了？监听事件是写在原来的结构里，使用 requirejs，只加载一次，监听了第一次 dom 结构的对应元素。但碰巧的是，第一次 dom 里对应的 checkbox 是不显示的。在进行了其他的操作，使 react 重新渲染了，重新 render，对应元素已经被卸载又重新加载了。

- 解决方案：
  在不移动针对此事件的各种操作的前提下，使用了事件委托，监听事件添加到了父元素或者爷爷元素等不变元素，通过 e.target 确定点击的范围，达到了想要的目的。

- 总结：
  之前在完全的 react 项目中，如果对一个元素添加事件，是在组件内部，didMount 的时候添加监听，willUnmount 的时候清楚监听。即使 react 重新渲染，也会在 didmount 的时候再添加监听，确保每次监听是生效的。而这次监听事件在 react 外，在重新渲染后监听事件丢失了。

- 再次总结：
  按照高内聚的思想，我把原来的 checkbox 移动至 react 里，但是针对他的行为，事件没有移动至 react 内，造成了这个问题。如果事件按照 react 组件内部的行为模式（didMount 添加监听），不会产生监听失效的问题。但是原来针对此元素的事件，以及原生 dom 操作耦合性太强，比较复杂，暂且继续使用。移动至 react 内的工作量比较大，也可能会产生新的问题。

- 针对这个问题再说两句，不就是一个 render 重新渲染，对应元素卸载重新装载的问题嘛，不知不觉扯了这么多。😜

  为什么我把对应的 checkbox 移动到了 react 里，因为新加的一些功能，按照 UI 要使用 antd.之前的一部分可以算作属于新加的大功能内部的，为了这部分的 UI 一致性。

  那为什么不把对应的事件，原来相关的所有逻辑都移动进来呢？没有移进来确实在整体的结构上不够好，至少我理解的是没有高内聚。但是目前的要求是业务优先，稳定是重要的。自己重构了这一小部分的逻辑，是没有对应的测试来帮忙覆盖的，只有自测，对自测并不是很自信...之前是有改某一块就把部分逻辑重构了，但是很危险..在公司人手不是很富裕的情况下，贸然重构的风险太大。

  在本菜菜的角度，原来的逻辑不是很清楚的情况下是不能贸然重构的。重构的基础是，你对原来的功能逻辑足够熟悉，能够和前端负责人，产品对整体的功能逻辑简单沟通。并在重构后，安排一定量的测试。但也有点理想化了...其实我也还不是很确定到底什么情况下可以重构? 现在不能贸然重构的想法，也是因为年轻理想化，私自改了几个逻辑，测试没有覆盖到，在生产环境才发现的问题。总之重构是需要衡量考虑的，不能贸贸然。

<hr/>
