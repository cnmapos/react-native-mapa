import Mapbox from '@rnmapbox/maps';
export * from './modules';
export * from './types';
export * from './components/slots';

export { default as MapView, type MapViewProps } from './components/MapView';
export { default as Camera, type CameraProps } from './components/Camera';
export { default as ZoomInOut, type ZoomInOutProps } from './components/ZoomInOut';
export { default as Background, type BackgroundProps } from './components/Background';
export { default as Scalebar, type ScalebarProps } from './components/Scalebar';
export { default as Marker, type MarkerProps } from './components/Marker';
export { default as Location, type LocationProps } from './components/Location';
export { default as POIFinder, type POIFinderProps } from './components/poi/POIFinder';
export { default as Weather, type WeatherProps } from './components/weather';
export { default as ImageSource } from './components/image/ImageSource';
export { default as ImageLayer } from './components/image/ImageLayer';
export { default as Images } from './components/image/Images';
export { default as Image } from './components/image/Image';
export { default as GeoJSONSource } from './components/GeoJSONSource';
export { default as SymbolLayer } from './components/SymbolLayer';
export { default as LineLayer } from './components/LineLayer';

/**
 * 设置mapbox 的token
 * @category static
 */
export function setAccessToken(token: string) {
    Mapbox.setAccessToken(token);
}
