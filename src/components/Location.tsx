import { Button, Icon } from '@rneui/themed';
import Mapbox from '@rnmapbox/maps';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { LocationEvent, PositionSlot } from '..';
import { buttonSize } from '../config';
import { useContext } from 'react';
import { MapContext } from '../modules/MapContext';
import React from 'react';
import MSlot from './slots/MSlot';

/**
 * Location props
 * @category Props
 */
export type LocationProps = {
    /**
     * 定位图标是否在地图上显示
     * @defaultValue true
     */
    visible?: boolean;
    /**
     * 设置定位图标显示位置
     *
     * @defaultValue 'right'
     *
     * @example
     * ```
     * { right: 5, bottom: 5 }
     * 或者 'right'
     * ```
     */
    style?: PositionSlot | StyleProp<ViewStyle>;
    /**
     * 初始化时自动定位
     *
     * @defaultValue false
     */
    locateWhenInit?: boolean;

    /**
     * 监听最新定位信息
     * @param e 事件信息
     * @returns
     */
    onChange?: (e: LocationEvent) => void;
};

/**
 *用户定位
 * @example
 * ```
 * <Mapa.Location locateWhenInit={true} visible={true} style="right-bottom" />
 * ```
 *
 * @category Component
 */
const Location = (props: LocationProps) => {
    const { visible = true, locateWhenInit = false, onChange, style = 'right' } = props;
    const { map } = useContext(MapContext);
    // const containerStyle: StyleProp<ViewStyle> = props.style
    //     ? { ...(props.style as any), position: 'absolute' }
    //     : styles.container;

    const locate = async () => {
        const location = await map?.locationManager.getLastKnownLocation();
        if (location) {
            const center = [location.coords.longitude, location.coords.latitude];
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
        if (onChange) {
            map.locationManager.on('locationChange', onChange);
        }
    }
    const onPress = async () => {
        await locate();
    };
    return (
        <MSlot style={style}>
            <View>
                <Button type="outline" style={styles.button} size="md" onPress={onPress}>
                    <Icon name="locate" type="ionicon" size={buttonSize} />
                </Button>
            </View>
            <Mapbox.LocationPuck visible={visible} puckBearing={'heading'} puckBearingEnabled={true} />
        </MSlot>
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
