# 使用 Element UI

ElementUI 经验总结。

## Table

### 每列宽度使用百分比

在 width 属性上写百分比宽度是不生效的。需要在 min-width 上设置百分比。

因为在 width 上设置的值在解析时会被直接去掉百分号变成 px。换成 min-width ，虽然解析时也会将百分比去掉换成 px，但 min-width 会按照比例分配剩余空间。因此，每一列都设置 min-width ，就能实现每一列都是百分比的宽度。在设置数字时也不需要关注其总和是不是 100%，宽度直接会按比例计算。

- [Element UI 使用 table 组件设置 el-table-column 宽度 width 为百分比无效的问题解决方案\_八了个戒的博客-CSDN 博客\_element table 列宽百分比](https://blog.csdn.net/xh_jing/article/details/120173863)

### 可能用到的

- [解决 element table 宽高自适应 - 掘金](https://juejin.cn/post/6979424132823777287#comment)
