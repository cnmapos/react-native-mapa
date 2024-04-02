import { createContext, ReactNode } from 'react';
import { ParamsType, SlotItemType, SlotTypeEnum } from './type';
import { generateUUID } from './common';

export type ContextType = {
    [k in SlotTypeEnum]: SlotItemType
}

export const defaultSlotConfig: ContextType = {
    [SlotTypeEnum.leftBottom]: {
        style: {
            left: 4,
            bottom: 4,
        },
        componentList: [],
        child: [],
        visible: false,
    },
    [SlotTypeEnum.rightBottom]: {
        style: {
            right: 4,
            bottom: 4,
        },
        visible: false,
        componentList: [],
        child: []
    },
    [SlotTypeEnum.rightTop]: {
        style: {
            top: 4,
            right: 4,
        },
        visible: false,
        componentList: [],
        child: []
    },
    [SlotTypeEnum.leftTop]: {
        style: {
            left: 4,
            top: 4,
        },
        visible: false,
        componentList: [],
        child: []
    },
    [SlotTypeEnum.bottomCenter]: {
        style: {
            left: 0,
            top: 0,
        },
        visible: false,
        componentList: [],
        child: []
    },
    [SlotTypeEnum.topCenter]: {
        style: {
            left: 0,
            top: 0,
        },
        visible: false,
        componentList: [],
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
    type: SlotActionEnum, payload: Partial<ParamsType>
}) {

    const { type, payload } = action;
    switch (type) {
        case SlotActionEnum.registerSlot:

            /**
             * 1、检查当前插槽上是否存在
             * 2、
             */
            const { site, key, children, options } = payload;
            const slot = site && store[site];
            const componentList = slot?.componentList;

            if (componentList) {
                const isExist = !!componentList.find((item) => {
                    return item.key === key;
                });

                if (!isExist) {
                    // 默认排队在尾部
                    const injectSite = options?.start ? 'start' : 'end';
                    const injectInfo = {
                        key: key ? key : generateUUID(),
                        visible: true,
                        children: children
                    };

                    // 修改默认插槽渲染条件
                    if (!slot.visible && !slot.componentList.length) {
                        slot.visible = true;
                    }

                    // 组件插入插槽中
                    // 目前仅支持从头插入、从尾部插入，不支持顺序设定！
                    if (injectSite === 'start') {
                        componentList.unshift(injectInfo);
                    } else {
                        componentList.push(injectInfo);
                    }

                    // 更新render child
                    const renderList: ReactNode[] = [];
                    componentList.forEach((item) => {
                        renderList.push(item.children);
                    });

                    slot.child = renderList;
                }
            }

            break;
        case SlotActionEnum.changeComponentVisible:
            break;
        case SlotActionEnum.removeComponent:
            break;
    }

    return store;
}