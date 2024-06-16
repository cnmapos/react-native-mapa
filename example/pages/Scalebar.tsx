import Mapa, {Scalebar} from 'react-native-mapa';
import {SafeAreaView} from 'react-native';
import React from 'react';

function ScalebarView(): React.JSX.Element {
    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView>
                <Scalebar />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default ScalebarView;
