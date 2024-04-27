import { View, StyleSheet } from 'react-native';
import { OnPressEvent } from '..';
import Mapbox from '@rnmapbox/maps';
import { useImperativeHandle, useRef } from 'react';
import React from 'react';
/**
 * RasterSource props
 *
 * @category Props
 */
export type RasterSourceProps = {
    /**
     * 来源标识
     */
    id: string;
    /**
     * id映射到已经存在的source。如果为true，则不会新创建来源
     */
    existing?: boolean;

    /**
     * TileJSON来源信息配置地址
     */
    url?: string;

    /**
     * url模板列表，支持提供多个tileJSON地址模板。
     * @example ["https://example.com/raster-tiles/{z}/{x}/{y}.png"]
     */
    tileUrlTemplates: Array<string>;

    /**
     * 最小显示层级, 范围[0, 22]
     *
     * @defaultValue 0
     */
    minZoom?: number;

    /**
     * 最大显示层级，范围[0, 22]
     * @defaultValue 22
     */
    maxZoom?: number;

    /**
     * 地图瓦片的大小 Mapbox 默认为256，其他默认为512，可自行根据使用的瓦片服务设置该值
     * @defaultValue 256
     */
    tileSize?: number;

    /**
     * 是否反转y方向瓦片，默认是从左上角为起始位置
     *
     * @default false
     */
    tms?: boolean;

    /**
     * @ignore
     */
    children: React.ReactElement | React.ReactElement[];
};

/**
 * 支持tileJSON矢量瓦片渲染的数据来源
 *
  @category Component
 */
const RasterSource = React.forwardRef((props: RasterSourceProps, ref: any) => {
    const { minZoom, maxZoom, children, ...others } = props;

    const rnSource = useRef<any>();

    return (
        <Mapbox.RasterSource ref={rnSource as any} {...others} minZoomLevel={minZoom} maxZoomLevel={maxZoom}>
            {children}
        </Mapbox.RasterSource>
    );
});

export default RasterSource;

const styles = StyleSheet.create({
    container: {},
});
