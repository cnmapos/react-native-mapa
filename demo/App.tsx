/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './sence/GroupAndItem';
import Mapa, { Slot } from 'react-native-mapa';
import PreView from './common/Preview';

const Stack = createNativeStackNavigator();

function AppStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="home" screenOptions={{ gestureEnabled: false, headerShown: false }}>
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
    Mapa.setAccessToken('sk.eyJ1IjoiY25tYXBvcyIsImEiOiJjbHRqa2RqNzgwczhnMnFrOWNnZ2t5bHA3In0.WJN2DQHS9dwoKVHyfiBKYg');

    return <AppContainer />;
}

export default App;
