import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapContext } from '../modules/MapContext';
import React from 'react';
import { Position } from '../types';
/**
 * Scalebar props
 *
 * @category Props
 */
export type ScalebarProps = {
    visible?: boolean;
    options?: Options;
};

// 支持的类型
type Unit = 'imperial' | 'metric' | 'nautical';

type Options = {
    maxWidth?: number;
    unit?: Unit;
};

const defaultOptions: Options = {
    maxWidth: 100,
    unit: 'metric',
};

// 单位
const unitAbbr = {
    kilometer: 'km',
    meter: 'm',
    mile: 'mi',
    foot: 'ft',
    'nautical-mile': 'nm',
};

/**
  @category Component
 */
const Scalebar = (props: ScalebarProps) => {
    const { map, pixLayoutInfo } = useContext(MapContext);
    const [scaleInfo, setScaleInfo] = useState<{
        width: number;
        scale: string;
    }>({ width: 0, scale: '' });

    const [isShow, setIsShow] = useState<boolean>(true);
    // 获取地图的可见区域边界框

    const _update = (latitude, zoomLevel) => {
        console.log('&&&_update', latitude, zoomLevel);

        const { maxWidth, unit } = props.options ?? defaultOptions;

        const { width: _containerWidth, height: _containerHeight } = pixLayoutInfo;

        // TODO : 修改了计算方式
        const earthRadius = 6378137; // Earth's radius in meters
        const tileSize = 256; // Map tile size in pixels

        const metersPerPixel =
            (Math.cos((latitude * Math.PI) / 180) * 2 * Math.PI * earthRadius) / (tileSize * Math.pow(2, zoomLevel));

        const maxMeters = metersPerPixel * maxWidth;
        // The real distance corresponding to 100px scale length is rounded off to
        // near pretty number and the scale length for the same is found out.
        // Default unit of the scale is based on User's locale.
        if (unit === 'imperial') {
            const maxFeet = 3.2808 * maxMeters;
            if (maxFeet > 5280) {
                const maxMiles = maxFeet / 5280;
                _setScale(maxWidth, maxMiles, 'mile');
            } else {
                _setScale(maxWidth, maxFeet, 'foot');
            }
        } else if (unit === 'nautical') {
            const maxNauticals = maxMeters / 1852;
            _setScale(maxWidth, maxNauticals, 'nautical-mile');
        } else if (maxMeters >= 1000) {
            _setScale(maxWidth, maxMeters / 1000, 'kilometer');
        } else {
            _setScale(maxWidth, maxMeters, 'meter');
        }
    };

    const _setScale = (maxWidth: number, maxDistance: number, unit: string) => {
        const distance = getRoundNum(maxDistance);
        const ratio = distance / maxDistance;
        setScaleInfo({
            width: maxWidth * ratio,
            scale: `${distance}${unitAbbr[unit]}`,
        });
    };

    // 渲染
    const onShow = () => {
        // this._map = map;
        // this._language = map.getLanguage();
        // this._container = DOM.create('div', 'mapboxgl-ctrl mapboxgl-ctrl-scale', map.getContainer());
        // this._container.dir = 'auto';
        // // $FlowFixMe[method-unbinding]
        // this._map.on('move', this._update);
        // this._update();
        // return this._container;
    };

    // remove scaleBar
    const onRemove = () => {
        // this._container.remove();
        // // $FlowFixMe[method-unbinding]
        // this._map.off('move', this._update);
        // this._map = (undefined: any);
    };

    useEffect(() => {
        const needChange = (props.visible ?? isShow) === isShow;

        if (needChange) {
            setIsShow(!!props.visible);

            if (props.visible) {
                onShow();
            } else {
                onRemove();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.visible]);

    useEffect(() => {
        const { width: mapWidth, height: mapHeight } = pixLayoutInfo;

        const calculateScale = async (bounds: { ne: Position; sw: Position }, latitude, zoomLevel) => {
            console.log('---', mapHeight, mapWidth, bounds);

            try {
                // const bounds = await getVisibleBounds();
                if (bounds && mapWidth && mapHeight) {
                    _update(latitude[1], zoomLevel);
                }
            } catch (error) {}
        };

        // calculateScale();

        map.on('cameraChanged', (event) => {
            console.log('map-emit__________', event);

            const { center, zoom, bounds } = event;

            calculateScale(bounds, center, zoom);
        });

        return () => {
            //setScale(null); // 清除比例尺状态
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map, pixLayoutInfo]);

    return <ScaleIndicator scaleInfo={scaleInfo} pixLayoutInfo={pixLayoutInfo} />;
};

type ScaleIndicatorProps = {
    scaleInfo: {
        scale: string;
        width: number;
    };
    pixLayoutInfo: {
        width: number;
        height: number;
    };
};

const ScaleIndicator = ({ scaleInfo }: ScaleIndicatorProps) => {
    const { width, scale } = scaleInfo;
    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            bottom: 16,
            left: 16,
            width: width,
            borderRadius: 4,
            color: 'white',
        },
        scaleText: {
            fontSize: 16,
            textAlign: 'center',
            width: width,
        },

        scaleLine: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
        },
        scaleLeft: {
            width: 1,
            height: 6,
            borderStyle: 'solid',
            borderBlockStartColor: '#fff',
            borderLeftWidth: 1,
            borderRightWidth: 1,
        },
        scaleRight: {
            width: 1,
            height: 6,
            borderStyle: 'solid',
            borderBlockStartColor: '#fff',
            borderLeftWidth: 1,
            borderRightWidth: 1,
        },

        scaleMidle: {
            width: width - 4,
            height: 2,
            borderBlockColor: '#333',
            borderTopWidth: 1,
            borderBottomWidth: 1,
        },
    });

    return (
        <View style={styles.container}>
            {/* scale text */}
            <View>{<Text style={styles.scaleText}>{scale}</Text>}</View>

            {/* scaleline */}
            <View style={styles.scaleLine}>
                <View style={styles.scaleLeft} />
                <View style={styles.scaleMidle} />
                <View style={styles.scaleRight} />
            </View>
        </View>
    );
};

export default Scalebar;

function getDecimalRoundNum(d: number) {
    const multiplier = Math.pow(10, Math.ceil(-Math.log(d) / Math.LN10));
    return Math.round(d * multiplier) / multiplier;
}

function getRoundNum(num: number) {
    const pow10 = Math.pow(10, `${Math.floor(num)}`.length - 1);
    let d = num / pow10;

    d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : d >= 1 ? 1 : getDecimalRoundNum(d);

    return pow10 * d;
}
