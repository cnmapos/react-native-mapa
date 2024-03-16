import {createContext} from 'react';
// import Mapa from ".";

export const MapContext = createContext<{map: object | undefined}>({
  map: undefined,
});
