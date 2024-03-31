import { createContext, ReactNode } from 'react';
import { SlotItemType, SlotTypeEnum } from './type';

type ContextType = {
    [k in SlotTypeEnum]: SlotItemType
}

export const defaultSlotConfig: ContextType = {
    [SlotTypeEnum.leftBottom]: {
        style: {
            left: 4,
            bottom: 4,
        },
        child: [],
        visible: false,
    },
    [SlotTypeEnum.rightBottom]: {
        style: {
            right: 4,
            bottom: 4,
        },
        visible: false,
        child: []
    },
    [SlotTypeEnum.rightTop]: {
        style: {
            top: 4,
            right: 4,
        },
        visible: false,
        child: []
    },
    [SlotTypeEnum.leftTop]: {
        style: {
            left: 4,
            top: 4,
        },
        visible: false,
        child: []
    },
    [SlotTypeEnum.bottomCenter]: {
        style: {
            left: 0,
            top: 0,
        },
        visible: false,
        child: []
    },
    [SlotTypeEnum.topCenter]: {
        style: {
            left: 0,
            top: 0,
        },
        visible: false,
        child: []
    }
};

export type SlotContextType = {
    // 
    registerSlot: (site: SlotTypeEnum, key: string, child: ReactNode, options: {
        start?: true,
        end?: true
    }) => void,

    // 指定唯一 id 则可以移除组件
    removeComponent: (site: SlotTypeEnum, key: string) => boolean

    changeComponentVisible: (site: SlotTypeEnum, key: string, visible?: boolean) => void;
}

const SlotContext = createContext<SlotContextType>({
    registerSlot: function (site: SlotTypeEnum, key: string, child: ReactNode, options: { start?: true | undefined; end?: true | undefined; }): void {
        throw new Error('Function not implemented.');
    },
    removeComponent: function (site: SlotTypeEnum, key: string): boolean {
        throw new Error('Function not implemented.');
    },
    changeComponentVisible: function (site: SlotTypeEnum, key: string, visible?: boolean | undefined): void {
        throw new Error('Function not implemented.');
    }
});

export default SlotContext;

export enum SlotActionEnum {
    registerSlot = 'registerSlot',
    removeComponent = 'removeComponent',
    changeComponentVisible = 'changeComponentVisible'
};

// TODO
export function slotReducer(store: ContextType, action: {
    type: SlotActionEnum, payload: { [k: string]: any }
}) {

    const { type, payload } = action;
    switch (type) {
        case SlotActionEnum.registerSlot:
            break;
        case SlotActionEnum.changeComponentVisible:
            break;
        case SlotActionEnum.removeComponent:
            break;
    }

    return store;
}