import Mapa from 'react-native-mapa';
import {SafeAreaView} from 'react-native';
import React from 'react';

function PreView({navigation}: any): React.JSX.Element {
    const projection = 'mercator';
    const styleID = 'MapboxVector';

    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView
                projection={projection}
                style={styleID}
                onPress={onPress}>
                <Mapa.Camera />
                <Mapa.Compass />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default PreView;
