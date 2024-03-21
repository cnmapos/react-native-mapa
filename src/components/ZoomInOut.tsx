import { useContext } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { MapContext } from '../MapContext';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';
import { Icon, Button } from '@rneui/themed';
import { buttonSize, zoomStep } from '../config';
import { PosBaseProps, PositionStyle } from '..';

/**
 * ZoomInOut props
 *
 * @category Props
 */
export type ZoomInOutProps = PosBaseProps & {
    /**
     * 放大或缩小步长(step)
     * @defaultValue 1
     */
    step?: number;
    /**
     * 缩放、缩小执行周期
     * @defaultValue 100
     */
    duration?: number;
    /**
     * 默认显示在屏幕右上角，可设置style自定义位置
     * @example
     * ```
     * { right: 5, bottom: 5 }
     * 或者 'right-top'
     * ```
     */
    style?: PositionStyle;
};

/**
 * 地图放大、缩小组件
 *
 * @category Component
 */
const ZoomInOut = (props: ZoomInOutProps) => {
    const { map } = useContext(MapContext);

    const onZoomIn = () => map.zoomTo(zoomStep);
    const onZoomOut = () => map.zoomTo(-zoomStep);

    const containerStyle: StyleProp<ViewStyle> = props.style
        ? { position: 'absolute', ...props.style }
        : styles.container;

    // 显示位置可通过插槽扩展灵活适配
    /**
     * <MapSlot postion="right-top" style={customStyle}>
     * {{ children }}
     * </MapSlot>
     */

    return (
        <View style={containerStyle}>
            <Button type="outline" style={styles.button} size="md" onPress={onZoomIn}>
                <Icon name="plus" type={'antdesign'} size={buttonSize} color="#000" />
            </Button>
            <Button type="outline" style={styles.button} size="md" onPress={onZoomOut}>
                <Icon name="minus" type={'antdesign'} size={buttonSize} color="#000" />
            </Button>
        </View>
    );
};

export default ZoomInOut;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 5,
        top: 5,
    },
    button: {
        backgroundColor: '#fff',
        marginBottom: 3,
    },
});
