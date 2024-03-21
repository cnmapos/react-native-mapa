import { createContext } from 'react';
import { MapViewInterface } from './types';

export const MapContext = createContext<{ map: MapViewInterface | null }>({ map: null as any });
