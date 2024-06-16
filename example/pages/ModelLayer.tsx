import React from 'react';
import Wrapper from '../components/Wrapper';
import Mapa, {ModelLayerStyleProps} from 'react-native-mapa';
import provinces from '../assets/json/provinces.json';

/**
  @category Component
 */
const ModelLayer = () => {
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
                rotate: 90,
            },
        })),
    };

    const models = {
        car: require('../assets/models/sportcar.glb'),
    };

    const style: ModelLayerStyleProps = {
        modelId: 'car',
        modelScale: [10000, 10000, 10000],
        modelRotation: ['get', 'rotate'],
    };

    return (
        <Wrapper projection="globe">
            <Mapa.Camera zoom={3} pitch={0} />
            <Mapa.ZoomInOut />
            <Mapa.Models models={models} />
            <Mapa.GeoJSONSource url={gejson} id="geojson-id">
                <Mapa.ModelLayer
                    id="model-layer-id"
                    sourceId="geojson-id"
                    style={style}
                />
            </Mapa.GeoJSONSource>
        </Wrapper>
    );
};

export default ModelLayer;
