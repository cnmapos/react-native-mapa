import {StyleSheet} from 'react-native';
import districtGeoJSON from '../assets/json/510100.json';
import Wrapper from '../components/Wrapper';
import Mapa, {
    FillLayerStyleProps,
    SymbolLayerStyleProps,
} from 'react-native-mapa';
import React from 'react';

/**
  @category Component
 */
const FillLayer = () => {
    const style: FillLayerStyleProps = {
        fillOpacity: 0.8,
        fillColor: '#F00',
        fillOutlineColor: '#00F',
    };

    const symbolStyle: SymbolLayerStyleProps = {
        textField: ['get', 'name'],
        textColor: '#FFF',
    };

    const gejson: GeoJSON.FeatureCollection = districtGeoJSON as any;

    return (
        <Wrapper>
            <Mapa.Camera zoom={7} />
            <Mapa.ZoomInOut />
            <Mapa.GeoJSONSource id="geojson-id" url={gejson}>
                <Mapa.FillLayer
                    id="geojson-layer-id"
                    sourceId="geojson-id"
                    style={style}
                />
                <Mapa.SymbolLayer
                    id="geojson-layer-symbol-id"
                    sourceId="geojson-id"
                    style={symbolStyle}
                />
            </Mapa.GeoJSONSource>
        </Wrapper>
    );
};

export default FillLayer;

const styles = StyleSheet.create({
    container: {},
});
