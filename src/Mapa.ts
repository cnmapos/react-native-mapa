import Mapbox from '@rnmapbox/maps';
export * from './modules';
export * from './types';
export { default as MapView, type MapViewProps } from './components/MapView';
export { default as Camera, type CameraProps } from './components/Camera';
export { default as ZoomInOut, type ZoomInOutProps } from './components/ZoomInOut';
export { default as Background, type BackgroundProps } from './components/Background';
export { default as Scalebar, type ScalebarProps } from './components/Scalebar';
export { default as Marker, type MarkerProps } from './components/Marker';
export { default as Location, type LocationProps } from './components/Location';
export { default as POIFinder, type POIFinderProps } from './components/poi/POIFinder';
export { default as Weather, type WeatherProps } from './components/weather';
export { default as Compass } from './components/Compass';
export { default as ImageSource } from './components/image/ImageSource';
export { default as ImageLayer } from './components/image/ImageLayer';
export { default as Images } from './components/image/Images';
export { default as Image } from './components/image/Image';
export { default as GeoJSONSource } from './components/GeoJSONSource';
export { default as VectorSource } from './components/VectorSource';
export { default as RasterSource } from './components/RasterSource';
export { default as SymbolLayer } from './components/SymbolLayer';
export { default as LineLayer } from './components/LineLayer';
export { default as FillLayer } from './components/FillLayer';
export { default as FillExtrusionLayer } from './components/FillExtrusionLayer';
export { default as RasterLayer } from './components/RasterLayer';
export { default as CircleLayer } from './components/CircleLayer';
export { default as Models } from './components/Models';
export { default as ModelLayer } from './components/ModelLayer';
// export { default as Scalebar } from './components/Scalebar';
export { default as PolylinePainter } from './components/painters/Polyline';
export { default as PolygnPainter } from './components/painters/Polygon';
export { default as CirclePainter } from './components/painters/Circle';
export { default as RectanglePainter } from './components/painters/Rectangle';

export * from './components/slots';
/**
 * 设置mapbox 的token
 * @category static
 */
export function setAccessToken(token: string) {
    Mapbox.setAccessToken(token);
}
