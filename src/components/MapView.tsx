import Mapbox from '@rnmapbox/maps';
import {StyleSheet, View} from 'react-native';
import amapTileJson from '../config/amap.tile.json';
import {Children, ReactElement, useState} from 'react';
import {MapContext} from '../MapContext';

type Props = {
  children: ReactElement | ReactElement[];
};

const MapView = (props: Props): React.JSX.Element => {
  const {children} = props;
  const [map, setMap] = useState<Mapbox.MapView | null>();
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
