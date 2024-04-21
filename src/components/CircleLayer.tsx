import { CircleLayerStyleProps, LayerProps } from '..';
import Mapbox from '@rnmapbox/maps';
/**
 * CircleLayer props
 *
 * @category Props
 */
export type CircleLayerProps = LayerProps & {
    style: CircleLayerStyleProps;
};

/**
  @category Component
 */
const CircleLayer = (props: CircleLayerProps) => {
    const { sourceId, minZoom, maxZoom, ...others } = props;
    return <Mapbox.CircleLayer {...others} sourceID={sourceId} minZoomLevel={minZoom} maxZoomLevel={maxZoom} />;
};

export default CircleLayer;
