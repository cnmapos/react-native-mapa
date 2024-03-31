import { ReactElement, ReactNode } from "react";

export enum SlotTypeEnum {
    rightBottom = 'rightBottom',
    rightTop = 'rightTop',
    leftBottom = 'leftBottom',
    leftTop = 'leftTop',
    bottomCenter = 'bottomCenter',
    topCenter = 'topCenter'
};

export type SlotItemType = {
    style: any;
    visible: boolean;
    child: ReactElement[] | ReactNode[]
}