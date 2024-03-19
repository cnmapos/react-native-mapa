import Mapbox from '@rnmapbox/maps';
import { StyleSheet, View } from 'react-native';
import { ReactElement, useEffect, useState } from 'react';
import { MapContext } from '../MapContext';
import { MapViewInterface, Position, Projection, StyleIDs } from '../types';
import { loadStyle } from '../config/style';
import EventEmitter from 'eventemitter3';
import { CameraRef } from '@rnmapbox/maps/lib/typescript/src/components/Camera';
import { zoomAnimationDuraton, zoomStep } from '../config';

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
    private map?: Mapbox.MapView;
    private camera?: Mapbox.Camera;
    private emitter: EventEmitter = new EventEmitter();

    constructor(map: Mapbox.MapView | null | undefined) {
        if (map) {
            this.map = map;
        }
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

    setCamera(rnCamera: CameraRef): void {
        this.camera = rnCamera;
    }

    async zoomTo(step: number, duration?: number) {
        const zoom = await this.map?.getZoom();
        this.camera?.zoomTo(zoom! + step, duration !== undefined ? duration : zoomAnimationDuraton);
    }

    async flyTo(center: Position, duration?: number) {
        duration = duration !== undefined ? duration : 100;
        this.camera?.flyTo(center, duration);
    }
}

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
    const map = new MapViewCls(rnMap);
    const styleContent = loadStyle(style);
    let styleURL: any, styleJSON;
    if (typeof styleContent === 'object') {
        styleJSON = JSON.stringify(styleContent);
    } else {
        styleURL = styleContent;
    }
    useEffect(() => {
        rnMap && map.setMap(rnMap);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rnMap]);

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView
                    ref={(ref) => setRNMap(ref)}
                    styleURL={styleURL}
                    styleJSON={styleJSON}
                    projection={projection}
                    attributionEnabled={false}
                    logoEnabled={false}
                    zoomEnabled={true}
                    scaleBarEnabled={false}
                    onCameraChanged={(...args) => map.emit('onCameraChanged', ...args)}
                    style={styles.map}
                >
                    <MapContext.Provider value={{ map }}>{children}</MapContext.Provider>
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
