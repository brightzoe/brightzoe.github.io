## 背景

- 强类型 vs 弱类型 ：

  类型安全，更强的类型约束。**强类型不允许任意隐式类型转换，弱类型允许任意类型转换。**

- 静态类型语言 vs 动态类型语言：

  被声明类型是明确的，且不允许修改。
  在运行阶段才能够明确变量类型，且随时发生变化。

![](https://i.loli.net/2021/07/23/NdEFO2ryn5ReHic.png ":size=50%")

> JS：动态类型语言，弱类型。 被设计时，小规模脚本，且不需要编译。

强类型：
错误更早暴露。
代码更智能。
重构更牢靠。

## Flow

JS 的类型检查,是一个小工具，在需要的时候添加类型,学习成本较小。

- 使用方式

  `yarn add flow-bin`

  `yarn flow init`

  `yarn flow`

  > 工具推荐： vscode 插件 Flow Language Support

- 移除类型注解

  - `yarn add flow-remove-types`

    `yarn flow-remove-types . -d dist` //转换到某个目录下

  - `yarn add @babel/core @babel/cli @babel/preset-flow --dev`

    `{"presets":["@babel/preset/preset-flow"]}` //.babelrc

    `yarn babel src -d dist`

类型推断：如果未添加类型注解，则自动推断类型的特性，但尽可能还是添加类型注解。

> 思路：编写的代码和实际运行的代码分开，添加了编译的环节。

```js
// @flow  加在开头使用flow检测类型.也可用 /* @flow */

function sum(a: number, b: number) {
	//类型注解
	return a + b;
}

function foo(): void {
	//返回值的注解
	//类型注解：函数返回值为空
	//no return
}

//标识数组类型

//由数字组成的数组
const arr1: Array<number> = [1, 2, 3];
const arr2: number[] = [1, 2, 3];

//元组：固定长度，固定类型的数组
const foo: [string, number] = ["foo", 1];

//标识对象类型

const obj1: { foo: string, bar: number } = { foo: "string", bar: 1 }; //至少有foo,bar这两个成员
const obj2: { foo?: string, bar: number } = { foo: "string", bar: 1 }; //添加?表示可选的

const obj3: { [string]: string } = {}; //k限制key和值的类型,不限制key的个数

//标识函数类型
function foo(callback: (string, number) => void) {
	//回调函数的参数以及返回值的类型注解
	callback("string", 1);
}

//特殊类型
const a: "foo" = "foo"; //字面量类型，只能是'foo'
const type: "success" | "warning" | "danger" = "success"; //联合类型，只能是其中之一
const b: string|number //string 或者字符串

const StringOrNumber = string |number //给类型定义别名，可复用了
const b: StringOrNumber

const gender:?number = null  //加?则可以使用null/undefined
const gender: number | null | undefined //与上面一致


//mixed any 所有类型都可
//mixed :强类型，不能隐式类型转换
//any ：不限制，可以隐式类型转换，可以兼容老代码，一般不要使用
function passMixed (value:mixed){
  //...
}
function passMixed (value:any){
  //...
}
```

更多类型查询： https://www.saltycrane.com/cheat-sheets/flow-type/latest/

## TS 检查

`tsc hello.ts`
以上命令可以编译 `hello.ts`文件到 js,会在同一个目录下生成同名 js 文件。

TypeScript 只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错。而在运行时，与普通的 JavaScript 文件一样，不会对类型进行检查。

TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。

如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError

## 基础

### 数据类型

- 原始数据类型

`let isDone: boolean = false;`

- any
  `let myFavoriteNumber: any = 'seven'; myFavoriteNumber = 7;`

## Reference

1. [ts 入门教程](https://ts.xcatliu.com/)
2. [flow](https://flow.org/en/docs/usage/)
