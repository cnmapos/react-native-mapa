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
export { default as Compass, type CompassProps } from './components/Compass';
export { default as ImageSource, type ImageSourceProps } from './components/image/ImageSource';
export { default as ImageLayer, type ImageLayerProps } from './components/image/ImageLayer';
export { default as Images, type ImagesProps } from './components/image/Images';
export { default as Image } from './components/image/Image';
export { default as GeoJSONSource, type GeoJSONSourceProps } from './components/GeoJSONSource';
export { default as VectorSource, type VectorSourceProps } from './components/VectorSource';
export { default as RasterSource, type RasterSourceProps } from './components/RasterSource';
export { default as SymbolLayer, type SymbolLayerProps } from './components/SymbolLayer';
export { default as LineLayer, type LineLayerProps } from './components/LineLayer';
export { default as FillLayer, type FillLayerProps } from './components/FillLayer';
export { default as FillExtrusionLayer, type FillExtrusionLayerProps } from './components/FillExtrusionLayer';
export { default as RasterLayer, type RasterLayerProps } from './components/RasterLayer';
export { default as CircleLayer, type CircleLayerProps } from './components/CircleLayer';
export { default as Models, type ModelsProps } from './components/Models';
export { default as ModelLayer, type ModelLayerProps } from './components/ModelLayer';
export { default as HeatmapLayer, type HeatmapLayerProps } from './components/HeatmapLayer';
// export { default as Scalebar } from './components/Scalebar';
export { default as PolylinePainter, type PolylineProps } from './components/painters/Polyline';
export { default as PolygnPainter, type PolygonProps } from './components/painters/Polygon';
export { default as CirclePainter, type CircleProps } from './components/painters/Circle';
export { default as RectanglePainter, type RectangleProps } from './components/painters/Rectangle';

export * from './components/slots';
/**
 * 设置mapbox 的token
 * @category static
 */
export function setAccessToken(token: string) {
    Mapbox.setAccessToken(token);
}
