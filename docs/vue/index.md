# Vue

组件化模式。

声明式编码 与 命令式编码相对应。

## 插值

```vue
<aside>{{ notePreview }}</aside>
```

插值如果是 html 标签会被转义而不是直接注入，可以防止注入攻击(XSS)，提升安全性。

可以用 v-html 做 html 插值，但不建议使用，非常危险。

## 计算属性

- 是函数的形式，基于他的响应式依赖进行缓存，没有必要不会重新运行。如果依赖的某个属性发生了改变，计算属性的值会根据需要自动更新。
- 像普通属性一样使用，可以在其他计算属性中使用计算属性。

```js
computed:{
  fullname:function(){
    return xx
    }
  }

```

计算属性默认只有 getter，不过在需要时你也可以提供一个 setter。 [计算属性和侦听器 — Vue.js](https://v2.cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84-setter)

## 侦听器

[API — Vue.js](https://v2.cn.vuejs.org/v2/api/#watch)

在数据变化的时候需要执行某些操作。操作是异步或开销较大时，适合使用侦听器。

```js
  watch: {
    content(val, oldVal) {
        console.log("new", val, "old", oldVal);
      },

  },
```

```js
  watch: {
    notes: {
      handler: "saveNotes",
      deep: true,//默认只会监听一层，修改数组或对象内元素的属性等不会触发监听，需要加上 deep 进行深度监听
    },
  },
```

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
