import {View, StyleSheet, SafeAreaView} from 'react-native';
import {MapContext} from '../MapContext';
import {Children, ReactElement} from 'react';
import Mapa, {MapStyle, Projection, StyleIDs} from 'react-native-mapa';
import React from 'react';
/**
 * Wrapper props
 *
 * @category Props
 */
export type WrapperProps = {
    style?: MapStyle;
    projection?: Projection;
    children: ReactElement | ReactElement[];
};

/**
  @category Component
 */
const Wrapper = (props: WrapperProps) => {
    const {style = 'MapboxVector', projection = 'mercator', children} = props;
    return (
        <SafeAreaView style={styles.container}>
            <Mapa.MapView projection={projection} style={style}>
                {children}
            </Mapa.MapView>
        </SafeAreaView>
    );
};

export default Wrapper;

const styles = StyleSheet.create({
    container: {height: '100%'},
});
