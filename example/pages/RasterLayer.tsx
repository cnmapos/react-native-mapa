// import {View, StyleSheet} from 'react-native';
import Wrapper from '../components/Wrapper';
import Mapa, {RasterLayerStyleProps} from 'react-native-mapa';
import React from 'react';

/**
  @category Component
 */
const RasterLayer = () => {
    const style: RasterLayerStyleProps = {
        rasterOpacity: 0.6,
    };
    // 腾讯地图 tms
    // const tx = {
    //     tms: true,
    //     tiles: [
    //         'https://rt0.map.gtimg.com/tile/?z={z}&x={x}&y={y}&version=105&styleid=0',
    //     ],
    // };
    const gdwx = {
        tms: false,
        tiles: [
            'https://webst03.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
        ],
    };
    return (
        <Wrapper style={'MapboxVector'}>
            <Mapa.Camera zoom={7} minzoom={1} />
            <Mapa.ZoomInOut />
            <Mapa.RasterSource
                id="test-raster-source"
                tileSize={256}
                tms={gdwx.tms}
                tileUrlTemplates={gdwx.tiles}>
                <Mapa.RasterLayer
                    id="test-raster-source-layer"
                    sourceId="test-raster-source"
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
