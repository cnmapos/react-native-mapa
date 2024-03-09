/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Mapbox from '@rnmapbox/maps';
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    height: '100%',
  };

  Mapbox.setAccessToken('sk.eyJ1IjoiY25tYXBvcyIsImEiOiJjbHRqa2RqNzgwczhnMnFrOWNnZ2t5bHA3In0.WJN2DQHS9dwoKVHyfiBKYg')
  const _mapOptions = Object.keys(Mapbox.StyleURL)
  .map((key) => {
    return {
      label: key,
      data: (Mapbox.StyleURL as any)[key], // bad any, because enums
    };
  })

  const [styleURL, setStyleURL] = useState({ styleURL: _mapOptions[0].data });

  const onUserMarkerPress = (): void => {
    Alert.alert('You pressed on the user location annotation');
  };

  const styles = {
    matchParent: {
      flexGow: 1,
    }
  }

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <View style={{ height: '100%', flex: 1, flexDirection: 'column' }}>
        <Mapbox.MapView
        
          attributionEnabled={ false }
          attributionPosition={{ bottom: 5, right: 5 }}
          styleURL={styleURL.styleURL}
          style={{ flex: 1 }}
          testID={'show-map'}
        >
          <Mapbox.Camera followZoomLevel={12} followUserLocation />

          <Mapbox.UserLocation onPress={onUserMarkerPress} />
        </Mapbox.MapView>
      </View>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
