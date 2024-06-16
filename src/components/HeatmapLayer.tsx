import { HeatmapLayerStyleProps, LayerProps } from '..';
import Mapbox from '@rnmapbox/maps';
/**
 * HeatmapLayer props
 *
 * @category Props
 */
export type HeatmapLayerProps = LayerProps & {
    style: HeatmapLayerStyleProps;
};

/**
  @category Component
 */
const HeatmapLayer = (props: HeatmapLayerProps) => {
    const { sourceId } = props;

    return <Mapbox.HeatmapLayer {...props} sourceID={sourceId} />;
};

export default HeatmapLayer;
