import React, { forwardRef, useReducer } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import SlotContainer from './SlotContainer';
import { ContextType } from './slotContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SlotTypeEnum } from './type';
import { PositionStyle } from '../../types';

//
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const SlotC = forwardRef(function SlotC(props: any, ref) {
    const { children, type, width = 0.2, height = 0.35, backgroundColor = 'white', onLayout, style } = props;

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
            ...style,
        },
        scrollView: {
            flex: 1,
            flexDirection: 'column',
        },
    });

    const handleLayoutChange = (event: { nativeEvent: { layout: { height: any } } }) => {
        const { height } = event.nativeEvent.layout;
        // setBottomCenterHeight(height);
        if (onLayout) {
            onLayout(event);
        }
    };

    return (
        <SafeAreaView style={styles.container} onLayout={handleLayoutChange} ref={ref}>
            <View style={styles.scrollView}>{children}</View>
        </SafeAreaView>
    );
});

type SlotRenderInfoType = {
    [k in keyof typeof SlotTypeEnum]: {
        heightBox: number; // 插槽容器高度！！
        widthBox: number; // 插槽容器宽度！！
    } & PositionStyle;
};

function renderInfoReducer(store: SlotRenderInfoType, payload: { type: string }) {}

export function SlotParser(slots: ContextType) {
    function pickParams(slots: ContextType, type: SlotTypeEnum, renderInfo) {
        const info = slots[type];
        return {
            key: type,
            type,
            style: {
                ...info.style,
                // TODO use renderInfo 更新
            },
            visible: info.style,
        };
    }

    const [renderInfo, dispatchRenderInfo] = useReducer(renderInfoReducer, {});

    const handleBottomCenterLayout = (event: { nativeEvent: { layout: { height: any } } }) => {
        // 1、当 bottomCenter 布局出现变化时，计算leftBottom、rightBottom的位置变更！！！
    };

    // version first
    return (
        <SafeAreaView>
            <SlotC {...pickParams(slots, SlotTypeEnum.leftTop, renderInfo)}>{slots[SlotTypeEnum.leftTop].child}</SlotC>
            <SlotC {...pickParams(slots, SlotTypeEnum.rightTop, renderInfo)}>
                {slots[SlotTypeEnum.rightTop].child}
            </SlotC>
            <SlotC {...pickParams(slots, SlotTypeEnum.leftBottom, renderInfo)}>
                {slots[SlotTypeEnum.leftBottom].child}
            </SlotC>
            <SlotC {...pickParams(slots, SlotTypeEnum.rightBottom, renderInfo)}>
                {slots[SlotTypeEnum.rightBottom].child}
            </SlotC>
            <SlotC {...pickParams(slots, SlotTypeEnum.bottomCenter, renderInfo)}>
                {slots[SlotTypeEnum.bottomCenter].child}
            </SlotC>
        </SafeAreaView>
    );
}

const ParentComponent = () => {
    return (
        <SlotContainer>
            {({ registerSlot, slots }) => (
                // 渲染
                <SlotParser slots={slots} />
            )}
        </SlotContainer>
    );
};

export default ParentComponent;
