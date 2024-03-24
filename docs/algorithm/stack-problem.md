# 栈和队列

[20. 有效的括号 - 力扣（LeetCode）](https://leetcode.cn/problems/valid-parentheses/)

- 对称性。利用栈，先入栈的后出栈。栈的后进先出原则，一组数据的入栈和出栈顺序刚好是对称的。

```ts
function isValid(s: string): boolean {
  // 边界
  if (!s.length) {
    return true;
  }
  // Map或者obj都是可以的
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ]);
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    // 是左边的括号直接进入
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else {
      // 是右边的括号但无法出栈直接返回
      if (s[i] !== map.get(stack.pop())) {
        return false;
      }
    }
  }
  // 是不是空栈
  return !stack.length;
}
```

## 单调栈

[739. 每日温度 - 力扣（LeetCode）](https://leetcode.cn/problems/daily-temperatures/submissions/516316386/)

- 暴力解法，循环套循环，超时。
- 维护一个递减的栈。循环一次，每次将当前元素与栈顶元素比较，若栈顶元素小于当前元素，则将栈顶元素出栈，并计算差值。直到栈顶元素大于等于当前元素，将当前元素入栈。

```ts
// 维护递减的栈
function dailyTemperatures(temperatures: number[]): number[] {
  const res = new Array(temperatures.length).fill(0);
  // 递减栈，维护的是每天的索引而不是温度，比较好计算
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    // 当前温度大于栈顶的温度
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const top = stack.pop()!;
      // 栈顶的索引放入结果中，值为i-top
      res[top] = i - top;
    }
    stack.push(i);
  }
  return res;
}
```
