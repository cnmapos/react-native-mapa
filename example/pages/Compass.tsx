import Mapa, {Compass} from 'react-native-mapa';
import {SafeAreaView} from 'react-native';
import React from 'react';

function CompassView(): React.JSX.Element {
    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView>
                <Compass />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default CompassView;
