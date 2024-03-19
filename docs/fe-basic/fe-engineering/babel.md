# Babel

## 是什么?
Babel是一个广泛使用的JavaScript编译器，它可以将ES6等高版本的代码转为ES5或更低版本的代码,使他们能够在不同版本的浏览器中运行。
- 兼容性。Babel 能够进行代码的降级转换，使得旧版浏览器也能理解和执行。
- 扩展性。Babel 提供了强大的插件系统，开发者可以通过配置不同的插件来定义代码的转换方式。这种灵活性使得 Babel 特别适用于处理复杂的代码项目。

> Babel 能帮助开发者提前尝试使用尚未正式成为规范的 ES 特性，以便评估新特性的价值。

## 核心模块
- babel/core 负责整体编译流程
- babel/parser 解析源码，经历语法分析、词法分析等生成AST抽象语法树
- babel/generator 将AST再解析为可以为浏览器运行的javaScript代码

### 编译流程
- parse

  使用 @babel/parser 解析源码，生成AST抽象语法树

- transform

  使用 @babel/traverse 遍历AST抽象语法树，调用 transform 插件对 AST 节点进行增删改等操作生成新的AST

- generate

  @babel/generator 根据转换后的 AST 生成新的代码

## 用途
- 静态分析。 仅借助AST提供的信息进行分析，不修改AST。比如linter,type checker,code formatter，自动生成api文档等。
- 特定用途代码转换。 借助AST提供的信息进行转换，保持原有AST结构上做部分的增删改。比如函数插桩、删除console、自动国际化等。
- 代码转译。 将浏览器不支持和不兼容的语法进行转换。比如ES新特性、TypeScript。

## Babel 插件开发

### 相关的库
- @babel/core Babel 的核心 api，包含了上述所提的所有功能，能完成从源码到目标代码的整个编译流程。
- @babel/parser 默认只能 parse js 代码，支持扩展，通过指定对应语法插件可实现 jsx、ts 等解析。
- @babel/generator 负责 generate 阶段的包，用于将 AST 转换成新的代码。
- @babel/traverse 提供 traverse 方法来负责 AST 的遍历，维护了整颗 AST 树的状态。

  traverse 针对不同的节点类型提供了不同的 visitor 用于实现对节点的操作。

  :::tip

  vistor 利用了设计模式的**访问者模式（Visitor）**，用于实现**数据结构与数据操作解耦**。当被操作的对象结构比较稳定，而操作对象的逻辑经常变化的时候，通过分离逻辑和对象结构，使得他们能独立扩展。

  在 Visitor 模式中，数据结构和数据操作分别被封装在不同的类中。我们把数据结构封装在 "Element" 类中，把数据操作封装在 "Visitor" 类中。"Visitor" 类表示一个作用于某对象结构中的各元素操作的封装，其目标是在不改变数据结构的前提下，能随时增加新的操作，即访问者可随时改变操作算法。

  :::

- @babel/types 包含所有 AST 节点的类型以及检查 AST 类型的方法。

### 插件开发
Babel Plugin 通常有两种格式。

一种是对象，对象中包含 visitor、pre、post 等属性。

另一种是函数，返回一个包含 visitor、pre 等属性的对象。函数格式可以接受三个参数，分别为 api：提供 babel 基础 api 能力、options：外界传入插件的参数、dirname：目录名。

```js
export default plugin = {
  pre() {}, // 遍历前触发的钩子函数
  visitor: {},//
  post(file) {}, // 遍历后触发的钩子函数
};

export default function plugin(api, options, dirname){
    return {
        pre(){},
        visitor: {},
        post(){}
    }
}
```
插件开发逻辑：对比前后AST,找出节点变化处。分析节点与逻辑，生成新的AST。

[学习使用AST explorer](https://juejin.cn/post/7265149630924832808?searchId=20231201154405AA3C21BB0C8773754D47#heading-4)

## 常用 plugin 和 present
present: 一些plugin组成的合集，整合成的一个包，方便做一个预设。

常见present：

- babel-preset-env 内部集成了绝大多数plugin（State > 3）的转译插件，将高版本js进行转移为低版本js。
- babel-preset-react 对jsx进行转译。
- babel-preset-typescript 编译ts为js。

  > 其他编译ts的方式：tsc命令，结合cli命令行或者tsconfig配置文件进行编译。

常见plugin：[plugin list](https://babeljs.io/docs/plugins-list)

> 绝大多数被集成进babel-preset-env

- @babel/plugin-transform-object-rest-spread 用于处理对象的扩展运算符。
- @babel/plugin-transform-optional-chaining 用于处理可选链运算符。
- @babel/plugin-transform-nullish-coalescing-operator 用于处理空值。

## Babel vs SWC
无论是Babel还是SWC，它们都是服务于JavaScript代码的工具，其目标都是使JavaScript代码更加易于编写、阅读和维护。然而，它们实现这一目标的方式略有不同。

### SWC
SWC是基于Rust语言开发的高性能的JavaScript编译器，旨在与现有的工具集（如webpack、Rollup、Parcel等）集成。目标是提高编译速度和代码执行速度。

有插件体系，但不支持JavaScript插件，插件需要通过Rust/WebAssembly实现。


## Reference
- [Babel](https://babeljs.io/)
- [SWC](https://swc.rs/)
- [AST](https://astexplorer.net/)
- [Babel入门&实现一个箭头函数转换插件](https://www.zhihu.com/question/315934143/answer/3261159913)
- [箭头函数转换插件-详细全面](https://juejin.cn/post/7292764000470728741)
- [实现一个简易的Tree Shaking Babel 插件](https://www.zhihu.com/question/315934143/answer/2358619334)
- [聊聊Babel杀手：SWC的野心与未来](https://juejin.cn/post/7136404050995576863)
- [Babel入门详解](https://juejin.cn/post/7025237833543581732)