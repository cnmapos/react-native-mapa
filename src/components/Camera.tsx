import Mapbox from '@rnmapbox/maps';
import { Text, View } from 'react-native';
import { Bounds, CameraEvent, PositionLike } from '../types';
import { defaultCenterCoordinates, defaultMaxZoom, defaultMinZoom, defaultZoom } from '../config';
import { useContext, useRef } from 'react';
import { MapContext } from '../MapContext';

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
    maxzoom?: number;
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
    bounds?: Bounds;

    onChange?: (e: CameraEvent) => void;
};

/**
 * @category Component
 */
const Camera = (props: CameraProps) => {
    const { map } = useContext(MapContext);
    const {
        zoom = defaultZoom,
        maxzoom = defaultMaxZoom,
        minzoom = defaultMinZoom,
        bounds,
        center = defaultCenterCoordinates,
        heading,
        pitch,
        onChange,
    } = props;
    const mpCameraRef = useRef<Mapbox.Camera>(null);

    if (onChange) {
        map.on('onCameraChanged', onChange);
    }

    return (
        <Mapbox.Camera
            ref={mpCameraRef}
            zoomLevel={zoom}
            maxZoomLevel={maxzoom}
            minZoomLevel={minzoom}
            pitch={pitch}
            centerCoordinate={center}
            heading={heading}
        />
    );
};

export default Camera;
