import React from 'react';
import { View } from 'react-native';
import SlotContainer from './SlotContainer';

const ParentComponent = () => {
    return (
        <SlotContainer>
            {({ registerSlot, slots }: any) => (
                <View style={{ flex: 1 }}>
                    {/* Render the component in the specified slot */}
                    {slots['topLeft']}

                    {/* 渲染切换成从 slot中解析配置信息 */}
                    {/* Other components can be inserted similarly */}
                    {/* <Comp registerSlot={registerSlot as any} slot="topLeft" /> */}
                </View>
            )}
        </SlotContainer>
    );
};

export default ParentComponent;
