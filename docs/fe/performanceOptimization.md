# 项目优化（性能优化以及其他）

## 开发环境优化

- webpack dashboard
  可视化 webpack 构建看板，清楚的了解项目启动的过程和进度。

- 性能优化
  图片懒加载：[react-lazyload](https://www.npmjs.com/package/react-lazyload)

  栗子:
````js
<LazyLoad placeholder={<img width="100%" height="100%" src={require("./music.png").default} alt="music" />}>
  <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music" />
</LazyLoad>
````

# 使用的一些工具

- Vercel
  部署静态网站，运行python/node/go/ruby脚本，充当服务器。
  零配置部署，访问速度快，构建快。

# 一些其他的理解
- CI/CD,DevOps
  持续集成、持续交付、持续部署是一系列的软件工程实践方法，使用自动化手段达到完成软件。

  - 相关理解(https://www.zhihu.com/question/23444990)

  CI工具：Jenkins
  - Jenkins 新手安装配置操作(https://zhuanlan.zhihu.com/p/80031057)


