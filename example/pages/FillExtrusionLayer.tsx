import {StyleSheet} from 'react-native';
import React from 'react';
import Wrapper from '../components/Wrapper';
import Mapa, {FillExtrusionLayerStyleProps} from 'react-native-mapa';
import districtGeoJSON from '../assets/json/510100.json';

/**
  @category Component
 */
const FillExtrusionLayer = () => {
    const style: FillExtrusionLayerStyleProps = {
        fillExtrusionOpacity: 0.7,
        fillExtrusionHeight: ['get', 'price'],
        fillExtrusionColor: [
            'case',
            ['<=', ['get', 'price'], 10000],
            '#DDA0DD',
            ['<=', ['get', 'price'], 15000],
            '#DA70D6',
            ['<=', ['get', 'price'], 20000],
            '#A066D3',
            ['<=', ['get', 'price'], 25000],
            '#9933FA',
            ['<=', ['get', 'price'], 30000],
            '#8A2BE2',
            '#A020F0',
        ],
    };

    const geojson: GeoJSON.FeatureCollection = districtGeoJSON as any;
    geojson.features.forEach(f => {
        const price = 10000 + Math.floor(Math.random() * 30000);
        f.properties = {
            ...f.properties,
            price: price,
        };
    });

    return (
        <Wrapper projection="globe">
            <Mapa.Camera zoom={7} pitch={60} />
            <Mapa.ZoomInOut />
            <Mapa.GeoJSONSource id={'geojson-id'} url={geojson}>
                <Mapa.FillExtrusionLayer
                    id="geojson-layer-id"
                    sourceId="geojson-id"
                    style={style}
                />
            </Mapa.GeoJSONSource>
        </Wrapper>
    );
};

export default FillExtrusionLayer;

const styles = StyleSheet.create({
    container: {},
});
