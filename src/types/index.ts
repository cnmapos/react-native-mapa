import { CameraRef } from '@rnmapbox/maps/lib/typescript/src/components/Camera';
import { LocationManager } from '../modules/LocationManager';
import { Expression, FilterExpression } from './styles';

export * from './amap';
export * from './styles';

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

export type MapStyle = 'AmapSatellite' | 'AmapSatellite' | 'MapboxVector' | 'MapboxSatellite';

export type PositionLike = number[] | [number, number];

export type Position = [number, number];

/**
 * 屏幕坐标[x, y]
 */
export type Point = [number, number];

export type BBox = [number, number, number, number];

export type LocationState = {
    heading?: number;
    longitude: number;
    latitude: number;
    speed: number;
    altitude: number;
};

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
    locationChanged: LocationEvent;
}

export interface PropEventSource<T> {
    on<Key extends string & keyof T>(event: Key, listener: (e: T[Key]) => void): void;
    off<Key extends string & keyof T>(event: Key, listener: (e: T[Key]) => void): void;
    emit<Key extends string & keyof T>(event: Key, opts: T[Key]): void;
}

export interface MapViewInterface extends PropEventSource<MapEventNameAndProps> {
    getCenter(): Promise<Position>;
    /**
     * 根据经纬度获取视图坐标
     * @param location 经纬度信息
     * @returns 视图坐标[x, y]
     */
    getPointInView(location: Position): Promise<Position>;
    /**
     * 根据视图坐标获取经纬度
     * @param location 视图坐标[x, y]
     * @returns 经纬度
     */
    getCoordinateFromView(location: Position): Promise<Position>;
    setCamera(rnCamera: CameraRef): void;
    setCenter(location: Position): void;
    zoomTo(step: number, duration?: number): void;
    flyTo(center: Position, duration?: number): void;
    getZoom(): Promise<number | undefined>;
    /**
     * 按来源查询feature集合
     *
     * @param sourceId
     * @param filter FilterExpression
     * @param layerIDs 图层ID
     * @returns Promise<GeoJSON.FeatureCollection>
     */
    querySourceFeatures(
        sourceId: string,
        filter: FilterExpression,
        layerIDs: string[]
    ): Promise<GeoJSON.FeatureCollection>;

    /**
     * 获取可见视图区域的[ne, sw]
     */
    getVisibleBounds(): Promise<[Position, Position] | undefined>;

    /**
     * 按bbox查询可视区域feature集合
     *
     * @param bbox 查询范围，像素坐标范围
     * @param filter FilterExpression
     * @param layerIDs 图层ID
     * @returns Promise<GeoJSON.FeatureCollection>
     */

    queryRenderFeatures(
        bbox: BBox,
        filter: FilterExpression | [],
        layerIDs: string[] | null
    ): Promise<GeoJSON.FeatureCollection>;
    updateStyle(style: string | Object): void;

    get locationManager(): LocationManager;
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

export type LocationEvent = {
    coords: LocationState;
    timestamp?: number;
};

/**
 * 图层插槽位置
 */
export type LayerSlot = 'bottom' | 'middle' | 'top';

export type OnPressEvent = {
    features: Array<GeoJSON.Feature>;
    coordinates: Position;
    point: Point;
};

export type MapIdleEvent = {
    properties: {
        center: GeoJSON.Position;
        bounds: { ne: GeoJSON.Position; sw: GeoJSON.Position };
        zoom: number;
        heading: number;
        pitch: number;
    };
    gestures: { isGestureActive: boolean };
    timestamp?: number | undefined;
};

export type LayerProps = {
    /**
     * layer唯一标识
     */
    id: string;

    /**
     * 数据来源style图层映射
     */
    sourceLayerID?: string;

    /**
     * 如果图层id已经存在，则不创建新图层
     */
    existing?: boolean;

    /**
     * 数据来源标识
     */
    sourceId?: string;

    /**
     * 插入图层到指定index
     */
    layerIndex?: number;

    /**
     * 插入到aboveLayerID图层之上
     */
    aboveLayerID?: string;

    /**
     * 插入到aboveLayerID图层之下
     */
    belowLayerID?: string;

    /**
     *  Mapbox filter表达式
     */
    filter?: Expression;

    /**
     * 显示最小zoom层级
     */
    minZoom?: number;

    /**
     * 显示最大zoom层级
     */
    maxZoom?: number;

    slot?: LayerSlot;
};
