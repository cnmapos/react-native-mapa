import BaseMap from './pages/BaseMap';
import Caemra from './pages/Camera';
import Weather from './pages/Weather';
import ZoomInOut from './pages/ZoomInOut';
import POI from './pages/POI';

const RoutesConfig = [
    {
        title: '地图',
        data: [
            {
                title: 'MapView',
                img: require('./assets/basic.png'),
                id: 'BaseMap',
                component: BaseMap,
            },
            {
                title: 'Camera',
                img: require('./assets/basic.png'),
                id: 'Camera',
                component: Caemra,
            },
            {
                title: 'Zoom In and Out',
                img: require('./assets/basic.png'),
                id: 'ZoomInOut',
                component: ZoomInOut,
            },
            {
                title: '底图组件',
                img: require('./assets/basic.png'),
            },
            {
                title: '控件',
                img: require('./assets/basic.png'),
            },
            {
                title: 'POI搜索',
                img: require('./assets/basic.png'),
                component: POI,
            },
            {
                title: '天气',
                img: require('./assets/basic.png'),
                id: 'Weather',
                component: Weather,
            },
        ],
    },
    {
        title: '图层',
        data: [
            {
                title: '栅格图层',
                img: require('./assets/basic.png'),
            },
            {
                title: '矢量图层',
                img: require('./assets/basic.png'),
            },
            {
                title: '热力图',
                img: require('./assets/basic.png'),
            },
        ],
    },
    {
        title: '绘制',
        data: [
            {
                title: '折线绘制',
                img: require('./assets/basic.png'),
            },
            {
                title: '圆形绘制',
                img: require('./assets/basic.png'),
            },
            {
                title: '多边形绘制',
                img: require('./assets/basic.png'),
            },
            {
                title: '贝塞尔曲线绘制',
                img: require('./assets/basic.png'),
            },
        ],
    },
];
export default RoutesConfig;
