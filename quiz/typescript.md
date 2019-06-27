## typescript

1、如何安装 typescript
答：

```
npm install --save-dev typescript
```

2、如何配置 typescript
答：
在工程根目录创建文件 tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "module": "commonjs",
    "target": "ES5",
    "jsx": "react"
  },
  "include": ["./src/**/*"]
}
```

3、如何运行 typescript
答：

```
tsc
```

## 语法

1、如何定义全局类型

2、有哪些基本类型

3、如何使用命名空间
