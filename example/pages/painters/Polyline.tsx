import {StyleSheet} from 'react-native';
import React from 'react';
import Wrapper from '../../components/Wrapper';
import Mapa from 'react-native-mapa';

/**
 * Polyline props
 *
 * @category Props
 */
export type PolylineProps = {};

/**
  @category Component
 */
const Polyline = () => {
    return (
        <Wrapper>
            <Mapa.Camera zoom={10} />
            <Mapa.PolylinePaitner id={'test'} />
        </Wrapper>
    );
};

export default Polyline;

const styles = StyleSheet.create({
    container: {},
});
