import React, { ReactElement, ReactNode, useReducer } from 'react';
import SlotContext, { defaultSlotConfig, SlotActionEnum, SlotContextType, slotReducer } from './slotContext';
import { SlotTypeEnum } from './type';
import { SlotParser } from './ParentComponent';

function SlotContainer({ children }: { children: ReactElement | ReactElement[] }) {
    const [slots, dispatch] = useReducer(slotReducer, defaultSlotConfig);

    const registerSlot: SlotContextType['registerSlot'] = (
        site: SlotTypeEnum,
        key: string,
        children: ReactNode,
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
                children,
                options,
            },
        });
    };

    const changeComponentVisible = (site: SlotTypeEnum, key: string, visible?: boolean) => {
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
            <SlotParser slots={slots} />
            {children}
        </SlotContext.Provider>
    );
}

export default SlotContainer;
