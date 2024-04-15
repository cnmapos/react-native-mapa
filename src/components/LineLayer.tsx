import { View, StyleSheet } from 'react-native';
import { MapContext } from '../MapContext';
import { LayerProps, LineLayerStyleProps } from '..';
import Mapbox from '@rnmapbox/maps';
/**
 * LineLayer props
 *
 * @category Props
 */
export type LineLayerProps = LayerProps & {
    style: LineLayerStyleProps;
};

/**
  @category Component
 */
const LineLayer = (props: LineLayerProps) => {
    const { sourceId, minZoom, maxZoom } = props;

    return <Mapbox.LineLayer {...props} sourceID={sourceId} minZoomLevel={minZoom} maxZoomLevel={maxZoom} />;
};

export default LineLayer;
