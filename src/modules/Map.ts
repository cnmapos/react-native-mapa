import Mapbox, { Camera } from '@rnmapbox/maps';
import { zoomAnimationDuraton } from '../config';
import { MapViewInterface, Position } from '../types';
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
}
