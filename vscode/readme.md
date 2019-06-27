
## 围绕vscode打造极致编码体验

## 极致外观

1、编程字体

2、编程主题(option)

3、括号分色

## 代码格式化

1、eslint

## git 管理

1、gitLens

2、gitPullRequest

## 插件开发

1、安装脚手架
```
cnpm install -g yo generator-code
yo code
```

2、常用配置
```
name: webpack-config
displayName: webpack-config
description: give tip for webpack config
publisher: lian
```

3、调试

4、创建发布者
[官网](https://visualstudio.microsoft.com/team-services/)

4.1 注册帐号

4.2 保存token
  ```
  fkqm2bt36wq6b5exndknxz5hi3qvpd73toawy4zujjvfiwf3l7ja
  ```

5、打包工具
```
cnpm install --save-dev vsce
npx vsce create-publisher <name>
```

6、构建发布
```
vsce package
vsce publsh <version>
```




