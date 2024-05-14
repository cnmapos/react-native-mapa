import Mapbox from '@rnmapbox/maps';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ReactElement, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import { MapContext } from '../modules/MapContext';
import { Projection, MapStyle, MapViewInterface, MapIdleEvent, PressFeature } from '../types';
import { styleFormat } from '../config/style';
import React from 'react';
import { Map } from '../modules/Map';

/**
 * MapView Props
 *
 * @category Props
 */
export type MapViewProps = {
    /**
     * 坐标投影系
     */
    projection?: Projection;
    /**
     *
     * 地图样式，支持高德矢量地图、高德卫星图、Mapbox矢量地图、mapbox卫星地图，默认显示高德矢量地图。
     */
    style?: MapStyle;
    /**
     * @ignore
     */
    children: ReactElement | ReactElement[];

    /**
     * 地图点击事件
     * @param feature 点击位置信息
     * @returns {void}
     *
     * @example
     * ```
     * {
     *  "geometry": {"coordinates": [104.06190928823503, 30.657739121986168], "type": "Point"},
     *  "properties": {"screenPointX": 197.3333282470703, "screenPointY": 372.3333333333333},
     *  "type": "Feature"
     * }
     * ```
     */
    onPress?: (feature: PressFeature) => void;

    /**
     * 长按地图触发事件
     * @param feature
     * @returns
     *
     * @example
     * ```
     * {
     *  "geometry": {"coordinates": [104.06190928823503, 30.657739121986168], "type": "Point"},
     *  "properties": {"screenPointX": 197.3333282470703, "screenPointY": 372.3333333333333},
     *  "type": "Feature"
     * }
     * ```
     */
    onLongPress?: (feature: PressFeature) => void;

    /**
     * 当地图闲置时触发
     * @param {MapIdleEvent} e
     * @returns
     */
    onMapIdle?: (e: MapIdleEvent) => void;
};

/**
 * @example
 * ```
 * import Mapa from 'react-native-mapa';
 * // 或者import { MapView, Camera } from 'react-native-mapa';
 *
 * <Mapa.MapView>
 *  <Mapa.Camera pitch={60} />
 * </Mapa.MapView>
 * ```
 *
 * @category Component
 */
const MapView = React.forwardRef<MapViewInterface, MapViewProps>((props: MapViewProps, ref: any) => {
    const { children, style = 'MapboxVector', projection = 'mercator', onPress, onLongPress, onMapIdle } = props;
    const mapInsRef = useRef<Mapbox.MapView>(null);
    const [customStyles, setStyle] = useState<{ styleURL?: string; styleJSON?: string }>(() => {
        return styleFormat(style);
    });

    const mapRef = useRef<Map>(
        new (class extends Map {
            constructor() {
                super(null);
            }
            updateStyle(stl: string | Object): void {
                setStyle(styleFormat(stl));
            }
        })()
    );
    // mapView pix layout
    const [pixLayoutInfo, setLayoutInfo] = useState<{ width: number; height: number }>({
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    });

    const onMapPress = (e: PressFeature) => {
        onPress?.(e);
        mapRef.current.emit('onPress', e);
    };

    useImperativeHandle<any, MapViewInterface>(ref, () => mapRef.current!);

    // 获取地图的像素尺寸, 默认地图全屏！！改代码！！
    const getMapDimensions = () => {
        const { width, height } = Dimensions.get('window');

        setLayoutInfo({
            width,
            height,
        });
    };

    useEffect(() => {
        setStyle(styleFormat(style));
    }, [style]);

    useLayoutEffect(() => {
        console.log('useLayoutEffect', mapRef.current);
        mapRef.current?.setMap(mapInsRef.current);
    }, []);

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView
                    ref={mapInsRef}
                    styleURL={customStyles.styleURL}
                    styleJSON={customStyles.styleJSON}
                    projection={projection}
                    attributionEnabled={false}
                    logoEnabled={false}
                    zoomEnabled={true}
                    compassEnabled={false}
                    scaleBarEnabled={true}
                    rotateEnabled={true} // 允许地图旋转
                    compassPosition={{
                        left: 2,
                        top: 5,
                    }}
                    onLayout={getMapDimensions}
                    onPress={onMapPress as any}
                    onLongPress={onLongPress as any}
                    onMapIdle={onMapIdle}
                    onCameraChanged={(...args) => mapRef.current?.emit('cameraChanged', ...args)}
                    onDidFinishLoadingMap={(...args) => mapRef.current?.emit('loaded', ...args)}
                    style={styles.map}
                >
                    <MapContext.Provider value={{ map: mapRef.current as any, pixLayoutInfo }}>
                        {children}
                    </MapContext.Provider>
                </Mapbox.MapView>
            </View>
        </View>
    );
});

export default MapView;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'tomato',
    },
    map: {
        flex: 1,
    },
});
