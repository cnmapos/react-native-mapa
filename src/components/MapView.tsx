import Mapbox from '@rnmapbox/maps';
import { StyleSheet, View } from 'react-native';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { MapContext } from '../MapContext';
import { MapViewInterface, Projection, StyleIDs } from '../types';
import { loadStyle, styleFormat } from '../config/style';
import EventEmitter from 'eventemitter3';

/**
 * MapView Props
 *
 * @property
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

class MapViewCls implements MapViewInterface {
    public map: Mapbox.MapView | null;
    private emitter: EventEmitter = new EventEmitter();

    constructor(map: Mapbox.MapView | null) {
        this.map = map;
    }
    on(event: 'onCameraChanged', listener: (e: any) => void): void {
        this.emitter.on(event, listener);
    }

    emit(event: 'onCameraChanged', ...args: any[]) {
        this.emitter.emit(event, ...args);
    }

    setMap(map: Mapbox.MapView) {
        this.map = map;
    }
}

/**
 * 地图容器
 *
 * @category Component
 */
const MapView = (props: MapViewProps) => {
    const { children, style = StyleIDs.MapboxVector, projection = 'mercator' } = props;
    const [rnMap, setRNMap] = useState<Mapbox.MapView | null>(null);

    const [customStyles, setStyle] = useState<{ styleURL: ReturnType<typeof loadStyle>; styleJSON: string }>(() => {
        return styleFormat(style);
    });

    const mapRef = useRef<MapViewCls | null>(new MapViewCls(null));

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
                    onCameraChanged={(...args) => mapRef.current?.emit('onCameraChanged', ...args)}
                    style={styles.map}
                >
                    <MapContext.Provider value={{ map: mapRef.current || null }}>{children}</MapContext.Provider>
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
