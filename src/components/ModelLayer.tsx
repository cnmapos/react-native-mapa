import { LayerProps, ModelLayerStyleProps } from '..';
import Mapbox from '@rnmapbox/maps';
import { defaultMaxZoom, defaultMinZoom } from '../config';
/**
 * ModelLayer props
 *
 * @category Props
 */
export type ModelLayerProps = LayerProps & {
    style: ModelLayerStyleProps;
};

/**
  @category Component
 */
const ModelLayer = (props: ModelLayerProps) => {
    const { sourceId, minZoom = defaultMinZoom, maxZoom = defaultMaxZoom, ...restProps } = props;
    return <Mapbox.ModelLayer {...restProps} sourceID={sourceId} minZoomLevel={minZoom} maxZoomLevel={maxZoom} />;
};

export default ModelLayer;
