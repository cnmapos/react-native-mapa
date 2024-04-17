import Mapa, {Slot} from 'react-native-mapa';
import {SafeAreaView} from 'react-native';

function PreView({navigation}: any): React.JSX.Element {
    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView>
                <Slot slot="rightTop" backgroundColor={'transparent'}>
                    <Mapa.Camera />
                </Slot>
                <Slot
                    slot="rightBottom"
                    width={0.2}
                    height={0.35}
                    backgroundColor={'transparent'}>
                    <Mapa.Weather akey={'64bdebe6239a3a398443b2af4ba6085e'} />
                </Slot>
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default PreView;
