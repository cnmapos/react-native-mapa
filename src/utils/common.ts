import { Position } from '..';

export function createPointFeature(
    point: Position,
    properties?: { [key: string | number]: any }
): GeoJSON.Feature<GeoJSON.Point> {
    return {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: point,
        },
        properties: {
            ...properties,
        },
    };
}

export function createLineFeature(
    points: Position[],
    properties?: { [key: string | number]: any }
): GeoJSON.Feature<GeoJSON.LineString> {
    return {
        type: 'Feature',
        geometry: {
            type: 'LineString',
            coordinates: points,
        },
        properties: {
            ...properties,
        },
    };
}

export function createPolygonFeature(
    points: Position[],
    properties?: { [key: string | number]: any }
): GeoJSON.Feature<GeoJSON.Polygon> {
    return {
        type: 'Feature',
        geometry: {
            type: 'Polygon',
            coordinates: [points],
        },
        properties: {
            ...properties,
        },
    };
}
