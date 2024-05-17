# React 新动态

## React 18

### flushSync

React18中所有的 setState 都是批处理更新。使用 flushSync 可以退出批量更新，直接进行强制更新。但flushSync函数内部的多个setState仍然为批量更新。

### Concurrent Mode

并发模式，通过渲染可中断来修复阻塞渲染的限制，允许React在浏览器空闲时执行渲染更新，依赖 requestIdleCallback 实现。

使用 createRoot 才能启用并发渲染模式。

### 并发特性

开启并发模式后才能使用的特性。

#### useTransition

延迟更新，返回`[isPending, startTransition]`用于改善用户交互。被 `startTransition`包裹的代码触发的渲染被标记为不紧急渲染，可能被其他紧急渲染抢占
。
把更新任务变成延迟更新任务。

#### useDeferredValue

返回一个延迟值，让一个state延迟渲染。当没有紧急更新时，该state才会更新。

包裹一个state，产生一个新的值，这个值作为延迟状态。

### Strict Mode

采用严格模式，React 对每个组件都会执行两次渲染。

### useSyncExternalStore

将外部数据同步到React中，一般是第三方状态管理库使用。

---

以下为React 19中新特性：

## React Compiler

近几年，许多前端框架拥抱基于 Signal 的细粒度更新，用于优化前端框架的性能问题。而React 基于 Fiber 的diff 更新成为了最大的短板，大量 re-render 造成的性能损耗，是不得不面对的挑战。（细粒度更新并非所有场景都有明显优势）

React 提供了 memo/useMemo/useCallback 供开发者优化项目性能，但上手难度不低。

React 19 将会推出 React Compiler，在开发者不调整任何代码的情况下，自动优化项目性能。帮助我们不使用上面几个api的情况下优化re-render。

## React Server Components

在Next.js中得到落地的实现。

## 围绕异步编程的开发体验提升

减少使用useEffect。
使用新的use Api,可以从Promise/context中读取值，不是一个hook，可以在循环中或者条件语句中使用。但必须在组件或hook中使用。

## form 相关hooks

- useFormStatus [useFormStatus – React](https://react.dev/reference/react-dom/hooks/useFormStatus)

  增强表单提交体验。在数据提交期间显示加载动画。

- useFormState

  简化服务器交互，管理表单提交状态并捕获服务器响应。不需要通常的 useEffect + setMessage。

## useOptimistic

乐观更新，为预期成功的场景设计，预期的反馈使交互感觉更快。

## References

- [被严重低估！React 19 又是一次开发方式的变革，useEffect 将会逐渐退出历史舞台](https://mp.weixin.qq.com/s?__biz=MzI4NjE3MzQzNg==&mid=2649868281&idx=1&sn=034c7a5b4696e70326d351c21ebabb37&chksm=f23a65a3bad3ded1696a5ad8e360c8741a0e0c5fe5845fe036146a14a7f22aaf9ffef7857a73&scene=132&exptype=timeline_recommend_article_extendread_samebiz&show_related_article=1&subscene=0&scene=132#wechat_redirect)
