"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[9815],{8898:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>h,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var s=t(1527),i=t(8672);const r={},h="\u6808\u548c\u961f\u5217",c={id:"algorithm/stack-problem",title:"\u6808\u548c\u961f\u5217",description:"\u6808",source:"@site/docs/algorithm/stack-problem.md",sourceDirName:"algorithm",slug:"/algorithm/stack-problem",permalink:"/docs/algorithm/stack-problem",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/algorithm/stack-problem.md",tags:[],version:"current",lastUpdatedAt:1721115677,formattedLastUpdatedAt:"2024\u5e747\u670816\u65e5",frontMatter:{},sidebar:"DataStructure",previous:{title:"\u6392\u5e8f\u7b97\u6cd5",permalink:"/docs/algorithm/sort-problem"}},l={},u=[{value:"\u6808",id:"\u6808",level:2},{value:"\u5355\u8c03\u6808",id:"\u5355\u8c03\u6808",level:2},{value:"\u7528\u6808\u5b9e\u73b0\u961f\u5217",id:"\u7528\u6808\u5b9e\u73b0\u961f\u5217",level:2},{value:"\u53cc\u7aef\u961f\u5217",id:"\u53cc\u7aef\u961f\u5217",level:2},{value:"\u7528\u6808\u5b9e\u73b0\u961f\u5217",id:"\u7528\u6808\u5b9e\u73b0\u961f\u5217-1",level:2},{value:"\u7528\u961f\u5217\u5b9e\u73b0\u6808",id:"\u7528\u961f\u5217\u5b9e\u73b0\u6808",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u6808\u548c\u961f\u5217",children:"\u6808\u548c\u961f\u5217"}),"\n",(0,s.jsx)(e.h2,{id:"\u6808",children:"\u6808"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/valid-parentheses/",children:"20. \u6709\u6548\u7684\u62ec\u53f7 - \u529b\u6263\uff08LeetCode\uff09"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5bf9\u79f0\u6027\u3002\u5229\u7528\u6808\uff0c\u5148\u5165\u6808\u7684\u540e\u51fa\u6808\u3002\u6808\u7684\u540e\u8fdb\u5148\u51fa\u539f\u5219\uff0c\u4e00\u7ec4\u6570\u636e\u7684\u5165\u6808\u548c\u51fa\u6808\u987a\u5e8f\u521a\u597d\u662f\u5bf9\u79f0\u7684\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"function isValid(s: string): boolean {\n  // \u8fb9\u754c\n  if (!s.length) {\n    return true;\n  }\n  // Map\u6216\u8005obj\u90fd\u662f\u53ef\u4ee5\u7684\n  const map = new Map([\n    ['(', ')'],\n    ['[', ']'],\n    ['{', '}'],\n  ]);\n  let stack = [];\n  for (let i = 0; i < s.length; i++) {\n    // \u662f\u5de6\u8fb9\u7684\u62ec\u53f7\u76f4\u63a5\u8fdb\u5165\n    if (map.has(s[i])) {\n      stack.push(s[i]);\n    } else {\n      // \u662f\u53f3\u8fb9\u7684\u62ec\u53f7\u4f46\u65e0\u6cd5\u51fa\u6808\u76f4\u63a5\u8fd4\u56de\n      if (s[i] !== map.get(stack.pop())) {\n        return false;\n      }\n    }\n  }\n  // \u662f\u4e0d\u662f\u7a7a\u6808\n  return !stack.length;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5355\u8c03\u6808",children:"\u5355\u8c03\u6808"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/daily-temperatures/submissions/516316386/",children:"739. \u6bcf\u65e5\u6e29\u5ea6 - \u529b\u6263\uff08LeetCode\uff09"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u66b4\u529b\u89e3\u6cd5\uff0c\u5faa\u73af\u5957\u5faa\u73af\uff0c\u8d85\u65f6\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u7ef4\u62a4\u4e00\u4e2a\u9012\u51cf\u7684\u6808\u3002\u5faa\u73af\u4e00\u6b21\uff0c\u6bcf\u6b21\u5c06\u5f53\u524d\u5143\u7d20\u4e0e\u6808\u9876\u5143\u7d20\u6bd4\u8f83\uff0c\u82e5\u6808\u9876\u5143\u7d20\u5c0f\u4e8e\u5f53\u524d\u5143\u7d20\uff0c\u5219\u5c06\u6808\u9876\u5143\u7d20\u51fa\u6808\uff0c\u5e76\u8ba1\u7b97\u5dee\u503c\u3002\u76f4\u5230\u6808\u9876\u5143\u7d20\u5927\u4e8e\u7b49\u4e8e\u5f53\u524d\u5143\u7d20\uff0c\u5c06\u5f53\u524d\u5143\u7d20\u5165\u6808\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"// \u7ef4\u62a4\u9012\u51cf\u7684\u6808\nfunction dailyTemperatures(temperatures: number[]): number[] {\n  const res = new Array(temperatures.length).fill(0);\n  // \u9012\u51cf\u6808\uff0c\u7ef4\u62a4\u7684\u662f\u6bcf\u5929\u7684\u7d22\u5f15\u800c\u4e0d\u662f\u6e29\u5ea6\uff0c\u6bd4\u8f83\u597d\u8ba1\u7b97\n  const stack: number[] = [];\n\n  for (let i = 0; i < temperatures.length; i++) {\n    // \u5f53\u524d\u6e29\u5ea6\u5927\u4e8e\u6808\u9876\u7684\u6e29\u5ea6\n    while (\n      stack.length &&\n      temperatures[i] > temperatures[stack[stack.length - 1]]\n    ) {\n      const top = stack.pop()!;\n      // \u6808\u9876\u7684\u7d22\u5f15\u653e\u5165\u7ed3\u679c\u4e2d\uff0c\u503c\u4e3ai-top\n      res[top] = i - top;\n    }\n    stack.push(i);\n  }\n  return res;\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/min-stack/description/",children:"155. \u6700\u5c0f\u6808 - \u529b\u6263\uff08LeetCode\uff09"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8bbe\u8ba1\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u652f\u6301push/pop\u7b49\uff0c\u5e76\u80fd\u591f\u68c0\u7d22\u5230\u6700\u5c0f\u503c\u3002getMin\u53ef\u4ee5\u901a\u8fc7\u4e00\u904d\u5faa\u73af\u5b9e\u73b0\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\u3002\u5229\u7528\u7a7a\u95f4\u6362\u65f6\u95f4\uff0c\u591a\u7ef4\u62a4\u4e00\u4e2a\u9012\u51cf\u6808\uff0c\u5c06\u6700\u5c0f\u503c\u653e\u5728\u6808\u9876\u3002getMin\u76f4\u63a5\u4ece\u6808\u9876\u62ff\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"class MinStack {\n  stack: number[];\n  minStack: number[];\n  constructor() {\n    this.stack = [];\n    this.minStack = [];\n  }\n  push(val: number) {\n    this.stack.push(val);\n    const min = this.minStack[this.minStack.length - 1];\n    // \u5f53\u524d\u503c\u66f4\u5c0f\uff0c\u63a8\u5165\u9012\u51cf\u6808 \u6ce8\u610f\u8fb9\u754c\u6761\u4ef6\n    if (this.minStack.length === 0 || val <= min) {\n      this.minStack.push(val);\n    }\n  }\n  pop() {\n    const top = this.stack.pop();\n    const min = this.minStack[this.minStack.length - 1];\n    // \u5c0f\u6570\u8d70\u4e86\uff0c\u628a\u5bf9\u5e94\u7684\u9012\u51cf\u503c\u63a8\u51fa\u53bb \u6ce8\u610f\u8fb9\u754c\u6761\u4ef6\n    if (this.minStack.length > 0 && top === min) {\n      this.minStack.pop();\n    }\n  }\n  top() {\n    return this.stack[this.stack.length - 1];\n  }\n  getMin() {\n    console.log(this.minStack);\n    return this.minStack[this.minStack.length - 1];\n  }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u7528\u6808\u5b9e\u73b0\u961f\u5217",children:"\u7528\u6808\u5b9e\u73b0\u961f\u5217"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/implement-queue-using-stacks/submissions/516876214/",children:"232. \u7528\u6808\u5b9e\u73b0\u961f\u5217 - \u529b\u6263\uff08LeetCode\uff09"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7528\u4e24\u4e2a\u6808\u5012\u8fc7\u6765\u5012\u8fc7\u53bb\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"class MyQueue {\n  private stack1: number[];\n  private stack2: number[];\n  constructor() {\n    this.stack1 = [];\n    this.stack2 = [];\n  }\n  push(val: number) {\n    this.stack1.push(val);\n  }\n\n  peek() {\n    if (this.stack2.length === 0) {\n      while (this.stack1.length) {\n        const last = this.stack1.pop()!;\n        this.stack2.push(last);\n      }\n    }\n    return this.stack2[this.stack2.length - 1];\n  }\n  pop() {\n    if (this.stack2.length === 0) {\n      while (this.stack1.length) {\n        const last = this.stack1.pop()!;\n        this.stack2.push(last);\n      }\n    }\n    return this.stack2.pop();\n  }\n  empty() {\n    return this.stack1.length === 0 && this.stack2.length === 0;\n  }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53cc\u7aef\u961f\u5217",children:"\u53cc\u7aef\u961f\u5217"}),"\n",(0,s.jsx)(e.p,{children:"\u53cc\u7aef\u961f\u5217\u5c31\u662f\u5141\u8bb8\u5728\u961f\u5217\u7684\u4e24\u7aef\u8fdb\u884c\u63d2\u5165\u548c\u5220\u9664\u7684\u961f\u5217\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"const queue = [1, 2, 3, 4]; // \u5b9a\u4e49\u4e00\u4e2a\u53cc\u7aef\u961f\u5217\nqueue.push(1); // \u53cc\u7aef\u961f\u5217\u5c3e\u90e8\u5165\u961f\nqueue.pop(); // \u53cc\u7aef\u961f\u5217\u5c3e\u90e8\u51fa\u961f\nqueue.shift(); // \u53cc\u7aef\u961f\u5217\u5934\u90e8\u51fa\u961f\nqueue.unshift(1); // \u53cc\u7aef\u961f\u5217\u5934\u90e8\u5165\u961f\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/sliding-window-maximum/",children:"239. \u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c - \u529b\u6263\uff08LeetCode\uff09"}),"\u2b50\u2b50\u2b50\u2b50"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u987a\u7740\u9898\u76ee\u601d\u8def\uff0c\u4f7f\u7528\u53cc\u6307\u9488\u5206\u522b\u8ba1\u7b97\u8303\u56f4\u5185\u7684\u6700\u5927\u503c\u3002\u65f6\u95f4\u590d\u6742\u5ea6O(kn)\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528\u53cc\u7aef\u961f\u5217\uff0c\u7ef4\u62a4\u4e00\u4e2a\u9012\u51cf\u961f\u5217\uff0c\u961f\u9996\u5143\u7d20\u4e3a\u5f53\u524d\u6700\u5927\u503c\u3002\u65f6\u95f4\u590d\u6742\u5ea6O(n)\u3002\u6bcf\u6b21\u4ece\u540e\u9762\u5165\u961f\uff0c\u82e5\u6ca1\u6709\u9012\u51cf\u6027\uff0c\u961f\u5c3e\u7684\u90fd\u7ed9\u4ed6\u8e22\u51fa\u53bb\u3002\u6bcf\u6b21\u7ef4\u62a4\u961f\u5934\uff0c\u770b\u662f\u5426\u8fd8\u5728\u7a97\u53e3\u5185\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"//\u53cc\u7aef\u961f\u5217\u3002\u9012\u51cf\uff0c\u7ef4\u62a4\u9012\u51cf\u6027\uff0c\u53ca\u961f\u5934\u8fb9\u754c\u3002\u961f\u5934\u90fd\u662f\u6700\u5927\u503c\u653e\u5728\u7ed3\u679c\u4e2d\nconst maxSlidingWindow = (nums: number[], k: number) => {\n  // \u9012\u51cf\u7684\u53cc\u7aef\u961f\u5217\uff0c\u91cc\u9762\u653e\u7f6enums\u7684index\n  const deque: number[] = [];\n  const res: number[] = [];\n  for (let i = 0; i < nums.length; i++) {\n    // \u961f\u5c3e\u7684\u5982\u679c\u5c0f\u4e8e\u5f53\u524d\u503c\uff0c\u90fd\u8e22\u51fa\u53bb\n    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {\n      deque.pop();\n    }\n    deque.push(i);\n    // \u961f\u5934\u7684\u4e0d\u5728\u8303\u56f4\u5185\u4e86\uff0c\u8e22\u51fa\u53bb\n    while (deque.length && deque[0] < i + 1 - k) {\n      deque.shift();\n    }\n    // \u6bcf\u6b21\u4ece\u8fd9\u4e2adeque\u4e2d\u53d6\u6700\u5927\u503c\u3002\u7b2c\u4e00\u6b21\u4e3a i =k-1\n    if (i >= k - 1) {\n      res.push(nums[deque[0]]);\n    }\n  }\n  return res;\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u7528\u6808\u5b9e\u73b0\u961f\u5217-1",children:"\u7528\u6808\u5b9e\u73b0\u961f\u5217"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/implement-queue-using-stacks/description/",children:"232. \u7528\u6808\u5b9e\u73b0\u961f\u5217 - \u529b\u6263\uff08LeetCode\uff09"}),"\u2b50\u2b50\u2b50"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528\u4e24\u4e2a\u6808\u5b9e\u73b0\u961f\u5217\u3002stack1\u7528\u4e8e\u8f93\u5165\uff0cpush\u8fdbstack1\u3002stack2\u7528\u4e8e\u8f93\u51fa\uff0cpop\u51fastack2\u3002\u6ce8\u610f\u4ec0\u4e48\u65f6\u5019\u5c06stack2\u4e2d\u7684\u5143\u7d20\u653e\u8fdbstack1\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"class MyQueue {\n  private stack1: number[];\n  private stack2: number[];\n  constructor() {\n    this.stack1 = [];\n    this.stack2 = [];\n  }\n  push(x: number): void {\n    this.stack1.push(x);\n  }\n  pop(): number {\n    // \u5148\u8fdb\u7684item\u4f7f\u7528\u5b8c\u6bd5\u518d\u7ee7\u7eed\u5b58\u653e\u3002\n    if (this.stack2.length === 0) {\n      while (this.stack1.length) {\n        this.stack2.push(this.stack1.pop()!);\n      }\n    }\n    return this.stack2.pop()!;\n  }\n  peek(): number {\n    if (this.stack2.length === 0) {\n      while (this.stack1.length) {\n        this.stack2.push(this.stack1.pop()!);\n      }\n    }\n    return this.stack2[this.stack2.length - 1];\n  }\n\n  empty(): boolean {\n    return this.stack1.length === 0 && this.stack2.length === 0;\n  }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u7528\u961f\u5217\u5b9e\u73b0\u6808",children:"\u7528\u961f\u5217\u5b9e\u73b0\u6808"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/implement-stack-using-queues",children:"225. \u7528\u961f\u5217\u5b9e\u73b0\u6808 - \u529b\u6263\uff08LeetCode\uff09"}),"\u2b50\u2b50\u2b50\u2728"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528\u4e24\u4e2a\u961f\u5217\u4e92\u76f8\u4ea4\u6362\u5185\u5bb9\u3002 \u961f\u5217\u662f\u5148\u8fdb\u5148\u51fa\uff0c\u6808\u662f\u5148\u8fdb\u540e\u51fa\u3002\u6240\u4ee5\u4f7f\u7528\u961f\u5217\u7684\u65f6\u5019\u628a\u540e\u9762\u8fdb\u6765\u7684\u5143\u7d20\u653e\u5728\u6700\u524d\u9762\uff0c\u5c31\u53ef\u4ee5\u8fbe\u5230\u5148\u8fdb\u540e\u51fa\u7684\u6548\u679c\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528\u4e00\u4e2a\u961f\u5217\u3002 \u5148\u6dfb\u52a0\u65b0\u7684\u5143\u7d20\u3002\u7136\u540e\u5c06\u65e7\u7684\u5143\u7d20\u4f9d\u6b21\u6dfb\u52a0\u5230\u961f\u5217\u7684\u672b\u5c3e\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"class MyStack {\n  private queue1: number[];\n  private queue2: number[];\n  constructor() {\n    this.queue1 = [];\n    this.queue2 = [];\n  }\n\n  push(x: number): void {\n    //\u501f\u52a9queue2 \u628a\u540e\u9762\u8fdb\u6765\u7684\u5143\u7d20\u653e\u5728\u6700\u524d\u9762\n    this.queue2.push(x);\n    while (this.queue1.length) {\n      this.queue2.push(this.queue1.shift()!);\n    }\n    const temp = this.queue1;\n    this.queue1 = this.queue2;\n    this.queue2 = temp;\n  }\n\n  pop(): number {\n    return this.queue1.shift()!;\n  }\n\n  top(): number {\n    return this.queue1[0];\n  }\n\n  empty(): boolean {\n    return this.queue1.length === 0;\n  }\n}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"// \u4f7f\u7528\u4e00\u4e2a\u961f\u5217\n// \u5148\u6dfb\u52a0\u65b0\u7684\u5143\u7d20\u3002\u7136\u540e\u5c06\u65e7\u7684\u5143\u7d20\u4f9d\u6b21\u6dfb\u52a0\u5230\u961f\u5217\u7684\u672b\u5c3e\nclass MyStack {\n  private queue: number[];\n  constructor() {\n    this.queue = [];\n  }\n\n  push(x: number): void {\n    const length = this.queue.length;\n    this.queue.push(x);\n    for (let i = 0; i < length; i++) {\n      this.queue.push(this.queue.shift()!);\n    }\n  }\n\n  pop(): number {\n    return this.queue.shift();\n  }\n\n  top(): number {\n    return this.queue[0];\n  }\n\n  empty(): boolean {\n    return this.queue.length === 0;\n  }\n}\n"})})]})}function o(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8672:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>h});var s=t(959);const i={},r=s.createContext(i);function h(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:h(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);