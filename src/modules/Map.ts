import Mapbox, { Camera } from '@rnmapbox/maps';
import { styleFormat, zoomAnimationDuraton } from '../config';
import { BBox, FilterExpression, MapViewInterface, Position } from '../types';
import EventEmitter from 'eventemitter3';
import { LocationManager } from './LocationManager';

export class Map implements MapViewInterface {
    private map?: Mapbox.MapView;
    private camera?: Mapbox.Camera;
    private emitter: EventEmitter = new EventEmitter();
    private locManager: LocationManager;

    get locationManager(): LocationManager {
        return this.locManager;
    }

    constructor(map: Mapbox.MapView | null) {
        if (map) {
            this.map = map;
        }
        this.locManager = new LocationManager();
    }

    async getCenter(): Promise<Position> {
        return (await this.map?.getCenter()) as any;
    }

    async getPointInView(location: Position): Promise<Position> {
        return (await this.map?.getPointInView(location)) as any;
    }

    async getCoordinateFromView(location: Position) {
        return (await this.map?.getCoordinateFromView(location)) as any;
    }

    async getVisibleBounds(): Promise<[Position, Position] | undefined> {
        const bounds = (await this.map?.getVisibleBounds()) as any;

        return bounds;
    }

    off(event: any, listener: any): void {
        this.emitter.off(event, listener);
    }

    on(event: any, listener: any): void {
        this.emitter.on(event, listener);
    }

    emit(event: any, ...args: any[]) {
        this.emitter.emit(event, ...args);
    }

    async getZoom() {
        return await this.map?.getZoom();
    }

    setMap(map: Mapbox.MapView) {
        this.map = map;
    }

    setCamera(rnCamera: Camera): void {
        this.camera = rnCamera;
    }

    setCenter(location: Position) {
        this.camera?.moveTo(location);
    }

    async zoomTo(step: number, duration?: number) {
        const zoom = await this.map?.getZoom();
        this.camera?.zoomTo(zoom! + step, duration !== undefined ? duration : zoomAnimationDuraton);
    }

    async flyTo(center: Position, duration?: number) {
        duration = duration !== undefined ? duration : 100;
        this.camera?.flyTo(center, duration);
    }

    /**
     * 按来源查询feature集合
     *
     * @param sourceId
     * @param filter FilterExpression
     * @param layerIDs 图层ID
     * @returns Promise<GeoJSON.FeatureCollection>
     */
    async querySourceFeatures(
        sourceId: string,
        filter: FilterExpression | [] = [],
        layerIDs: string[] = []
    ): Promise<GeoJSON.FeatureCollection> {
        const features: GeoJSON.Feature[] =
            (await this.map?.querySourceFeatures(sourceId, filter, layerIDs))?.features || <GeoJSON.Feature[]>[];

        return {
            type: 'FeatureCollection',
            features,
        };
    }

    /**
     * 按bbox查询可视区域feature集合
     *
     * @param bbox 查询范围，像素坐标范围
     * @param filter FilterExpression
     * @param layerIDs 图层ID
     * @returns Promise<GeoJSON.FeatureCollection>
     */
    async queryRenderFeatures(
        bbox: BBox,
        filter: FilterExpression | [] = [],
        layerIDs: string[] | null = null
    ): Promise<GeoJSON.FeatureCollection> {
        const features = (await this.map?.queryRenderedFeaturesInRect(bbox, filter, layerIDs))?.features || [];

        return {
            type: 'FeatureCollection',
            features,
        };
    }

    updateStyle(style: string | Object): void {}
}
