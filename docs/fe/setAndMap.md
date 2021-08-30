## Map

传统的 js 对象只能用字符串作为 key,使用上有很多限制。

ES6 的 Map 数据结构，类似于对象，是键值对的集合，但 key 不限于字符串，各种类型的值都可以当作键。

可以说 Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

```js
const m = new Map()
m.set(a,b)//添加键值对
m.get(a)//取对应的值

m.has(a) //true 含有对应的key
m.delete(a)//true 删除对应key 的键值对

m.size //0 map的长度
map.clear()//清除所有的成员，没有返回值

//set方法返回的是当前的Map对象，因此可以采用链式写法。
let map = new Map()
  .set(1, 'a')
  .set(2, 'b')

//遍历方法
//Map 的遍历顺序就是插入顺序。
m.keys() //返回键名的遍历器
m.values() //返回所有值的遍历器
m.entries() //返回所有成员的遍历器
m.forEach() //遍历map 的所有成员

//访问遍历器 使用for of
//MapIterator {"F", "T"}
for (let key of map.keys()) {
  console.log(key);
}

//数组转换为map
let kvArray = [["key1", "value1"], ["key2", "value2"]];
let myMap = new Map(kvArray);

//转为数组，快速的方法是用...展开运算符
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()]
// [1, 2, 3]

[...map]
// [[1,'one'], [2, 'two'], [3, 'three']]

//对map 进行操作，可以使用map 的forEach 方法，也可以按上面转换为数组，使用数组的filter ,map等方法
```

## Reference

1.  ECMAScript 6 入门 - 阮一峰 https://es6.ruanyifeng.com/#docs/set-map
2.  MDN-Map https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
