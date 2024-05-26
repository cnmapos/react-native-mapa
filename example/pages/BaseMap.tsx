import Mapa from 'react-native-mapa';
import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

function Mapview({}: any): React.JSX.Element {
    const projection = 'mercator';
    const styleID = 'MapboxVector';

    return (
        <SafeAreaView style={styles.container}>
            <Mapa.MapView projection={projection} style={styleID}>
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
