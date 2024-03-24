import Mapbox from '@rnmapbox/maps';
export * from './modules';
export { default as MapView, type MapViewProps } from './components/MapView';
export { default as Camera, type CameraProps } from './components/Camera';
export { default as ZoomInOut, type ZoomInOutProps } from './components/ZoomInOut';
export { default as Background, type BackgroundProps } from './components/Background';
export { default as Scalebar, type ScalebarProps } from './components/Scalebar';
export { default as Marker, type MarkerProps } from './components/Marker';
export { default as Location, type LocationProps } from './components/Location';
export { default as POIFinder, type POIFinderProps } from './components/poi/POIFinder';
// export { default as Slot } from './components/slots';
export * from './components/slots';
/**
 * 设置mapbox 的token
 * @category static
 */
export function setAccessToken(token: string) {
    Mapbox.setAccessToken(token);
}
