# 栈和队列

## 栈

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

[155. 最小栈 - 力扣（LeetCode）](https://leetcode.cn/problems/min-stack/description/)

- 设计一个数据结构，支持push/pop等，并能够检索到最小值。getMin可以通过一遍循环实现，时间复杂度O(n)，空间复杂度O(1)。利用空间换时间，多维护一个递减栈，将最小值放在栈顶。getMin直接从栈顶拿。

```ts
class MinStack {
  stack: number[];
  minStack: number[];
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val: number) {
    this.stack.push(val);
    const min = this.minStack[this.minStack.length - 1];
    // 当前值更小，推入递减栈 注意边界条件
    if (this.minStack.length === 0 || val <= min) {
      this.minStack.push(val);
    }
  }
  pop() {
    const top = this.stack.pop();
    const min = this.minStack[this.minStack.length - 1];
    // 小数走了，把对应的递减值推出去 注意边界条件
    if (this.minStack.length > 0 && top === min) {
      this.minStack.pop();
    }
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    console.log(this.minStack);
    return this.minStack[this.minStack.length - 1];
  }
}
```

## 用栈实现队列

[232. 用栈实现队列 - 力扣（LeetCode）](https://leetcode.cn/problems/implement-queue-using-stacks/submissions/516876214/)

- 用两个栈倒过来倒过去。

```ts
class MyQueue {
  private stack1: number[];
  private stack2: number[];
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push(val: number) {
    this.stack1.push(val);
  }

  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        const last = this.stack1.pop()!;
        this.stack2.push(last);
      }
    }
    return this.stack2[this.stack2.length - 1];
  }
  pop() {
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        const last = this.stack1.pop()!;
        this.stack2.push(last);
      }
    }
    return this.stack2.pop();
  }
  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}
```
