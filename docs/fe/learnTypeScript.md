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

> everything is any,暂时忙着做别的，挖坑了...
## Reference

1. [ts 入门教程](https://ts.xcatliu.com/)
