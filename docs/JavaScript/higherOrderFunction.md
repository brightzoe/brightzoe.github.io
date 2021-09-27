# 高阶函数

forEach、filter、map、some、every、find、findIndex、reduce 等。

## 怎么理解高阶函数

操作其他函数，将其他函数作为参数或返回值。

特点:

- 可以对某种特定的动作进行抽象。
- 可以提高代码可读性/可维护性，容易避免错误。

:::note

函数就是一个普通的值.

纯函数:一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。 i.e. 靠谱的函数

:::

## 常用高阶函数

### forEach

`ary.forEach(action)` 对数组的每个元素执行一次给定的函数。

特点：

- 对数组进行迭代，直接操作原有数组，没有返回值。
- 除了抛出异常以外，**没有办法中止或跳出 forEach() 循环**。

简单实现：

```js
Array.prototype._forEach = function (callback, thisArg) {
	if (typeof callback !== "function") {
		throw "参数必须为函数";
	}
	if (!Array.isArray(this)) {
		throw "只能对函数应用此方法";
	}
	if (!thisArg) thisArg = this;
	for (let i = 0; i < this.length; i++) {
		// callback(this[i], i, this);
		callback.call(thisArg, this[i], i, this);
	}
};
```

有可能犯的错误[引用数据类型，基本数据类型]:

```js
const arr = [1, 3, 5];
arr.forEach((item, index) => {
	item = item + 10;
});
// arr:[1,3,5]
//里面是基本数据类型，并没有改变arr 里的元素

const foo = [{ a: 1 }, { a: 2 }];
foo.forEach((item, index) => {
	item.a = item.a + 10;
//  [{ a: 11 }, { a: 12 }];
```

### map

`ary.map(mapper)` //mapper

特点：

- 对原数组进行一个映射，对每个元素执行映射函数，返回一个新的数组，不改变原有数组。

:::caution

如何选择合适的方法？

[生动形象解释forEach、filter、map、some、every、find、findIndex、reduce间的区别 - 掘金](https://juejin.cn/post/6844903870154588168#heading-0)

- 从语义上分析：

  forEach: 对数组进行批量操作

  map:映射，生成原始数据的特征信息的map

  filter:筛选，过滤

  some: 有没有符合条件的？只要找到一个符合条件的，就回来报告true 所以并不会全部遍历，不做多余的活（性能优良）

  every: 全符合条件吗？every对每一个元素执行一个callback，直到它找到一个使 callback 返回 false的元素，就返回false，直到遍历完成也没有返回false的话，就返回true

  find: 返回一个符合的。 find和some很类似，都是寻找符合条件的，有一个就可以 不过some进去搜罗了一圈回来报了个“有”（true），而find则把那个土豆抱了出来（返回第一个符合条件的对象）

  findIndex: 返回第一个符合条件的索引号

  reduce: 归并


:::

### reduce

`ary.reduce(reducer,[initialValue])` //归并函数，折叠数组，根据整个数组计算一个值(提供初始值比较安全)

### filter,every,some

filter: 创建一个新数组，其包含通过所提供函数实现的测试的所有元素.

- 不会改变原数组，它返回过滤后的新数组。

### 注意事项

forEach 遍历的范围在第一次调用 callback 前就会确定。调用 forEach 后添加到数组中的项不会被 callback 访问到。如果已经存在的值被改变，则传递给 callback 的值是 forEach 遍历到他们那一刻的值。已删除的项不会被遍历到。如果已访问的元素在迭代时被删除了(例如使用 shift()) ，之后的元素将被跳过。

> map,filter 等也是如此。

使用箭头函数，thisArg 参数会被忽略：

```js
var arr1 = [1, 2, 3];
var arr2 = [7, 8, 9];

arr1.forEach(function (v, i, arr) {
	console.log(this);
}, arr2);
// [7, 8, 9]
// [7, 8, 9]
// [7, 8, 9]

arr1.forEach((v, i, arr) => {
	console.log(this);
}, arr2);
// window
// window
// window
```

## reference

1. [JavaScript 中 forEach、map、filter 详细 - 掘金](https://juejin.cn/post/6844903807176933384#heading-2)
2. [生动形象解释forEach、filter、map、some、every、find、findIndex、reduce间的区别 - 掘金](https://juejin.cn/post/6844903870154588168#heading-0) [推荐]
