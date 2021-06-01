# Hook 使用
- useeffect,依赖项如果是对象，只能浅比较，是不是同一个对象。如果需要深比较，实现方式：
  1. 使用` useDeepCompareEffect from "react-use/lib/useDeepCompareEffect";`

- useCallback使用场景：
  1. https://segmentfault.com/a/1190000020108840
     https://codesandbox.io/s/usecallbackzidingyihook-gydlj
  2. https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback
- 解决eslint:exhaustive-deps,依赖错误的相关问题：
  https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook

- context 使用方式：
  栗子:https://codesandbox.io/s/hooks-api-otmq6?file=/src/useContextExample.js