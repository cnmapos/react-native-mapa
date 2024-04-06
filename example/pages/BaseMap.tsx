import Mapa, {Slot} from 'react-native-mapa';
import {SafeAreaView} from 'react-native';

function PreView({navigation}: any): React.JSX.Element {
    Mapa.setAccessToken(
        'sk.eyJ1IjoiY25tYXBvcyIsImEiOiJjbHRqa2RqNzgwczhnMnFrOWNnZ2t5bHA3In0.WJN2DQHS9dwoKVHyfiBKYg',
    );
    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView>
                <Slot slot="rightTop" backgroundColor={'transparent'}>
                    <Mapa.Camera />
                </Slot>
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default PreView;
