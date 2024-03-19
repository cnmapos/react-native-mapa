/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView } from 'react-native';
import Mapa from './src';

function App(): React.JSX.Element {
    Mapa.setAccessToken('sk.eyJ1IjoiY25tYXBvcyIsImEiOiJjbHRqa2RqNzgwczhnMnFrOWNnZ2t5bHA3In0.WJN2DQHS9dwoKVHyfiBKYg');
    const onCameraChanged = (e: any) => {
        console.log(e);
    };

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Mapa.MapView>
                <Mapa.Camera />
                <Mapa.ZoomInOut style={{ right: 5, top: 5 }} />
                <Mapa.Location visible={true} />
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default App;
