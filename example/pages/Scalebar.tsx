import Mapa, {Scalebar} from 'react-native-mapa';
import {SafeAreaView} from 'react-native';
import React from 'react';

function ScalebarView(): React.JSX.Element {
    const center = [104.06189140695824, 30.65796677659171];
    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView>
                <Mapa.Camera center={center} />
                <Scalebar style="bottom" />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default ScalebarView;
