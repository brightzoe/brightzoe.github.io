# React 设计模式和最佳实践 -掘金小册

1. 在 React 中，界面完全由数据驱动；
2. 在 React 中，一切都是组件；
3. props 是 React 组件之间通讯的基本方式。


## 在设计 React 组件时，要注意以下原则：

保持接口小，props 数量要少；
根据数据边界来划分组件，充分利用组合（composition）；
把 state 往上层组件提取，让下层组件只需要实现为纯函数。

# create-react-app

webpack配置：
sass: cra已内置sass-loader,只需安装mode-sass/sass(dart-sass)

修改其他配置，不eject的方式：

- 需要安装：react-app-rewired customize-cra
  ```js
  const { override, addBabelPlugin, addBabelPreset, addWebpackAlias, adjustStyleLoaders } = require("customize-cra");
  const path = require("path");
  module.exports = override(
  	//写样式的方式
  	addBabelPlugin("styled-jsx/babel"),

  	//别名
  	addWebpackAlias({
  		"@": path.resolve(__dirname, ".", "src"),
  	}),

  	//sass-resources-loader共享公共样式文件
  	adjustStyleLoaders((rule) => {
  		if (rule.test.toString().includes("scss")) {
  			rule.use.push({
  				loader: require.resolve("sass-resources-loader"),
  				options: {
  					resources: "./src/styles/shared.scss",//地址
  				},
  			});
  		}
  	})
  );
  ```
- 通过craco配置，antd4推荐，暂未尝试。[参考](https://juejin.cn/post/6871148364919111688#heading-6)

# pureComponent
自动调用 `shouldComponentUpdate()` ，以浅层对比 prop 和 state(shallowEqual )
//TODO:手写原理和实现: https://segmentfault.com/a/1190000006741060

函数组件：
```js
const MyComponent = React.memo(function Component(props) {
  	/* 使用 props 渲染 */
  });
```

