import React from 'react';
import BackHomeBtn from './BackHomeBtn';
import { SafeAreaView } from 'react-native';
import BaseMap from '../pages/BaseMap';

function PreView({ navigation, route }: any): React.JSX.Element {
    const { id } = route.params;
    const ComponentMap: any = {
        BaseMap: BaseMap,
    };

    const ComponentToRender = ComponentMap[id];

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <BackHomeBtn navigation={navigation} />
            {<ComponentToRender />}
        </SafeAreaView>
    );
}

export default PreView;
