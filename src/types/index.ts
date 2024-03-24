import { CameraRef } from '@rnmapbox/maps/lib/typescript/src/components/Camera';
import { LocationManager } from '../modules/LocationManager';

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
    // on(event: 'onCameraChanged', listener: (e: any) => void): void;
    zoomTo(step: number, duration?: number): void;
    flyTo(center: Position, duration?: number): void;
    getZoom(): Promise<number | undefined>;

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

export const searchMaxRadius = 50000;

export type SearchNearParams = {
    /**
     * 查询key
     */
    key: string;
    /**
     * 搜索关键字
     */
    keywords: string;
    /**
     * 查询中心坐标
     */
    location?: string;
    /**
     * 查询半径
     * 取值范围:0-50000。规则：大于50000按默认值，单位：米
     */
    radius?: number;
    /**
     * 查询POI类型
     */
    types?: string;
    city?: string;
    /**
     * 每页记录条数
     */
    offset?: number;
    /**
     * 当前页
     */
    page?: number;
};

export type ResResult<T> = {
    code: number;
    data?: T;
    message?: any;
};

export type POIProperties = {
    distance?: number;
    pcode: string;
    /**
     * POI类型
     * @example
     * 汽车服务;充电站;充电站
     */
    type: string;
    photos: { title: string[]; url: string }[];
    typecode: string;
    citycode: string;
    adname: string;
    /**
     * @example
     * '万城万充汽车充电站(环球创意广场)'
     */
    alias: string;
    tel: string;
    /**
     * 地址
     * @example
     * 阜荣街10号首开广场地下二层停车场
     */
    address: string;
    adcode: string;
    pname: string;
    cityname: string;
    /**
     * POI名称
     * @example
     * 万城万充汽车充电站(环球创意广场充电站)
     */
    name: string;
    /**
     * 坐标
     */
    location: Position;
};

export interface SearchNearData {
    count: number;
    pois: POIProperties[];
}
export interface POI {
    searchNear(params: SearchNearParams): Promise<ResResult<SearchNearData>>;
}
