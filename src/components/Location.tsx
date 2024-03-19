import { Button, Icon } from '@rneui/themed';
import Mapbox from '@rnmapbox/maps';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { PosBaseProps, PositionStyle } from '..';
import { buttonSize } from '../config';
import { locationManager } from '@rnmapbox/maps';
import { useContext } from 'react';
import { MapContext } from '../MapContext';

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
};

/**
 *用户定位
 *
 * @category Component
 */
const Location = (props: LocationProps) => {
    const { visible = true } = props;
    const { map } = useContext(MapContext);
    const containerStyle: StyleProp<ViewStyle> = props.style
        ? { position: 'absolute', ...props.style }
        : styles.container;

    if (visible) {
        locationManager.start();
    }
    const onPress = async () => {
        const location = await locationManager.getLastKnownLocation();
        console.log(location);
        if (location) {
            map.flyTo(location.coords as any);
        }
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
