---
title: 个人应遵守的开发习惯和规范
authors: [zoe]
tags: [dev, rules]
---

给自己写的应该遵守的习惯和规范，主要为开发相关。记录并形成一篇完整的文章，也是提醒自己要一直按照这个规则。

只适用于自己的项目或文件啦，在工作中的项目还是按照团队规范来...

以前有意识到要有一定的规则，写的规范些，但每一段时间有一段时间的想法，可能与过去遵守的规则都不一样了，回顾起来有点头痛。

## 命名规则

**文件命名规则：**

- 文件夹名称，文件名称
  - 一般情况下全为小写字母，单词与单词之间用`-`中划线进行连接,不能有空格。`eg: tools my-habits`
  - 在前端的项目代码中： react 组件的文件夹/文件，以大写字母开头。`eg: PascalCase`
  - 特殊情况：某些说明文件的文件名，可以使用大写字母，比如 README、LICENSE。

//todo: 问题： 文件名称含有一些特定的名词，比如 setTimeout,CSS 等，正确的名称就是大写的，这种应该保持原有的格式吗？

**函数命名规则：**

一般采用小驼峰命名，构造函数采用大驼峰命名.`eg: camelCase PascalCase`。

如何为函数起名字：

<table>
<thead>
<tr>
<th>动词</th>
<th>含义</th>
<th>返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td>can</td>
<td>判断是否可执行某个动作 ( 权限 )</td>
<td>函数返回一个布尔值。true：可执行；false：不可执行</td>
</tr>
<tr>
<td>has</td>
<td>判断是否含有某个值</td>
<td>函数返回一个布尔值。true：含有此值；false：不含有此值</td>
</tr>
<tr>
<td>is</td>
<td>判断是否为某个值</td>
<td>函数返回一个布尔值。true：为某个值；false：不为某个值</td>
</tr>
<tr>
<td>get</td>
<td>获取某个值</td>
<td>函数返回一个非布尔值</td>
</tr>
<tr>
<td>set</td>
<td>设置某个值</td>
<td>无返回值、返回是否设置成功或者返回链式对象</td>
</tr>
</tbody>
</table>

常量： 大驼峰命名。变量：小驼峰命名。

//todo: 未完待整理。
### prettier
```
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "bracketSameLine": false,
  "jsxSingleQuote": false,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false
}

- 工具：@trivago/prettier-plugin-sort-imports 帮助整理import顺序
```
## 测试

<!-- todo: -->
Mocha  Chai Jest
## Reference

- [前端开发规范：命名规范、html 规范、css 规范、js 规范 - 掘金](https://juejin.cn/post/6844903479698259975)
