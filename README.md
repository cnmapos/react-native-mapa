# API 文档

https://gitee.com/heavigo/maps/tree/main/docs

# UI组件
使用的是https://reactnativeelements.com/
支持的图标列表：https://oblador.github.io/react-native-vector-icons/

开发时使用@rneui/base的Icon图标未正常显示,因此图标、图标Button使用react-native-vector-icons，@rneui/base的图标也是依赖该库。
- 使用react-native-vector-icons是需要配置使用xcode配置xcodeproj项目文件，配置流程可查看[官方文档](https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file#bundled-icon-sets)
- 使用方式如下
```
import Icon from 'react-native-vector-icons/FontAwesome';

<Text>
    <Icon name="rocket" size={30} color="#900" />;
</Text>
<Icon.Button name="facebook" backgroundColor="#3b5998" />
```
- 如上代码在使用的前提是在项目中加入FontAwesome字体，要使用其他字体时也需要做相应的配置，已支持的字体以及代码可查看[react-native-vector-icons directory](https://oblador.github.io/react-native-vector-icons/)

# 文档生成

`typedoc`API 文档生成使用`typedoc`，生成结果为静态 html 文件，可直接执行。如果为组件添加注释，可查看[官网](https://typedoc.org/guides/overview/)。

执行命令`yarn run doc:gen`生成 API 文档。执行命令`yarn run doc:start`启动本地服务查看生成的 API 文档。

如果想生成 markdown 文件，安装插件 typedoc-plugin-markdown

```
npm install typedoc-plugin-markdown@next --save-dev
```

并在 typedoc.json 文件添加插件配置项:

```
"plugin": ["typedoc-plugin-markdown"]
```

#执行指令

-   `yarn run doc:gen`: 热启动 html 文档生成
-   `yarn run doc:`: 启动文档本地服务，可在浏览器查看
-   `yarn run doc:start`: 生成文档并启动本地服务
-   `yarn run doc:md`: 生成 markdown 格式文档，保存在 specs 目录

# Issues

-   1. 设置默认中心坐标
-   2. 支持地图的源梳理
