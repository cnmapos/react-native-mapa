import { FillExtrusionLayerStyleProps, LayerProps } from '..';
import Mapbox from '@rnmapbox/maps';
import { defaultMaxZoom, defaultMinZoom } from '../config';

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
    const { sourceId, minZoom = defaultMinZoom, maxZoom = defaultMaxZoom } = props;

    return <Mapbox.FillExtrusionLayer {...props} sourceID={sourceId} minZoomLevel={minZoom} maxZoomLevel={maxZoom} />;
};

export default FillExtrusionLayer;
