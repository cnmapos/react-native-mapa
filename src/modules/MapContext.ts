import { createContext } from 'react';
import { MapViewInterface } from '../types';

export const MapContext = createContext<{ map: MapViewInterface; pixLayoutInfo: { width: number; height: number } }>({
    map: null as any,
    pixLayoutInfo: { width: 0, height: 0 },
});

export const ContainerSlotContext = createContext<{
    leftSlotChildren: React.ReactElement[];
    rightSlotChildren: React.ReactElement[];
    bottomSlotChildren: React.ReactElement[];
    setLChildren?: (children: React.ReactElement[]) => void;
    setRChildren?: (children: React.ReactElement[]) => void;
    setBChildren?: (children: React.ReactElement[]) => void;
}>({
    leftSlotChildren: [],
    rightSlotChildren: [],
    bottomSlotChildren: [],
});
