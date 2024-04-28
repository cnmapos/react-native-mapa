import { CircleLayerStyleProps, LineLayerStyleProps, Position, PressFeature, SymbolLayerStyleProps } from '@/types';
import { CircleLayer, GeoJSONSource, Images, LineLayer, MapContext, SymbolLayer } from '../../mapa';

import { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DrawControl from './DrawControl';
import { PolylinePaitner } from '../../modules/painters/PolylinePaitner';
import { createLineFeature, createPointFeature } from '../../utils/common';
import anchorImage from '../../assets/plus.png';

enum FeatureType {
    Data = 0,
    Anchor = 1,
}

const defaultLineStyle: LineLayerStyleProps = {
    lineColor: '#f00',
    lineWidth: 4,
};
const defaultSymbolStyle: CircleLayerStyleProps = {
    circleRadius: 6,
    circleStrokeColor: '#f00',
    circleStrokeWidth: 3,
};

const defaultAnchorStyle: SymbolLayerStyleProps = {
    iconImage: 'anchor',
    iconAllowOverlap: true,
    iconSize: 1,
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
    anchorStyle?: SymbolLayerStyleProps;
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
        anchorStyle = defaultAnchorStyle,
        onFinish: onDrawFinish,
        onError,
    } = props;
    const { map } = useContext(MapContext);
    const [features, setFeatures] = useState<GeoJSON.Feature[]>([]);
    const displayFeatures = async (points: Position[]) => {
        const drawingFeatures: GeoJSON.Feature[] = [];
        if (points.length) {
            drawingFeatures.push(...points.map((p) => createPointFeature(p, { type: FeatureType.Data })));
            drawingFeatures.push(createLineFeature(points, { type: FeatureType.Data }));
        }
        // 在地图中心位置添加锚点
        const center = await map.getCenter();
        drawingFeatures.push(createPointFeature(center, { type: FeatureType.Anchor }));
        console.log('display', JSON.stringify(drawingFeatures));
        setFeatures(drawingFeatures);
    };
    const polylinePainter = useRef(new PolylinePaitner());
    polylinePainter.current.onChange = displayFeatures;

    const onUndo = () => {
        polylinePainter.current.undo();
    };
    const onAdd = async (e?: PressFeature) => {
        const center: Position = await map.getCenter();
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
        map.on('onPress', onAdd);
        map.on('cameraChanged', () => {
            const points = polylinePainter.current.getData() || [];
            displayFeatures(points);
        });
    }, [map]);

    const sourceID = `polyline-source-${id}`;
    const layerID = `polyline-layer-${id}`;
    const pointLayerID = `point-layer-${id}`;
    const anchorLayerID = `anchor-layer-${id}`;

    return (
        <>
            <Images images={{ anchor: anchorImage }} />
            <GeoJSONSource id={sourceID} url={{ type: 'FeatureCollection', features: features }}>
                <LineLayer
                    filter={['==', ['get', 'type'], FeatureType.Data]}
                    slot="top"
                    id={layerID}
                    sourceId={sourceID}
                    style={lineStyle}
                />
                <CircleLayer
                    filter={['==', ['get', 'type'], FeatureType.Data]}
                    slot="top"
                    id={pointLayerID}
                    sourceId={sourceID}
                    style={symbolStyle}
                />
                <SymbolLayer
                    filter={['==', ['get', 'type'], FeatureType.Anchor]}
                    slot="top"
                    id={anchorLayerID}
                    sourceId={sourceID}
                    style={anchorStyle}
                />
            </GeoJSONSource>
            <View style={styles.control}>
                <DrawControl onUndo={onUndo} onAdd={onAdd} onFinish={onFinish} />
            </View>
        </>
    );
};

export default Polyline;

const styles = StyleSheet.create({
    control: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
    },
    icon: {
        // backgroundColor: '#000',
        width: 50,
        height: 30,
        fontWeight: '700',
        color: '#F00',
    },
});
