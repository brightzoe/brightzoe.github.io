# 给自己科普一些相关的东西

前端之外，作为一名开发工程师，大概需要了解的东西。

### 混合开发

移动端上的很多应用都采用了 Hybrid APP 的架构。所谓 Hybrid APP，就是指使用原生和 H5 两种 UI 呈现内容。

用于显示 H5 页面的 WebView 是一个原生控件，也有一个框，但它与其他原生控件的区别是 WebView 展示的内容比单一的原生控件复杂得多。例如，原生的 TextView 用来显示文本内容、ImageView 用来显示图片等；而 WebView 可以显示一个网页的内容，我们可以把它看作精简版的浏览器。

一般说来，原生 UI 可以提供比 H5 页面更好的操作体验.

> 开发者模式-显示布局边界，可以设置区分是原生控件还是 WebView.

何时使用原生 UI:

- 对流畅性体验要求较高的场景
- UI 样式相对固定，不会频繁变化
- 交互复杂

何时使用 H5 页面:

- 较强的动态运营需求
- UI 样式复杂多变
- 交互简单
- 多平台复用

## 软工方法

- CI/CD,DevOps 持续集成、持续交付、持续部署是一系列的软件工程实践方法，使用自动化手段达到完成软件。

  - 相关理解(https://www.zhihu.com/question/23444990)

  CI 工具：

  - Jenkins 新手安装配置操作(https://zhuanlan.zhihu.com/p/80031057)
  - Gitlab CI

    gitlab 推出的 ci 工具，方便使用，使用 yml 配置。

    [yaml - Gitlab-Ci: How could I share data between jobs - Stack Overflow](https://stackoverflow.com/questions/50358923/gitlab-ci-how-could-i-share-data-between-jobs)

## 计算机架构

计算机如何执行任务？ 依靠 CPU 的运算预计存储设备对数据的读写。

**任务分类：**

- CPU 密集型：图形解码，复杂运算等，不适合同步加载
- I/O 密集型：高度依赖存储设备，读取数据库的信息，加载磁盘的图片，从网络下载电影等。

> 一般来说，模块距离 CPU 越近，运行速度越快，大体快慢顺序：寄存器 > 高速缓存 > 内存 > 硬盘 > 网络

## Reference

1. 给产品经理讲技术- 电子工业出版社

2. [ 大厂完整的研发流程是什么样子-掘金](https://juejin.cn/post/6985486747874361374#heading-0)
