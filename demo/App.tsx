/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView } from 'react-native';
import Mapa, { Slot } from 'react-native-mapa';

function App(): React.JSX.Element {
    Mapa.setAccessToken('sk.eyJ1IjoiY25tYXBvcyIsImEiOiJjbHRqa2RqNzgwczhnMnFrOWNnZ2t5bHA3In0.WJN2DQHS9dwoKVHyfiBKYg');
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Mapa.MapView>
                <Slot slot="rightTop" backgroundColor={'transparent'}>
                    <Mapa.Camera />
                </Slot>
                <Slot slot="rightBottom" width={0.2} height={0.35} backgroundColor={'transparent'}>
                    <Mapa.ZoomInOut />
                    <Mapa.Location style={'right-bottom'} locateWhenInit={true} visible={true} />
                </Slot>
                <Mapa.POIFinder placeholder={'请输入地址'} akey={'64bdebe6239a3a398443b2af4ba6085e'} />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default App;
