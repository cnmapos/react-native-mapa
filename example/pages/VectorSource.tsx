import {View, StyleSheet} from 'react-native';
import Wrapper from '../components/Wrapper';
import Mapa, {
    FillLayerStyleProps,
    LineLayerStyleProps,
} from 'react-native-mapa';
import React from 'react';

/**
  @category Component
 */
const VectorSource = () => {
    const tileJSONUrl = 'mapbox://cnmapos.clv6v4zsf01hy1trs8bdxuysy-3x58a';

    const style: FillLayerStyleProps = {
        fillOpacity: 0.5,
        fillColor: '#F00',
    };

    const style2: LineLayerStyleProps = {
        lineColor: '#00F',
        lineWidth: 3,
    };

    return (
        <Wrapper style={'MapboxVector'}>
            <Mapa.Camera zoom={7} minzoom={1} />
            <Mapa.ZoomInOut />
            <Mapa.VectorSource
                url={tileJSONUrl}
                id="geojson-source"
                onPress={e => {
                    console.log(
                        `VectorSource onPress: ${e.features}`,
                        e.features,
                    );
                }}>
                <Mapa.FillLayer
                    id="geoson-layer-fill"
                    sourceId="geojson-source"
                    sourceLayerID={'510100'}
                    style={style}
                />
                <Mapa.LineLayer
                    id="geojson-layer-line"
                    sourceId="geojson-source"
                    aboveLayerID={'geoson-layer-fill'}
                    sourceLayerID={'510100'}
                    style={style2}
                />
            </Mapa.VectorSource>
        </Wrapper>
    );
};

export default VectorSource;

const styles = StyleSheet.create({
    container: {},
});
