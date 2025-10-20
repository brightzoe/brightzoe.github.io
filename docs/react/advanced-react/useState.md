# useState

`const [state, setState] = useState(initState);`

调用 useState 时，返回一个数组，state 初始值为外部调用 useState 时传入的参数。
useState 的参数（initState）是变量、对象或者是函数，变量或者对象会作为 state 的初始值，如果是函数，函数的返回值会作为初始值。

> initState 只会在组件的初始化渲染中起作用，后续渲染会被忽略。initState 可以是一个函数，函数的返回值会作为 initState 的值,这被称为惰性初始化。

> 对于对象和数组，注意 useState 中不会自动补全旧的变量，需要使用展开运算符自己手动补充,完成合并更新。

使用 useState 依赖上一次 state 时，使用 function 的方式更新 setState，确保拿到的是准确的 previous state。

```jsx live
function Count() {
  let [count, setCount] = useState(0);
  const handleAdd = function () {
    //批量更新
    setCount(count + 1); // setCount(count=>count + 1);
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleAdd}>add</button>
    </div>
  );
}
```

## setState 同步异步问题

本身不是异步的，但在表现上有时同步，有时异步。因为 setState 都会触发更新，将多个状态合并更新，减少渲染次数。

React 18之前，只在React时间处理函数或React声明周期中进行更新批处理（batchUpdate）。其他情况下，比如promise、setTimeout、setInterval、原生事件处理函数等，React会立即更新状态，而不进行批处理。

React 18之后，React会批处理所有更新。

- setState(newState)：这种形式直接接受一个新状态作为参数。它不考虑当前的状态，因此如果多次执行setState，只有最后一次设置的状态会被应用，这可能导致前面的状态更新被覆盖。

- setState(prevState => newState)：这种形式接受一个函数作为参数，该函数的参数是前一个状态prevState。这允许你基于前一个状态计算新状态，因此每次更新都基于最新的状态，这是更安全的方式，特别是在有多个连续状态更新的情况下。

当执行 setState 时 state 值被更新，UI 视图也将被更新。即 useState 返回的 setState 既更改了 state 的值，也自动调用了 render 方法触发视图更新。

## useState 简易原理

利用闭包封装简易 useState 雏形：

```ts
const rootElement = document.getElementById('root');
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
