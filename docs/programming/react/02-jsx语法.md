# Jsx语法
## 什么是JSX？

JSX全称 (JavaScriptXML) 是JavaScript的语法扩展，允许你在JavaScript代码中编写类似于HTML的代码。JSX可以很好的描述UI与逻辑组件之间的交互与呈现，并且它具有JavaScript的所有功能。

示例：

```jsx
const element = <h1>hello, world!</h1>;
```

通过将 JavaScript 和 XML相结合形成的一种新语法。



## 为什么使用JSX?

React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。

React并没有采用将标记与逻辑分离到不同文件这种人为分离方式，而是通过将两者共同存放在称之为"组件"（Component）的松散耦合单元之中。

并且React并不强制要求使用JSX，但是大多数人发现，在 JavaScript 代码中将 JSX 和 UI 放在一起时，会在视觉上有辅助作用。它还可以使 React 显示更多有用的错误和警告消息。

> 注意：JSX and React是相互独立的东西。并不是说 JSX 是 React 所专属的，但它们经常一起使用，你可以单独使用它们中的任意一个。

