# API 文档

https://gitee.com/heavigo/maps/tree/main/docs

# UI组件
使用的是https://reactnativeelements.com/
支持的图标列表：https://oblador.github.io/react-native-vector-icons/

开发时使用@rneui/base的Icon图标,依赖react-native-vector-icons。
- 使用react-native-vector-icons是需要配置使用xcode配置xcodeproj项目文件，配置流程可查看[官方文档](https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file#bundled-icon-sets)
- 使用方式如下
```
import { Icon } from '@rneui/themed';

<Icon name="accessibility" type={'ionicon'} size={30} color="#900" />
<Icon name="accessibility-outline" type={'ionicon'} size={30} color="#900" />
```
- 如上代码在使用的前提是在项目中加入FontAwesome字体，要使用其他字体时也需要做相应的配置，已支持的字体以及代码可查看[react-native-vector-icons directory](https://oblador.github.io/react-native-vector-icons/)
-- 增加新的字体之后，需要执行以下指令之后才能正常显示图标
```
yarn install
cd ios
pod install
```
Icon支持的字体库包含
```
export declare type IconType = 'material' | 'material-community' | 'simple-line-icon' | 'zocial' | 'font-awesome' | 'octicon' | 'ionicon' | 'foundation' | 'evilicon' | 'entypo' | 'antdesign' | 'font-awesome-5' | string;

```

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

# amap web service API
目前通过typescript定义的服务接口以及数据结构如下(目录types/amap):
- poi: POI周边搜索、POI关键词搜索、多边形搜索、根据POI ID搜索
- geo: 地理位置编码、逆地理位置编码
- tip: POI搜索提示
- ip: 根据IP搜索地址信息
- event: 实时事件搜索
- district: 行政区域搜索
- weather: 实时天气、天气预报

在开发过程中当需要用到以上数据时，需要在modules/amap目录下实现具体接口，目前已实现接口：
- poi: POI周边搜索

# Issues

-   1. 设置默认中心坐标
-   2. 支持地图的源梳理
-   3. 目前的demo方式初次构建的index还是在根目录下，暂时在根目录下新建index.js文件引入demo/index.js
-   4.执行typedoc报"Cannot find module 'react-native-mapa' or its corresponding type declarations."错误
