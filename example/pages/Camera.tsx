import Mapa, {Slot} from 'react-native-mapa';
import {SafeAreaView} from 'react-native';

function PreView({navigation}: any): React.JSX.Element {
    const center = [104.06189140695824, 30.65796677659171];
    const zoom = 14;
    const heading = 0;
    const pitch = 70;
    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView style='MapboxVector'>
                <Mapa.Camera zoom={zoom} center={center} heading={heading} pitch={pitch}  />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default PreView;
