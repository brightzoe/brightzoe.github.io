---
sidebar_position: 5
---

# 二叉树的遍历

递归：直接或者间接地调用函数本身。递归意味着反复。
二叉树的遍历：前序遍历、中序遍历、后序遍历、层序遍历

保证“左子树一定先于右子树遍历”这个前提，那么遍历的可能顺序也不过三种：

- 根结点 -> 左子树 -> 右子树
- 左子树 -> 根结点 -> 右子树
- 左子树 -> 右子树 -> 根结点

所谓前序/中序/后序遍历，指的是根节点的遍历时机。

## 前序遍历

- 递归式
- 递归边界

```ts
const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
    },
    right: {
      val: 'E',
    },
  },
  right: {
    val: 'C',
    right: {
      val: 'F',
    },
  },
};

function preorder(root) {
  // 递归边界：到一个空节点
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}
preorder(root);
```

## 深度优先搜索 DFS

深度优先搜索的核心思想，是试图穷举所有的完整路径。

深度优先搜索的过程可以转化为一系列的入栈、出栈操作。DFS 中，我们往往使用递归来模拟入栈、出栈的逻辑。

> 递归式就是我们选择道路的过程，而递归边界就是死胡同。

递归的本质就是栈：

- 函数调用的底层是用栈实现的，所谓函数调用栈。preorder调用一次自己，相关的函数上下文就会被push进函数调用栈；函数执行完毕后对应的上下文就会冲调用栈被pop出来。
- DFS是一种思想，解题场景有很多。有一类要求我们记录每一层递归式里路径的状态，此时就会强依赖栈结构。

## 广度优先搜索 BFS

二叉树层次遍历

- 每访问完一个坐标后，这个坐标在后续的遍历中都不会再用到了。可以被丢弃掉。
- 站在某个确定的坐标上，我们所观察到的可以直接抵达的坐标是需要被记录下来的，后面还需要用到。

所以是先入先出的规则，BFS算法的核心是队列。

```ts
// 层次遍历扫描
function bfs(root: TreeNode) {
  const queue = [];
  queue.push(root);

  while (queue.length) {
    const top: TreeNode = queue[0];
    console.log(top.val);
    top.left && queue.push(top.left);
    top.right && queue.push(top.right);
    queue.shift();
  }
}
```

## Reference

- [二叉树遍历](https://juejin.cn/book/6844733800300150797/section/6844733800346288142#heading-4)
