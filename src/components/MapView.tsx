import Mapbox from '@rnmapbox/maps';
import { StyleSheet, View } from 'react-native';
import { ReactElement, useEffect, useState } from 'react';
import { MapContext } from '../MapContext';
import { MapViewInterface, Projection, StyleIDs } from '../types';
import { loadStyle } from '../config/style';
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
    private map?: Mapbox.MapView;
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
}

/**
 * 地图容器
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
<<<<<<< HEAD
  });

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView
          ref={ref => setMap(ref)}
          styleJSON={JSON.stringify(amapTileJson)}
          attributionEnabled={false}
          logoEnabled={false}
          zoomEnabled={true}
          scaleBarEnabled={false}
          style={styles.map}>
          <MapContext.Provider value={{map}}>{children}</MapContext.Provider>
          <Mapbox.Camera
            zoomLevel={12}
            centerCoordinate={[116.436177, 39.935297]}
          />
          <Mapbox.UserLocation />
        </Mapbox.MapView>
      </View>
    </View>
  );
};

export default MapView;
=======
});
>>>>>>> origin/dev
