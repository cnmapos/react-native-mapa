import Mapa, {Slot} from 'react-native-mapa';
import {SafeAreaView} from 'react-native';
import {BackgroundListItem} from '../../src/components/Background';

function PreView({navigation}: any): React.JSX.Element {
    Mapa.setAccessToken(
        'sk.eyJ1IjoiY25tYXBvcyIsImEiOiJjbHRqa2RqNzgwczhnMnFrOWNnZ2t5bHA3In0.WJN2DQHS9dwoKVHyfiBKYg',
    );
    const center = [104.06189140695824, 30.65796677659171];
    const zoom = 14;
    const backgroundList: BackgroundListItem[] = [
        {
            id: 'AmapVector',
            name: '高德矢量地图',
            styleJSON: {
                version: '1.0.0',
                name: 'AMap',
                constants: {},
                sources: {
                    amap: {
                        type: 'raster',
                        tiles: [
                            'https://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}',
                        ],
                    },
                },
                sprite: '',
                glyphs: '',
                layers: [
                    {
                        id: 'amap',
                        source: 'amap',
                        type: 'raster',
                    },
                ],
            },
        },
        {
            id: 'AmapSatellite',
            name: '高德卫星地图',
            styleJSON: {
                version: '1.0.0',
                name: 'AMap',
                constants: {},
                sources: {
                    amap: {
                        type: 'raster',
                        tiles: [
                            'https://webst04.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
                        ],
                    },
                },
                sprite: '',
                glyphs: '',
                layers: [
                    {
                        id: 'amap',
                        source: 'amap',
                        type: 'raster',
                    },
                ],
            },
        },
        {
            id: 'MapboxVector',
            name: 'mapbox矢量地图',
            styleURL: 'mapbox://styles/mapbox/dark-v10',
        },
        {
            id: 'Satellite',
            name: 'mapbox卫星地图',
            styleURL: 'mapbox://styles/mapbox/satellite-v9',
        },
    ];
    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView>
                <Slot slot="rightTop" backgroundColor={'transparent'}>
                    <Mapa.Background
                        list={backgroundList}
                        defaultValue={'MapboxVector'}
                    />
                    <Mapa.Camera zoom={zoom} center={center} />
                </Slot>
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default PreView;
