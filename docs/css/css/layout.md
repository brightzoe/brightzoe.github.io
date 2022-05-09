---
sidebar_position: 2
description: css layout
keywords: [css,layout]
---

# 布局

## 搞不懂的 `height`

- `height:100%` 百分比基于什么计算？

如果一个块级元素的高度是百分数，这个值是包含块高度的百分数。如果没有显式声明包含块的高度（固定高度或有效的百分比高度），子元素的百分比高度无效；从 html 元素向下一层一层传递的百分比是有效的。

如果用百分数表示 margin 或 padding， 值是包含块宽度的百分数。

- html,body 高度的设置： [HTML vs Body: How to Set Width and Height for Full Page Size](https://www.freecodecamp.org/news/html-page-width-height/)

使用非绝对高度时的，如何让 `height:100%`生效，撑满整个高度？

```html
<!--从 html>body 到目标元素，全部设置`height:100%`,一层一层传下去，如下所示：  -->
<html>
  <head>
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      div {
        height: 100%;
        background: red;
      }
      p {
        margin: 10%;
        background: green;
        height: 50%;
      }
    </style>
  </head>

  <body>
    <div>
      <p>这样这个div的高度就会100%了</p>
    </div>
  </body>
</html>
```

> 但是应该尽量避免这种多层百分比高度嵌套的风格。

如果要设置全屏的高度，也可以这样：

```css
html {
  height: 100%;
}

body {
  min-height: 100%;
}
```

或

```css
body {
  min-height: 100vh;
  width: 100%;
}
```

:::tip

宽度上尽量不要使用 100vw,由于高度上出现超过 100vh 的内容，产生纵向滚动条占了 8px 宽度。如果里面的元素写了 100vw ,会导致横向滚动条的出现。

If you set the width to 100% on the body element you will have a full page width. This is essentially equivalent to not setting a width value and allowing the default.
:::

### 重置浏览器的布局默认值

```css
* {
  margin: 0;
  padding: 0;
}
```

此方法使用通用选择器，`*`导致 CSS 渲染引擎在渲染 CSS 时遍历整个 DOM 树，影响渲染性能，同时会重置一些没必要的值，不推荐。

:::info 一些重置浏览器默认布局的库

- Sanitize.css (https://github.com/csstools/sanitize.css)
- Modern-normalize (https://github.com/sindresorhus/modern-normalize) - used by tailwind (https://tailwindcss.com/docs/preflight)
- Reboot (https://getbootstrap.com/docs/5.0/content/reboot/) - used by BS4+

You can use Sanitize.css or Modern-normalize in non-Bootstrap projects, use the built in Modern-normalize in Tailwind projects and use the already included Reboot when working on a modern Bootstrap projects (newer than 3).

[Is this library still functional/relevant/maintained as of 2021? · Issue #856 · necolas/normalize.css](https://github.com/necolas/normalize.css/issues/856)

:::

### 浏览器如何计算高度和宽度

- 宽度
  对于一个块级元素，浏览器计算的有效宽度，会考虑浏览器窗口的打开宽度，如果不设置宽度，浏览器会自动将该元素平铺填满整个横向宽度。

- 高度
  浏览器对于高度的计算方式与宽度完全不一样。事实上，浏览器根本不计算内容的高度，除非内容超出了视窗的范围，导致出现滚动条。或者你给页面设置一个绝对高度，那么浏览器会根据 css 设置这个元素的高度。否则，浏览器的行为只会简单的让内容向下堆砌，页面的高度不会被考虑。

  如果你给一个块级元素的高度设定为百分比高度，他的百分比是根据父元素高度来计算的。如果父元素元素没有一个绝对高度（固定高度或有效的百分比高度），那么无法获取父元素的高度，自然无法计算自己的高度。

  各个浏览器对于 CSS 宽高的解析不完全相同。

  :::caution
  `min-height` 不是一个有效的高度值：高度不明确。

  :::
  特殊的`min-height`为父元素的百分比生效的现象：

  //todo:why?

  ```html
  <!-- 父元素 min-height + 子元素为绝对定位 -->
  <div class="container">
    <div class="child"></div>
  </div>

  <style>
    .container {
      min-height: 100px;
      border: 1px solid;
      position: relative;
    }
    .child {
      width: 100%;
      height: 50%;
      background: red;
      position: absolute;
    }
  </style>
  ```

  ```html
  <!-- 父元素 min-height + 父元素为flex-item -->
  <div class="box">
    <div class="container">
      <div class="child"></div>
    </div>
  </div>

  <style>
    .box {
      display: flex;
    }
    .container {
      width: 100%;
      min-height: 100px;
      border: 1px solid;
    }
    .child {
      height: 50%;
      background: red;
    }
  </style>
  ```

  ```html
  <!-- 父元素 min-height + 父元素为 grid -->

  <div class="container">
    <div class="child"></div>
  </div>

  <style>
    .container {
      width: 100%;
      display: grid;
      min-height: 100px;
      border: 1px solid;
    }
    .child {
      height: 50%;
      background: red;
    }
  </style>
  ```

## 水平居中，垂直居中的设置方式

1. 绝对定位加 `transform`

   ```html
   <div class="div1">
     <div class="div2">height:100%;</div>
   </div>
   <style>
     .div1 {
       background-color: blueviolet;
       position: relative;
       height: 500px;
     }
     .div2 {
       font-size: 30px;
       color: white;
       text-align: center;
       width: 400px;
       position: absolute;
       left: 50%;
       top: 50%;
       transform: translate(-50%, -50%);
     }
   </style>
   ```

2. 绝对定位 + margin:auto
3. flex

4. grid

   place-items: center

5. table
6. 行内元素： line-height=height

## 常见布局实现

- 左侧固定，右侧自适应

  左侧：flex-basis:100px;flex-grow:1

  右侧：flex-shrink:0

- 假设高度已知，实现三栏布局，左右均为 300px ,中间自适应

  选取方案： 浮动、绝对定位、flex,table-cell,grid

  https://codepen.io/brightzoe/pen/NWvPmJe

  :::note
  如何抉择：

  浮动： 清除浮动的问题，兼容性好。

  绝对定位：脱离文档流，下面的也要注意。快捷方便。

  flex: 没有以上两种的缺点，最好用的。

  table: 兼容性好。其中一个单元格增高时其他单元格也会跟着变化，可能不符合要求。

  grid: 可能有一定兼容性问题。

  :::

  如果高度不限，该如何？

  float 将失效，中间内容超出会从左边开始。通过创建 BFC 解决。

  grid 布局也有问题：`grid-template-rows:100%` 调整高度就可以了。

## 响应式页面适配

## Reference

- [HTML vs Body: How to Set Width and Height for Full Page Size](https://www.freecodecamp.org/news/html-page-width-height/)
- [前端小知识--为什么你写的 height:100%不起作用？ - SegmentFault 思否](https://segmentfault.com/a/1190000012707337)
- [Is this library still functional/relevant/maintained as of 2021? · Issue #856 · necolas/normalize.css](https://github.com/necolas/normalize.css/issues/856)
