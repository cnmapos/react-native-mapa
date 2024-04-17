import { View, StyleSheet } from 'react-native';
import { MapContext } from '../MapContext';
import { LayerSlot } from '../../types';
import Mapbox, { RasterLayerStyle } from '@rnmapbox/maps';
import { PartialPick } from '../../types/base';

/**
 * ImageLayer Style Props
 */
export type ImageLayerStyleProps = PartialPick<RasterLayerStyle, 'visibility' | 'rasterOpacity'>;

/**
 * IMageLayer props
 *
 * @category Props
 */
export type ImageLayerProps = {
    /**
     * 图层唯一标识
     */
    id: string;

    /**
     * 数据来源标识
     */
    sourceId: string;

    /**
     * 图层已经存在
     * @defaultValue false
     */
    existing?: boolean;

    /**
     * 图层默认插槽位置
     * @defaultValue middle
     */
    slot?: LayerSlot;

    filter?: Pick<RasterLayerStyle, 'filter'>;

    /**
     * 最小显示层级
     * @defaultValue 1
     */
    minZoom?: number;

    /**
     * 最大显示层级
     * @defaultValue 30
     */
    maxZoom?: number;

    style: ImageLayerStyleProps;
};

/**
  @category Component
 */
const ImageLayer = (props: ImageLayerProps) => {
    const {
        id,
        sourceId,
        existing,
        slot = 'middle',
        filter,
        minZoom: minZoomLevel = 1,
        maxZoom: maxZoomLevel = 30,
        style,
    } = props;
    return (
        <Mapbox.RasterLayer
            id={id}
            sourceID={sourceId}
            existing={existing}
            slot={slot}
            filter={filter}
            minZoomLevel={minZoomLevel}
            maxZoomLevel={maxZoomLevel}
            style={style}
        />
    );
};

export default ImageLayer;
