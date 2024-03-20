import { Button, Icon } from '@rneui/themed';
import Mapbox from '@rnmapbox/maps';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { PositionStyle } from '..';
import { buttonSize } from '../config';
import { useContext } from 'react';
import { MapContext } from '../MapContext';
import React from 'react';

/**
 * Location props
 */
export type LocationProps = {
    /**
     * 定位图标是否在地图上显示
     * @defaultValue true
     */
    visible: boolean;
    /**
     * 默认显示在屏幕右下角，可设置style自定义位置
     * @example
     * ```
     * { right: 5, bottom: 5 }
     * 或者 'right-top'
     * ```
     */
    style?: PositionStyle; // | PositionSlot;
    /**
     * 初始化时自动定位
     *
     * @defaultValue false
     */
    locateWhenInit?: boolean;
};

/**
 *用户定位
 * @example
 * ```
 * <Mapa.Location locateWhenInit={true} visible={true} />
 * ```
 *
 * @category Component
 */
const Location = (props: LocationProps) => {
    const { visible = true, locateWhenInit = false } = props;
    const { map } = useContext(MapContext);
    const containerStyle: StyleProp<ViewStyle> = props.style
        ? { position: 'absolute', ...props.style }
        : styles.container;

    const locate = async () => {
        const location = await map?.locationManager.getLastKnownLocation();
        if (location) {
            const center = [location.coords.longitude, location.coords.latitude];
            const zoom = await map.getZoom();
            map.flyTo(center as any);
        }
    };

    if (visible) {
        // 启动位置监听
        map.locationManager.start();
        if (locateWhenInit) {
            map.on('loaded', async () => {
                await locate();
            });
        }
    }
    const onPress = async () => {
        await locate();
    };
    return (
        <View style={containerStyle}>
            <View>
                <Button type="outline" style={styles.button} size="md" onPress={onPress}>
                    <Icon name="locate" type="ionicon" size={buttonSize} />
                </Button>
            </View>
            <Mapbox.LocationPuck visible={visible} puckBearing={'heading'} puckBearingEnabled={true} />
        </View>
    );
};

export default Location;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 5,
        bottom: 5,
    },
    button: {
        backgroundColor: '#fff',
    },
});
