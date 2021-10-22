#　参数传递

JS 中的变量分为原始类型和引用类型。调用变量，赋值，原始类型按值调用，引用类型按引用调用。
[JavaScript参数传递的深入理解 - 掘金](https://juejin.cn/post/6844903495976386573)

JS 中的**参数传递都是按值传递**，不可能按引用传递参数。如果把对象作为参数传递，那么传递的值就是这个对象的引用。（对对象的引用作为传递的值，或者说传递的值是这个对象的地址）

```js
//原始类型按值传递
function addTen(num) {
	num += 10;
	return num;
}
let count = 20;
let result = addTen(count);
console.log(count); // 20，没有变化,只是把20传递给了函数参与运算，并没有改变count 这个变量
console.log(result); // 30
```

```js
//对象也是按值传递的
function setName(obj) {
	obj.name = "Nicholas";
	obj = { name: "Greg" }; //obj指向了新对象，已经不指向person了。
	//如果是按对person的引用传递，这里也会把person改为{ name: "Greg" }，而这里实际是把person的引用当作值给了obj,然后把新的对象给了obj,扔了person的引用 不要了，值变成了一个新对象的引用，而person 是不变的
}
let person = { name: "alan" };
setName(person);
console.log(person.name); // "Nicholas"
```

[JS 函数参数是按地址传递还是按值传递？ - 知乎](https://zhuanlan.zhihu.com/p/40261600)

## Reference

- [10.3 理解参数 JavaScript 高级程序设计（第 4 版）-马特·弗里斯比-微信读书](https://weread.qq.com/web/reader/751326d0720befab7514782ke2c32140247e2c420d92577)
- [JS 函数参数是按地址传递还是按值传递？ - 知乎](https://zhuanlan.zhihu.com/p/40261600)
- [JavaScript参数传递的深入理解 - 掘金](https://juejin.cn/post/6844903495976386573)
