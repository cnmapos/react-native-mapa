import { View, StyleSheet } from 'react-native';
import { OnPressEvent } from '..';
import Mapbox from '@rnmapbox/maps';
import { useImperativeHandle, useRef } from 'react';
import React from 'react';
/**
 * VectorSource props
 *
 * @category Props
 */
export type VectorSourceProps = {
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
     * @example ["https://mapa.example.com/vector/tiles/{z}/{x}/{y}.pbf"]
     */
    urlTemplates?: Array<string>;

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
     * 是否反转y方向瓦片，默认是从左上角为起始位置
     *
     * @default false
     */
    tms?: boolean;

    /**
     * 当前source对应的layer在其他source下的layer之上(更打的z-index)，则会出发onPress事件
     *
     * @param e 事件信息
     * @returns
     */
    onPress?: (e: OnPressEvent) => void;

    /**
     * 设置press时buffer范围
     * @defaultValue [44, 44]
     */
    hitbox?: [number, number];

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
const VectorSource = React.forwardRef((props: VectorSourceProps, ref: any) => {
    const { minZoom, maxZoom, children, hitbox = [44, 44], onPress, ...others } = props;

    const rnSource = useRef<any>();

    useImperativeHandle(ref, () => ({
        queryFeatures: async (layers: string[]) => {
            const features = await rnSource.current?.features(layers);

            return features;
        },
    }));

    return (
        <Mapbox.VectorSource
            ref={rnSource as any}
            {...others}
            minZoomLevel={minZoom}
            maxZoomLevel={maxZoom}
            hitbox={{ width: hitbox[0], height: hitbox[1] }}
            onPress={(e) => {
                onPress?.({
                    features: e.features,
                    coordinates: [e.coordinates.longitude, e.coordinates.latitude],
                    point: [e.point.x, e.point.y],
                });
            }}
        >
            {children}
        </Mapbox.VectorSource>
    );
});

export default VectorSource;

const styles = StyleSheet.create({
    container: {},
});
