import Shape from './Shape';
import { FillLayerStyleProps, LineLayerStyleProps, Position, SymbolLayerStyleProps } from '@/types';
import { PolygonPainter } from '../../modules/painters/PolygonPainter';
import { createLineFeature, createPointFeature, createPolygonFeature } from '../../utils/common';
import { ReactElement } from 'react';
/**
 * Polygon props
 *
 * @category Props
 */
export type PolygonProps = {
    id: number | string;
    children?: ReactElement | ReactElement[];
    lineStyle?: LineLayerStyleProps;
    symbolStyle?: SymbolLayerStyleProps;
    outCircleStyle?: SymbolLayerStyleProps;
    innerCircleStyle?: SymbolLayerStyleProps;
    anchorStyle?: SymbolLayerStyleProps;
    fillStyle?: FillLayerStyleProps;
    onFinish?: (e: Position[]) => void;
    onError?: (e: { message: string }) => void;
};

/**
  @category Component
 */
const Polygon = (props: PolygonProps) => {
    const { id, onError, onFinish } = props;
    const painter = new PolygonPainter();

    const toFeatures = async (points: Position[]) => {
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

        return drawingFeatures;
    };

    return <Shape id={id} paintner={painter} toFeatures={toFeatures} onError={onError} onFinish={onFinish} />;
};

export default Polygon;
