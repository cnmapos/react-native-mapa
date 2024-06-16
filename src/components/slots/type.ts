import { ReactElement, ReactNode } from "react";

export enum SlotTypeEnum {
    rightBottom = 'rightBottom',
    rightTop = 'rightTop',
    leftBottom = 'leftBottom',
    leftTop = 'leftTop',
    bottomCenter = 'bottomCenter',
    topCenter = 'topCenter'
};

export type RegisterItemType = {
    key: string;
    visible: boolean;
    children: ReactElement[] | ReactNode[] | ReactNode;
}

export type SlotItemType = {
    style: any;
    visible: boolean;
    componentList: RegisterItemType[];
    child: ReactElement[] | ReactNode[];
}

export type ParamsType = {
    site: SlotTypeEnum;
    options: {
        start?: true;
        end?: true;
    }
} & RegisterItemType