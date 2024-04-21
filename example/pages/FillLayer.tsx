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
        fillColor: [
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
        fillOutlineColor: '#00F',
    };

    const symbolStyle: SymbolLayerStyleProps = {
        textField: [
            'format',
            ['get', 'name'],
            {'font-scale': 1.2},
            '\n',
            {},
            ['get', 'price'],
            {'font-scale': 0.8},
        ],
        textColor: '#000',
        textSize: 12,
    };

    const geojson: GeoJSON.FeatureCollection = districtGeoJSON as any;
    const priceGeoJSON: GeoJSON.FeatureCollection = {
        type: 'FeatureCollection',
        features: geojson.features.map(f => {
            const price = 10000 + Math.floor(Math.random() * 30000);
            f.properties.price = price;

            return {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: f.properties.center,
                },
                properties: {
                    name: f.properties.name,
                    price: price,
                },
            };
        }),
    };
    console.log(JSON.stringify(priceGeoJSON));

    return (
        <Wrapper>
            <Mapa.Camera zoom={7} />
            <Mapa.ZoomInOut />
            <Mapa.GeoJSONSource id="geojson-id" url={geojson}>
                <Mapa.FillLayer
                    id="geojson-layer-id"
                    sourceId="geojson-id"
                    style={style}
                />
            </Mapa.GeoJSONSource>
            <Mapa.GeoJSONSource id="geoson-symbol" url={priceGeoJSON}>
                <Mapa.SymbolLayer
                    id="geojson-layer-symbol-id"
                    sourceId="geoson-symbol"
                    style={symbolStyle}
                />
            </Mapa.GeoJSONSource>
        </Wrapper>
    );
};

export default FillLayer;
