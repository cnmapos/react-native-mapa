import { CameraRef } from '@rnmapbox/maps/lib/typescript/src/components/Camera';
import { EventName } from 'react-native/Libraries/Performance/Systrace';

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

/**
 * Map loaded event props
 */
export type MapLoadedEvent = any;

export interface MapEventNameAndProps {
    cameraChanged: CameraEvent;
    loaded: MapLoadedEvent;
}

export interface PropEventSource<T> {
    on<Key extends string & keyof T>(event: Key, listener: (e: T[Key]) => void): void;
    off<Key extends string & keyof T>(event: Key, listener: (e: T[Key]) => void): void;
    emit<Key extends string & keyof T>(event: Key, opts: T[Key]): void;
}

export interface MapViewInterface extends PropEventSource<MapEventNameAndProps> {
    setCamera(rnCamera: CameraRef): void;
    // on(event: 'onCameraChanged', listener: (e: any) => void): void;
    zoomTo(step: number, duration?: number): void;
    flyTo(center: Position, duration?: number): void;
    getZoom(): Promise<number | undefined>;

    get locationManager(): {
        start: () => void;
        /**
         * @example
         * {"coords":
         *  {
         *      "accuracy": 24.95806772832081,
         *      "altitude": 588.2273369943723,
         *      "course": -1,
         *      "heading": 89.29508972167969,
         *      "latitude": 30.673172799689635,
         *      "longitude": 104.00440663503657,
         *      "speed": 0
         *  },
         * "timestamp": 1710852623018.5007
         * }
         */

        getLastKnownLocation: () => {
            coords: { longitude: number; latitude: number; speed: number; altitude: number };
        };
    };
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
