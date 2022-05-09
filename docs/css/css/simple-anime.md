# 一些简单的动画效果

包括 animation，translation，transform 等的基础使用。

## 常用的 hover 状态切换

### 背景：

常见的业务需求，按钮在 hover 时切换效果。我写了这样的样式：

```css
.prev {
  background: no-repeat url("https://i.loli.net/2021/08/24/kglaB1zyCs5ZvJw.png");
}
/* 第一次页面加载，hover上去会闪烁，因为下面的图片地址会在hover的时候才加载
  解决方式： 可以现在页面实例化这个图片
  */
.prev:hover {
  background: no-repeat url("https://i.loli.net/2021/08/24/PucWs9XmoknV7yF.png");
}
```

### 发生的问题：

在页面第一次加载的时候，hover 上去背景图会闪烁一下才会显示新的图片。

### 为什么：

在页面加载后未 hover 时，没有加载 hover 时需要的图片，在 hover 之后才加载新的图片，加载的时间会使图标闪烁。

### 如何解决：

1. 不使用这种方式，使用两张图片，都放在 img 标签里，使用两张图片的 display 来切换。
2. 使用 svg ，比如 iconfont，如果只是颜色的改变可以直接改变颜色不用改变图片。
3. 如果要使用 background-image 的变化来设置，可以把 hover 后的图片提前加载，在页面中先把资源实例化，就不会闪烁啦。
   ```js
   //https://codesandbox.io/s/hover-backgroundshan-shuo-de-wen-ti-11yv5?file=/index.js
   let img = new Image();
   img.src = "https://i.loli.net/2021/08/24/PucWs9XmoknV7yF.png";
   ```

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

### translation 与 transform 对文档流的影响

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
.wrapper {
  transition: all 0.2s ease-in-out;
}
.wrapper:hover {
  transform: scale(1.05, 1.05);
}
```

2.  向往外面的图片，不能出圈圈。效果展示：
    ![](https://i.loli.net/2021/08/02/PETa1dcnrYyAitS.gif)

    demo 人间富贵花代码：
    https://codepen.io/brightzoe/pen/dyWOEBp

    核心是：
    里面的元素`transition: all 0.4s ease-in-out;`,设定动画效果。

    外面的 hover 时，里面`transform: scale(1.1, 1.1);`,变换成什么样子。

    同时外面`overflow:hidden`,不能越过我画的圈圈！

## 添加动画的好用的库

1. Animate.css

   https://animate.style/

   简单好用，添加了一些常用的动画,使用简单，在上面主页上有使用方式。

## Reference

1. [探究 CSS3 中的 transition 和 transform 属性](https://www.jianshu.com/p/80f6051389bd)
