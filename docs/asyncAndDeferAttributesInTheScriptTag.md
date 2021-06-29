# script 标签中的 async 和 defer 属性

说说`<script>`标签，通常用作嵌入或引用可执行脚本。

## script 标签的属性

src:这个属性定义引用外部脚本的 URI，这可以用来代替直接在文档中嵌入脚本。指定了 src 属性的 script 元素标签内不应该再有嵌入的脚本。

type:该属性定义script元素包含或src引用的脚本语言(text/javascript)。如果type属性为module，代码会被当作JavaScript模块。

async:并行请求，并尽快解析和执行.并行请求从而消除解析阻塞。

![](https://i.loli.net/2021/06/29/whkljaHErv38XTi.png)

defer:

![](https://i.loli.net/2021/06/29/6eGygP7tkXLOuAx.png)

crossorigin:

![](https://i.loli.net/2021/06/29/Est72uLzZgnA9Qp.png)

## reference

1. MDN-script https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script
