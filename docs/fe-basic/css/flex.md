# flex 布局

常用的一套规则：

```css
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
```

## 各个属性规则

### 针对于 flex-container 的属性

**`flex-direction`** 设置主轴方向。

- row
- column
- row-reverse
- column-reverse

**`justify-content`** 主轴方向上额外空间的分配。

- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly

> 不能与 `flex-grow` 一起使用。

**`align-items`** 侧轴方向元素在**每个 flex 行**中的摆放。

- flex-start
- flex-end
- center
- baseline 每一行文本基线对齐。
- stretch 仅子元素高度为 auto 时生效。

**`align-content`** 侧轴方向的额外空间如何分给每一个 flex 行。（与`justify-content`对应）

- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly
- stretch

> 只适用于多行的 flex-box，且 flex-container 要有高度，有多余的空间。

一种特殊情况 https://codesandbox.io/s/flex-te-shu-qing-kuang-8pkmw?file=/src/App.js

**`flex-wrap`** 在主轴方向上是否折行。

- nowrap
- wrap
- wrap-reverse

**`flex-flow`** `flex-direction` 与 `flex-wrap`的简写。 按什么方向，是否折行。

- `flex-flow: column wrap;`

### 针对于 flex-item 的属性

**`align-self`** 当前元素在侧轴方向上的摆放，用于覆盖针对于所有元素的`align-items`属性。（给自己开小灶，设置个特殊情况~）

- auto
- flex-start
- flex-end
- center
- baseline
- stretch

**`flex-basis`**

在分配多余空间之前，项目占据的主轴空间。

flex-basis 不为 auto，为具体值时，flex-basis 的优先级比宽高的优先级高 (flex-basis:100px; width:200px，前者生效）

**`flex-grow`**

主轴方向上的扩展系数，直接使用，按比例分剩余的部分

**`flex-shink`**

主轴方向上的收缩系数，需要与宽度/高度相乘。空间不足时才生效，负值无效。缩小的距离即为该 item 所占的权重比例乘以整体的缩小距离。

**`flex`**

是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。

**`order`**

项目的排列顺序，默认为 0。数值越小越前面。

## Reference

- [flex 布局的基本概念 - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#%E7%AE%80%E5%86%99%E5%B1%9E%E6%80%A7_flex-flow)
- [align-items 和 align-content 的区别\_码飞\_CC 的博客-CSDN 博客\_align items](https://blog.csdn.net/cc18868876837/article/details/88138057)
