# useState

`const [num, setNum] = useState(initNum);`

调用 useState 时，返回一个数组，state 初始值为外部调用 useState 时传入的参数。

当执行 setNum 时，num 值被更新，UI 视图也将被更新。即 useState 返回的 setNum 既更改了 num 的值，也自动调用了 render 方法触发视图更新。

## useState 简易原理

利用闭包封装简易 useState 雏形：

```ts
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
function render() {
  root.render(<App />);
}

let state;
function useState<T>(initialState: T): [T, (newState: T) => void] {
  let state = state || initialState;
  function setState(newState: T) {
    state = newState;
    render();
  }
  return [state, setState];
}

render(); // 首次渲染
```

> 以上 useState 在同一个组件中无法使用多个。在一个组件中多次使用，只有一个 state 是生效的。

### 支持使用多个 useState

用全局数组保存每个 state 的顺序，每次更新 state，都会更新数组中的对应位置的 state。

```ts
function render() {
  cursor = 0;
  root.render(<App />);
}

const state: any[] = [];
let cursor: number = 0;
function useState<T>(initialState: T): [T, (newState: T) => void] {
  const curCursor = cursor;
  if (!state[curCursor]) {
    state[curCursor] = initialState;
  }
  function setState(newState: T) {
    state[curCursor] = newState;
    render();
  }
  cursor++;
  return [state[curCursor], setState];
}
```

> hooks 底层使用链表实现，但与上面的思想一致，每个 useState 有严格的顺序。

:::caution

不能在循环/条件判断/嵌套函数中使用 hook，要保证每个 hook 的调用顺序稳定。

每一个 hook 都是有序的存在 fiber 上的，如果在 if 里用 hook，可能会导致新的 hook 位置和之前记录的不一致，这样就不知道要跟谁对比了，导致 hook 功能无效。

:::

- [一文彻底搞懂 react hooks 的原理和实现 - 掘金](https://juejin.cn/post/6844903975838285838?share_token=d898bae0-23c6-4467-80f6-b41a345732d2#heading-1)
- [ReactHook 的原理和 TS 实现](https://gist.github.com/dongyuanxin/4281ee21eafdc0197d6ddea27bfbdbfd)
- [React hooks: not magic, just arrays | by Rudi Yardley | Medium](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)
- [React Hooks 原理 · Issue #26 · brickspert/blog](https://github.com/brickspert/blog/issues/26)
