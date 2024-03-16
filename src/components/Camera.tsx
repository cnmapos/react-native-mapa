import Mapbox from '@rnmapbox/maps';
import { Text, View } from 'react-native';
import { Bounds, CameraEvent, PositionLike } from '../types';
import { defaultCenterCoordinates, defaultZoom } from '../config';
import { useRef } from 'react';

/**
 * Camera props
 */
export type CameraProps = {
    /**
     * 地图显示层级，默认显示15级
     */
    zoom?: number;
    /**
     * 最大显示层级，默认为21
     */
    maxzom?: number;
    /**
     * 最小显示层级，默认为5
     */
    minzoom?: number;
    /**
     * 设置中心坐标
     */
    center?: PositionLike;

    /**
     * 偏航角
     */
    heading?: number;

    /**
     * 俯仰角
     */
    pitch?: number;

    /**
     * 地图可视范围
     * 例如[104.061891, 30.65796, 104.062304, 30.65900]
     * 或者{ sw: [104.061891, 30.65796], ne: [104.062304, 30.65900] }
     */
    bounds: Bounds;

    onChange?: (e: CameraEvent) => void;
};

const Camera = (props: any) => {
    const { zoom = defaultZoom, center = defaultCenterCoordinates } = props;
    const mpCameraRef = useRef<Mapbox.Camera>(null);

    return <Mapbox.Camera ref={mpCameraRef} zoomLevel={zoom} centerCoordinate={center} />;
};

export default Camera;
