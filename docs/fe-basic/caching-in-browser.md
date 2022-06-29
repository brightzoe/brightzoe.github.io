# 浏览器本地存储

### 数据存储的类型

localStorage

- 大小 5M，文件存储级别，不清理浏览器缓存不消失

sessionStorage

- 大小 5M，内存级别，但是当前标签页关闭则丢失

Cookie

- 大小 4kb，前端可以操作（后端可以定义不可操作的数据），但是一般由后端定义，并且现在新版的浏览器在逐步的抛弃该功能。
- 服务器生成，产生原因是 HTTP 无状态，cookie 用来记录数据状态。

IndexedDB

- 最小 250M，文件级别（支持事务，属于 websql 的替代品），需要清理浏览器缓存才可以。一般用不到，主要是因为浏览器不做客户端的话那么就没什么用，做本地客户端可以用，比如 electron

内存存储

- 就是变量存储，可以说是没有上限，取决于你的内存

### 一般使用 webStorage 很少使用 cookie

使用 cookie 的问题：

1. 存放数据太少，4kb。
2. 每次都会携带在 HTTP 请求头，会与服务端进行交互，如果只是为了存储本地数据，会造成性能浪费。

webStorage：

1. 在客户端进行临时或永久性的数据存储，不直接参与服务端通信的交互，能够避免一些劫持的安全风险。

2. 存储容量 5M ，满足大多数应用场景，且每个存储有对应的 key,可以独立的管理对应的数据。
3. 只支持字符串类，需要手动 JSON.stringify()。

### 使用本地存储遇到的问题

目前在实际项目中，很容易出现，需要存储什么，就直接存储到 localStorage/sessionStorage 里。哪里需要就添加一个，随着项目复杂度提升，已经不记得写了多少个存储的 value,也容易出现顶掉前面设置的 key,从而导致一些 bug。项目变大后，后期不好维护整体的存储状态。需要统一管理存储。

- 可以给使用的本地存储添加前缀，项目前缀或作者等，对使用本地存储做一层封装，统一管理本地存储。
  在 config 统一注册需要存储的 key,只有注册了才能操作，没注册的提醒先去注册再进行存取删的操作。config 中规范所有本地存储中的值，分别代表什么。

  这个思路不错，来源于：[项目优化——localStorage|sessionStorage 统一管理方案 - 掘金](https://juejin.cn/post/6919376014867070989#heading-0)

### 使用 webStorage 的注意事项

1. 环境检查 `window && window.localStorage && window.sessionStorage`
2. 只能存储字符串。存储一些引用类型的数据，需要区分是否可以被 JSON.stringify。比如 undefined，function，symbol 等不可用。
3. 存入数据时可以添加时间戳，方便维护和调试。

   ```ts
   /**
   * 设置当前
   * @param key 设置当前存储key
   * @param value 设置当前存储value
   */
   setItem(key: string, value) {
     if (hasStringify(value)) {//能被序列化
       const saveData: StorageSaveFormat = {
         timestamp: new Date().getTime(),
         data: value
       }
       console.log(saveData, 'saveData')
       this.readStorage.setItem(key, JSON.stringify(saveData))
     } else {
       throwErrorMessage('需要存储的data不支持JSON.stringify方法，请检查当前数据')
     }
   }

   // 使用
   customStorage.setItem('setItem', [1])

   ```

4. 过期时间。localStorage 不手动清除是不会过期的，上面设置在存储时设置了时间戳，控制一个过期时间，在读取的时候添加是否过期的判断。

   ```ts
   /**
   * 获取数据
   * @param key 获取当前数据key
   * @returns 存储数据
   */
   getItem<T = any>(key: string): T | null {
     const content: StorageSaveFormat | null = JSON.parse(this.readStorage.getItem(key))
     if (content?.timestamp && new Date().getTime() - content.timestamp >= this.config.timeout) {
       this.removeItem(key)
       return null//(⊙o⊙)，存储过期了
     }
     return content?.data || null
   }

   ```

5. 可以监听 webStorage 的变化

https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent

6. 封装一个修改的方法.把旧的值变成新的值。与 setItem 的区别是是不是需要旧的值。

   ```ts
   /**
   * 修改当前存储内容数据
   * @param key 当前存储key
   * @param onChange 修改函数
   * @param baseValue 基础数据
   */
   changeItem<S = any>(
     key: string,
     onChange: (oldValue: S) => S | null, baseValue?: any
   ) {
     const data = this.getItem<S>(key)
     this.setItem(key, onChange(data || baseValue))
   }

   // # 使用
   customStorage.changeItem('key', (oldValue) => {
       return oldValue + 'newUpdate'
   })

   ```

7. 溢出问题。以下 api 可以获取存储总量，以及使用了多少。

   ```js
   navigator.storage.estimate().then((estimate) => {
     console.log(estimate);
   });
   ```

   > 需要在 https 且浏览器支持的情况下，存在兼容性问题。
   > https://developer.mozilla.org/zh-CN/docs/Web/API/StorageManager

如果濒临溢出，可以对存储时间戳进行排序，把旧的清除掉。

### 场景

- 搜索历史：频繁修改 storage ，可以使用 changeItem 方法。
- 大量的资源路径，如一堆 emoji 可以先存在 storage，不需要每次刷新都去请求。
- 跨标签通信
  - 一个窗口登出，所有窗口登出
  - 编辑数据，所有窗口数据都更新

### 可以使用一些封装好的库

比如 [store2](https://www.npmjs.com/package/store2)

## Reference

- [前端数据缓存（前端数据库）的一些见解，利用内存存储帮你优化接口请求 - 掘金](https://juejin.cn/post/6955672622587707428/)
- [【收藏就会】浏览器 WebStorage 缓存使用指南 - 掘金](https://juejin.cn/post/6984908770149138446#heading-13)
