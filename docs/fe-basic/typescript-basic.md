---
tags: [typescript, ts]
---

# TS 基础

## 背景

- 强类型 vs 弱类型 ：

  类型安全，更强的类型约束。 **强类型不允许任意隐式类型转换，弱类型允许任意类型转换。**

- 静态类型语言 vs 动态类型语言：

  类型检查的时机不同。静态类型在编译阶段就确定每个变量的类型，而动态类型在运行阶段才确定每个变量的类型。

  ![](https://i.loli.net/2021/07/23/NdEFO2ryn5ReHic.png ':size=50%')

> JS：动态类型语言，弱类型。 被设计时，小规模脚本，且不需要编译。TS 也是弱类型，不会修改 JS 运行时的特性。

强类型：错误更早暴露。代码更智能。重构更牢靠。

## TS 特性

- 类型系统是核心特性。类型安全，定义了类型后的方法提示。
- 静态类型的弱类型。

## Flow

<details>
  <summary><b>JS 的类型检查工具</b></summary>

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

const StringOrNumber = string | number //给类型定义别名，可复用了
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

</details>

## tsc 命令

`.ts`文件不能直接在 node/浏览器环境中执行，需要先编译为 js 文件。如果希望在 node 环境直接运行 ts ，可以使用[`ts-node`](https://www.npmjs.com/package/ts-node)包 ，全局安装后，命令行使用`ts-node hello.ts`。

`tsc hello.ts` 以上命令可以编译 `hello.ts`文件到 js,会在同一个目录下生成同名 js 文件。

`tsc xx -w ` watch mode ，内容改变则重新编译。

`yarn tsc --init` 生成`tsconfig.json`

`tsc` 直接运行，使用 `tsconfig.json`配置文件，会编译当前目录所有 ts 文件。

```js title='tsconfig.json'
{
  "include": [ //包含的文件
    "**/*.ts"
  ],
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "declaration": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "lib": [
      "es2015",
      "dom",
      "es2016",
      "es2017",
      "esnext"
    ],
    "types": [
      "node"
    ]
  }
}
```

[TypeScript: Documentation - What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

`yarn tsc --local zh-CN` 中文错误消息。

TypeScript 只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错。而在运行时，与普通的 JavaScript 文件一样，不会对类型进行检查。

TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。

如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError

### tsup

另一个 ts 的构建工具，基于 esBuild,打包速度快，可以生成多个支持不同模块规范的包。

安装之后默认不需要配置即可使用。也可以配置入口文件、打包类型、是否生成类型文件等。

## 使用第三方库的 TS 支持问题

很多第三方库原生支持 TS，在使用时就能获得代码补全和提示。

而有些第三方库原生不支持 TS， 可以安装社区维护的类型声明库来获得代码补全的能力。比如使用`npm install --save-dev @types/react`安装 React 的类型声明库。

DefinitelyTyped 组织的类型定义，包含大多数流行的包的类型定义：[DefinitelyTyped: The repository for high quality TypeScript type definitions.](https://github.com/DefinitelyTyped/DefinitelyTyped)，他们的包名是`@types/pkgName`。

:::tip ts 类型查找顺序

类似 node 包查找顺序的递归查找

- 局部作用域：当前文件
- 项目类型声明文件: `*.d.ts`
- `node_modules/@types`

  可以通过 tsconfig.json 中 typeRoot 指定类型声明文件位置，默认为@types,会引入所有的类型声明。

  可以通过 compilerOptions.types 配置 控制需要引入哪些包的类型声明，以保证全局变量污染的问题。

:::

### 类型声明

没有类型声明文件的库，可以自己写类型声明对全局文件进行类型定义。

```ts title="xx.d.ts"
declare function replace(input: string): string; //如果没有类型声明，自己声明一下类型。
declare function replace(input: number): number; //可以相同的函数名字，参数不同，函数重载

// 命名空间的嵌套
declare namespace $$ {
  namespace hh {
    function getName(): string;
  }
  namespace fn {
    class init {}
  }
}

//声明模块
declare module 'xx' {
  export function getName(): string;
}
```

有类型声明的库，如果声明缺失内容不符合当前业务场景，可以扩展类型声明文件，实现类型融合的特性。

```ts title='custom.d.ts'
declare module Express {
  export interface Request {
    user: {
      name: string;
    };
  }
}
```

## TS 语法

### 数据类型

```ts
const a: string = 'foo';
const b: number = 100; //NaN,Infinity
const c: boolean = true;
const d: string = null; //严格模型不行
const e: void = undefined; //null/undefined
const f: null = null;
const g: undefined = undefined;
const h: symbol = Symbol();
let myFavoriteNumber: any = 'seven'; //任意类型的值并且可以改变，一般不要使用，兼容老代码使用。
myFavoriteNumber = 7;

//Object
const foo: object = function () {}; // 也可以是[] // {}
const obj: { foo: number; bar: string } = { foo: 123, bar: 'foo' }; //定义普通的对象,key要完全一致,不能多也不能少

//Array
const arr1: Array<number> = [1, 2];
const arr2: number[] = [1, 2];
const arr3: (string | number)[] = [1, '2'];

//Tuple 元组类型：固定长度，固定类型的数组
//应用： React的useState, es2017的Object.entries({foo:123})
const tuple: [number, string] = [18, 'foo'];
const age = tuple[0];
const [age, name] = tuple;

//Enum 枚举类型：只存在几个固定的值
// const postStatus ={Draft:0,Unpublished:1,Published:2} //js模拟枚举类型
enum postStatus { //枚举类型
  Draft = 0, //不指定值的话，从0开始累加。只指定第一个则从指定的值开始累加。也可以使用字符串。
  Unpublished = 1,
  Published = 5,
}
console.log(postStatus[5]); //也可以通过 value 拿到 key
const post = {
  status: postStatus.Draft,
};
//枚举类型会入侵到编译后的代码。
//会被编译成双向键值对的对象：可以通过key读取，也可以通过value读取。

//常量枚举
//如果不通过索引值的方式读取枚举类型，推荐使用常量枚举。编译后枚举类型会被移除，使用的枚举值会被替换掉，以注释的形式标注。
const enum postStatus {}
//...
```

#### 联合类型

```ts
type UnionType = string | number | boolean;
```

#### 交叉类型

```ts
type IntersectionType = { foo: string } & { bar: number };
```

#### 函数

函数的数据类型定义：

```ts
//函数声明式
function func1(a: string, b?: number): string {
  //添加参数和返回值的类型注解
  //参数个数也必须一致，不能多或少。
  //可选参数：添加问号或者使用参数默认值，必须在参数的最后一位
  //不限制参数个数 ：...rest:number
  return 'foo';
}

//有什么好处？
function sum(...args: number[]) {
  //确保传过来的参数都是数字，不用单独进行类型判断。可靠。
  return args.reduce((prev, curr) => prev + curr, 0);
}

const func = (str: string): number => {
  return parseInt(str);
};

const func: (str: string) => number = (str) => {
  return parseInt(str);
};
```

函数重载

```ts

```

### 作用域问题

如果什么也不做，在两个文件声明同名的变量，则会产生冲突，需要声明为模块。

```ts
//一个文件加上export
export {}; //以模块形式导出，一般不这样做，因为一般每个文件（组件）会以模块形式使用
const a = 123;
```

### 类型注解与类型推断

type annotation 类型注解，告诉 ts 是什么类型

type inference 类型推断，ts 会自动推断类型

```ts
let count: number; //类型注解
count = 123;

let age = 18;
age = 'foo'; //报错,被推断为number

let foo; //被推断为any
foo = 100;
foo = 'foo';
```

### 类型别名

```ts
//顾名思义就是自定义一个类型，一般用于联合类型，给你想要的类型取一个别名
type person = 'man' | 'woman';
type TUser = string | number;
type User = {
  number: string;
  age: number;
};
```

### 类型断言

```ts
const num = [11, 12, 14];
const res = num.find((i) => i > 0); //被推断为number/undefined

//可以断言res一定是number。
const num1 = res as number;
const num2 = <number>res; //JSX不能使用，会产生冲突
//断言与转换的区别：断言是在编译时的概念，转换是在运行时的概念。在编译后，断言就不存在了。
```

### 非空断言

It tells the TypeScript compiler to assume that the value before the operator is not null or undefined。

```ts
dragObj!;
```

### 类型保护

```ts
interface Bird {
  fly: boolean;
  sing: () => {};
}
interface Fish {
  fly: boolean;
  swim: () => {};
}

function train(animal: Bird | Fish) {
  if (animal.fly) {
    (animal as Bird).sing(); // 通过类型断言实现类型保护
  } else {
    (animal as Fish).swim();
  }
}

function train(animal: Bird | Fish) {
  if ('sing' in animal) {
    //in 方法实现类型保护 animal 有 sing 方法
    animal.sing();
  } else {
    animal.swim();
  }
}

class NumberObj {
  count: number = 1;
}
function add(first: object | NumberObj, second: object | NumberObj) {
  // class 的 instanceof 语法实现类型保护
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return { count: first.count + second.count };
  }
}
```

### 索引签名

当你声明一个索引签名时，所有明确的成员都必须符合索引签名。

```ts
interface foo {
  [key:string]：{name:string}; //确认存储在对象中所有的key都是string，所有value都要符合`{name:string}`的结构。
}

// ok
interface Foo {
  [key: string]: number;
  x: number;
  y: number;
}

// Error
interface Bar {
  [key: string]: number;
  x: number;
  y: string; // Error: y 属性必须为 number 类型
}
```

### 接口 interface

约定一个对象的结构。

为有结构的数据进行类型约束，**编译后就没有了**。在运行阶段没有意义。

```ts
interface Person {
  name: string;
  age?: number;
}

function getName(person: Person): string {
  return person.name;
}
const lily = { name: 'lily', gender: 'female' };
console.log(getName(lily)); //不会报错，有多的属性也可以，弱校验

console.log(getName({ name: 'hh', gender: 'female' })); //会报错，对象字面量是强校验，必须完全符合

interface Post {
  title: string;
  content: string;
  subtitle?: string; //可选成员
  readonly summary: string; //只读成员，初始化后便不可修改
  sayHi(): string; //接口里面可以定义函数
}

//动态接口
interface Cache {
  // title: string;
  // content: string;
  [key: string]: any; //动态属性
}

interface Teacher extends Person {
  //继承接口
  teach(): string;
}

interface SayHi {
  //可以定义函数
  (word: string): string;
}

const funcSay: SayHi = (word) => {
  return word;
};
```

描述函数：

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}

const searchFunc: SearchFunc = (source, subString) => {
  return source.includes(subString);
};
```

#### interface with type

类型别名与接口的区别：

- type 更灵活：可以用于原始值、联合类型、交叉类型、对象等。
- interface 可扩展： 可以extends扩展其他interface，也可以通过implements实现interface。
- interface可以多次被声明，类型别名只能被声明一次。多次被声明的接口会被合并成一个。

```ts
interface A {
  aa: number;
}
interface A {
  bb: string;
}
const test = () => {
  type propType = {
    [key: string]: number;
    a: number;
  };
  let prop: propType; // 带索引签名类型的属性

  interface type1 {
    a: number;
  } // 不含索引签名
  type type2 = { a: number }; // 不含索引签名

  const data1: type1 = { a: 1 }; // interface声明类型变量
  const data2: type2 = { a: 1 }; // type声明类型变量

  prop = data1; // Error：不能将类型“type1”分配给类型“propType”。类型“type1”中缺少类型“string”的索引签名。
  prop = data2; // 编译通过，没有报索引签名错
};
```

> [TS中的type、interface关于索引签名的区别](https://juejin.cn/post/7057471253279408135#heading-5)

### 类

```ts
class Person {
  // public name: string='init';//在这里或构造函数中声明初始值、类型、访问修饰符
  // protected readonly gender: boolean;
  // public/private/protected 访问修饰符,控制可访问级别，不写默认为 public
  // private 私有属性,只能在类内部使用
  // protected 只能在类内部/继承的子类中访问
  // readonly 不能再修改

  constructor(
    public name: string = 'init',
    private age: number,
  ) {
    this.name = name;
    this.age = age;
  }
  getName(): string {
    return this.name;
  }
  sayHi(msg: string) {
    console.log(`I am ${this.name},${msg}`);
  }
}
const person = new Person('lily', 18);
// person.age = 20 //×××外部不能访问

class Teacher extends Person {
  constructor(public gender: string) {
    super('tea', 25); // 调用父类构造函数。子类有 constructor 则必须调用super
  }

  sayHi(msg: string) {
    //重写父类方法
    return super.getName() + msg; // 调用父类方法
  }
}
const teacher = new Teacher('male');
console.log(teacher.name, teacher.gender);
```

#### 单例模式

当前类只能有一个类的实例。

利用静态属性以及 private 修饰构造函数实现单例模式。

```ts
class Demo {
  private static instance: Demo; // 缓存创建的实例

  //构造函数被private了，不能在外部通过 new 实例化这个类了，咋办捏
  //在类型内部使用静态方法创建实例！
  private constructor(public name: string) {}

  static create(name: string) {
    if (!this.instance) {
      this.instance = new Demo(name);
    }
    return this.instance;
  }
}

const demo1 = Demo.create('danny');
const demo2 = Demo.create('jan');
console.log(demo1.name, demo2.name, demo1 === demo2);
```

#### 类与接口

```ts
interface EatAndRun {
  //都有这些能力
  eat(food: string): void;
  run(distance: number): void;
}

//类是这个接口的实现
class Person implements EatAndRun {
  eat(food: string): void {
    console.log(`优雅地吃饭饭：${food}`);
  }
  run(distance: number): void {
    console.log(`跑步：${distance}`);
  }
}

class Animal implements EatAndRun {
  eat(food: string): void {
    console.log(`呼噜呼噜了：${food}`);
  }
  run(distance: number): void {
    console.log(`爬了：${distance}`);
  }
}

//在一些语言中，推崇一个接口实现一个能力。一个类可以使用多个接口
class AutoMan implements Eat, Run {
  //...
}
```

#### 抽象类

抽象类不允许被实例化。

抽象类中的抽象方法必须被子类实现。

```ts
//动物是猫猫，狗狗的抽象
abstract class Animal {
  //抽象类只能被继承，不能实例化
  eat(food: string): void {
    console.log(`呼噜呼噜了：${food}`);
  }
  abstract run(distance: number): void; //抽象方法，不需要具体实现
}

class Dog extends Animal {
  run(distance: number): void {
    //必须在子类实现抽象方法
    console.log('...');
  }
}
```

### 泛型

generic type

在定义函数接口或类的时候，不定义具体的类型。在使用的时候再去指定具体类型。

目的：更大程度地复用代码，提升代码灵活性。

#### 函数中的泛型

```ts
function createArray<T>(length: number, value: T): T[] {
  //T 泛型，不明确类型，把类型变成一个参数，在调用的时候传递
  const arr = Array<T>(length).fill(value);
  return arr;
}
const res = createArray<string>(3, 'foo'); //调用的时候明确类型
const res = createArray<number>(3, 1);
console.log(res);

//多个泛型参数
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
console.log(join<number, string>(1, 'gg'));

//使用泛型作为函数的类型注解
const func: <T>(params: T) => T = <T>(params: T) => {
  return params;
};
console.log(func(1));
```

#### 类中的泛型

```ts
class DataManager<T> {
  constructor(private data: T[]) {}
  getData(idx: number): T {
    return this.data[idx];
  }
}
const data = new DataManager(['a', 'b', 'c']);
console.log(data.getData(0));
```

```ts
interface Item {
  name: string;
}
class DataManager<T extends Item> {
  //泛型继承接口
  constructor(private data: T[]) {}
  getData(idx: number): string {
    return this.data[idx].name;
  }
}
const data = new DataManager([{ name: '1' }, { name: 'hh' }]);
console.log(data.getData(1));
```

#### 泛型工具类型

Required:将类型中的可选属性转换为必有属性。

```ts
type Required<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

type Required<T> = {
  [P in keyof T]-?: T[P]; //去掉可选属性
};
```

Record:生成一个对象类。

```ts
type Record<K extends string | number | symbol, T> = {
  [P in K]: T[K];
};
```

Pick:从对象中提取部分属性。

```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

Omit:从对象中排除部分属性。

```ts
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
```

Exclude:将某个类型从一个类型中排除。

```ts
type Exclude<T, U> = T extends U ? never : T;
```

Extract:从T中提取能够赋值给U的类型。

```ts
type Extract<T, U> = T extends U ? T : never;
```

ReturnType:返回一个函数的返回类型。

```ts
type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;
```

Parameters:返回一个函数的参数类型。

```ts
type Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
```

### extends 条件类型（Conditional Types）

`A extends B ? C : D`，用于判断类型 A 是否可以赋值给类型 B。

在表达式中表示 A 是否可以赋值给 B 的条件判断，在泛型中的 extends 表示对于参数的类型约束。

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

关于`{}`,如果一个对象类型 A 至少拥有另一个对象类型 B 的所有属性，则可以认为 A 是 B 的子类型，因此 A 可以赋值给 B。空对象由于其内部无属性，任意一个对象（甚至是原始类型）都可以认为是它的子集。

```ts
type _T5 = { name: 'aaa' } extends {} ? true : false;

type _T6 = string extends {} ? true : false;
```

#### 分布式条件类型 Distributive Conditional Types

条件类型的特殊功能，也可以叫条件类型的分布式特性。

### typeof

获取一个值的ts类型,返回的是一个类型。注意与js的typeof区分

```ts
const a = { x: 0 };

type T0 = typeof a; // { x: number }
type T1 = typeof a.x; // number
const a = typeof a; // object
```

### keyof

```ts
interface Person {
  name: string;
  age: number;
}

type Keys = keyof Person; // 'name' | 'age' 得到联合类型
```

```ts
interface Person {
  name: string;
  age: number;
  gender: string;
}
class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    // 接收Person 中的 key,返回 Person 的 value
    return this.info[key];
  }
}
const teacher = new Teacher({
  name: 'dell',
  age: 18,
  gender: 'male',
});

const test = teacher.getInfo('gender');
console.log(test);
```

### key in

```ts
type TraceType = 'OK' | 'NOK' | 'COK' | 'NA';
const TRACE_TYPE = ['OK', 'NOK', 'COK', 'NA'] as const;
type DerivedType = (typeof TRACE_TYPE)[number];

TraceType === DerivedType; //true
```

声明一个对象的类型,以下两种方式是一致的：

```ts
type ExampleType = {
  [key in TraceType]: number;
};

type ExampleType = {
  [key in (typeof TRACE_TYPE)[number]]: number;
};
```

### 装饰器

类的装饰器：对类的修饰，在类创建时执行。接收类的 constructor

简单装饰器

```ts
// 多个装饰器执行顺序：从下到上，从右到左
function testDecoractor(constructor: any) {
  console.log('testDecoractor');
  // 可以拿到装饰的类的constructor
  constructor.prototype.getName = function () {
    console.log('get test');
  };
}

function testDecoractor1(constructor: any) {
  console.log('testDecoractor1');
}

@testDecoractor
@testDecoractor1
class Test {}

const test1 = new Test();
(test1 as any).getName();
```

复杂标准装饰器

```ts
function testDecoractor() {
  // 工厂模式，可以接不同参数，返回一个新的类
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    console.log('testDecoractor');
    return class extends constructor {
      name = 'zzz';
      getName() {
        console.log(this.name);
        return this.name;
      }
    };
  };
}

const Test = testDecoractor()(
  class {
    constructor(public name: string) {}
  },
);

const test1 = new Test('hh');
test1.getName();
```

## Reference

- [ts 入门教程](https://ts.xcatliu.com/)
- [flow](https://flow.org/en/docs/usage/)
- [TypeScript and React: Hooks](https://fettblog.eu/typescript-react/hooks/#useref)
- [Equals 为什么这么设计](https://www.zhihu.com/question/577318797)
