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

### 迭代式

是栈的思想.出栈顺序为 根-左-右.

出入栈顺序应该是这样的：

1. 将根结点入栈
2. 取出栈顶结点，将结点值 push 进结果数组
3. 若栈顶结点有右孩子，则将右孩子入栈
4. 若栈顶结点有左孩子，则将左孩子入栈

重复 2、3、4 步骤，直至栈空，我们就能得到一个先序遍历序列。

```ts
function preOrderTraversal(root: TreeNode) {
  const res: string[] = [];
  // 边界条件
  if (!root) {
    return res;
  }
  const stack = [];
  // 根节点入栈
  stack.push(root);
  // 若栈不为空则重复出栈入栈操作
  while (stack.length) {
    // 栈顶为当前处理的节点
    const top: TreeNode = stack.pop()!;
    // 当前节点就是当前子树的根节点,出栈
    res.push(top.val!);
    // 右子树入栈
    if (top.right) {
      stack.push(top.right);
    }
    // 左子树入栈
    if (top.left) {
      stack.push(top.left);
    }
  }
  return res;
}
```

[145. 二叉树的后序遍历 - 力扣（LeetCode）](https://leetcode.cn/problems/binary-tree-postorder-traversal)⭐⭐✨

- 后序遍历与前序遍历不同的就是根节点位置由第一个变成了最后一个.从stack入手会比较麻烦所以从res入手比较方便.

```ts
function postorderTraversal(root: TreeNode) {
  // 边界条件
  if (!root) {
    return [];
  }
  const res: number[] = [];
  const stack: TreeNode[] = [];
  stack.push(root);
  // 用栈
  while (stack.length) {
    // 需要的顺序是左右根,那么出栈的顺序是右左根,这样分别向前插
    const top = stack.pop()!;
    res.unshift(top.val);
    top.left && stack.push(top.left);
    top.right && stack.push(top.right);
  }
  return res;
}
```

[94. 二叉树的中序遍历 - 力扣（LeetCode）](https://leetcode.cn/problems/binary-tree-inorder-traversal/)⭐⭐⭐✨

- 中序遍历的迭代与前后序遍历的迭代不同。前后序遍历都是先处理根节点，然后是孩子节点。
- 中序遍历的序列规则是 左 -> 中 -> 右 ，这意味着我们必须首先定位到最左的叶子结点，其中会途经目标结点的父结点、爷爷结点和各种辈分的祖宗结点。途经的每一个节点都要先入栈。当我们处理完目标节点，就可以处理它的父节点或兄弟节点了。

```ts
function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const stack = [];
  const res = [];
  let node = root;

  // 有没有当前要处理的子树节点||之前入栈的其他节点需要处理
  while (node || stack.length) {
    //一路向左全部入栈
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop()!;
    res.push(node.val);
    node = node.right;
  }
  return res;
}
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
// 层次遍历扫描 bfs + queue
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
