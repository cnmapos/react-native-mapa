/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './sence/GroupAndItem';
import PreView from './common/Preview';
import '@rnmapbox/maps';
import Mapa from 'react-native-mapa';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';

const Stack = createNativeStackNavigator();
Mapa.setAccessToken(
    'sk.eyJ1IjoiY25tYXBvcyIsImEiOiJjbHRqa2RqNzgwczhnMnFrOWNnZ2t5bHA3In0.WJN2DQHS9dwoKVHyfiBKYg',
);

function AppStackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={({route, navigation}: any) => ({
                title: route.params?.title,
            })}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Preview" component={PreView} />
        </Stack.Navigator>
    );
}

const AppContainer = () => (
    <NavigationContainer>
        <AppStackNavigator />
    </NavigationContainer>
);

function App(): React.JSX.Element {
    return (
        <SafeAreaProvider>
            <AppContainer />
        </SafeAreaProvider>
    );
}

export default App;
