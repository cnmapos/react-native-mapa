import { ReactNode, useContext, useEffect } from 'react';
import SlotContext from './slotContext';
import { generateUUID } from './common';

//

type SlotCompPropsType = {
    slot: any;
    children: ReactNode;
    insertSite: 'start' | 'end';
    visible?: boolean;
    key?: string;
};

const SlotComp = ({ slot, key, visible, children, insertSite }: SlotCompPropsType) => {
    const ctx = useContext(SlotContext);

    const uuid = key ? key : generateUUID();

    // 不在插槽作用域下
    if (!ctx) {
        throw new Error('use Slot Component must in MapView scope！');
    }

    // 不存在 children
    if (!children) {
        throw new Error('Slot need children node(type is ReactNode)');
    }

    // 处理唤起
    useEffect(() => {
        ctx.changeComponentVisible(slot, uuid, visible);
    }, [visible]);

    useEffect(() => {
        ctx.registerSlot(slot, uuid, children, {
            start: insertSite === 'start' ? true : undefined,
        });
    }, [slot]);

    // Since the component is not rendering anything directly
    return null;
};

export default SlotComp;
