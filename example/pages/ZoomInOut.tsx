import Mapa, {Slot} from 'react-native-mapa';
import {SafeAreaView} from 'react-native';
import { Icon } from '@rneui/themed';

function ZoomInOut({navigation}: any): React.JSX.Element {
    const styleID = 'MapboxVector';

    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView style={styleID}>
                <Mapa.Camera />
                <Mapa.ZoomInOut />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default ZoomInOut;
