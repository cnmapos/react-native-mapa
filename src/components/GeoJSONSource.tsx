import { OnPressEvent } from '..';
import React, { ReactElement, useImperativeHandle } from 'react';
import Mapbox from '@rnmapbox/maps';
/**
 * GeoJSONSource props
 *
 * @category Props
 */
export type GeoJSONSourceProps = {
    /**
     * 来源标识
     */
    id: string;
    /**
     * 来源是否存在
     *
     * @defaultValue false
     */
    existing?: boolean;

    /**
     * HTTP(S)地址、文件路径或者GeoJSON格式对象
     */
    url: string | GeoJSON.GeometryCollection | GeoJSON.Feature | GeoJSON.FeatureCollection | GeoJSON.Geometry;

    /**
     * 生成矢量瓦片的最大层级，地图会根据设置的最大层级自动生成瓦片提成渲染性能
     *
     * @defaultValue 18
     */
    tileMaxZoom?: number;

    /**
     * 设置瓦片每个边的buffer值，如0表示没有buffer，512表示buffer和瓦片大小一样
     * 当设置的值比较大渲染性能会降低
     *
     * @defaultValue 128
     */
    buffer?: number;

    /**
     * 设置press时buffer范围
     * @defaultValue [44, 44]
     */
    hitbox?: [number, number];

    onPress?: (e: OnPressEvent) => void;

    children: ReactElement | ReactElement[];
};

/**
  @category Component
 */
const GeoJSONSource = React.forwardRef((props: GeoJSONSourceProps, ref: any) => {
    const { id, existing, url, hitbox = [44, 44], tileMaxZoom = 18, buffer = 128, onPress, children } = props;
    // 后续扩展方法
    useImperativeHandle(ref, () => ({}));

    return (
        <Mapbox.ShapeSource
            id={id}
            existing={existing}
            url={typeof url === 'string' ? url : undefined}
            shape={typeof url !== 'string' ? url : undefined}
            hitbox={{ width: hitbox[0], height: hitbox[1] }}
            maxZoomLevel={tileMaxZoom}
            buffer={buffer}
            onPress={(e) => {
                onPress?.({
                    features: e.features,
                    coordinates: [e.coordinates.longitude, e.coordinates.latitude],
                    point: [e.point.x, e.point.y],
                });
            }}
        >
            {children}
        </Mapbox.ShapeSource>
    );
});

export default GeoJSONSource;
