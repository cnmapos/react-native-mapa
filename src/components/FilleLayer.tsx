import { View, StyleSheet } from 'react-native';
import { MapContext } from '../MapContext';
import { FillLayerStyleProps, LayerProps } from '..';
import Mapbox from '@rnmapbox/maps';
/**
 * FilleLayer props
 *
 * @category Props
 */
export type FilleLayerProps = LayerProps & {
    style: FillLayerStyleProps
};

/**
  @category Component
 */
const FilleLayer = (props: FilleLayerProps) => {
    const { sourceId, minZoom, maxZoom } = props;

    return <Mapbox.FillLayer { ...props } sourceID={sourceId} minZoomLevel={minZoom} maxZoomLevel={maxZoom} ></Mapbox.FillLayer>;
};

export default FilleLayer;

const styles = StyleSheet.create({
    container: {},
});