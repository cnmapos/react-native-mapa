import { createContext } from 'react';
import { MapViewInterface } from '../types';

export const MapContext = createContext<{ map: MapViewInterface; pixLayoutInfo: { width: number; height: number } }>({
    map: null as any,
    pixLayoutInfo: { width: 0, height: 0 },
});
