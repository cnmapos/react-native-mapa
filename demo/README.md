# 示例文件夹 demo

## 如何写一个新的demo

文件夹介绍

```
--demo
  --assets 静态资源
  --common 公共组件
  --pages 具体的路由目录
  --sence 场景
  app.json
  App.tsx
  index.js 
  routes.ts 路由配置文件,加一个demo就是加一个路由配置、和组件
```

## 路由配置
在对应的 地图/图层/绘制 大模块内加一项即可
```js
import BaseMap from './pages/BaseMap.tsx';
const RoutesConfig = [
    {
        title: '地图',
        data: [
            {
                title: '基础地图', // 列表标题
                img: require('./assets/basic.png'),
                id: 'BaseMap', // 路由名称
                component: BaseMap, // 路由跳转组件
            },
        ],
    },
    {
        title: '图层',
        data: [...],
    },
    {
        title: '绘制',
        data: [...],
    },
];
```