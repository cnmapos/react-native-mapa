import {View, StyleSheet, SafeAreaView} from 'react-native';
import {MapContext} from '../MapContext';
import {Children, ReactElement} from 'react';
import Mapa from 'react-native-mapa';
/**
 * Wrapper props
 *
 * @category Props
 */
export type WrapperProps = {
    children: ReactElement | ReactElement[];
};

/**
  @category Component
 */
const Wrapper = (props: WrapperProps) => {
    const {children} = props;
    return (
        <SafeAreaView style={styles.container}>
            <Mapa.MapView>{children}</Mapa.MapView>
        </SafeAreaView>
    );
};

export default Wrapper;

const styles = StyleSheet.create({
    container: {height: '100%'},
});
