import { createContext } from "react";
import Mapa from ".";

export const MapContext = createContext<{ map: any }>({ map: null });