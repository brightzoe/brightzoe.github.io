# Vue

组件化模式。

声明式编码 与 命令式编码相对应。

## nextTick

[API — Vue.js](https://cn.vuejs.org/v2/api/#vm-nextTick)

在 DOM 实际更新了之后执行一些方法。

使用场景

- 获取更新后的 DOM

- 在 DOM 更新后，自动执行一些方法。

## deep 深度选择器

vue 2.x 中组件中 style 通常使用 scope 属性，限制当前的组件的作用域为当前组件。组件内如果引用了其他组件，或者 element-ui 等组件库，是不能直接改变其他组件的样式的。如果需要做一些定制化的样式，可以使用 deep 深度选择器。

- deep 不能嵌套使用。deep 里不能再有 deep。
- less 中使用 `/deep/`,sass 中使用`:deep()`。

```vue
<style lang="less" scoped>
/deep/.ant-card-head-title {
  background: yellowgreen;
}
</style>
<style lang="scss" scoped>
:deep(.ant-card-head-title) {
  background: yellowgreen;
}
</style>
```

- [vue 中的 css 深度选择器到底是什么？ - 掘金](https://juejin.cn/post/6978781674070884366)
- [某天，我的 sass-loader 突然不认 /deep/ 语法了 - 掘金](https://juejin.cn/post/7085915259541667847)
