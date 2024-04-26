import { FillLayerStyleProps, LayerProps } from '..';
import Mapbox from '@rnmapbox/maps';
/**
 * FillLayer props
 *
 * @category Props
 */
export type FillLayerProps = LayerProps & {
    style: FillLayerStyleProps;
};

/**
  @category Component
 */
const FillLayer = (props: FillLayerProps) => {
    const { sourceId, minZoom, maxZoom } = props;

    return <Mapbox.FillLayer {...props} sourceID={sourceId} minZoomLevel={minZoom} maxZoomLevel={maxZoom} />;
};

export default FillLayer;
