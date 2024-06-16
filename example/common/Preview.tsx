import React from 'react';
import { SafeAreaView } from 'react-native';
import EmptyView from './EmptyView';
import RoutesConfig from '../routes';

function PreView({ navigation, route }: any): React.JSX.Element {
    const { id } = route.params;

    let ComponentToRender: any = EmptyView;
    RoutesConfig.forEach(({ data }) => {
        data.forEach((item) => {
            if (item.id === id && item.component) {
                ComponentToRender = item.component;
            }
        });
    });

    return <SafeAreaView style={{ height: '100%' }}>{<ComponentToRender />}</SafeAreaView>;
}

export default PreView;
