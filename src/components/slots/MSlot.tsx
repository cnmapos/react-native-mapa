import { ContainerSlotContext } from '../../modules';
import { MSlotInterface, PositionSlot } from '../../types';
import React, { useImperativeHandle } from 'react';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

/**
 * ContainerSlot props
 *
 * @category Props
 */
export type ContainerSlotProps = {
    style: PositionSlot | StyleProp<ViewStyle>;
    children: ReactElement | ReactElement[];
};

function createReset(
    collection: ReactElement[],
    currentList: ReactElement[],
    setChildren?: (children: ReactElement[]) => void
) {
    return () => {
        currentList.forEach((c) => {
            const index = collection.findIndex((p) => p === c);
            collection.splice(index, 1);
        });
        setChildren?.([...collection]);
    };
}

/**
  @category Component
 */
const MSlot = React.forwardRef<MSlotInterface, ContainerSlotProps>((props: ContainerSlotProps, ref: any) => {
    let { style, children } = props;
    const { setLChildren, leftSlotChildren, setRChildren, rightSlotChildren, setBChildren, bottomSlotChildren } =
        useContext(ContainerSlotContext);
    children = Array.isArray(children) ? children : [children];
    const [cList, setClist] = useState<ReactElement[]>(children);

    useImperativeHandle<any, MSlotInterface>(ref, () => ({
        refresh: () => {
            console.log('refresh');
            setClist([...(children as any[])]);
        },
    }));

    useEffect(() => {
        let reset: () => void;

        if (style === 'left') {
            reset = createReset(leftSlotChildren, cList, setLChildren);
            leftSlotChildren.push(...cList);
            setLChildren?.([...leftSlotChildren]);
        } else if (style === 'right') {
            reset = createReset(rightSlotChildren, cList, setRChildren);
            rightSlotChildren.push(...cList);
            setRChildren?.([...rightSlotChildren]);
        } else if (style === 'bottom') {
            reset = createReset(bottomSlotChildren, cList, setBChildren);
            bottomSlotChildren.push(...cList);
            setBChildren?.([...bottomSlotChildren]);
        }

        return () => {
            reset?.();
        };
    }, [cList]);

    return typeof style === 'string' ? <></> : <View style={style}>{cList}</View>;
});

export default MSlot;
