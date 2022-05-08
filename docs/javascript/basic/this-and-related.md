# this,call,apply,bind

## this

### this 是什么

调用函数时，解析器向函数内部传递的一个参数，指向函数执行的上下文对象。**this 取决于函数的调用形式,**与在哪调用,在哪定义没有关系。

> 与作用域不同，作用域取决于函数在哪定义。

### this 的指向

- 以对象的方法的形式调用时，函数的 `this` 就是调用它的对象。(如 `array.length`)
- 以普通函数形式调用时，在浏览器中`this` 是 `window`
- 用 `new` 来调用 `this` 时，`this` 就是那个新建的对象。(如构造函数)
- 用 `call` 和 `apply` 调用时，`this` 是指定的那个对象。
- 函数可以用 `bind()` 绑定 `this` 的指向。
- 箭头函数不会创建自己的 `this`, 它只会继承自己的作用域链的上一层作用域的 `this` 对象。

:::note
`this` 永远不能被赋值，即 `this` 不能写在等号左边。

`this` 永远指向一个对象，如果指向了一个原始数据类型会将原始数据类型包装成对象。

this 的丢失问题：`this` 指向调用的对象与函数声明的位置无关，只与调用位置有关，如果在调用位置还使用声明位置的 `this`，`this` 会丢失；
解决方法通过 `bind` 绑定 `this` 或者通过箭头函数。

箭头函数的 `this` ，总是继承外层函数的对象，在定义时就确定，与调用无关。
:::

理解 this 的很多栗子：[this、apply、call、bind - 掘金](https://juejin.cn/post/6844903496253177863#heading-0)

## call,apply,bind

call，apply 用来在函数调用时给函数绑定 this，并执行该函数。二者作用相同，传参方式不同。

=> `fn.call(obj,xx,xx,xx)` 后面是参数

=> `fn.apply(obj,[xx,xx,xx])` 参数以数组传入

bind：绑定 this 以及部分参数，返回一个新的函数。 这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

> call,apply 是直接执行该函数，bind 是返回一个新的函数，不直接执行。

### 实现

```js
//call
//不传入第一个参数，那么在浏览器默认为 window
//改变了 this 指向，让新的对象可以执行该函数。那么思路是给新的对象添加这个函数方法，然后在执行完以后删除
//// fn.call(obj,xx,xx,xx)=>obj.fn(xx,xx,xx)
Function.prototype.myCall = function (context = window) {
  //obj.fn = fn
  context.fn = this; //把调用时的this(fn) 挂在新对象context上
  // 获取剩余参数
  const otherArg = [...arguments].slice(1);
  // 将这个方法的执行结果传给 result
  const result = context.fn(...otherArg);
  // 删除这个变量
  delete context.fn;
  // 返回 result 结果
  return result;
};

//apply
//fn.apply(context,[args])=>context.fn(...args)
Function.prototype.myApply = function (context = window) {
  context.fn = this;
  //第二个参数是数组
  const args = arguments[1];
  let res;
  //是否存在参数，存在就展开处理
  if (args) {
    res = context.fn(...args);
  } else {
    res = context.fn();
  }
  delete context.fn;
  return res;
};

//bind
//fn.bind(context,...args) 绑定this,固定部分参数
Function.prototype.bind1 = function (context = window) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  const _this = this;
  const args = [...arguments].slice(1); //bind 的参数
  return function () {
    return _this.apply(context, [...args, ...arguments]); //arguments=>bind返回的函数调用时传入的参数
  };
};
//bind 完整版
//fn.bind(context,...args)
Function.prototype.myBind = function (context = window) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  var _this = this;
  var args = [...arguments].slice(1);
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, [...args, ...arguments]);
  };
};
```

## 问题

```js
const zhangsan = {
  name: "zhangsan",
  sayHi() {
    console.log(this); //当前对象
  },
  wait() {
    setTimeout(function () {
      console.log(this); //浏览器中为window
    });
  },
};
```

```js
const zhangsan2 = {
  name: "zhangsan",
  sayHi() {
    console.log(this); //当前对象
  },
  wait() {
    setTimeout(() => {
      console.log(this); //当前对象
    });
  },
};
```

## Reference

- [this、apply、call、bind - 掘金](https://juejin.cn/post/6844903496253177863#heading-2)
- [JS | 前端进阶之道](https://yuchengkai.cn/docs/frontend/#this)
