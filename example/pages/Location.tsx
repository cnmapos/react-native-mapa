import {View, StyleSheet, SafeAreaView} from 'react-native';
import Mapa from 'react-native-mapa';
import React from 'react';

/**
  @category Component
 */
function Location(): React.JSX.Element {
    const center = [104.06189140695824, 30.65796677659171];
    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView style="MapboxVector">
                <Mapa.Camera center={center} />
                <Mapa.Location style={'right'} />
                <Mapa.Background style={'right'} />
                <Mapa.ZoomInOut style={'right'} />
                <Mapa.Weather
                    style={'left'}
                    akey={'64bdebe6239a3a398443b2af4ba6085e'}
                />
                <Mapa.Scalebar style={'bottom'} />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default Location;

const styles = StyleSheet.create({
    container: {},
});
