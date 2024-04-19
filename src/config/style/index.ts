import amapVectorStyle from './amap.vector.json';
import amapSatellite from './amap.satellite.json';
import { StyleIDs } from '../../types';

const styleMap = {
    [StyleIDs.AmapVector]: amapVectorStyle,
    [StyleIDs.AmapSatellite]: amapSatellite,
    [StyleIDs.MapboxVector]: 'mapbox://styles/mapbox/streets-v11',
    [StyleIDs.MapboxSatellite]: 'mapbox://styles/mapbox/satellite-v9',
};

export function loadStyle(styleId: StyleIDs) {
    const style = styleMap[styleId];
    if (!style) {
        throw new Error('Style not supported.');
    }

    return style as string;
}

/**
 * 样式解析
 */
export function styleFormat(style: StyleIDs): {
    styleURL: ReturnType<typeof loadStyle>;
    styleJSON: string;
} {
    const styleContent = loadStyle(style);
    let styleURL: ReturnType<typeof loadStyle> = '',
        styleJSON: string = '';

    if (typeof styleContent === 'object') {
        styleJSON = JSON.stringify(styleContent);
    } else {
        styleURL = styleContent;
    }

    return { styleURL, styleJSON };
}
