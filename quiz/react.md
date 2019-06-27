## react

1、如何安装 react
答：

```
npm install --save-exact react react-dom
```

2、如何定义 react 组件
答：

```js
import * as React from "react";
import * as ReactDom from "react-dom";

ReactDom.render(<div>hello</div>, document.getElementById("root"));
```

3、如何将 react 组件挂载到 html
答：

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<body>
  <div id="root"></div>
</body>

</html>
```

4、如何安装 types 定义文件
答：
在 type 目录下，建立类型文件

5、如何配置 webpack 打包

## react 16 新特性

1、组件正统之争：Function vs Class

2、Hooks 初接触

## 参考

[react class](https://react.docschina.org/docs/state-and-lifecycle.html)

[hook](https://react.docschina.org/docs/hooks-intro.html)
