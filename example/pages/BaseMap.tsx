import Mapa from 'react-native-mapa';
import {SafeAreaView} from 'react-native';
import React from 'react';

function PreView({navigation}: any): React.JSX.Element {
    const projection = 'mercator';
    const styleID = 'MapboxVector';

    const onMapIdle = (e: any) => {
        console.log(e);
    };

    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView
                projection={projection}
                style={styleID}
                onMapIdle={onMapIdle}>
                <Mapa.Camera />
                <Mapa.Compass />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default PreView;
