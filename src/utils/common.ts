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

export function bbox(points: Position[]): [Position, Position] {
    let minX = 180,
        minY = 90,
        maxX = -180,
        maxY = -90;

    points.forEach((point) => {
        minX = Math.min(minX, point[0]);
        minY = Math.min(minY, point[1]);
        maxX = Math.max(maxX, point[0]);
        maxY = Math.max(maxY, point[1]);
    });

    return [
        [minX, minY],
        [maxX, maxY],
    ];
}
