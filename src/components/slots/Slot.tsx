import { ColorValue, Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { PositionStyle } from '../../types';
import { ReactNode } from 'react';

export enum SlotFixedLocation {
    rightTop = 'rightTop',
    leftTop = 'leftTop',
    rightBottom = 'rightBottom',
    leftBottom = 'leftBottom',
}

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export const SlotFixedStylesConfig: {
    [k in keyof typeof SlotFixedLocation]: PositionStyle;
} = {
    rightBottom: {
        right: 4,
        bottom: 4,
    },
    rightTop: {
        top: 4,
        right: 4,
    },

    leftBottom: {
        left: 4,
        bottom: 4,
    },

    leftTop: {
        left: 4,
        top: 4,
    },
};

export function pickSlotPosition(slot: keyof typeof SlotFixedLocation): PositionStyle {
    return SlotFixedStylesConfig[slot] || SlotFixedStylesConfig.rightTop;
}

type SlotPropsType = {
    slot: keyof typeof SlotFixedLocation;
    children: ReactNode;
    // 屏幕宽度的百分比
    width?: number;
    // 屏幕高度的百分比
    height?: number;
    backgroundColor?: ColorValue;
};

/**
 * 插槽的定义：样式和位置已经固定，只能从已经定义好的样式中选择进行
 * 1、插槽固定以后，只能修改插槽定义的位置信息：
 * 例如：rightTop 修改的属性是 right/top/maxHeight/height/width/maxWidth
 * 2、为确保Slot中的组件按照顺序排列，Slot 需要给children遍历套一层View固定（可选，先不实现）
 *  @component
 *
 * @param props
 * @returns
 */
export function Slot(props: SlotPropsType) {
    const { children, slot, width = 0.2, height = 0.35, backgroundColor = 'white' } = props;

    // TODO： 重构样式计算方式，支持更多的样式配置写入
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            position: 'absolute',
            maxHeight: windowHeight * 0.5,
            height: windowHeight * height,
            width: windowWidth * width,
            maxWidth: windowWidth * 0.4,
            flexDirection: 'column',
            backgroundColor,
            ...pickSlotPosition(slot),
        },
        scrollView: {
            flex: 1,
            flexDirection: 'column',
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollView}>{children}</View>
        </SafeAreaView>
    );
}

export default Slot;
