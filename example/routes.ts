import BaseMap from './pages/BaseMap';
import Caemra from './pages/Camera';
import Weather from './pages/Weather';
import Background from './pages/Background';
import ZoomInOut from './pages/ZoomInOut';
import Location from './pages/Location';
import POI from './pages/POI';
import ImageSource from './pages/ImageSource';
import ImageShapeIcon from './pages/ImageShapeIcon';
import ImageViewIcon from './pages/ImageViewIcon';
import VectorSource from './pages/VectorSource';
import LineLayer from './pages/LineLayer';
import FillLayer from './pages/FillLayer';
import Marker from './pages/Marker';
import FillExtrusionLayer from './pages/FillExtrusionLayer';
import QueryFeature from './pages/QueryFeature';
import RasterLayer from './pages/RasterLayer';
import CircleLayer from './pages/CircleLayer';
import ModelLayer from './pages/ModelLayer';
import PolylinePainter from './pages/painters/Polyline';
import PolygonPainter from './pages/painters/Polygon';
import CirclePainter from './pages/painters/Circle';
import RectanglePainter from './pages/painters/Rectangle';
import HeatmapLayer from './pages/HeatmapLayer';

import ScalebarView from './pages/Scalebar';
import CompassView from './pages/Compass';

const RoutesConfig = [
    {
        title: 'Map',
        data: [
            {
                title: 'Base Map',
                img: require('./assets/basic.png'),
                id: 'Base Map',
                component: BaseMap,
            },
            {
                title: 'Background Map',
                img: require('./assets/basic.png'),
                id: 'BackgroundMap',
                component: Background,
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
                title: 'Location',
                img: require('./assets/basic.png'),
                id: 'Location',
                component: Location,
            },
            {
                title: 'Scalebar',
                img: require('./assets/basic.png'),
                id: 'Scalebar',
                component: ScalebarView,
            },
            {
                title: 'Compass',
                img: require('./assets/basic.png'),
                id: 'Compass',
                component: CompassView,
            },
            {
                title: 'POI Search',
                img: require('./assets/basic.png'),
                component: POI,
            },
            {
                title: 'Weather',
                img: require('./assets/basic.png'),
                id: 'Weather',
                component: Weather,
            },
        ],
    },
    {
        title: 'Layers',
        data: [
            {
                title: 'Image Source',
                img: require('./assets/basic.png'),
                id: 'ImageSource',
                component: ImageSource,
            },
            {
                title: 'Image Shape Icon',
                img: require('./assets/basic.png'),
                id: 'ImageShapeIcon',
                component: ImageShapeIcon,
            },
            {
                title: 'Image View Icon',
                img: require('./assets/basic.png'),
                id: 'Image View Icon',
                component: ImageViewIcon,
            },
            {
                title: 'Vector Source',
                img: require('./assets/basic.png'),
                id: 'VectorSource',
                component: VectorSource,
            },
            {
                title: 'Marker',
                img: require('./assets/basic.png'),
                id: 'Marker',
                component: Marker,
            },
            {
                title: 'Line Layer',
                img: require('./assets/basic.png'),
                id: 'LineLayer',
                component: LineLayer,
            },
            {
                title: 'Fill Layer',
                img: require('./assets/basic.png'),
                id: 'FillLayer',
                component: FillLayer,
            },
            {
                title: 'Fill Extrusion Layer',
                img: require('./assets/basic.png'),
                id: 'FillExtrussionLayer',
                component: FillExtrusionLayer,
            },
            {
                title: 'Query Features',
                img: require('./assets/basic.png'),
                id: 'QueryFeatures',
                component: QueryFeature,
            },
            {
                title: 'RasterLayer',
                img: require('./assets/basic.png'),
                id: 'RasterLayer',
                component: RasterLayer,
            },
            {
                title: 'HeatmapLayer',
                img: require('./assets/basic.png'),
                id: 'HeatmapLayer',
                component: HeatmapLayer,
            },

            {
                title: 'Raster Layer',
                img: require('./assets/basic.png'),
            },
            {
                title: 'Circle Layer',
                img: require('./assets/basic.png'),
                id: 'CircleLayer',
                component: CircleLayer,
            },
            {
                title: 'Model Layer',
                img: require('./assets/basic.png'),
                id: 'ModelLayer',
                component: ModelLayer,
            },
        ],
    },
    {
        title: 'Draw',
        data: [
            {
                title: 'Line',
                img: require('./assets/basic.png'),
                id: 'Polyline',
                component: PolylinePainter,
            },
            {
                title: 'Polygon',
                img: require('./assets/basic.png'),
                id: 'Polygon',
                component: PolygonPainter,
            },
            {
                title: 'Circle',
                img: require('./assets/basic.png'),
                id: 'Circle',
                component: CirclePainter,
            },
            {
                title: 'Rectangle',
                img: require('./assets/basic.png'),
                component: RectanglePainter,
            },
        ],
    },
];
export default RoutesConfig;
