# 项目优化（性能优化以及其他）

## 如何衡量一个项目/网站的性能

1. Google Lighthouse 工具.
   Lighthouse 是一个开源的自动化工具，用于改进网络应用的质量。有对应 chrome extension
   使用参考：https://juejin.cn/post/6950855971379871757

2. https://www.webpagetest.org/

3. webpack-bundle-analyzer
   资源打包分析

## 代码优化

### React 性能优化

[减少不必要的渲染](/docs/React/designPatternAndBestPractices#react-%E4%B8%AD%E7%9A%84%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96)

## 开发环境优化

- webpack dashboard
  可视化 webpack 构建看板，清楚的了解项目启动的过程和进度。

- 性能优化
  图片懒加载：[react-lazyload](https://www.npmjs.com/package/react-lazyload)

  栗子:

```js
<LazyLoad placeholder={<img width="100%" height="100%" src={require("./music.png").default} alt="music" />}>
	<img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music" />
</LazyLoad>
```

# 使用的一些工具

- Vercel
  部署静态网站，运行 python/node/go/ruby 脚本，充当服务器。
  零配置部署，访问速度快，构建快。

## Reference

1. 聊一聊前端性能优化 https://juejin.cn/post/6911472693405548557
2. Lighthouse 如何使用 https://juejin.cn/post/6950855971379871757
3. 性能优化思维导图 https://docs.qq.com/mind/DWnljWm52eEVjWWNE
