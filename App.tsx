/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Mapbox from '@rnmapbox/maps';
import React, { useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';

function App(): React.JSX.Element {
    Mapbox.setAccessToken('sk.eyJ1IjoiY25tYXBvcyIsImEiOiJjbHRqa2RqNzgwczhnMnFrOWNnZ2t5bHA3In0.WJN2DQHS9dwoKVHyfiBKYg');
    const _mapOptions = Object.keys(Mapbox.StyleURL).map((key) => {
        return {
            label: key,
            data: (Mapbox.StyleURL as any)[key], // bad any, because enums
        };
    });

    const [styleURL] = useState({ styleURL: _mapOptions[0].data });

    const onUserMarkerPress = (): void => {
        Alert.alert('You pressed on the user location annotation');
    };

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <View style={{ height: '100%', flex: 1, flexDirection: 'column' }}>
                <Mapbox.MapView
                    attributionEnabled={false}
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

export default App;
