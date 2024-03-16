import Mapbox from '@rnmapbox/maps';
import { StyleSheet, View } from 'react-native';
import amapTileJson from '../config/amap.tile.json';
import { Children, ReactElement, useState } from 'react';
import { MapContext } from '../MapContext';

/**
 * MapView Props
 *
 * @property
 */
export type MapViewProps = {
    /**
     * @ignore
     */
    children: ReactElement | ReactElement[];
    /**
     * 地图显示层级，默认显示15级
     */
    zoom?: number;
    /**
     * 设置中心位置，如果有使用{Location}定位，则优先使用定位坐标
     */
    center?: number;
};

/**
 * 地图容器
 *
 * @category Component
 */
export const MapView = (props: MapViewProps) => {
    const { children } = props;
    const [map, setMap] = useState<Mapbox.MapView | null>(null);
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

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView
                    ref={(ref) => setMap(ref)}
                    styleJSON={JSON.stringify(amapTileJson)}
                    attributionEnabled={false}
                    logoEnabled={false}
                    zoomEnabled={true}
                    scaleBarEnabled={false}
                    style={styles.map}
                >
                    <MapContext.Provider value={{ map }}>{children}</MapContext.Provider>
                    <Mapbox.Camera zoomLevel={16} centerCoordinate={[104.04, 30.39]} />
                    <Mapbox.UserLocation />
                </Mapbox.MapView>
            </View>
        </View>
    );
};
