# 简单好用的语法

不止 es6 ,es6 and above.

## 可选链操作符 Optional chaining operator

`?.` 在引用为空(nullish ) (null 或者 undefined) 的情况下不会引起错误，返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，也返回 undefined。

**用途**

1. 尝试访问可能不存在的对象属性时，可选链操作符将会使表达式更短、更简明。
2. 当尝试调用一个可能不存在的方法时也可以使用可选链。函数调用时如果被调用的方法不存在，使用可选链可以使表达式自动返回 undefined 而不是抛出一个异常。

## 空值合并运算符 Nullish coalescing operator

`??` 只有在前面为`undefined`或`null`时才会返回后面的。使用空值合并操作符为常量提供默认值，保证常量不为 null 或者 undefined。

**应用**

1. 输入框非空的判断

   ```js
   if ((value ?? "") !== "") {
   	// 不是null/undefined/''
   }
   ```

**与`||`的比较**

1. 与逻辑或操作符（||）不同，**逻辑或操作符会在左侧操作数为假值时返回右侧操作数**。

   > 布尔逻辑运算符，左侧的操作数会被强制转换成布尔值用于求值。任何假值（0， ''， NaN， null， undefined）都不会被返回。这导致如果你使用 0，''或 NaN 作为有效值，就会出现不可预料的后果。

   使用`||`时，当左侧为 0，'' 时可能会遇到问题。

   ```js
   0 ?? 42; //0

   0 || 42; //42

   "" ?? "default"; //''
   "" || "default"; //'default
   ```

2. 相同的短路特性。
   若左边不为 `undefined`/`null` ，右侧不会被执行

**注意事项**

将 ?? 直接与 AND（&&）和 OR（||）操作符组合使用是不可取的。空值合并操作符和其他逻辑操作符之间的运算优先级/运算顺序是未定义的

```js
null || undefined ?? "foo"; // 抛出 SyntaxError
true || undefined ?? "foo"; // 抛出 SyntaxError

//使用括号来显式表明运算优先级
(null || undefined ) ?? "foo"; // 返回 "foo" okk😀
```

## 解构赋值

**用法**

```js
const [a, b] = [1, 2]; //变量声明，并解构数组后赋值给变量
const { a, b, c, d, e } = obj;
const { a: a1 } = obj; // 提取变量a 并赋值给a1：a1 对应obj.a

[a, b] = [b, a]; //交换两个变量的值
```

**注意事项**

1. 要注意解构的对象不能为 undefined、null.

   ```js
   const { a, b, c, d, e } = obj || {};
   ```

2. 解构时赋予默认值.防止取出 undefined 的对象.

   ```js
   const [a = 5, b = 7] = [1];
   const { a = 10, b = 5 } = { a: 3 };
   ```

3. 同 2 在赋值时两边长度不相等，也可以忽略某些值。
   ```js
   var [a, , b] = [1, 2, 3]; //3 被忽略了
   ```
4. 将剩余的数组赋予一个变量。
   ```js
   var [a, ...b] = [1, 2, 3]; //b 必须时最后一项
   console.log(a); // 1
   console.log(b); // [2, 3]
   ```

## 扩展运算符

**应用**

1. 去重后合并数组/合并对象。

   ```js
   const a = [1, 2, 3];
   const b = [1, 5, 6];
   const c = [...new Set([...a, ...b])]; //[1,2,3,5,6]

   const obj1 = {
   	a: 1,
   };
   const obj2 = {
   	b: 1,
   };
   const obj = { ...obj1, ...obj2 }; //{a:1,b:1}
   ```

2. 数组/对象拷贝。

   ```js
   var arr = [1, 2, 3];
   var arr2 = [...arr]; // like arr.slice()
   arr2.push(4);

   // arr2 此时变成 [1, 2, 3, 4]
   // arr 不受影响
   ```

**注意事项**

```js
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects }); //这里按照剩余参数解析，和预期的展开操作行为不一致

var mergedObj = merge(obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

var mergedObj = merge({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

> 剩余语法(Rest syntax) 看起来和展开语法完全相同，不同点在于, 剩余参数用于解构数组和对象。从某种意义上说，剩余语法与展开语法是相反的：展开语法将数组展开为其中的各个元素，而剩余语法则是将多个元素收集起来并“凝聚”为单个元素。

## 剩余参数 Rest parameters

剩余参数语法允许我们将一个不定数量的参数表示为一个数组。

```js
function(a, b, ...theArgs) {
  // theArgs是一个数组
}


//可以把theArgs再解构
function(a, b, ...[c,d]) {
  // theArgs是一个数组
}
```

**剩余参数和 arguments 对象的区别**

1. 剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了传给函数的所有实参。 上面的 rest paramerters 是除了 a，b 之外的参数，而 arguments 是所有的参数。
2. arguments 对象不是一个真正的数组，而剩余参数是真正的 Array 实例。
3. arguments 对象还有一些附加的属性 （如 callee 属性）

## 模板字符串

**应用**

1. 模板字符串插入任意的表达式

   ```js
   const name = "小明";
   const score = 59;
   // 模板字符串里可以插入任意的js 表达式
   const result = `${name}${score > 60 ? "的考试成绩及格" : "的考试成绩不及格"}`;

   //可以在模板字符串的占位符内继续嵌套模板
   const classes = `header ${isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`}`;
   ```

2. 多行字符串.在新行中插入的任何字符都是模板字符串中的一部分.

   ```js
   console.log(`string text line 1
   string text line 2`);
   // "string text line 1
   // string text line 2"

   //普通字符串实现的模板字符串
   console.log("string text line 1\n" + "string text line 2");
   ```

## Array.prototype.includes()

语法：`arr.includes(valueToFind[, fromIndex])`

**应用**

1. if else 在某些情况下的简化

   ```js
   if(type == 1 || type == 2 || type == 3 || type == 4 ||){
     //...
   }

   const condition = [1,2,3,4];
   if( condition.includes(type) ){
     //...
   }

   ```

## Array.prototype.find()

精确搜索用 find，而不是 filter.

find 方法中找到符合条件的项，就不会继续遍历数组。

## Array.prototype.flat()

按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
语法：`arr.flat([depth=1])`

```js
//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
```

> //TODO:如何用不同的方法拍平数组？（扁平化嵌套数组）
> [Array.prototype.flat() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

## 对象属性名可以使用表达式

```js
let obj = {};
let index = 1;
obj[`topic${index}`] = "话题内容";
```

## Reference

- [你会用 ES6，那倒是用啊！ - 掘金](https://juejin.cn/post/7016520448204603423#heading-0)
- [可选链操作符 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [空值合并运算符 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [模板字符串 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals)
- [解构赋值 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [展开语法 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Array.prototype.flat() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
