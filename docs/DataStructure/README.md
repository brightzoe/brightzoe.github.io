# 数据结构与算法


## 前端领域的算法

### 排序

- Array.prototype.sort()的实现
  V8 原来使用快排和插入排序，目前改用 Timsort。(https://v8.dev/blog/array-sort#timsort)
  Timsort：一种混合，稳定的排序算法，从归并排序与插入排序派生而来。(python 的一种标准排序算法)

  Mergesort 通常以递归方式，Timsort 通常以迭代方式

### 框架中的应用
#### 虚拟 DOM

用 JS 对象描述 DOM 结构，描述

#### React DOM Diff

tree diff :同层级 DOM 节点对比（降低复杂度 O(N\*3)=>O(N)），不同层级的的节点只有创建与删除

> 保持稳定的 DOM 结构有助于提升性能

element diff: 深度遍历
唯一 key 的方式，优化 element diff 的算法
>尽量减少类似将最后一个借点移动到列表首部的操作

component diff:同一类型的组件：虚拟 DOM 比较，不同类型的组件，直接替换整个组件的子节点，shouldComponentUpdate

#### Angular 布隆过滤器
(没听懂...form 被删)
哈希表的搜索成本：匹配很快，但如果在磁盘或远程服务器，网络搜索的成本会变很慢

布隆过滤器：长度为m的位向量或位列表
  检查值是"可能在集合中"，还是"绝不在集合中"
  减少对不存在的值的昂贵成本(磁盘或网络)的查找，比如弱密码的查询

Angular 视图：
 Ivy渲染器将节点的注入信息存储在视图数据中

Angular 依赖查询：查找节点，依赖注入

### 前端业务中的应用

#### VSCode 与红黑树

文本缓冲区
  打开35MB的文件需要600MB左右的空间...
  使用PieceTable避免过多的元数据


## reference：

1.  被删：前端领域的算法

