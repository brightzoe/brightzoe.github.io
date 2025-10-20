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

## 双端队列

双端队列就是允许在队列的两端进行插入和删除的队列。

```ts
const queue = [1, 2, 3, 4]; // 定义一个双端队列
queue.push(1); // 双端队列尾部入队
queue.pop(); // 双端队列尾部出队
queue.shift(); // 双端队列头部出队
queue.unshift(1); // 双端队列头部入队
```

[239. 滑动窗口最大值 - 力扣（LeetCode）](https://leetcode.cn/problems/sliding-window-maximum/)⭐⭐⭐⭐

- 顺着题目思路，使用双指针分别计算范围内的最大值。时间复杂度O(kn)。
- 使用双端队列，维护一个递减队列，队首元素为当前最大值。时间复杂度O(n)。每次从后面入队，若没有递减性，队尾的都给他踢出去。每次维护队头，看是否还在窗口内。

```ts
//双端队列。递减，维护递减性，及队头边界。队头都是最大值放在结果中
const maxSlidingWindow = (nums: number[], k: number) => {
  // 递减的双端队列，里面放置nums的index
  const deque: number[] = [];
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    // 队尾的如果小于当前值，都踢出去
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
    // 队头的不在范围内了，踢出去
    while (deque.length && deque[0] < i + 1 - k) {
      deque.shift();
    }
    // 每次从这个deque中取最大值。第一次为 i =k-1
    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }
  return res;
};
```

## 用栈实现队列

[232. 用栈实现队列 - 力扣（LeetCode）](https://leetcode.cn/problems/implement-queue-using-stacks/description/)⭐⭐⭐

- 使用两个栈实现队列。stack1用于输入，push进stack1。stack2用于输出，pop出stack2。注意什么时候将stack2中的元素放进stack1。

```ts
class MyQueue {
  private stack1: number[];
  private stack2: number[];
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push(x: number): void {
    this.stack1.push(x);
  }
  pop(): number {
    // 先进的item使用完毕再继续存放。
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop()!);
      }
    }
    return this.stack2.pop()!;
  }
  peek(): number {
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop()!);
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  empty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}
```

## 用队列实现栈

[225. 用队列实现栈 - 力扣（LeetCode）](https://leetcode.cn/problems/implement-stack-using-queues)⭐⭐⭐✨

- 使用两个队列互相交换内容。 队列是先进先出，栈是先进后出。所以使用队列的时候把后面进来的元素放在最前面，就可以达到先进后出的效果。
- 使用一个队列。 先添加新的元素。然后将旧的元素依次添加到队列的末尾。

```ts
class MyStack {
  private queue1: number[];
  private queue2: number[];
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(x: number): void {
    //借助queue2 把后面进来的元素放在最前面
    this.queue2.push(x);
    while (this.queue1.length) {
      this.queue2.push(this.queue1.shift()!);
    }
    const temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
  }

  pop(): number {
    return this.queue1.shift()!;
  }

  top(): number {
    return this.queue1[0];
  }

  empty(): boolean {
    return this.queue1.length === 0;
  }
}
```

```ts
// 使用一个队列
// 先添加新的元素。然后将旧的元素依次添加到队列的末尾
class MyStack {
  private queue: number[];
  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    const length = this.queue.length;
    this.queue.push(x);
    for (let i = 0; i < length; i++) {
      this.queue.push(this.queue.shift()!);
    }
  }

  pop(): number {
    return this.queue.shift();
  }

  top(): number {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
```
