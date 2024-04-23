import Mapa, {Slot, Compass} from 'react-native-mapa';
import {SafeAreaView} from 'react-native';
import React from 'react';

function PreView({navigation}: any): React.JSX.Element {
    const projection = 'mercator';
    const styleID = 'MapboxVector';

    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView projection={projection} style={styleID}>
                <Mapa.Camera />
                <Compass />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default PreView;
