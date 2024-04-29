import { StyleSheet } from 'react-native';
import { RasterLayerStyleProps, LayerProps } from '..';
import Mapbox from '@rnmapbox/maps';
/**
 * RasterLayer props
 *
 * @category Props
 */
export type RasterLayerProps = LayerProps & {
    style: RasterLayerStyleProps;
};

/**
  @category Component
 */
const RasterLayer = (props: RasterLayerProps) => {
    const { sourceId, minZoom, maxZoom } = props;

    return <Mapbox.RasterLayer {...props} sourceID={sourceId} minZoomLevel={minZoom} maxZoomLevel={maxZoom} />;
};

export default RasterLayer;
