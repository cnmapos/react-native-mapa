import Mapbox from '@rnmapbox/maps';
import { StyleSheet, View } from 'react-native';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { MapContext } from '../MapContext';
import { Projection, StyleIDs } from '../types';
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
    style?: StyleIDs;
    /**
     * @ignore
     */
    children: ReactElement | ReactElement[];
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
const MapView = (props: MapViewProps) => {
    const { children, style = StyleIDs.MapboxVector, projection = 'mercator' } = props;
    const [rnMap, setRNMap] = useState<Mapbox.MapView | null>(null);

    const [customStyles, setStyle] = useState<{ styleURL: ReturnType<typeof loadStyle>; styleJSON: string }>(() => {
        return styleFormat(style);
    });

    const mapRef = useRef<Map | null>(new Map(null));

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
                    compassEnabled={true}
                    scaleBarEnabled={false}
                    compassPosition={{
                        left: 2,
                        top: 5,
                    }}
                    onCameraChanged={(...args) => mapRef.current?.emit('onCameraChanged', ...args)}
                    onDidFinishLoadingMap={(...args) => mapRef.current?.emit('loaded', ...args)}
                    style={styles.map}
                >
                    <MapContext.Provider value={{ map: mapRef.current as any }}>{children}</MapContext.Provider>
                </Mapbox.MapView>
            </View>
        </View>
    );
};

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
