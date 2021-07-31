## Hooks 使用

- useEffect,依赖项如果是对象，只能浅比较，是不是同一个对象。如果需要深比较，实现方式：

  1. 使用` useDeepCompareEffect from "react-use/lib/useDeepCompareEffect";`

- useCallback 使用场景：

  https://segmentfault.com/a/1190000020108840

  1.  比较引用，配合使用 useMemo:
      https://codesandbox.io/s/reactmemo-usecallback-9tbdr?file=/src/index.js

      ```js
      const Child = React.memo(function({ val, onChange }) {
        console.log("render...",val);
        return <input value={val} onChange={onChange} />;
      });

      function App() {
        const [val1, setVal1] = useState("");
        const [val2, setVal2] = useState("");

        //如果不用useCallback, 任何一个输入框的变化都会导致另一个输入框重新渲染
        const onChange1 = useCallback(evt => {
          setVal1(evt.target.value);
        }, []);

        const onChange2 = useCallback(evt => {
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

## Reference:

1. [React 文档-useCallback](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback)
2. [你不知道的 useCallback](https://segmentfault.com/a/1190000020108840)
3. [当我们讨论 hooks 时在讨论什么](https://zhuanlan.zhihu.com/p/328540840)
