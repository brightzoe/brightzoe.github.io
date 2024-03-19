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

## Reference
- [二叉树遍历](https://juejin.cn/book/6844733800300150797/section/6844733800346288142#heading-4)