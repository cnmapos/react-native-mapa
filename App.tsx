/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Mapbox from '@rnmapbox/maps';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Mapa from './src';

function App(): React.JSX.Element {
  Mapbox.setAccessToken('sk.eyJ1IjoiY25tYXBvcyIsImEiOiJjbHRqa2RqNzgwczhnMnFrOWNnZ2t5bHA3In0.WJN2DQHS9dwoKVHyfiBKYg')

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <Mapa.MapView>
        <Mapa.Camera></Mapa.Camera>
        <Mapa.ZoomInOut></Mapa.ZoomInOut>
      </Mapa.MapView>
    </SafeAreaView>
  );
}

export default App;
