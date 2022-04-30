---
sidebar_position: 2
# description:
keywords: [React Hooks Usage]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# React Hooks

> 本文所有栗子均在： https://codesandbox.io/s/hook-e49wk

函数组件 App，在每一次渲染都会被调用，而每一次调用都会形成一个独立的上下文，可以理解成一个快照。每一次渲染形成的快照，都是互相独立的。

```jsx live
//函数组件每一次渲染的独立上下文
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      console.log("点击次数: " + count);
    }, 3000);
  };
  //1、点击增加按钮两次，将 count 增加到 2。
  //2、点击「展示点击次数」。
  //3、在 console.log 执行之前，也就是 3 秒内，再次点击新增按钮 2 次，将 count 增加到 4。
  //打印出2，而不是4。
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>点击{count}次</button>
      <button onClick={handleClick}>展示点击次数</button>
    </div>
  );
}
```

使用 Hooks 的规则：

1. 总在组件的顶部调用 Hooks，不能在循环，条件或嵌套函数中使用 Hooks。
2. 只能在函数组件中使用 Hooks 或者在自定义 Hooks 中调用 Hooks。不要在普通的 js 函数中调用 Hooks。

### useState

useState 的参数是变量、对象或者是函数，变量或者对象会作为 state 的初始值，如果是函数，函数的返回值会作为初始值。

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

对于对象和数组，注意 useState 中不会自动补全旧的变量，需要使用展开运算符自己手动补充,完成合并更新。

### useEffect

解决的问题：EffectHook 用于函数式组件中副作用，执行一些相关的操作，逻辑聚合。

> 所谓副作用，不在渲染过程中产生的作用。

**useEffect 的执行**

依赖 deps：每次 deps 改变就会执行回调函数（useEffect 的第一个参数）。如果不传 deps，只要该组件有 state 改变就会触发回调函数。如果 deps 为一个空数组，回调函数只会在该组件初始化时执行一次。

依赖项如果是对象，只能浅比较，是不是同一个对象。如果需要深比较，实现方式：可以使用` useDeepCompareEffect`。

在 useEffect 的第一个参数中 return 一个函数，这个匿名函数将在组件卸载的时候执行，因此在这里可以移除监听等在卸载时执行的操作。

每次渲染函数组件时，useEffect 都是新的，都是不一样的。组件重新渲染，会重新执行 useEffect 内的回调，并且里面 count 值也是当时的快照的一个常量值。

<Tabs>
  <TabItem value="useeffect" label="useEffect 闭包">

```jsx live
// useEffect 每次重新渲染都是新的
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log("点击次数: " + count);
    }, 3000);
  }); //没有deps,组件重新渲染时，会重新执行 useEffect 内的回调，并且里面 count 值也是当时的快照的一个常量值。
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>点击{count}次</button>
    </div>
  );
}
```

  </TabItem>
  <TabItem value="componentDidUpdate" label="componentDidUpdate">

```jsx live
//类组件类组件，声明之后，会在内部生成一个实例 instance，所有的数据都会存在类的上下文中，所以 this.state.count 会一直指向最新的 count 值，与上面useEffect更新取到的state不一致，没有独立上下文
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidUpdate() {
    setTimeout(() => {
      console.log("点击次数: " + this.state.count);
    }, 3000);
  }
  render() {
    return <button onClick={() => this.setState({ count: this.state.count + 1 })}>点击{this.state.count}次</button>;
  }
}
```

  </TabItem>
</Tabs>

:::tip

**关于依赖**

下面的 useCallback,useMemo 的第二个参数同 useEffect 一致，用于监听变量，如在数组内添加 name、phone 等参数，当改变其中的值，都会触发子组件副作用的执行。

**如果不添加依赖，则在任何重新渲染时都会执行。**

:::

### useMemo

用于缓存一个值。

`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`

可以用于解决父组件更新引起子组件更新的问题，告诉子组件需要在什么时候更新，什么时候不更新。相当于把父组件需要传递的参数做了一个标记，参数更新时更新子组件。无论父组件其他状态更新任何值，都不会影响要传递给子组件的对象。

<!--
note: live-codeblock 里添加多个组件的方法：添加 noInLine, 代码最后写render()
-->

```jsx live noInline
function Child({ data }) {
  useEffect(() => {
    console.log("查询条件：", data);
  }, [data]);

  return <div>子组件</div>;
}

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [kw, setKw] = useState("");

  // const data = {
  //   name,
  //   phone
  // };
  //如果按照上面的部分，即使child的props 只有name,phone，没有kw,但修改kw,父组件重新渲染也会导致子组件重新渲染。
  //下面把导致重新渲染的值用useMemo包起来，使kw变化，父组件改变不影响子组件。
  const data = useMemo(
    () => ({
      name,
      phone,
    }),
    [name, phone]
  );

  return (
    <div className="App">
      <input onChange={(e) => setName(e.target.value)} type="text" placeholder="请输入姓名" />
      <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="请输入电话" />
      <input onChange={(e) => setKw(e.target.value)} type="text" placeholder="请输入关键词" />
      <Child data={data} />
    </div>
  );
}
render(<App />);
```

:::caution
传递给 useMemo 的函数在**渲染期间运行**，注意里面的逻辑**不要再次触发渲染**，副作用应该放在 useEffect 里面。

如果不提供依赖数组，则会在每次渲染时都重新计算。

将 useMemo 作为性能优化，而不是语义保证，因为 React 有可能在某些情况下忘掉记住的值，重新计算。
:::

#### React.memo 与 useMemo

长得比较像，开始总是弄混。

React.memo 是包装整个组件，只是浅比较 props 来确定是否重新渲染，当然可以手动写第二个参数比较具体 props 的不同来进行 re-render。**对组件外层进行包装，控制整个组件是否重新渲染。**

useMemo 是实现局部 pure 的功能，控制组件的部分内容不要 re-render，而不是整个组件是否重新渲染。

```jsx live noInline
const Child = (props = {}) => {
  console.log(`--- re-render ---`, props);
  return (
    <div>
      <p>number is : {props.number}</p>
    </div>
  );
};
const isEqual = (prevProps, nextProps) => {
  if (prevProps.number !== nextProps.number) {
    return false;
  }
  return true;
};
const ChildMemo = memo((props = {}) => {
  console.log(`--- memo re-render ---`, props);
  return (
    <div>
      <p>number is : {props.number}</p>
    </div>
  );
}, isEqual);
const App = (props = {}) => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const handleSetStep = () => {
    setStep(step + 1);
  };

  const handleSetCount = () => {
    setCount(count + 1);
  };

  const handleCalNumber = () => {
    setNumber(count + step);
  };

  return (
    <div>
      <button onClick={handleSetStep}>step is : {step} </button>
      <button onClick={handleSetCount}>count is : {count} </button>
      <button onClick={handleCalNumber}>numberis : {number} </button>
      <hr />
      <Child step={step} count={count} number={number} /> <hr />
      <ChildMemo step={step} count={count} number={number} />
    </div>
  );
};
render(<App />);
```

```jsx
//当然也可以用 useMemo 来缓存一个函数组件的返回值，也可以减少组件的重新渲染。
const ChildUseMemo = (props = {}) => {
  console.log(`--- component re-render ---`);
  //useMemo 包裹子组件渲染部分的逻辑。父组件更新时，子组件会重新执行，但并不会重新渲染
  return useMemo(() => {
    console.log(`--- useMemo re-render ---`);
    return (
      <div>
        <p>number is : {props.number}</p>
      </div>
    );
  }, [props.number]);
};
```

- [React.memo 与 useMemo - 知乎](https://zhuanlan.zhihu.com/p/105940433)

### useCallback

```jsx live noInline
function Child({ callback }) {
  useEffect(() => {
    callback();
  }, [callback]);

  return <div>子组件</div>;
}
function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [kw, setKw] = useState("");
  // const callback = () => {
  //   console.log('我是callback')
  // }
  //按照上面，父组件的重新渲染就会导致子组件重新渲染，给子组件添加依赖什么重新渲染,作为性能优化。
  const callback = useCallback(() => {
    console.log("我是callback");
  }, []);
  return (
    <div className="App">
      <input onChange={(e) => setName(e.target.value)} type="text" placeholder="请输入姓名" />
      <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="请输入电话" />
      <input onChange={(e) => setKw(e.target.value)} type="text" placeholder="请输入关键词" />
      <Child callback={callback} />
    </div>
  );
}

render(<App />);
```

useMemo 和 useCallback，都能为「重复渲染」这个问题，提供很好的帮助。useCallback 是「useMemo 的返回值为函数」时的特殊情况，是 React 提供的便捷方式。

#### useCallback 配合 React.memo 减少不必要的渲染

```jsx live noInline
//使用 React.memo 将子组件作为 pureComponent,减少不必要的渲染。useCallback 缓存 props 中的函数，减少 props 不必要的变化导致的渲染。
const Child = React.memo(function ({ val, onChange }) {
  console.log("render...", val);
  return <input value={val} onChange={onChange} />;
});

function App() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");

  //如果不用useCallback, 任何一个输入框的变化都会导致另一个输入框重新渲染.
  //一个输入框变化，父组件重新渲染，导致生成新的onChange函数，props 变化了，则子组件也重新渲染
  const onChange1 = useCallback((evt) => {
    setVal1(evt.target.value);
  }, []);

  const onChange2 = useCallback((evt) => {
    setVal2(evt.target.value);
  }, []);

  return (
    <>
      <Child val={val1} onChange={onChange1} />
      <Child val={val2} onChange={onChange2} />
    </>
  );
}
render(<App />);
```

#### useCallback 配合使用 useEffect 实现按需加载

useCallback 支持我们缓存某一函数，当且仅当依赖项发生变化时，才更新该函数。这使得我们可以在子组件中配合 useEffect ，实现按需加载。

```js live noInline
function Parent() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("keyword");

  const getData = useCallback(() => {
    const url = `https://mocks.alibaba-inc.com/mock/fO87jdfKqX/demo/queryData.json?query=${query}`;
    // 请求数据...
    console.log(`请求路径为：${url}`);
  }, [query]); // 当且仅当 query 改变时 getData 才更新

  // 计数值的变化并不会引起 Child 重新请求数据
  return (
    <>
      <h4>计数值为：{count}</h4>
      <button onClick={() => setCount(count + 1)}> +1 </button>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <Child getData={getData} />
    </>
  );
}

function Child({ getData }) {
  useEffect(() => {
    getData();
  }, [getData]); // 函数可以作为依赖项参与到数据流中

  return <p>child</p>;
}
render(<Parent />);
```

- 解决 eslint:exhaustive-deps,依赖错误的相关问题： [reactjs - How to fix missing dependency warning when using useEffect React Hook - Stack Overflow](https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook)

了解更多： [你不知道的 useCallback - SegmentFault 思否](https://segmentfault.com/a/1190000020108840)

<!-- TODO: 上面的链接的栗子 https://codesandbox.io/s/usecallbackzidingyihook-gydlj -->

### useContext

`Context` 是在组件树中自上而下地跨组件传递数据，不必显式地通过组件树逐级传递 props。

应用于在很多不同层级的组件间访问同样一些数据，但是会使组件复用性变差。有时可以用组件组合代替。

具体使用场景：管理当前的 locale，theme，userInfo 或者一些缓存数据，比替代方案要简单的多。

**Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。** 即使组件使用 React.memo 或 shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。

```jsx live noInline
const UserContext = React.createContext("default");
const ChannelContext = React.createContext("channel");
//只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。

//两种消费方式
function ComponentC() {
  return (
    <UserContext.Consumer>
      {/** 接收当前 context 值，返回一个React 节点 **/}
      {/** 当使用多个 context 时，这种消费方式结构会比较复杂 **/}
      {(user) => <div>CCCCCC User context value {user}</div>}
    </UserContext.Consumer>
  );
}
function ComponentE() {
  //使用多个context 的时候，useContext 相比consumer 更优雅简洁
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  console.log("user Render");
  return (
    <div>
      FFFFFFF {user} - {channel}
    </div>
  );
}
const ComponentF = React.memo(ComponentE);
const App = () => {
  const [user, setUser] = useState("");
  const changeUser = (e) => {
    setUser(e.target.value);
  };
  return (
    <div className="App">
      <input value={user} onChange={changeUser} />
      <UserContext.Provider value={user}>
        {/* Provider变化会引起内部组件重新渲染 */}
        <ComponentC />
        <ComponentF />
      </UserContext.Provider>
    </div>
  );
};

render(<App />);
```

了解更多： [**React Hooks 系列之 3 useContext - 掘金**](https://juejin.cn/post/6844904153584500749#heading-0)

### useReducer

相比于 useState,useReducer 更适合：

state 逻辑处理较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等场景。每次 state 变化时，都会触发一次重新渲染。

```jsx live noInline
const initialState = { count: 0 };
function reducer(state, action) {
  //接收当前 state 和 action， 并根据不同的 action 返回不同的新的 state。
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      {/* dispatch 一个action */}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}
render(<Counter />);
```

> useState,useReducer 都提供了惰性初始化的方式。可以通过函数计算初始值。

useReducer + useContext 实现全局 state：[hook - CodeSandbox](https://codesandbox.io/s/hook-e49wk?file=/src/useReducer%2BuseContext.js)

useReducer 实现 todo：[react-todo - CodeSandbox](https://codesandbox.io/s/react-todo-k99v11?file=/src/reducer-todos/todos.js)

useReducer 中的 reducer 不支持异步，配合使用异步：[hook - CodeSandbox](https://codesandbox.io/s/hook-e49wk?file=/src/asyncUseReducer.js)

了解更多：

[React Hooks 系列之 4 useReducer - 掘金](https://juejin.cn/post/6844904157892050957#heading-3)

[reactjs - React useReducer async data fetch - Stack Overflow](https://stackoverflow.com/questions/53146795/react-usereducer-async-data-fetch)

[React Hooks: useState 和 useReducer 有什么区别？ · 语雀](https://www.yuque.com/lxylona/note/knwwpt#0U9me)

:::tip

**useReducer 与 useState**

React 内部的 useState 是通过 useReducer 实现的，setState 内部封装了一个 dispatch。

useState 适合处理结构简单的 State，算是一个在使用上更简单的 useReducer。

useReducer 适合处理简易的组件间数据流管理，比 Redux 更轻量。

:::

### UseRef

返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内持续存在。

可以用 Ref 指向一个 dom 来控制它的变化，另外也可以用来存放变量，比如 setTimeout，setInterval，存起来方便在合适的时机清除。

<Tabs>
<TabItem value="domRef" label="domRef">

```jsx live
//访问DOM元素
function TextInputWithFocusButton() {
  const inputRef = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

  </TabItem>
  <TabItem value="variableRef" label="variableRef">

```jsx live
//缓存变量
function Counter() {
  const [count, setCount] = useState(0);
  const prevRef = useRef();
  const increment = () => {
    prevRef.current = count;
    setCount((count) => count + 1);
  };
  const decrement = () => {
    prevRef.current = count;
    setCount((count) => count - 1);
  };

  return (
    <div>
      <p>当前count： {count} </p>
      <p>上一次的count：{prevRef.current}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
```

  </TabItem>
</Tabs>

:::tip

useRef 会在每次渲染时返回同一个 ref 对象。变更 `.current` 属性不会引发组件重新渲染。如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用回调 ref 来实现。

:::

### 自定义 hook

封装一段逻辑。比如有一个请求公共数据的接口，在多个页面中被重复使用，你便可通过自定义 Hook 的形式，将请求逻辑提取出来公用。

实现一些 custom Hooks [hook - CodeSandbox](https://codesandbox.io/s/hook-e49wk?file=/src/customHooks/useCounter.js)

### forwardRef

ref 转发，方便父组件拿到子组件的实例。把自身外面的 ref 转发到内部的组件，使写在自己身上的 ref 不指向自己。

```jsx live noInline
function A(props, parentRef) {
  return (
    <div>
      <input type="text" ref={parentRef} />
    </div>
  );
}
let ForwardChild = forwardRef(A); // 把子组件包裹起来
function App() {
  const parentRef = useRef();
  function focusHander() {
    console.log("input的value", parentRef.current.value);
  }
  return (
    <div>
      <ForwardChild ref={parentRef} />
      <button onClick={focusHander}>获取焦点</button>
    </div>
  );
}
render(<App />);
```

### useImperativeHandle

一般结合 forwardRef 使用，在 ref 转发到组件内部时，选择暴露一些特定的值或方法给父组件。

为什么使用：

- useImperativeHandle 可以让你在使用 ref 时，自定义暴露给父组件的实例值，不能让父组件想干嘛就干嘛

- 通过 useImperativeHandle ，子组件还可以使用很多的 ref,可以暴露给父组件操作子组件内部的多个 ref

```jsx live noInline
function Child(props, parentRef) {
  const inputRef = useRef();
  const [name, setName] = useState("默认name");
  // 把子组件A 内部的一些值或方法暴露给父组件使用
  useImperativeHandle(parentRef, () => {
    return {
      name,
    };
  });
  return (
    <div>
      <input type="text" ref={inputRef} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
let ForwardChild = forwardRef(Child);
function App() {
  const parentRef = useRef();
  //parentRef.current 拿到的是子组件通过useImperativeHandle 返回的一个对象
  const say = () => {
    console.log(parentRef.current.name);
  };
  return (
    <>
      <ForwardChild ref={parentRef} />
      <button onClick={say}>打印子组件name</button>
    </>
  );
}
render(<App />);
```

## 理论篇/面试篇

### 为什么不能在循环中使用 hook

不能在循环/条件判断/嵌套函数中使用 hook，要保证每个 hook 的调用顺序稳定。

每一个 hook 都是有序的存在 fiber 上的，如果在 if 里用 hook，可能会导致新的 hook 位置和之前记录的不一致，这样就不知道要跟谁对比了，导致 hook 功能无效。

### useLayloutEffect

useLayoutEffect 会在所有 dom 变更之后同步调用 effect，适合用来读取 dom 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。

#### useEffect 与 useLayoutEffect

使用方式一致。

执行时机不同： useEffect 的回调在页面渲染后执行，useLayoutEffect 在页面渲染前执行。

底层处理不同： useEffect 是异步非阻塞调用，useLayoutEffect 同步阻塞调用。

大部分情况下适合使用 useEffect，useLayoutEffect 很可能会堵塞浏览器渲染。
执行顺序见下面的栗子：

```jsx live noInline
function Son() {
  useEffect(() => {
    console.log("son useEffect"); //3
  }, []);
  useLayoutEffect(() => {
    console.log("son useLayoutEffect"); //1
  }, []);
  return <></>;
}

function Parent() {
  useEffect(() => {
    console.log("parent useEffect"); //4
  }, []);
  useLayoutEffect(() => {
    console.log("parent useLayoutEffect"); //2
  }, []);
  return <Son />;
}
render(<Parent />);
```

- [用过 useEffect，useLayoutEffect 吗 - 掘金](https://juejin.cn/post/7081103851884904484#heading-9)

### useEffect 闭包陷阱

```jsx live
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 闭包：回调函数只运行一次，这里的 count 只记住初次渲染的那个值
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}
```

## Reference

- [React 文档-useCallback](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback)
- [你不知道的 useCallback](https://segmentfault.com/a/1190000020108840)
- [当我们讨论 hooks 时在讨论什么](https://zhuanlan.zhihu.com/p/328540840)
- [hook 一些基础](https://juejin.cn/book/6966551262766563328/section/6967228489208430603)
- [useReducer async](https://stackoverflow.com/questions/53146795/react-usereducer-async-data-fetch)
- [**React Hooks 系列之 3 useContext - 掘金**](https://juejin.cn/post/6844904153584500749#heading-0)
- [React Hooks 系列之 4 useReducer - 掘金](https://juejin.cn/post/6844904157892050957#heading-3)
- [React Hooks 详解 【近 1W 字】+ 项目实战 - 掘金](https://juejin.cn/post/6844903985338400782#heading-27)
