import Mapbox from '@rnmapbox/maps';
import {StyleSheet, View} from 'react-native';
import amapTileJson from '../config/style/amap.vector.json';
import { Children, ReactElement, useState } from 'react';
import { MapContext } from '../MapContext';
import { PositionLike, Projection, StyleIDs } from '../types';
import { loadStyle } from '../config/style';
import { defaultCenterCoordinates, defaultZoom } from '../config';

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
   * 地图样式，支持高德矢量地图、高德卫星图、Mapbox矢量地图、mapbox卫星地图，默认显示高德矢量地图。
   */
  style?: StyleIDs;
  /**
   * @ignore
   */
  children: ReactElement | ReactElement[],
}

/**
 * 地图容器
 * 
 * @category Component
 */
const MapView = (props: MapViewProps) => {
  const { children, style = StyleIDs.MapboxVector, projection = 'mercator' } = props;
  const [map, setMap] = useState<Mapbox.MapView | null>(null);
  const styleContent = loadStyle(style);
  let styleURL: any, styleJSON;
  if (typeof styleContent === 'object') {
    styleJSON = JSON.stringify(styleContent);
  } else {
    styleURL = styleContent
  }

  // debug
  const onCameraChanged = (e) => {
    // console.log(e);
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView
          ref={(ref) => setMap(ref) }
          styleURL={styleURL}
          styleJSON={styleJSON}
          projection={projection}
          attributionEnabled={false}
          logoEnabled={false}
          zoomEnabled={true}
          scaleBarEnabled={false}
          onCameraChanged={onCameraChanged}
          style={styles.map}>
            <MapContext.Provider value={{ map }}>
              { children }
            </MapContext.Provider>
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
