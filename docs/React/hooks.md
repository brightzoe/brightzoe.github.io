# Hooks

> 注： 本文所有栗子均在： https://codesandbox.io/s/hook-e49wk

函数组件 App，在每一次渲染都会被调用，而每一次调用都会形成一个独立的上下文，可以理解成一个快照。每一次渲染形成的快照，都是互相独立的。

### useEffect

每次渲染函数组件时，useEffect 都是新的，都是不一样的。组件重新渲染，会重新执行 useEffect 内的回调，并且 里面 count 值也是当时的快照的一个常量值。

https://codesandbox.io/s/hook-e49wk?file=/src/useEffect.js

- 依赖项如果是对象，只能浅比较，是不是同一个对象。如果需要深比较，实现方式：

  1. 使用` useDeepCompareEffect from "react-use/lib/useDeepCompareEffect";`

> 下面 useCallback,useMemo 的第二个参数同 useEffect ，它是用于监听你需要监听的变量，如在数组内添加 name、phone、等参数，当改变其中的值，都会触发子组件副作用的执行。如果不添加依赖，则在任何重新渲染时都会执行。useMemo 和 useCallback，都能为「重复渲染」这个问题，提供很好的帮助。useCallback 是「useMemo 的返回值为函数」时的特殊情况，是 React 提供的便捷方式。

### useMemo

解决父组件更新引起子组件更新的问题，告诉子组件需要在什么时候更新，什么时候不更新。

相当于把父组件需要传递的参数做了一个标记，参数更新时更新子组件。无论父组件其他状态更新任何值，都不会影响要传递给子组件的对象。

`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`

https://codesandbox.io/s/hook-e49wk?file=/src/useMemo.js

> 传递给 useMemo 的函数在渲染期间运行，注意里面的逻辑不要再次触发渲染，副作用应该放在 useEffect 里面。<br/>
> 将 useMemo 作为性能优化，而不是语义保证，因为 React 有可能在某些情况下忘掉记住的值，重新计算。

#### React.memo 与 useMemo

开始总是弄混。

React.memo 是包装整个组件，只是浅比较 props 来确定是否重新渲染，当然可以手动写第二个参数比较具体 props 的不同来进行 re-render. **对组件外层进行包装，控制组件是否重新渲染**

useMemo 是实现局部 pure 的功能，控制组件的部分内容不要 re-render，而不是整个组件是否重新渲染。

1. React.memo 与 useMemo https://zhuanlan.zhihu.com/p/105940433

### useCallback

https://codesandbox.io/s/hook-e49wk?file=/src/useCallback.js

使用场景：

https://segmentfault.com/a/1190000020108840

1.  比较引用，配合使用 React.memo:
    https://codesandbox.io/s/hook-e49wk?file=/src/useCallback%2BReact.memo.js

    使用 React.memo 将子组件作为 pureComponent,减少不必要的渲染。useCallback 缓存 props 中的函数，减少 props 不必要的变化导致的渲染。

    ```js
    const Child = React.memo(function ({ val, onChange }) {
    	console.log("render...", val);
    	return <input value={val} onChange={onChange} />;
    });

    function App() {
    	const [val1, setVal1] = useState("");
    	const [val2, setVal2] = useState("");

    	//如果不用useCallback, 任何一个输入框的变化都会导致另一个输入框重新渲染
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
    ```

    TODO: https://codesandbox.io/s/usecallbackzidingyihook-gydlj

2.  实现按需加载,配合使用 useEffect:
    useCallback 支持我们缓存某一函数，当且仅当依赖项发生变化时，才更新该函数。这使得我们可以在子组件中配合 useEffect ，实现按需加载。

    ```js
    function Parent() {
      const [count, setCount] = useState(0);
      const [query, setQuery] = useState('keyword');

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
        <input onChange={(e) => {setQuery(e.target.value)}} />
        <Child getData={getData} />
        </>
      );
    }

    function Child({getData}) {
      useEffect(() => {
        getData();
      }, [getData]); // 函数可以作为依赖项参与到数据流中

      return (
      // ...
      );
    }
    ```

- 解决 eslint:exhaustive-deps,依赖错误的相关问题：
  https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook

- context 使用方式：
  https://codesandbox.io/s/hooks-api-otmq6?file=/src/useContextExample.js

### useContext

### useReducer

相比于 useState,useReducer 更适合：
例如 state 逻辑处理较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等场景。
useReducer 与 Reducer

useReducer 只支持同步,如何使用异步见[Reference5](https://stackoverflow.com/questions/53146795/react-usereducer-async-data-fetch)

### forwardRef

ref 转发，方便父组件拿到子组件的实例。把自身外面的 ref 转发到内部的组件，使写在自己身上的 ref 不指向自己。

https://codesandbox.io/s/hook-e49wk?file=/src/forwardRef.js

```js
function A(props, parentRef) {
	return (
		<div>
			<input type="text" ref={parentRef} />
		</div>
	);
}

let ForwardChild = forwardRef(A); // 把子组件包裹起来

export default function App() {
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
```

### useImperativeHandle

一般结合 forwardRef 使用，在 ref 转发到组件内部时，选择暴露一些特定的值或方法给父组件。

为什么使用：

- useImperativeHandle 可以让你在使用 ref 时，自定义暴露给父组件的实例值，不能让父组件想干嘛就干嘛

- 通过 useImperativeHandle ，子组件还可以使用很多的 ref,可以暴露给父组件操作子组件内部的多个 ref

  ```js
  function Child(props,parentRef){
    // 子组件内部自己创建 ref
    let focusRef = useRef();
    let inputRef = useRef();
    useImperativeHandle(parentRef,()=>(
      // 这个函数会返回一个对象
      // 该对象会作为父组件 current 属性的值
      // 通过这种方式，父组件可以使用操作子组件中的多个 ref
        return {
        focusRef,
        inputRef,
        name:'计数器',
        focus(){
            focusRef.current.focus();
        },
        changeText(text){
            inputRef.current.value = text;
        }
      }
    });
    return (
      <>
        <input ref={focusRef}/>
        <input ref={inputRef}/>
      </>
    )
  }
  Child = forwardRef(Child);
  ```

栗子见： https://codesandbox.io/s/hook-e49wk?file=/src/forwardRef.js

### 自定义 hook

封装一段逻辑。比如有一个请求公共数据的接口，在多个页面中被重复使用，你便可通过自定义 Hook 的形式，将请求逻辑提取出来公用。

https://codesandbox.io/s/hook-e49wk?file=/src/useApi.js

## Reference

1. [React 文档-useCallback](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback)
2. [你不知道的 useCallback](https://segmentfault.com/a/1190000020108840)
3. [当我们讨论 hooks 时在讨论什么](https://zhuanlan.zhihu.com/p/328540840)
4. [hook 一些基础](https://juejin.cn/book/6966551262766563328/section/6967228489208430603)
5. [useReducer async](https://stackoverflow.com/questions/53146795/react-usereducer-async-data-fetch)
6. [**React Hooks 系列之 3 useContext - 掘金**](https://juejin.cn/post/6844904153584500749#heading-0)
7. [React Hooks 详解 【近 1W 字】+ 项目实战 - 掘金](https://juejin.cn/post/6844903985338400782#heading-27)
