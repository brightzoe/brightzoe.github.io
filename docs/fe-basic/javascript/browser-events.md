## 浏览器的事件

常见事件：

- Mouse events: click、contextmenu、mousemove、mousedown...
- Keyboard events: keydown、keyup
- form events: submit、focus
- document events: DOMContentLoaded

## 添加事件

```html
<input type="button" onclick="alert('Click!')" value="Button" />
```

```js
elem.onClick = function (e) {};

elem.addEventListener('click', function handler() {}, [options]); //通过 removeEventListener 移除监听
```

- onxx 的方式，不能添加多个事件，后面添加的事件会 overwrite 前面添加的事件。
- addEventListener 可以添加多个事件，不会覆盖。

## 事件机制

事件三个阶段：捕获-目标-冒泡

事件 handler 触发一般是在冒泡阶段触发。若需要从capture阶段触发，可以设置`{capture:true}`。

## 事件委托

事件委托（时间代理）利用了事件冒泡机制。事件在冒泡过程中上传到父节点，父节点通过事件对象获取目标节点。把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。

特点：

- 减少内存消耗
- 动态绑定事件 与目标元素增删无关，都可以找到。否则需要在元素删除前移除事件，元素新增后绑定事件比较麻烦。也在此处踩过坑，重新渲染导致：元素删除重新增加没有重新绑定事件。

## Reference

-[Introduction to browser events](https://javascript.info/introduction-browser-events)
