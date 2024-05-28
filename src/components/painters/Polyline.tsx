import Shape from './Shape';
import { LineLayerStyleProps, Position, SymbolLayerStyleProps } from '@/types';
import { PolylinePainter } from '../../modules/painters/PolylinePainter';
import { createLineFeature, createPointFeature } from '../../utils/common';
import { ReactElement } from 'react';
/**
 * Polyline props
 *
 * @category Props
 */
export type PolylineProps = {
    id: number | string;
    children?: ReactElement | ReactElement[];
    lineStyle?: LineLayerStyleProps;
    outCircleStyle?: SymbolLayerStyleProps;
    innerCircleStyle?: SymbolLayerStyleProps;
    anchorStyle?: SymbolLayerStyleProps;
    onFinish?: (e: Position[]) => void;
    onError?: (e: { message: string }) => void;
};

/**
  @category Component
 */
const Polyline = (props: PolylineProps) => {
    const { id, onError, onFinish, ...styles } = props;
    const paitner = new PolylinePainter();

    const toFeatures = async (points: Position[]) => {
        const drawingFeatures: GeoJSON.Feature[] = [];
        if (points.length) {
            drawingFeatures.push(...points.map((p) => createPointFeature(p, { type: 0 })));
            if (points.length > 1) {
                drawingFeatures.push(createLineFeature(points, { type: 0 }));
            }
        }

        return drawingFeatures;
    };

    return (
        <Shape id={id} {...styles} paintner={paitner} toFeatures={toFeatures} onError={onError} onFinish={onFinish} />
    );
};

export default Polyline;
