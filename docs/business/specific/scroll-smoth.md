---
keywords: [pref, raf, scroll]
---

# 平滑滚动

一般的业务场景，点击回到顶部的标签，滚动到顶部，一般通过 a 标签的 href 属性，利用锚点实现，但这个滚动的效果需要优化。

## 浏览器原生支持平滑滚动

在 PC 浏览器中，网页默认滚动是在`<html>`标签上的，移动端大多数在`<body>`标签上，所以直接加上`scroll-behavior` 即可。

```css
html,
body {
  scroll-behavior: smooth;
}
```

- ["scroll-behavior" | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/?search=scroll-behavior)

有一定的兼容问题，但可以都加上，不生效也没有损失。

## JS window.scrollTo

```js
window.scrollTo(x, y);

// 设置滚动行为改为平滑的滚动
window.scrollTo({
  top: 1000,
  left: 0,
  behavior: 'smooth',
});
```

- [Window.scrollTo() - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo)

可以与上面的`scroll-behavior` 结合使用，实际测试也存在兼容性问题，edge 并不平滑。

## JS Element.scrollIntoView

```js
target.scrollIntoView({
  behavior: 'smooth',
});
```

- [Element.scrollIntoView() - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)

有兼容性问题，MDN 写了 edge 支持，但实际测试并没有平滑滚动的效果。

## scrollTo + 定时执行

兼容处理

```js
let requestId;
function scrollToTop() {
  if (!window.requestAmimationFrame) {
    //兼容性判断
    window.requestAnimationFrame = function (callback) {
      setTimeout(callback, 16.67);
    };
  }
  const height = document.documentElement.scrollTop || document.body.scrollTop; //当前滚动高度
  if (height > 0) {
    requestId = window.requestAnimationFrame(scrollToTop);

    //滚动速度先慢后快，数值根据实际高度要调节。但具体滚动速度，滚动时间是不可控的
    if (height > 60) {
      window.scrollTo(0, height - height / 8);
    } else {
      window.scrollTo(0, 0);
      window.requestAnimationFrame(scrollToTop);
    }
  } else {
    window.cancelAnimationFrame(requestId);
  }
}
scrollToTop();
```

```js
//匀速滚动实现
function scrollToTop() {
  if (document.documentElement.scrollTop === 0) {
    return;
  }
  let speed = 40;
  document.documentElement.scrollTop -= speed; //每一帧滚动一个 speed 的高度
  requestAnimationFrame(scrollToTop);
}
scrollToTop();
```

### 实现 2s 内变速滚动到位

变速滚动，先慢后快再慢，并控制滚动的时间为 2 秒。一般的显示器 FPS 为 60 ，2s 内滚动，则执行 120 次 RAF,控制每次滚动的距离先增后减。

```
//假设最小的步长为x
第1帧 document.documentElement.scrollTop - x * 1
第2帧 document.documentElement.scrollTop - x * 2
第3帧 document.documentElement.scrollTop - x * 3
...
第60帧 document.documentElement.scrollTop - x * 60
第61帧 document.documentElement.scrollTop - x * 60 //速度达到峰值
第62帧 document.documentElement.scrollTop - x * 59
第63帧 document.documentElement.scrollTop - x * 58
...
第120帧 document.documentElement.scrollTop - x * 1

x = distance / (1+2+3···+60+60+59+···+2+1) = distance / 60 / 61
```

```js
function scroll() {
  dateBegin = Date.now();
  let current = document.documentElement.scrollTop;
  // 使用promise用来统计时间
  new Promise((resolve, reject) => {
    let unit = current / 60 / 61; //最小步长
    let index = 0;
    let cb = () => {
      if (document.documentElement.scrollTop === 0) {
        dateEnd = Date.now();
        resolve([dateBegin, dateEnd]);
      } else {
        index++;
        if (index <= 60) {
          current -= index * unit;
          //这个地方不要用document.documentElement.scrollTop代替current，
          //document.documentElement.scrollTop可以接受浮点数，之后会转化为整数
          //这样的话会使时间变的不准
        } else if (index > 60) {
          current -= (121 - index) * unit;
        }
        document.documentElement.scrollTop = current;
        requestAnimationFrame(cb);
      }
    };
    requestAnimationFrame(cb);
  }).then((data) => {
    console.log(data[1] - data[0], ' ms');
  });
}
scroll();
```

如果在滚动的过程中滚动鼠标，会影响设置的滚动效果，此时可以尝试监听鼠标的滚轮事件 mousewheel，preventDefault。

- [变速滚动](https://juejin.cn/post/6844903925473083405#heading-8)

### requestAnimationFrame

告诉浏览器，希望执行一个动画，要求浏览器在下次重绘之前调用指定的 callback 来更新动画。

执行时间：1s/刷新率 ，一般为 1000ms / 60 = 16.67ms 执行一次

```js
const id = window.requestAnimationFrame(callback);

window.cancelAnimationFrame(id); //取消回调函数的执行
```

特点：

- requestAnimationFrame 在每一帧的生命周期都会触发，会使动画更加流畅，而 setInterval 不能保证每一帧都能触发。
- requestAnimationFrame 是在主线程上完成的。如果主线程非常繁忙，requestAnimationFrame 的动画效果会大打折扣。
- 后台标签页或者隐藏的`<iframe> `里的 RAF 会被暂停调用以提升性能和电池寿命。
- RAF 兼容性还是比较高的的，但最好添加 setTimeout 实现 polyfill。

- [window.requestAnimationFrame - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)

## Reference

- [CSS scroll-behavior 和 JS scrollIntoView 让页面滚动平滑 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2018/10/scroll-behavior-scrollintoview-%e5%b9%b3%e6%bb%91%e6%bb%9a%e5%8a%a8/comment-page-1/#comment-423108)
- [平滑滚动的实现(上) - 掘金](https://juejin.cn/post/6844903925473083405#heading-3)
