export function normalizeDistance(distance: number) {
    if (distance < 1000) {
        return {
            value: distance,
            unit: '米',
        };
    }

    return {
        value: Number((distance / 1000).toFixed(1)),
        unit: '公里',
    };
}
