# 一些简单的动画效果

包括 animation，translation,transform 等的基础使用。

## transform,translation,translate 的区别

- transform 是转换，指的是改变所在元素的外观，它有很多种手段(转换函数)来改变外观，例如 位移、缩放、旋转 等，而其中的位移的函数名就叫 translate，所以说，translate 是 transform 的一部分。
- transition 是过渡，指的是某个 CSS 属性值如何平滑的进行改变，就是平常说的 动效。而 transform 是没有动画效果，你改变了它的值，元素的样子就唰的改变了。

### translation 过渡动画

```css
transition: [属性名] [持续时间] [速度曲线] [延迟时间];
transition: height 2s ease 0.5s;

//多个属性指定多个过渡
transition: height 2s, width 3s;
```

### transform 转换

```css
//接受一个转换函数。
transform:translate(x, y); //位移
transform:scale(x, y)//缩放
transform:rotate(angle)//顺时针旋转
transform: translate(10px, 10px) rotate(10deg);//给一个元素配置多个转换函数

```
### translation 与transform 对文档流的影响

```css
//transition:宽高变化，以左上角为中心，会把其他元素挤开。占的实际地方会变大。
.box {
    width: 100px;
    height: 100px;
    transition: all 0.4s ease;
}

.box:hover {
    width: 120px;
    height: 120px;
}


//transform: 以元素中心为变化，只影响当前元素状态，不会影响其他元素。也可以改变中心位置。
.box {
    width: 100px;
    height: 100px;
    transition: all 0.4s ease;
}

.box:hover {
    transform: scale(1.2, 1.2);
}
```
## 实例

一些好用的动画:

1. 卡片聚焦的效果：
  ![](https://i.loli.net/2021/08/02/JjqbUf2lTtm7YSw.gif)
  ```css
  .wrapper{
    transition: all 0.2s ease-in-out;
  }
  .wrapper:hover {
    transform: scale(1.05, 1.05);
  }
  ```
2.  向往外面的图片，不能出圈圈。效果展示：
    ![](https://i.loli.net/2021/08/02/PETa1dcnrYyAitS.gif)

    demo人间富贵花代码：
    https://codepen.io/brightzoe/pen/dyWOEBp

    核心是：
    里面的元素`transition: all 0.4s ease-in-out;`,设定动画效果。

    外面的 hover 时，里面`transform: scale(1.1, 1.1);`,变换成什么样子。

    同时外面`overflow:hidden`,不能越过我画的圈圈！

## Reference

1. []探究 CSS3 中的 transition 和 transform 属性](https://www.jianshu.com/p/80f6051389bd)
