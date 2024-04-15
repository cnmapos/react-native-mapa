import {StyleSheet} from 'react-native';
import Wrapper from '../components/Wrapper';
import Mapa, {LineLayerStyleProps} from 'react-native-mapa';
import React from 'react';
import districtGeoJSON from '../assets/json/510100.json';

/**
  @category Component
 */
const LineLayer = () => {
    const style: LineLayerStyleProps = {
        lineColor: '#f00',
        lineWidth: 5,
        lineGapWidth: 5,
        lineDasharray: [5, 10],
    };

    const gejson: GeoJSON.FeatureCollection = {
        type: 'FeatureCollection',
        features: districtGeoJSON.features.map(f => ({
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: f.geometry.coordinates[0][0],
            },
            properties: {},
        })),
    };

    return (
        <Wrapper>
            <Mapa.Camera zoom={10} />
            <Mapa.ZoomInOut />
            <Mapa.GeoJSONSource id="gejson-id" url={gejson}>
                <Mapa.LineLayer
                    id="geojson-layer-id"
                    sourceId="gejson-id"
                    style={style}
                />
            </Mapa.GeoJSONSource>
        </Wrapper>
    );
};

export default LineLayer;
