import Mapbox from '@rnmapbox/maps';
import { StyleSheet, View } from 'react-native';
import { ReactElement, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { MapContext } from '../modules/MapContext';
import { Projection, StyleIDs, MapStyle, FilterExpression, BBox, OnPressEvent, MapViewInterface } from '../types';
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
const MapView = React.forwardRef<MapViewInterface, MapViewProps>((props: MapViewProps, ref: any) => {
    const { children, style = 'MapboxVector', projection = 'mercator', onPress } = props;
    const [rnMap, setRNMap] = useState<Mapbox.MapView | null>(null);
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
                console.log('stl', stl, customStyles);
            }
        })()
    );

    useImperativeHandle<any, MapViewInterface>(ref, () => mapRef.current!);

    useEffect(() => {
        setStyle(styleFormat(style));
    }, [style]);

    useEffect(() => {
        if (rnMap && mapRef.current) {
            mapRef.current.setMap(rnMap);
        }
    }, [rnMap]);

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView
                    ref={(ref) => setRNMap(ref)}
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
                    onPress={onPress}
                    onCameraChanged={(...args) => mapRef.current?.emit('onCameraChanged', ...args)}
                    onDidFinishLoadingMap={(...args) => mapRef.current?.emit('loaded', ...args)}
                    style={styles.map}
                >
                    <MapContext.Provider value={{ map: mapRef.current as any }}>{children}</MapContext.Provider>
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
