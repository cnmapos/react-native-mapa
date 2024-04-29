import { View, StyleSheet } from 'react-native';
import { MapContext } from '../MapContext';
import Shape from './Shape';
import { Position, ShapePainter } from '@/types';
import { PolygonPainter } from '@/modules/painters/PolygonPainter';
import { createLineFeature, createPointFeature, createPolygonFeature } from '@/utils/common';
/**
 * Polygon props
 *
 * @category Props
 */
export type PolygonProps = {
    id: number | string;
};

/**
  @category Component
 */
const Polygon = (props: PolygonProps) => {
    const { id } = props;
    const paitner = new PolygonPainter();

    const toFeatures = (points: Position[]) => {
        const features: GeoJSON.Feature[] = [];
        const drawingFeatures: GeoJSON.Feature[] = [];
        if (points.length) {
            drawingFeatures.push(...points.map((p) => createPointFeature(p, { type: 0 })));
            if (points.length > 1) {
                drawingFeatures.push(createLineFeature(points, { type: 0 }));
            }
            if (points.length > 2) {
                drawingFeatures.push(createPolygonFeature(points, { type: 0 }));
            }
        }

        return features;
    };

    return <Shape id={id} paintner={paitner} toFeatures={toFeatures} />;
};

export default Polygon;
