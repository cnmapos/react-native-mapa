import { Point, Position } from '..';
import { ReactElement } from 'react';
import Mapbox from '@rnmapbox/maps';
/**
 * Marker支持可交互的React native组件
 *
 * @category Props
 */
export type MarkerProps = {
    /**
     * Marker经纬度坐标
     */
    position: Position;
    /**
     * Marker锚点，x、y的值范围为[0, 1]
     * 当anchor为[0, 0]时表示top-left，当anchor为[1, 1]时表示bottom-right
     *
     * @defaultValue [0.5, 0.5]
     */
    anchor?: Point;

    /**
     * 地图上邻近的marker是否重叠显示。如果为false，表示重叠的marker只会有一个显示在地图上
     *
     * @defaultValue false
     */
    allowOverlap?: boolean;

    children: ReactElement;
};

/**
  @category Component
 */
const Marker = (props: MarkerProps) => {
    const { position, anchor, allowOverlap = false, children } = props;
    const newAnchor = anchor ? { x: anchor[0], y: anchor[1] } : { x: 0.5, y: 0.5 };
    return (
        <Mapbox.MarkerView coordinate={position} anchor={newAnchor} allowOverlap={allowOverlap}>
            {children}
        </Mapbox.MarkerView>
    );
};

export default Marker;
