import React, { CSSProperties, forwardRef, ReactNode, useReducer } from 'react';
import { Dimensions, LayoutChangeEvent, StyleSheet, View, ViewStyle } from 'react-native';
import SlotContainer from './SlotContainer';
import { ContextType } from './slotContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SlotItemType, SlotTypeEnum } from './type';
import { PositionStyle } from '../../types';

//
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

type SlotCPropsType = {
    visible?: boolean;
    onLayout?: (e: LayoutChangeEvent) => void;
    width: number; // app screen present value at 0-1
    height: number; // same with width
    style: ViewStyle;
    children: ReactNode;
};

const SlotC = forwardRef(function SlotC(props: SlotCPropsType, ref) {
    const { children, onLayout, style, width, height } = props;

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
            ...style,
        },
        scrollView: {
            flex: 1,
            flexDirection: 'column',
        },
    });

    const handleLayoutChange = (event: LayoutChangeEvent) => {
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

type SlotLayoutType = {
    [k in keyof typeof SlotTypeEnum]: {
        height: number; // 插槽容器高度！！
        width: number; // 插槽容器宽度！！
        visible: boolean;
    } & PositionStyle;
};

enum SlotLayoutReducerActionEnum {
    update = 'update',
}

function getDefaultLayout(slots: ContextType) {
    const result: SlotLayoutType = {
        [SlotTypeEnum.bottomCenter]: {
            width: 0,
            height: 0,
            ...(slots[SlotTypeEnum.bottomCenter]?.style || {}),
        },
        [SlotTypeEnum.leftBottom]: {
            width: 0,
            height: 0,
            ...(slots[SlotTypeEnum.leftBottom]?.style || {}),
        },
        [SlotTypeEnum.leftTop]: {
            width: 0,
            height: 0,
            ...(slots[SlotTypeEnum.leftTop]?.style || {}),
        },
        [SlotTypeEnum.rightBottom]: {
            width: 0,
            height: 0,
            ...(slots[SlotTypeEnum.rightBottom]?.style || {}),
        },
        [SlotTypeEnum.rightTop]: {
            width: 0,
            height: 0,
            ...(slots[SlotTypeEnum.rightTop]?.style || {}),
        },
        [SlotTypeEnum.topCenter]: {
            width: 0,
            height: 0,
            ...(slots[SlotTypeEnum.topCenter]?.style || {}),
        },
    };

    return result;
}

type payloadType = {
    width: number;
    height: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
    visible: boolean;
};

function renderInfoReducer(
    store: SlotLayoutType,
    action: { type: SlotLayoutReducerActionEnum; payload: { slotType: SlotTypeEnum } & Partial<payloadType> }
): SlotLayoutType {
    const { type, payload } = action;

    const { slotType, ...newLayout } = payload;

    const oldLayout = store[slotType];

    switch (type) {
        case SlotLayoutReducerActionEnum.update:
            break;
        //
    }

    store[slotType] = { ...oldLayout, ...newLayout };

    return store;
}

function slotLayoutTransform() {
    const layout = {
        width: 0,
        height: 0,
    };

    return layout;
}

export function SlotParser(props: { slots: ContextType }) {
    function pickParams(slots: ContextType, type: SlotTypeEnum, renderInfo: SlotLayoutType) {
        const info = slots[type];
        const ren = renderInfo[type];
        const style = StyleSheet.create({
            root: { ...info.style },
        });

        return {
            key: type,
            type,
            style: style.root,
            visible: info.visible,
        };
    }

    const { slots } = props;

    const [renderInfo, dispatchRenderInfo] = useReducer(renderInfoReducer, getDefaultLayout(slots));

    const handleBottomCenterLayout = (event: LayoutChangeEvent) => {
        // 1、当 bottomCenter 布局出现变化时，计算leftBottom、rightBottom的位置变更！！！
        updateSlotLayout(SlotTypeEnum.bottomCenter)(event);

        // 1、触发更新 rightBottom, leftBottom 位置
        const leftBottomSlotLayout = renderInfo[SlotTypeEnum.leftBottom];
        const rightBottomSlotLayout = renderInfo[SlotTypeEnum.rightBottom];

        const { width, height } = event.nativeEvent.layout;
        //

        const expectLTSTop = height + leftBottomSlotLayout.height;

        if (expectLTSTop < windowHeight) {
            if (expectLTSTop > (leftBottomSlotLayout.top || 0)) {
                dispatchRenderInfo({
                    type: SlotLayoutReducerActionEnum.update,
                    payload: {
                        slotType: SlotTypeEnum.leftBottom,
                        top: windowHeight - expectLTSTop,
                    },
                });
            }
        } else {
            dispatchRenderInfo({
                type: SlotLayoutReducerActionEnum.update,
                payload: {
                    slotType: SlotTypeEnum.leftBottom,
                    visible: false,
                },
            });
        }

        // 更新 rightBottom
        const expectRTSTop = height + rightBottomSlotLayout.height;

        if (expectRTSTop < windowHeight) {
            if (expectRTSTop > (rightBottomSlotLayout.top || 0)) {
                dispatchRenderInfo({
                    type: SlotLayoutReducerActionEnum.update,
                    payload: {
                        slotType: SlotTypeEnum.rightBottom,
                        top: windowHeight - expectRTSTop,
                    },
                });
            }
        } else {
            dispatchRenderInfo({
                type: SlotLayoutReducerActionEnum.update,
                payload: {
                    slotType: SlotTypeEnum.rightBottom,
                    visible: false,
                },
            });
        }
    };

    // 当Slot内容更新时， onLayout 触发
    const updateSlotLayout = (type: SlotTypeEnum) => (e: LayoutChangeEvent) => {
        const { width, height } = e.nativeEvent.layout;

        dispatchRenderInfo({
            type: SlotLayoutReducerActionEnum.update,
            payload: {
                slotType: type,
                width,
                height,
            },
        });
    };

    // version first
    return (
        <>
            <SlotC
                width={0}
                height={0}
                {...pickParams(slots, SlotTypeEnum.leftTop, renderInfo)}
                onLayout={updateSlotLayout(SlotTypeEnum.leftTop)}
            >
                {slots[SlotTypeEnum.leftTop].child}
            </SlotC>
            <SlotC
                width={0}
                height={0}
                {...pickParams(slots, SlotTypeEnum.rightTop, renderInfo)}
                onLayout={updateSlotLayout(SlotTypeEnum.rightTop)}
            >
                {slots[SlotTypeEnum.rightTop].child}
            </SlotC>

            {/* 第一期先实现对底部插槽容器的动态更新！！ */}
            <SlotC
                width={0}
                height={0}
                {...pickParams(slots, SlotTypeEnum.leftBottom, renderInfo)}
                onLayout={updateSlotLayout(SlotTypeEnum.leftBottom)}
            >
                {slots[SlotTypeEnum.leftBottom].child}
            </SlotC>
            <SlotC
                width={0}
                height={0}
                {...pickParams(slots, SlotTypeEnum.rightBottom, renderInfo)}
                onLayout={updateSlotLayout(SlotTypeEnum.rightBottom)}
            >
                {slots[SlotTypeEnum.rightBottom].child}
            </SlotC>

            {/* bottomCenter slot */}
            <SlotC
                width={0}
                height={0}
                {...pickParams(slots, SlotTypeEnum.bottomCenter, renderInfo)}
                onLayout={handleBottomCenterLayout}
            >
                {slots[SlotTypeEnum.bottomCenter].child}
            </SlotC>
        </>
    );
}

const ParentComponent = ({ children }) => {
    return <SlotContainer>{children}</SlotContainer>;
};

export default ParentComponent;
