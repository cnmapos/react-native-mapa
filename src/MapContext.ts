import { createContext } from "react";
import Mapa from ".";

export const MapContext = createContext<{ map: Mapa.MapView | undefined }>({ map: undefined });