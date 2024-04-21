import {View, StyleSheet} from 'react-native';
import Wrapper from '../components/Wrapper';
import React from 'react';
import Mapa, {CircleLayerStyleProps} from 'react-native-mapa';
import provinces from '../assets/json/provinces.json';

/**
  @category Component
 */
const CircleLayer = () => {
    const gejson: GeoJSON.FeatureCollection = {
        type: 'FeatureCollection',
        features: Object.values(provinces).map(val => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [...val],
            },
            properties: {
                population: 1000 * (10 * Math.random()),
            },
        })),
    };

    const style: CircleLayerStyleProps = {
        circleRadius: [
            'case',
            ['<=', ['get', 'population'], 1000],
            5,
            ['<=', ['get', 'population'], 3000],
            10,
            ['<=', ['get', 'population'], 5000],
            15,
            ['<=', ['get', 'population'], 7000],
            20,
            ['<=', ['get', 'population'], 9000],
            25,
            30,
        ],
        circleColor: [
            'case',
            ['<=', ['get', 'population'], 1000],
            '#DDA0DD',
            ['<=', ['get', 'population'], 2000],
            '#DA70D6',
            ['<=', ['get', 'population'], 3000],
            '#A066D3',
            ['<=', ['get', 'population'], 4000],
            '#9933FA',
            ['<=', ['get', 'population'], 5000],
            '#8A2BE2',
            '#A020F0',
        ],
        circleOpacity: 0.8,
        // circleStrokeColor: '#00F',
        // circleStrokeWidth: 4,
    };

    return (
        <Wrapper>
            <Mapa.Camera zoom={3} />
            <Mapa.GeoJSONSource id="gejson-id" url={gejson}>
                <Mapa.CircleLayer
                    id="geojson-layer-id"
                    sourceId="gejson-id"
                    style={style}
                />
            </Mapa.GeoJSONSource>
        </Wrapper>
    );
};

export default CircleLayer;

const styles = StyleSheet.create({
    container: {},
});
