# 递归与回溯

回溯算法的基本思想是：从一条路往前走，能进则进，不能进则退回来，换一条路再试。

什么时候用回溯？

- 题目中暗示了一个或多个解,需要列举每一个解的内容,一定要想到DFS,递归和回溯.
- 题目可以转化为树形逻辑.

为什么用?

- 递归与回溯本就是穷举的过程.列举每一个解的内容,解是基于穷举思想,并对搜索树进行恰当剪枝.
  > 另一种问题,不问解的内容,只问解的个数.通常不适用 DFS 而是动态规划.

怎么用?

- 一个模型:树形逻辑模型.两个要点:递归式和递归边界

找坑位.一个坑位对应树中的一层.

每一层的处理逻辑一致,这个逻辑就是递归式的内容.而递归边界要么在题目中约束好了,要么默认是坑位的数目边界.

伪代码:

```ts
function xxx(入参) {
  //前期的变量定义、缓存等准备工作

  // 定义路径栈
  const path = []
  // 进入 dfs
  dfs(起点)
  // 定义 dfs
  dfs(递归参数) {
    if(到达了递归边界) {
      //结合题意处理边界逻辑，往往和 path 内容有关
      return
    }
    // 注意这里也可能不是 for，视题意决定
    for(遍历坑位的可选值) {
      path.push(当前选中值)
     // 处理坑位本身的相关逻辑
      path.pop()
    }
  }
}
```

[46. 全排列 - 力扣（LeetCode）](https://leetcode.cn/problems/permutations)⭐⭐⭐✨

- 排列问题。递归与回溯

```ts
function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  // 从初始结构开始
  dfs([]);
  return res;
  function dfs(path: number[]) {
    // 到递归边界了，生成一组结果，结束
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // 给下一个坑位填入一个数
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        dfs(path);
        // 回溯
        path.pop();
      }
    }
  }
}
console.log(permute([1, 2, 3]));
```

[78. 子集 - 力扣（LeetCode）](https://leetcode.cn/problems/subsets/description/)⭐⭐⭐✨

- 组合问题。递归与回溯。
- 深度优先遍历。寻找变与不变。变的是每个组合的长度，不变的是可以选择的元素。所以

```ts
function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const curr = [];
  backtrack(0);
  return res;
  // nums的每个位置 都可以作为起点，分别为取或不取当前元素
  function backtrack(start: number) {
    // （终止条件），存放结果
    res.push([...curr]);
    for (let i = start; i < nums.length; i++) {
      // 取了
      curr.push(nums[i]);
      // 递归
      backtrack(i + 1);
      // 回溯
      curr.pop();
    }
  }
}
```

[77. 组合 - 力扣（LeetCode）](https://leetcode.cn/problems/combinations/description/)⭐⭐⭐✨

- 组合。递归与回溯，并提前剪枝。
- 虽然给出的不是number[]，但是约定了数字范围为1~n，本质是一样的。

```ts
function combine(n: number, k: number) {
  const res: number[][] = [];
  const curr: number[] = [];
  dfs(1);
  return res;
  // 从当前遍历到的数字开始
  function dfs(idx: number) {
    // 满足一组条件,剪枝.更新结果
    if (curr.length === k) {
      res.push([...curr]);
      return;
    }
    // 从当前数字开始向后遍历
    for (let i = idx; i <= n; i++) {
      curr.push(i);
      dfs(i + 1);
      curr.pop();
    }
  }
}
```
