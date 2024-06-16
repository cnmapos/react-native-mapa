import { LayerProps } from '..';
import Mapbox from '@rnmapbox/maps';
import { SymbolLayerStyleProps } from '../types/styles';

/**
 * SymbolLayer props
 *
 * @category Props
 */
export type SymbolLayerProps = LayerProps & {
    style: SymbolLayerStyleProps;
};

/**
  @category Component
 */
const SymbolLayer = (props: SymbolLayerProps) => {
    const { id, existing, sourceId, layerIndex, filter, minZoom, maxZoom, slot, style } = props;
    return (
        <Mapbox.SymbolLayer
            id={id}
            existing={existing}
            sourceID={sourceId}
            layerIndex={layerIndex}
            filter={filter}
            minZoomLevel={minZoom}
            maxZoomLevel={maxZoom}
            slot={slot}
            style={style}
        />
    );
};

export default SymbolLayer;
