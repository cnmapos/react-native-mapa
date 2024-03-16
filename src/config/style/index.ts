import { StyleIDs } from '../../types';
import amapVectorStyle from './amap.vector.json';
import amapSatellite from './amap.satellite.json';

const styleMap = {
    [StyleIDs.AmapVector]: amapVectorStyle,
    [StyleIDs.AmapSatellite]: amapSatellite,
    [StyleIDs.MapboxVector]: 'Mapbox.StyleURL.Street',
    [StyleIDs.MapboxSatellite]: 'Mapbox.StyleURL.Satellite',
};

export function loadStyle(styleId: StyleIDs) {
    const style = styleMap[styleId];
    if (!style) {
        throw new Error('Style not supported.');
    }

    return style;
}
