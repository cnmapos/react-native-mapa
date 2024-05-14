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
import { createPointFeature } from '../../utils/common';
import { MapContext } from '../../modules';
import Images from '../image/Images';
// import anchorImage from '../../assets/plus.png';
import GeoJSONSource from '../GeoJSONSource';
import LineLayer from '../LineLayer';
import CircleLayer from '../CircleLayer';
import SymbolLayer from '../SymbolLayer';
import DrawControl from './DrawControl';
import FillLayer from '../FillLayer';
const anchorImage = require('../../assets/plus.png');

enum FeatureType {
    Data = 0,
    Anchor = 1,
}

const defaultLineStyle: LineLayerStyleProps = {
    lineColor: '#f00',
    lineWidth: 2,
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

const defaultFillStyle: FillLayerStyleProps = {
    fillColor: '#8c8af5',
    fillOpacity: 0.7,
};

/**
 * Shape props
 *
 * @category Props
 */
export type ShapeProps = {
    id: number | string;
    paintner: ShapePainter;
    toFeatures: (data: any) => Promise<GeoJSON.Feature[]>;
    children?: ReactElement | ReactElement[];
    lineStyle?: LineLayerStyleProps;
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
const Shape = (props: ShapeProps) => {
    const {
        id,
        lineStyle = defaultLineStyle,
        outCircleStyle = defaultOutCircleStyle,
        innerCircleStyle = defaultInnerCircleStyle,
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
        drawingFeatures.push(...(await toFeatures(points)));
        // 在地图中心位置添加锚点
        const center = await map.getCenter();
        drawingFeatures.push(createPointFeature(center, { type: FeatureType.Anchor }));
        setFeatures(drawingFeatures);

        console.log('displayFeatures', JSON.stringify(drawingFeatures));
    };
    const shapePainter = useRef(paintner);
    shapePainter.current.onChange = displayFeatures;

    const onUndo = () => {
        shapePainter.current.undo();
    };
    const onAdd = async (e?: PressFeature) => {
        const center: Position = await map.getCenter();
        const postion = e?.geometry?.coordinates || center;
        shapePainter.current.addPoint(postion as Position);
    };
    const onFinish = () => {
        const data = shapePainter.current.getData();
        if (!data) {
            onError?.({ message: '绘制未结束，无法获取轨迹信息' });
        } else {
            onDrawFinish?.(data);
        }
    };
    useEffect(() => {
        map.on('onPress', onAdd);
        map.on('cameraChanged', () => {
            const points = shapePainter.current.getData() || [];
            displayFeatures(points);
        });
        displayFeatures([]);
    }, [map]);

    const sourceID = `shape-source-${id}`;
    const layerID = `shape-layer-${id}`;
    const outCircleLayerID = `circle-out-layer-${id}`;
    const innerCircleLayerID = `circle-inner-layer-${id}`;
    const anchorLayerID = `anchor-layer-${id}`;
    const fillLayerID = `fill-layer-${id}`;

    return (
        <>
            <Images images={{ anchor: anchorImage }} />
            <GeoJSONSource id={sourceID} url={{ type: 'FeatureCollection', features: features }}>
                {children || (
                    <>
                        <LineLayer
                            filter={[
                                'all',
                                ['==', ['get', 'type'], FeatureType.Data],
                                ['==', ['geometry-type'], 'LineString'],
                            ]}
                            slot="top"
                            id={layerID}
                            sourceId={sourceID}
                            style={lineStyle}
                        />
                        <CircleLayer
                            filter={[
                                'all',
                                ['==', ['get', 'type'], FeatureType.Data],
                                ['==', ['geometry-type'], 'Point'],
                            ]}
                            slot="top"
                            id={outCircleLayerID}
                            sourceId={sourceID}
                            style={outCircleStyle}
                        />
                        <CircleLayer
                            filter={[
                                'all',
                                ['==', ['get', 'type'], FeatureType.Data],
                                ['==', ['geometry-type'], 'Point'],
                            ]}
                            slot="top"
                            id={innerCircleLayerID}
                            sourceId={sourceID}
                            style={innerCircleStyle}
                        />
                        <SymbolLayer
                            filter={[
                                'all',
                                ['==', ['get', 'type'], FeatureType.Anchor],
                                ['==', ['geometry-type'], 'Point'],
                            ]}
                            slot="top"
                            id={anchorLayerID}
                            sourceId={sourceID}
                            style={anchorStyle}
                        />
                        <FillLayer
                            slot="top"
                            id={fillLayerID}
                            sourceId={sourceID}
                            filter={[
                                'all',
                                ['==', ['geometry-type'], 'Polygon'],
                                ['==', ['get', 'type'], FeatureType.Data],
                            ]}
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
