# react-router 前端路由传参方式

- 遇到的需求：
  通过点击进入页面url：tree/id,不是固定的路由，通过点击进入新页面的时候传递 treeId.
- 采用的方式：

  **使用 state/query 传参的方式：**

  - router 设置:`<Route path="/tree/:key" component={xx} />`
  - 页面使用:

  ```js
  //起始页面
  const From = (props) => {
  	const history = useHistory();
  	const handleClick = () => {
  		history.push({ pathname: "/tree/" + key, treeData:.data });
      //pathname是路由地址
      //treeData是你传递给下个页面的参数,之前只能叫state,现在自定义名字

      //也可以直接使用Link组件
      return(<Link to={{pathname: "/tree/" + key, treeData}}>)
  	};
  };
   //目标页面：
  const To = (props)=>{
    const treeData = props.location.treeData//读取到的参数
    return <></>
  }
  ```

  > 可以传递对象,不是明文传递。但页面刷新则读不到 prop.location 上的参数，参数丢失。开始使用的这种方式，但由于刷新丢失参数的问题，选择了下一种使用params的方式。
  在hashRouter情况下刷新会丢失参数，在browerRouter下刷新不会丢失参数。

  **使用 params 传参的方式：**

  - router 设置:`<Route path="/tree/:key" component={xx} />`，与上面一致
  - 页面使用,同上用 history 或 Link，不传 treeData,只有 path
    起始页面：` <Link to={{ pathname: "/myProject/treeStructure/" + key }}>`
    目标页面：`const key = this.props.match.params.key`,hook 方式使用`useParams`

  > 只能传递字符串，且只能放在 url 上，明文传递。页面刷新不会丢失参数。
  > 可以传多个参数，也可以使参数可选。`path="/tree/:key/:page?"`

<hr/>

- 搜到的相关内容总是提到 withRouter HOC,不知道干嘛的，在这里记录下：
  路由组件（直接与路由相连），拿到路由的参数，可以直接从 props.history/location 中拿到，而非路由组件，不能直接获取路由的参数，需要用 withRouter 包裹，才能拿到路由中的这些属性。

Reference：

1. [react router 相关 api 和参考](https://zhuanlan.zhihu.com/p/101129994)
2. [pass params with history](https://stackoverflow.com/questions/44121069/how-to-pass-params-with-history-push-link-redirect-in-react-router-v4)
