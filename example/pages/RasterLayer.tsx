// import {View, StyleSheet} from 'react-native';
import Wrapper from '../components/Wrapper';
import Mapa, {RasterLayerStyleProps} from 'react-native-mapa';
import React from 'react';

/**
  @category Component
 */
const RasterLayer = () => {
    const style: RasterLayerStyleProps = {
        rasterOpacity: 1,
    };
    return (
        <Wrapper style={'MapboxVector'}>
            <Mapa.Camera zoom={7} minzoom={1} />
            <Mapa.ZoomInOut />
            <Mapa.RasterSource
                id="stamen-watercolor"
                tileSize={256}
                tileUrlTemplates={[
                    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
                    // 'https://webst03.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
                ]}>
                <Mapa.RasterLayer
                    id="stamen-watercolor-layer"
                    sourceId="stamen-watercolor"
                    style={style}
                />
            </Mapa.RasterSource>
        </Wrapper>
    );
};

export default RasterLayer;

// const styles = StyleSheet.create({
//     container: {},
// });
