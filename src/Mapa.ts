import Mapbox from '@rnmapbox/maps';
export { default as MapView, type MapViewProps } from './components/MapView';
export { default as Camera, type CameraProps } from './components/Camera';
export { default as ZoomInOut, type ZoomInOutProps } from './components/ZoomInOut';
export { default as Background } from './components/Background';
export { default as Scalebar } from './components/Scalebar';
export { default as Marker } from './components/Marker';
export { default as Location, type LocationProps } from './components/Location';
/** 设置mapbox 的token */
export function setAccessToken(token: string) {
    Mapbox.setAccessToken(token);
}
