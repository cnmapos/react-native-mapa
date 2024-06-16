import Mapa, {Slot} from 'react-native-mapa';
import {SafeAreaView} from 'react-native';
import React from 'react';

function POI({navigation}: any): React.JSX.Element {
    const akey = '64bdebe6239a3a398443b2af4ba6085e';
    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView>
                <Mapa.Camera />
                <Mapa.POIFinder akey={akey} />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default POI;
