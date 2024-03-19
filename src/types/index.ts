import { CameraRef } from '@rnmapbox/maps/lib/typescript/src/components/Camera';

/**
 * MapView Props
 */
export enum StyleIDs {
    /**
     * 高德矢量地图
     */
    AmapVector = 'AmapVector',
    /**
     * 高德卫星地图
     */
    AmapSatellite = 'AmapSatellite',
    /**
     * Mapbox矢量地图
     */
    MapboxVector = 'MapboxVector',
    /**
     * Mapbox卫星地图
     */
    MapboxSatellite = 'MapboxSatellite',
}

export type PositionLike = number[] | [number, number];

export type Position = [number, number];

/** 投影方式 */
export type Projection = 'mercator' | 'globe';

export type BoundsLike = [number, number, number, number];

export type Bounds = BoundsLike & { sw: PositionLike; ne: PositionLike };

/**
 * Camera事件属性
 */
export type CameraEvent = {
    center: Position;
    bounds: { ne: Position; sw: Position };
    zoom: number;
    heading: number;
    pitch: number;
};

export interface MapViewInterface {
    setCamera(rnCamera: CameraRef): void;
    on(event: 'onCameraChanged', listener: (e: any) => void): void;
    zoomTo(step: number, duration?: number): void;
    flyTo(center: Position, duration?: number): void;
}

export type PositionStyle = {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
};

/**
 * 位置插槽
 */
export type PositionSlot = 'top' | 'right' | 'bottom' | 'left' | 'right-top';

/**
 * 定位基础样式
 */
export type PosBaseProps = {
    /**
     * 默认显示在屏幕右上角，可设置style自定义位置
     * @example
     * ```
     * { right: 5, bottom: 5 }
     * 或者 'right-top'
     * ```
     */
    style?: PositionStyle; // | PositionSlot;
};
