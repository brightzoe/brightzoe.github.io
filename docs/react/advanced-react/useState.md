# useState

`const [state, setState] = useState(initState);`

调用 useState 时，返回一个数组，state 初始值为外部调用 useState 时传入的参数。

> initState 只会在组件的初始化渲染中起作用，后续渲染会被忽略。initState 可以是一个函数，函数的返回值会作为 initState 的值,这被称为惰性初始化。

当执行 setState 时 state 值被更新，UI 视图也将被更新。即 useState 返回的 setState 既更改了 state 的值，也自动调用了 render 方法触发视图更新。

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

## useState vs useReducer

useState 是用 useReducer 实现的，useState 返回的函数内部封装了一个 dispatch。

useState：细粒度的状态管理。 组件内原子级数据状态管理

useReducer：低成本的数据流。组件间轻量数据管理

## Reference

- [一文彻底搞懂 react hooks 的原理和实现 - 掘金](https://juejin.cn/post/6844903975838285838?share_token=d898bae0-23c6-4467-80f6-b41a345732d2#heading-1)
- [ReactHook 的原理和 TS 实现](https://gist.github.com/dongyuanxin/4281ee21eafdc0197d6ddea27bfbdbfd)
- [React hooks: not magic, just arrays | by Rudi Yardley | Medium](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)
- [React Hooks 原理 · Issue #26 · brickspert/blog](https://github.com/brickspert/blog/issues/26)
- [React Hooks: useState 和 useReducer 有什么区别？ · 语雀](https://www.yuque.com/lxylona/note/knwwpt)
