# 碰到的一些奇奇怪怪的问题

## 启动本地服务，停止，没有解除端口占用。
  问题描述：yarn start启动，Ctrl+C停止服务。在同一窗口启动服务，或者未关闭窗口在另一个窗口启动此服务，提示当前端口还在占用，并没有停止。
  环境：WIN 10，git bash
  原因：webpack-dev-server端口占用的问题
  解决方案：
    1. 使用windows自带的cmd执行 npm run dev ,可以通过 ctrl+c杀死node进程
    2. 直接在 git Bash 中  task kill node,直接kill node进程
    3. 多按几次ctrl+c(个人习惯此种方式)

  NOTE: 思考：有些项目没有这个问题，构建方式有何不同？
    cra 没有eject的的项目没有这个问题。脚手架的后端服务是怎么实现的？

- reference
  1. [windows系统下webpack-dev-server占用端口](https://juejin.cn/post/6844903609528745991)