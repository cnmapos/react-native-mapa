/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, Text, View } from 'react-native';
import Mapa, { Slot } from './src';

function App(): React.JSX.Element {
    Mapa.setAccessToken('sk.eyJ1IjoiY25tYXBvcyIsImEiOiJjbHRqa2RqNzgwczhnMnFrOWNnZ2t5bHA3In0.WJN2DQHS9dwoKVHyfiBKYg');
    const onCameraChanged = (e: any) => {
        console.log(e);
    };

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Mapa.MapView>
                <Slot slot="rightTop" backgroundColor={'pink'}>
                    <Mapa.Camera />
                </Slot>
                <Slot slot="rightBottom" width={0.2} height={0.35} backgroundColor={'pink'}>
                    <Mapa.ZoomInOut />
                    <Mapa.Location locateWhenInit={true} visible={true} />
                </Slot>
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default App;
