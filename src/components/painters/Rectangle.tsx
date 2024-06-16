import { FillLayerStyleProps, Position, SymbolLayerStyleProps } from '@/types';
import { ReactElement } from 'react';
import Shape from './Shape';
import { bbox, createPointFeature, createPolygonFeature } from '../../utils/common';
import { RectanglePainter } from '../../modules/painters/RectanglePainter';
/**
 * Rectangle props
 *
 * @category Props
 */
export type RectangleProps = {
    id: number | string;
    children?: ReactElement | ReactElement[];
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
const Rectangle = (props: RectangleProps) => {
    const { id, children, outCircleStyle, innerCircleStyle, anchorStyle, fillStyle, onError, onFinish } = props;
    const painter = new RectanglePainter();

    const toFeatures = async (points: Position[]) => {
        const features: GeoJSON.Feature[] = [];
        points.forEach((p) => features.push(createPointFeature(p, { type: 0 })));
        if (points.length > 1) {
            const bounds = bbox(points);
            const [[minX, minY], [maxX, maxY]] = bounds;
            const polygonPoints: Position[] = [
                [minX, minY],
                [minX, maxY],
                [maxX, maxY],
                [maxX, minY],
                [minX, minY],
            ];
            features.push(createPolygonFeature(polygonPoints, { type: 0 }));
        }

        return features;
    };

    return (
        <Shape
            id={id}
            paintner={painter}
            outCircleStyle={outCircleStyle}
            innerCircleStyle={innerCircleStyle}
            anchorStyle={anchorStyle}
            fillStyle={fillStyle}
            toFeatures={toFeatures}
            onError={onError}
            onFinish={onFinish}
        >
            {children}
        </Shape>
    );
};

export default Rectangle;
