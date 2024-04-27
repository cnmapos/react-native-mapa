import { CircleLayerStyleProps, LineLayerStyleProps, Position, PressFeature, SymbolLayerStyleProps } from '@/types';
import { CircleLayer, GeoJSONSource, LineLayer, MapContext } from '../../mapa';

import { useContext, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import DrawControl from './DrawControl';
import { PolylinePaitner } from '../../modules/painters/PolylinePaitner';

const defaultLineStyle: LineLayerStyleProps = {
    lineColor: '#f00',
    lineWidth: 4,
};
const defaultSymbolStyle: CircleLayerStyleProps = {
    circleRadius: 3,
    circleColor: '#00f',
};
/**
 * Polyline props
 *
 * @category Props
 */
export type PolylineProps = {
    id: number | string;
    lineStyle?: LineLayerStyleProps;
    symbolStyle?: SymbolLayerStyleProps;
    onFinish?: (e: Position[]) => void;
    onError?: (e: { message: string }) => void;
};

/**
  @category Component
 */
const Polyline = (props: PolylineProps) => {
    const {
        id,
        lineStyle = defaultLineStyle,
        symbolStyle = defaultSymbolStyle,
        onFinish: onDrawFinish,
        onError,
    } = props;
    const { map } = useContext(MapContext);
    const [features, setFeatures] = useState<GeoJSON.Feature[]>([]);
    const polylinePainter = useRef(new PolylinePaitner());
    polylinePainter.current.onChange = (points: Position[]) => {
        const drawingFeatures: GeoJSON.Feature[] = points.map((p) => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: p,
            },
            properties: {},
        }));
        drawingFeatures.push({
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: points,
            },
            properties: {},
        });
        console.log('features', features);
        setFeatures(drawingFeatures);
    };

    const onUndo = () => {
        polylinePainter.current.undo();
    };
    const onAdd = async (e?: PressFeature) => {
        console.log('onAdd', e);
        const center: Position = await map.getCenter();
        console.log('center', center);
        const postion = e?.geometry?.coordinates || center;
        polylinePainter.current.addPoint(postion as Position);
    };
    const onFinish = () => {
        const data = polylinePainter.current.getData();
        if (!data) {
            onError?.({ message: '绘制未结束，无法获取轨迹信息' });
        } else {
            onDrawFinish?.(data);
        }
    };
    useEffect(() => {
        console.log('onPress', Date.now());
        map.on('onPress', onAdd);
    });

    const sourceID = `polyline-source-${id}`;
    const layerID = `polyline-layer-${id}`;
    const pointLayerID = `point-layer-${id}`;

    return (
        <>
            <GeoJSONSource id={sourceID} url={{ type: 'FeatureCollection', features: features }}>
                <LineLayer slot="top" id={layerID} sourceId={sourceID} style={lineStyle} />
                <CircleLayer slot="top" id={pointLayerID} sourceId={sourceID} style={symbolStyle} />
            </GeoJSONSource>
            <View>
                <DrawControl onUndo={onUndo} onAdd={onAdd} onFinish={onFinish} />
            </View>
        </>
    );
};

export default Polyline;
