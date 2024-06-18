import Mapa from 'react-native-mapa';
import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

function Mapview({}: any): React.JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <Mapa.MapView projection={'mercator'} style={'MapboxVector'}>
                <Mapa.Camera />
                <Mapa.Compass />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default Mapview;

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
});
