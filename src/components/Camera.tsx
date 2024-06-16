import Mapbox from '@rnmapbox/maps';
import { Bounds, CameraEvent, PositionLike } from '../types';
import { defaultCenterCoordinates, defaultMaxZoom, defaultMinZoom, defaultZoom } from '../config';
import { useContext, useEffect, useRef } from 'react';
import { MapContext } from '../modules/MapContext';
import React from 'react';
/**
 * Camera props
 * @category Props
 */
export type CameraProps = {
    /**
     * 地图显示层级
     * @defaultValue 15
     */
    zoom?: number;
    /**
     * 最大显示层级
     * @defaultValue 21
     */
    maxzoom?: number;
    /**
     * 最小显示层级
     * @defaultValue 3
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
    const mpCameraRef = useRef<Mapbox.Camera>(null);

    const {
        zoom = defaultZoom,
        maxzoom = defaultMaxZoom,
        minzoom = defaultMinZoom,
        center = defaultCenterCoordinates,
        heading,
        pitch,
        onChange,
    } = props;

    if (onChange) {
        map?.on('cameraChanged', onChange);
    }

    useEffect(() => {
        mpCameraRef.current && map?.setCamera(mpCameraRef.current as any);
    }, [map, mpCameraRef]);

    return (
        <Mapbox.Camera
            ref={mpCameraRef}
            zoomLevel={zoom}
            maxZoomLevel={maxzoom}
            // Camera的默认定位动画执行周期设置为0，否则和Location自动定位冲突
            animationDuration={0}
            minZoomLevel={minzoom}
            pitch={pitch}
            centerCoordinate={center}
            heading={heading}
        />
    );
};

export default Camera;
