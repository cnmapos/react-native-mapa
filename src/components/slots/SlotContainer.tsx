import React, { ReactNode, useReducer, useState } from 'react';
import { View } from 'react-native';
import SlotContext, { defaultSlotConfig, SlotActionEnum, SlotContextType, slotReducer } from './slotContext';
import { SlotTypeEnum } from './type';

function SlotContainer({ children }) {
    const [slots, dispatch] = useReducer(slotReducer, defaultSlotConfig);

    const registerSlot: SlotContextType['registerSlot'] = (
        site: SlotTypeEnum,
        key: string,
        child: ReactNode,
        options: {
            start?: true;
            end?: true;
        }
    ) => {
        dispatch({
            type: SlotActionEnum.registerSlot,
            payload: {
                site,
                key,
                child,
                options,
            },
        });
    };

    const changeComponentVisible = (site: string, key: string, visible?: boolean) => {
        dispatch({
            type: SlotActionEnum.changeComponentVisible,
            payload: {
                site,
                key,
                visible,
            },
        });
    };

    const removeComponent: SlotContextType['removeComponent'] = (site: SlotTypeEnum, key: string) => {
        dispatch({
            type: SlotActionEnum.removeComponent,
            payload: {
                site,
                key,
            },
        });
        return true;
    };

    return (
        <SlotContext.Provider
            value={{
                changeComponentVisible,
                registerSlot,
                removeComponent,
            }}
        >
            <View style={{ flex: 1 }}>
                {children({
                    registerSlot,
                    slots,
                })}
            </View>
        </SlotContext.Provider>
    );
}

export default SlotContainer;
