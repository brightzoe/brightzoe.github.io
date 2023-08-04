import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# useEffect

## 为什么使用 useEffect

官方叫法是用于函数的副作用，但不好理解。

useEffect 的意义是指定一个数组依赖，在依赖变化的时候触发副作用，相比写在函数顶层，更能够根据需要避免多余的 render。

### 执行时机

在每次浏览器页面绘制之后，大多数 effects 不会阻塞屏幕的更新，同样 effect 的清除也会被延迟。

```js
useEffect(() => {
  ChatAPI.subscribeToFriendStatus(props.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.id, handleStatusChange);
  };
});
```

以上代码，如果 props 从`{id: 10}`变到`{id:20}`，执行如下：

1. React 渲染{id: 20}的 UI。
2. 浏览器绘制。我们在屏幕上看到{id: 20}的 UI。
3. React 清除{id: 10}的 effect。//先清除再运行新的
4. React 运行{id: 20}的 effect。

> 来自 [useEffect 完整指南 — Overreacted](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)

## useEffect 闭包陷阱

useEffect 与 setInterval

```jsx live
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // useEffect 在第一次渲染时获取值为 0 的 count，我们不再重执行 effect，所以 setInterval 一直引用第一次渲染时的闭包 count，以至于 count + 1 一直是 1
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}
```

可以使用`setCount(count=>count+1)`来解决，也可以使用 useReducer。

但根本原因是 hooks 的思维模式与 setInterval 的思维模式不同。setInterval 是声明式的，没有及时地描述过程，一旦设定了 interval ，除了清除就没办法改变。

> 以上栗子是希望在组件 mounted 的时候执行 effect,在组件 unmounted 的时候清除 effect。

> 如果不写依赖，遇到的问题是：effect 会在每次组件渲染后都执行，都生成新的 interval。执行 clearInterval 和 setInterval 时，它们会进入时间队列里，如果频繁重渲染、重执行 effect,interval 可能没机会被执行。

解决思路：

每次 setInterval 里执行的 callback 都用带有最新 state,最新 props 的 callback，即页面每次渲染都更新一个 callback。

<Tabs>
<TabItem value="setInterval" label="setInterval">

```jsx live
function Counter() {
  const [count, setCount] = useState(0);
  const savedCallback = useRef();
  const callback = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    const id = setInterval(() => {
      savedCallback.current();
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <h1>{count}</h1>;
}
```

  </TabItem>
  <TabItem value="useInterval" label="useInterval">

```jsx live noInline
const useInterval = (cb, delay) => {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = cb;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};
function Counter() {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(count + 1);
  }, 1000);
  return <h1>{count}</h1>;
}
render(<Counter />);
```

  </TabItem>

  <TabItem value="useIntervalPause" label="usePauseInterval">

```jsx live noInline
const useInterval = (cb, delay) => {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = cb;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
function Counter() {
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(false);
  useInterval(
    () => {
      setCount(count + 1);
    },
    paused ? null : 1000,
  );
  const handlePause = (e) => {
    setPaused(!paused);
  };
  return (
    <>
      <input type="checkbox" checked={paused} onChange={handlePause} /> paused
      <h1>{count}</h1>
    </>
  );
}
render(<Counter />);
```

  </TabItem>
</Tabs>

了解更多： [使用 React Hooks 声明 setInterval — Overreacted](https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/)

## useEffect 与 useLayoutEffect

使用方式一致。

执行时机不同： useEffect 的回调在页面渲染后执行，useLayoutEffect 在页面渲染前执行。

底层处理不同： useEffect 是异步非阻塞调用，useLayoutEffect 同步阻塞调用。

大部分情况下适合使用 useEffect，useLayoutEffect 很可能会堵塞浏览器渲染。

:::tip

**useLayloutEffect**

useLayoutEffect 会在所有 dom 变更之后同步调用 effect，适合用来读取 dom 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。 :::

执行顺序见下面的栗子：

```jsx live noInline
function Son() {
  useEffect(() => {
    console.log('son useEffect'); //3
  }, []);
  useLayoutEffect(() => {
    console.log('son useLayoutEffect'); //1
  }, []);
  return <></>;
}
function Parent() {
  useEffect(() => {
    console.log('parent useEffect'); //4
  }, []);
  useLayoutEffect(() => {
    console.log('parent useLayoutEffect'); //2
  }, []);
  return <Son />;
}
render(<Parent />);
```

了解更多：[用过 useEffect，useLayoutEffect 吗 - 掘金](https://juejin.cn/post/7081103851884904484#heading-9)

## Reference

- [从 react hooks“闭包陷阱”切入，浅谈 react hooks - 掘金](https://juejin.cn/post/6844904193044512782#heading-0)
- [**使用 React Hooks 声明 setInterval — Overreacted**](https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/)
- [用过 useEffect，useLayoutEffect 吗 - 掘金](https://juejin.cn/post/7081103851884904484#heading-9)
- [useEffect 完整指南 — Overreacted](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)
