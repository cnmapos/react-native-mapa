# API文档
https://gitee.com/heavigo/maps/tree/main/docs

# ICON组件
使用的是https://reactnativeelements.com/
支持的图标列表：https://oblador.github.io/react-native-vector-icons/

# 文档生成
`typedoc`API文档生成使用`typedoc`，生成结果为静态html文件，可直接执行。如果为组件添加注释，可查看[官网](https://typedoc.org/guides/overview/)。

执行命令`yarn run doc:gen`生成API文档。执行命令`yarn run doc:start`启动本地服务查看生成的API文档。

如果想生成markdown文件，安装插件typedoc-plugin-markdown
```
npm install typedoc-plugin-markdown@next --save-dev
```
并在typedoc.json文件添加插件配置项:
```
"plugin": ["typedoc-plugin-markdown"]
```

#执行指令
- `yarn run doc:gen`: 热启动html文档生成
- `yarn run doc:`: 启动文档本地服务，可在浏览器查看
- `yarn run doc:start`: 生成文档并启动本地服务
- `yarn run doc:md`: 生成markdown格式文档，保存在specs目录

# Issues

- 1. 设置默认中心坐标
- 2. 支持地图的源梳理