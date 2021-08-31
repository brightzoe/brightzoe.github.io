# Set 和 Map

## Map

传统的 js 对象只能用字符串作为 key,使用上有很多限制。

ES6 的 Map 数据结构，类似于对象，是键值对的集合，但 key 不限于字符串，各种类型的值都可以当作键。

可以说 Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

### 常用方法

```js
const m = new Map();
m.set(a, b); //添加键值对
m.get(a); //取对应的值

m.has(a); //true 含有对应的key
m.delete(a); //true 删除对应key 的键值对

m.size; //0 map的长度
map.clear(); //清除所有的成员，没有返回值

//set方法返回的是当前的Map对象，因此可以采用链式写法。
let map = new Map().set(1, "a").set(2, "b");

//遍历方法
//Map 的遍历顺序就是插入顺序。
m.keys(); //返回键名的遍历器
m.values(); //返回所有值的遍历器
m.entries(); //返回所有成员的遍历器
m.forEach(); //遍历map 的所有成员

//访问遍历器 使用for of
//MapIterator {"F", "T"}
for (let key of map.keys()) {
	console.log(key);
}
```

### 与其他数据结构的转换

```js
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

//对象转为map
let a = {b:1}
let m = new Map(Object.entries(a))//Object.entries 转为数组

//自己实现转换为map 的函数
function objToMap(obj){
  let res = new Map()
  for(let key of Object.keys(obj)){
    res.set(key,obj[key])
  }
  return res
}
objToMap(a)

//map 转为对象,对象的key 只能是字符串，所以 map 转为对象，如果key 都是字符串可以无损转换，否则key 会被转换为字符串。
function mapToObj(map){
  let res = Object.create(null)
  for(let [k,v] of map){
    res[k] =v
  }
  return res
}
```

### WeakMap

类似于 map,也是键值对的集合。
#### 特点：

1. **只接受对象作为 key** ,null 除外。其他类型的作为键名会报错

2. 其次，WeakMap 的键名所指向的对象，不计入垃圾回收机制。
   > 它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。

WeakMap 的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap 结构有助于防止内存泄漏。

WeakMap 只有四个方法可用：get()、set()、has()、delete()。

#### 语法特点：

1. 没有遍历操作（即没有 keys()、values()和 entries()方法），也没有 size 属性。因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，为了防止出现不确定性，就统一规定不能取到键名。

2. 无法清空，即不支持 clear 方法。

#### 实际用途
1.  DOM 节点作为键名。一旦这个 DOM 节点删除，记录在节点上的值就会消失，不存在内存泄漏风险。

2. 部署私有属性。内部属性是实例的弱引用，所以如果删除实例，它们也就随之消失，不会造成内存泄漏。

## Reference

1.  ECMAScript 6 入门 - 阮一峰 https://es6.ruanyifeng.com/#docs/set-map
2.  MDN-Map https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
