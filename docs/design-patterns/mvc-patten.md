# MVC、MVVM 模式

## MVC

Model-View-Controller 是软件工程中的一种架构模式，不算设计模式，但它里面使用了不同的设计模式。对应用代码进行**分层**以便更好的组织。

model 代表应用的数据，用于封装与程序的业务逻辑相关的数据和对数据的处理方法。

view 处理屏幕上展示的内容，一般没有程序上的逻辑，但需要根据model的变化更新view，基于观察者模式，需要事先在model上注册。

controller 用于组织不同层面，控制应用程序的流程，用于处理用户的行为/数据model的改变并作出响应。

![MVC的典型流程](https://s2.loli.net/2024/07/15/NX9pwAkvMsoyJ4q.png)

## MVVM

Model-View-ViewModel 基于MVC衍生的另一种架构模式。核心是ViewModel层，与视图层进行双向数据绑定。并与Model层进行数据请求和交互。

Model 数据模型

View 视图层

ViewModel 视图模型层，封装了视图状态和行为。

- 能够观察到数据的变化，并对视图进行更新。
- 能够监听到视图的变化，并通知数据发生变化。
