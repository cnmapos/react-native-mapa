import { View, StyleSheet } from 'react-native';
import { FillExtrusionLayerStyleProps, LayerProps } from '..';
import Mapbox from '@rnmapbox/maps';

/**
 * 3D多边形图层，例如渲染建筑物
 *
 * @category Props
 */
export type FillExtrusionLayerProps = LayerProps & {
    style: FillExtrusionLayerStyleProps;
};

/**
  @category Component
 */
const FillExtrusionLayer = (props: FillExtrusionLayerProps) => {
    const { sourceId, minZoom = 1, maxZoom = 30 } = props;

    return <Mapbox.FillExtrusionLayer {...props} sourceID={sourceId} minZoomLevel={minZoom} maxZoomLevel={maxZoom} />;
};

export default FillExtrusionLayer;
