# flex

常用的一套规则：

```css
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
```

## 各个属性规则

**针对于 flex-container 的属性：**
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

**`align-items`** 侧轴方向元素在每个行中的摆放。

- flex-start
- flex-end
- center
- baseline 每一行文本基线对齐。
- stretch 仅子元素高度为 auto 时生效。

**`align-content`** 侧轴方向的空间如何分给每一个 flex 行。

- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly
- stretch

> 只适用于多行的 flex-box。

**`flex-wrap`** 在主轴方向上是否折行。

- nowrap
- wrap
- wrap-reverse

**`flex-flow`** `flex-direction` 与 `flex-wrap`的简写。 按什么方向，是否折行。

- `flex-flow: column wrap;`

**针对于 flex-item 的属性：**

**`align-self`** 当前元素在侧轴方向上的摆放，用于覆盖针对于所有元素的`align-items`属性。

- auto
- flex-start
- flex-end
- center
- baseline
- stretch
