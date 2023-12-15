# 竞态问题

常见的竞态场景：搜索、分页、选项卡的数据。

比如在分页列表里，快速切换页面导致前面几页与当前页的数据都在 pending，无法保证数据的返回先后顺序，有可能出现前页的数据返回的晚，导致前页的数据覆盖掉当前页的数据。

## 原因

无法保证异步操作完成的顺序会按照他们发起的顺序。本质是 js 的异步机制与网络的不确定性，导致处理响应的时机不确定。

## 解决思路

一般来说有两种方式处理。

- 取消过期请求
- 忽略过期请求

### 取消过期请求

- axios
  之前的版本采用 cancelToken api，但已被废弃。0.22.0 版本后，使用与 fetch 一样的 AbortController 取消请求。处理请求错误时要注意区分该错误是否来自于 cancel。

  > CancelToken 的方式：取消请求时，通过 xhr.abort()来取消请求，通过 promise.reject() 拒绝请求的 promise。

  ```js
  const controller = new AbortController();
  axios
    .get('/foo/bar', {
      signal: controller.signal,
    })
    .then(function (response) {
      //...
    });
  // 取消请求
  controller.abort();
  ```

  实际项目使用时可以进一步封装。

- fetch
  取消请求同上，使用 AbortController。

- XMLHttpRequest
  使用 xhr.abort()

> 原生 promise 并不支持 cancel，cancel 对于异步操作来说又是个很常见的需求。社区很多仓库都自己实现了 promise 的 cancel 能力。内部的 cancel 让 resolve reject 永远不会执行，所谓忽略了请求。

React Query 包含取消请求的 api，可以直接取消请求。

swr 使用 mutate / useSWRMutation 避免竞态条件。

### 忽略过期请求

当请求回来的时候，只需要判断返回的数据是否是最新一次的数据，不是则忽略即可。

- 封装 promise 的 cancel，在每次请求时取消上一次请求。

- 使用唯一标识每次请求。

  ```js
  // 利用闭包和唯一标识
  function resolveLastCall(fn) {
    let currentId = 0;

    const Wrapper = async (...args) => {
      const thisFetchId = currentId + 1;
      currentId = thisFetchId;
      const value = await fn.apply(this, args);
      if (currentId === thisFetchId) {
        return value;
      }
      throw new Error('not the last call');
    };
    return Wrapper;
  }

  // usage
  const fn = (duration) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(duration), duration);
    });

  const wrappedFn = resolveLastCall(fn);
  wrappedFn(500).then((value) => console.log(value));
  wrappedFn(1000).then((value) => console.log(value));
  wrappedFn(100).then((value) => console.log(value));
  ```

  使用 useEffect 实现，利用 didCancel 变量以及 **useEffect 的清除函数**，本质是发起新请求后将之前请求的标志位置为 false。

  ```js
  useEffect(() => {
    let didCancel = false;
    setIsLoading(true);

    fetch(`https://get.a.article.com/articles/${articleId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Failed to fetch article'));
      })
      .then((fetchedArticle) => {
        if (!didCancel) {
          setArticle(fetchedArticle);
        }
      })
      .catch((error) => {
        if (!didCancel) {
          // Handle or log the error here
          console.error(error);
        }
      })
      .finally(() => {
        if (!didCancel) {
          setIsLoading(false);
        }
      });

    return () => {
      didCancel = true;
    };
  }, [articleId]);
  ```

上面 useEffect 的方式同样可以改为 abortController 实现**取消请求**。利用清理函数，在发起新的请求时取消上一个请求:

```js
useEffect(() => {
  const abortController = new AbortController();

  setIsLoading(true);
  fetch(`https://get.a.rticle.com/articles/${articleId}`, {
    signal: abortController.signal,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject();
    })
    .catch(() => {
      // note: 注意做好错误处理、由于请求被取消不报错
      if (abortController.signal.aborted) {
        console.log('The user aborted the request');
      } else {
        console.error('The request failed');
      }
    })
    .then((fetchedArticle: Article) => {
      setArticle(fetchedArticle);
    })
    .finally(() => {
      setIsLoading(false);
    });

  return () => {
    abortController.abort();
  };
}, [articleId]);
```

### 取消请求与忽略请求

取消请求依赖于具体请求的 api，如果采用取消请求可以一定程度减轻服务端压力。

忽略请求更通用，更容易抽象和封装，本质上所有的异步方法都能通过忽略过期的异步请求的方式实现。

:::tip deep

除了上面两种解决方式，比如 React query，SWR,GraphGL，ahooks 的 useRequest 都有竞态处理。

了解 rxjs

:::

## References

[Handling API request race conditions in React](https://sebastienlorber.com/handling-api-request-race-conditions-in-react)
[如何解决前端常见的竞态问题 - 掘金](https://juejin.cn/post/7128205011019890695?searchId=2023080917253797875C308C998069E70D#comment)
[awesome-imperative-promise/src/index.ts at master · slorber/awesome-imperative-promise](https://github.com/slorber/awesome-imperative-promise/blob/master/src/index.ts)
[解决前端常见问题：竞态条件 - 掘金](https://juejin.cn/post/7098287689618685966?searchId=202308111708527F6158743AF6EB075B5C#heading-1)
