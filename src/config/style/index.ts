import amapVectorStyle from './amap.vector.json';
import amapSatellite from './amap.satellite.json';
import { MapStyle, StyleIDs } from '../../types';

const styleMap = {
    [StyleIDs.AmapVector]: amapVectorStyle,
    [StyleIDs.AmapSatellite]: amapSatellite,
    [StyleIDs.MapboxVector]: 'mapbox://styles/mapbox/streets-v11',
    [StyleIDs.MapboxSatellite]: 'mapbox://styles/mapbox/satellite-v9',
};

export function loadStyle(styleId: MapStyle | string | Object) {
    if (typeof styleId === 'string') {
        const style = styleMap[styleId as MapStyle];
        if (style) {
            return style;
        }
        // 自定义mapbox://xxx格式底图
        return styleId;
    }

    return styleId as Object;
}

/**
 * 样式解析
 */
export function styleFormat(style: MapStyle | string | Object): {
    styleURL?: string;
    styleJSON?: string;
} {
    const styleContent = loadStyle(style);
    let styleURL: string | undefined, styleJSON: string | undefined;

    if (typeof styleContent === 'object') {
        styleJSON = JSON.stringify(styleContent);
    } else {
        styleURL = styleContent;
    }

    return { styleURL, styleJSON };
}
