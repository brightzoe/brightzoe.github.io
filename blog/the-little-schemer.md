---
title: 学习 The Little Schemer
authors: [zoe]
tags: [reading, dev, fp]
---

环境配置
使用 vscode 编写 scheme ,参考: [Windows + VSCode 搭建 Scheme 开发环境 - 知乎](https://zhuanlan.zhihu.com/p/405246479)

## 基本语法

`atom`: 元子 `atom`

`list`: 列表 `(atom ss)` `()`

`car`: list 里的第一个 元素 `(car l)`

> The primitive car is definedonly for non-empty lists.

> ( car l) is another way to ask for "the car of the list l."

`cdr`: list 去掉 car 后的 新 list `cdr l`

> ( cdr l) is just another way to ask for "the cdr of the list l."

`car`: `cdr`都是针对非空 `list`,不能用于`atom`,空`list`

`cons`: 把 一个 Scheme expression 添加为`list`的第一个元素. `(cons a l)` 第二个参数一定是`list`.

`(null? l)`: 是空`list`吗? `(quote ())`表示一个空 list,null list. ` ( null? (quote ()))` => true

`( atom? s )` 是`atom`吗?

`( eq? a1 a2)` 这两个`atom`相等吗? Eq takes two arguments. Both of them must be non-numeric atoms.

----------------第一章end
`(lat? l)` 是全为`atom`的`list`吗? Every lat is a list of atoms.