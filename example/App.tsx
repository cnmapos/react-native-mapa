/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './sence/GroupAndItem';
import PreView from './common/Preview';

const Stack = createNativeStackNavigator();

function AppStackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={({ route, navigation }: any) => ({
                title: route.params?.title,
            })}
        >
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
    return <AppContainer />;
}

export default App;
