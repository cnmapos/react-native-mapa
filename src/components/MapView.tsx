import Mapbox from '@rnmapbox/maps';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ReactElement, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import { MapContext } from '../modules/MapContext';
import { Projection, StyleIDs, MapStyle, FilterExpression, BBox, OnPressEvent } from '../types';
import { loadStyle, styleFormat } from '../config/style';
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
     * @param {OnPressEvent} e
     * @returns {void}
     */
    onPress?: (feature: GeoJSON.Feature) => void;
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
const MapView = React.forwardRef((props: MapViewProps, ref: any) => {
    const { children, style = StyleIDs.AmapVector, projection = 'mercator', onPress } = props;
    const [customStyles, setStyle] = useState<{ styleURL: ReturnType<typeof loadStyle>; styleJSON: string }>(() => {
        return styleFormat(style);
    });

    const mapInsRef = useRef<Mapbox.MapView>(null);

    // mapView pix layout
    const [pixLayoutInfo, setLayoutInfo] = useState<{ width: number; height: number }>({
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    });

    const mapRef = useRef<Map | null>(new Map(null));
    // provide updateStyle function for Map instance to change style
    mapRef.current.updateStyle = ({ styleURL, styleJSON }) => {
        setStyle({ styleURL, styleJSON: (styleJSON && JSON.stringify(styleJSON)) || '' });
    };

    useImperativeHandle(ref, () => ({
        /**
         * 按来源查询feature集合
         *
         * @param sourceId
         * @param filter FilterExpression
         * @param layerIDs 图层ID
         * @returns Promise<GeoJSON.FeatureCollection>
         */
        querySourceFeatures: async (
            sourceId: string,
            filter: FilterExpression | [] = [],
            layerIDs: string[] = []
        ): Promise<GeoJSON.FeatureCollection> => {
            const featureCollection = await mapRef.current!.querySourceFeatures(sourceId, filter, layerIDs);

            return featureCollection;
        },
        /**
         * 按bbox查询可视区域feature集合
         *
         * @param bbox 查询范围，像素坐标范围
         * @param filter FilterExpression
         * @param layerIDs 图层ID
         * @returns Promise<GeoJSON.FeatureCollection>
         */
        queryRenderFeatures: async (
            bbox: BBox,
            filter: FilterExpression | [],
            layerIDs: string[] | null
        ): Promise<GeoJSON.FeatureCollection> => {
            const featureCollection = await mapRef.current!.queryRenderFeatures(bbox, filter, layerIDs);

            return featureCollection;
        },
    }));

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
                    scaleBarEnabled={false}
                    rotateEnabled={true} // 允许地图旋转
                    compassPosition={{
                        left: 2,
                        top: 5,
                    }}
                    onLayout={getMapDimensions}
                    onPress={onPress}
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
