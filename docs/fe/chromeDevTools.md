# 更好地使用 Chrome DevTools

学习掘金小册： [你不知道的 Chrome 调试技巧](https://juejin.cn/book/6844733783166418958/section/6844733783187390477)

## 通用

- 对数据进行复制和保存
  `copy(a)`这样就可以复制到剪贴板上啦,可以 copy 任何可以拿到的资源。不知道这种方式的时候，复制一个对象的方法可太蠢了= =

  ![](https://user-gold-cdn.xitu.io/2018/12/7/16787442a1444125?imageslim ":size=50%")

- 快捷键
  - Ctrl + 1/2/3 切换不同 devtools 面板
  - Ctrl + [ / ] 切换不同 devtools 面板
  - F1 打开设置
  - Ctrl + Shift + P 输入命令
  - Ctrl + P 寻找文件
- 一些命令
  首先要通过 Ctrl +Shift + P 打开命令行窗口
  - screenShot 截图
    Capture area screenshot: 选择一个矩形区域并截图
    Capture full size screenshot: 整个网页截图
    Capture node screenshot: 单独截图某个节点区域，需要先去 Elements 面板选中节点再执行指令。
    Capture screenshot: 截图当前网页可视区域

作者：Francecil
链接：https://juejin.cn/post/6867099026995560455
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 一些实际场景

- 调试某些情况下的浮窗(https://juejin.cn/post/6867099026995560455#heading-3)
  鼠标移动到某个区域时出现一个浮窗，移开时浮窗消失。
  1. 可以通过提前切出 Command 面板，焦点处于输入框中，此时鼠标移动到相应区域显示浮窗。另一方面， Command 面板输入 Disable JavaScript 并回车禁用 js
  2. settimeout debugger
  3. 父元素断点调试：Elements 面板 -> 父元素右键 Break on -> subtree modifications

## Reference：

1. [快捷键-chrome](https://developer.chrome.com/docs/devtools/shortcuts/)
