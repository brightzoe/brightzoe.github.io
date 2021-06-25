# 前端换肤，一键切换主题的实现

最初是在看 docsify 的文档的时候，看到官方提供了几款主题可以选择，并在文档中提供了一键切换主题预览不同效果的功能。想一下一键切换主题这个需求还是经常会遇见的，一般这种需求是一键切换白天和黑夜模式，或者一键切换配色。大概是怎么实现的呢？

自己的思考：
比较复杂的实现方式，先不考虑性能消耗等各种：
可以写不同的 css 文件，设置点击事件，head 标签里动态添加移除 link 标签实现。

## docsify 是如何实现的？

点击 docsify 的切换主题按钮，打开控制台查看网页源码，看到 docsify 是引入了全部的 link，并通过点击给不同的 css link 设置 disabled 属性实现,实现很简单。

> link 标签，rel="stylesheet",可以使用 disabled 属性设置是否生效，更多的属性参考 MDN 的 link 文档，链接见 reference[1]

docsify 源码：

```js
var preview = Docsify.dom.find(".demo-theme-preview");
var themes = Docsify.dom.findAll('[rel="stylesheet"]');

preview.onclick = function (e) {
	var title = e.target.getAttribute("data-theme");

	themes.forEach(function (theme) {
		theme.disabled = theme.title !== title;
	});
};
```

在 html 中给点击切换主题的按钮设置不同的`data-theme`属性，与 css link 的`title`对应，其中`preview`为切换主题按钮的父元素。
其中`find`，`findAll`是`docsify`自己实现的对 dom 操作的函数，不需纠结，操作 dom 可以选中对应的元素即可。
![](https://i.loli.net/2021/06/24/dgP61nR3BSIlQKH.png)

好的，和 docsify 文档一样，我也在这里添加了切换皮肤的按钮,请点击切换：

<div class="demo-theme-preview">
  <a data-theme="vue">vue.css</a>
  <a data-theme="buble">buble.css</a>
  <a data-theme="dark">dark.css</a>
  <a data-theme="pure">pure.css</a>
</div>

<style>
  .demo-theme-preview a {
    padding-right: 10px;
  }

  .demo-theme-preview a:hover {
    cursor: pointer;
  }
</style>

<script>
  var preview = Docsify.dom.find('.demo-theme-preview');
  var themes = Docsify.dom.findAll('[rel="stylesheet"]');
  preview.onclick = function (e) {
  var title = e.target.getAttribute('data-theme');
    themes.forEach(function (theme) {
      theme.disabled = theme.title !== title;
      });
  };
</script>

//TODO:给自己挖坑，待填。

## 通过 css 变量实现

但可能存在一定的兼容性问题。[点击查看 css variables 的兼容性](https://caniuse.com/?search=css%20variables)

```css
  /* 根伪类 */
  :root  {
      /* 自定义属性，不是实际的变量 */
      --primary-color:'#gaf34d'
  	  --fill-1: #fff;
  	  --text: #3c3c3c;
  	  --text-1: #757575;
  	  --text-2: #222;
  	  --font-size-large: 18px;
  	  --font-size-medium: 14px;
  	  --font-size-small: 12px;
  }
  [data-theme="dark"] {  
      --fill-1: #222;  
      --text: #fff;  
      --text-1: rgba(255, 255, 255, 0.3);  
      --text-2: #ffcd32;
  }
  html{
    /* 改变变量的值，则改变了background */
    background: var(--primary-color);
  }
```

```js
  changeTheme() {
    document.documentElement.setAttribute(
      "data-theme",
      this.theme ? "light" : "dark"
    );
  }
```

这样动态修改html的`data-theme`属性的值,使相应的 css 变量改变，进而影响对应设置的 css。
相应demo: https://github.com/brightzoe/skin/tree/brightzoe/css-variables

> `:root`:根伪类,用于声明全局 CSS 变量。
> 对于 HTML 来说，`:root` 表示 `<html> `元素，除了优先级更高之外，与 html 选择器相同。
> DOM 元素的 style 对象：`CSSStyleDeclaration`,可以用来操作 dom 改变 style 样式。 https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration 。 `document.body.style.setProperty("--primary-color", "red")` 或 `document.body.style.background="green"`

## 总结：

在项目中一键换肤的实现方式大概有以下几种：

1. 抽取通用的样式写在一个 css 文件。另外用 link 标签引入两套不同的皮肤 css 文件，通过点击事件来切换不同 link 的 disabled 属性来实现。如上面 docsify 的实现方式。
2. 使用CSS变量，在不同属性下，为变量设置不同的值。
>以上方式是不永久的，刷新或再打开仍然是默认样式，没有与服务器通信记住改变后的样式，只是改变了当前页面。

## reference

1.  `<Link>`标签 https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link
2.  CSS 变量的用法 https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties
3.  前端换肤的 N 种方案 https://juejin.cn/post/6844904122643120141#heading-0
