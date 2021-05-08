# Hook 使用
- useeffect,依赖项如果是对象，只能浅比较，是不是同一个对象。如果需要深比较，实现方式：
  1. 使用` useDeepCompareEffect from "react-use/lib/useDeepCompareEffect";`    