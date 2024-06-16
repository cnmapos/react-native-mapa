import { MapContext } from '../../modules/MapContext';
import { useContext } from 'react';
import { CircleLayerStyleProps, Position, SymbolLayerStyleProps } from '@/types';
import Shape from './Shape';
import { CirclePainter } from '../../modules/painters/CirclePainter';
import { createPointFeature } from '../../utils/common';
import CircleLayer from '../CircleLayer';
import SymbolLayer from '../SymbolLayer';

const defaultCircleStyle: CircleLayerStyleProps = {
    circleRadius: ['get', 'radius'],
    circleColor: '#8c8af5',
    circleOpacity: 0.7,
};
const defaultOutCircleStyle: CircleLayerStyleProps = {
    circleRadius: 8,
    circleStrokeColor: '#1878ff',
    circleStrokeWidth: 2,
    circleColor: 'transparent',
};

const defaultInnerCircleStyle: CircleLayerStyleProps = {
    circleRadius: 3,
    circleColor: '#1878ff',
};

const defaultAnchorStyle: SymbolLayerStyleProps = {
    iconImage: 'anchor',
    iconAllowOverlap: true,
    iconSize: 1,
};

/**
 * Circle props
 *
 * @category Props
 */
export type CircleProps = {
    id: number | string;
    circleStyle?: CircleLayerStyleProps;
    anchorStyle?: SymbolLayerStyleProps;
    onFinish?: (e: Position[]) => void;
    onError?: (e: { message: string }) => void;
};

/**
  @category Component
 */
const Circle = (props: CircleProps) => {
    const { id, onFinish, onError, circleStyle = defaultCircleStyle, anchorStyle = defaultAnchorStyle } = props;
    const painter = new CirclePainter();
    const { map } = useContext(MapContext);

    const toFeatures = async (points: Position[]) => {
        const features: GeoJSON.Feature[] = [];
        if (points.length > 0) {
            features.push(createPointFeature(points[0], { type: 0 }));
        }
        if (points.length > 1) {
            features.push(createPointFeature(points[1], { type: 0 }));
            const sourcePoint = await map.getPointInView(points[0]);
            const destPoint = await map.getPointInView(points[1]);
            const radius = Math.sqrt(
                Math.pow(sourcePoint[0] - destPoint[0], 2) + Math.pow(sourcePoint[1] - destPoint[1], 2)
            );
            features.push(createPointFeature(points[0], { type: 0, radius }));
        }

        return features;
    };
    const sourceID = `shape-source-${id}`;
    const circleLayerID = `circle-layer-${id}`;
    const outCircleLayerID = `circle-out-layer-${id}`;
    const innerCircleLayerID = `circle-inner-layer-${id}`;
    const anchorLayerID = `anchor-layer-${id}`;

    return (
        <Shape id={id} paintner={painter} toFeatures={toFeatures} onError={onError} onFinish={onFinish}>
            <CircleLayer
                filter={['all', ['==', ['get', 'type'], 0], ['==', ['geometry-type'], 'Point']]}
                slot="top"
                id={outCircleLayerID}
                sourceId={sourceID}
                style={defaultOutCircleStyle}
            />
            <CircleLayer
                filter={['all', ['==', ['get', 'type'], 0], ['==', ['geometry-type'], 'Point']]}
                slot="top"
                id={innerCircleLayerID}
                sourceId={sourceID}
                style={defaultInnerCircleStyle}
            />
            <CircleLayer
                filter={['all', ['>', ['get', 'radius'], 0], ['==', ['geometry-type'], 'Point']]}
                slot="top"
                id={circleLayerID}
                sourceId={sourceID}
                style={circleStyle}
            />
            <SymbolLayer
                filter={['all', ['==', ['get', 'type'], 1], ['==', ['geometry-type'], 'Point']]}
                slot="top"
                id={anchorLayerID}
                sourceId={sourceID}
                style={anchorStyle}
            />
        </Shape>
    );
};

export default Circle;
