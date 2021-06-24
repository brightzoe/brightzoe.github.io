# 前端换肤，一键切换主题的实现

最初是在看 docsify 的文档的时候，看到官方提供了几款主题可以选择，并在文档中提供了一键切换主题的功能。想一下这个需求还是经常会遇见的，大概是怎么实现的呢？
自己的思考：
比较复杂的实现方式，先不考虑性能消耗等各种。
可以写不同套的 css，全部通过 link 引入，可以设置点击事件，动态添加移除 link 标签实现。

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

好的，和 docsify 文档一样，我也在这里添加了切换皮肤的按钮：

<div class="demo-theme-preview">
  <a data-theme="vue">vue.css</a>
  <a data-theme="buble">buble.css</a>
  <a data-theme="dark">dark.css</a>
  <a data-theme="pure">pure.css</a>
</div>

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

## reference

1.  `<Link>`标签 https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link
