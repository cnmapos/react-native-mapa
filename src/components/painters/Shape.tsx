import { View, StyleSheet } from 'react-native';
import {
    CircleLayerStyleProps,
    FillLayerStyleProps,
    LineLayerStyleProps,
    Position,
    PressFeature,
    ShapePainter,
    SymbolLayerStyleProps,
} from '@/types';
import { ReactElement, useContext, useEffect, useRef, useState } from 'react';
import { createPointFeature } from '@/utils/common';
import { MapContext } from '@/modules';
import Images from '../image/Images';
import anchorImage from '../../assets/plus.png';
import GeoJSONSource from '../GeoJSONSource';
import LineLayer from '../LineLayer';
import CircleLayer from '../CircleLayer';
import SymbolLayer from '../SymbolLayer';
import DrawControl from './DrawControl';
import FillLayer from '../FillLayer';

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

const defaultFillStyle: FillLayerStyleProps = {
    fillColor: '#f00',
    fillOpacity: 0.5,
};

/**
 * Shape props
 *
 * @category Props
 */
export type ShapeProps = {
    id: number | string;
    paintner: ShapePainter;
    toFeatures: (data: any) => GeoJSON.Feature[];
    children?: ReactElement | ReactElement[];
    lineStyle?: LineLayerStyleProps;
    symbolStyle?: SymbolLayerStyleProps;
    anchorStyle?: SymbolLayerStyleProps;
    fillStyle?: FillLayerStyleProps;
    onFinish?: (e: Position[]) => void;
    onError?: (e: { message: string }) => void;
};

/**
  @category Component
 */
const Shape = (props: ShapeProps) => {
    const {
        id,
        lineStyle = defaultLineStyle,
        symbolStyle = defaultSymbolStyle,
        anchorStyle = defaultAnchorStyle,
        fillStyle = defaultFillStyle,
        paintner,
        children,
        toFeatures,
        onFinish: onDrawFinish,
        onError,
    } = props;
    const { map } = useContext(MapContext);
    const [features, setFeatures] = useState<GeoJSON.Feature[]>([]);
    const displayFeatures = async (points: Position[]) => {
        const drawingFeatures: GeoJSON.Feature[] = [];
        drawingFeatures.push(...toFeatures(points));
        // 在地图中心位置添加锚点
        const center = await map.getCenter();
        drawingFeatures.push(createPointFeature(center, { type: FeatureType.Anchor }));
        setFeatures(drawingFeatures);
    };
    const polylinePainter = useRef(paintner);
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
        displayFeatures([]);
    }, [map]);

    const sourceID = `polyline-source-${id}`;
    const layerID = `polyline-layer-${id}`;
    const pointLayerID = `point-layer-${id}`;
    const anchorLayerID = `anchor-layer-${id}`;
    const fillLayerID = `fill-layer-${id}`;

    return (
        <>
            <Images images={{ anchor: anchorImage }} />
            <GeoJSONSource id={sourceID} url={{ type: 'FeatureCollection', features: features }}>
                {children || (
                    <>
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
                        <FillLayer
                            slot="top"
                            id={fillLayerID}
                            sourceId={sourceID}
                            filter={['==', ['get', 'type'], FeatureType.Data]}
                            style={fillStyle}
                        />
                    </>
                )}
            </GeoJSONSource>
            <View style={styles.control}>
                <DrawControl onUndo={onUndo} onAdd={onAdd} onFinish={onFinish} />
            </View>
        </>
    );
};

export default Shape;

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
