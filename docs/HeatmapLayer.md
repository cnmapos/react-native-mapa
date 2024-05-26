```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.Camera pitch={60} />
    <Mapa.GeoJSONSource
        id="earthquakes"
        url="https://www.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson">
        <Mapa.HeatmapLayer
            id="earthquakes"
            sourceId="earthquakes"
            style={{
                heatmapRadius: radio,
                heatmapRadiusTransition: {duration: 1000, delay: 100},
                heatmapColor: [
                    'interpolate',
                    ['linear'],
                    ['heatmap-density'],
                    0,
                    'rgba(33,102,172,0)',
                    0.2,
                    'rgb(103,169,207)',
                    0.4,
                    'rgb(209,229,240)',
                    0.6,
                    'rgb(253,219,199)',
                    0.8,
                    'rgb(239,138,98)',
                    1,
                    'rgb(178,24,43)',
                ],
            }}
        />
    </Mapa.GeoJSONSource>
</Mapa.MapView>
```

# HeatmapLayer

## Props
### id

> **id**: `string`

layer唯一标识

### sourceLayerID?

> **`optional`** **sourceLayerID**: `string`

数据来源style图层映射

### existing?

> **`optional`** **existing**: `boolean`

如果图层id已经存在，则不创建新图层

### sourceId?

> **`optional`** **sourceId**: `string`

数据来源标识

### layerIndex?

> **`optional`** **layerIndex**: `number`

插入图层到指定index

### aboveLayerID?

> **`optional`** **aboveLayerID**: `string`

插入到aboveLayerID图层之上

### belowLayerID?

> **`optional`** **belowLayerID**: `string`

插入到aboveLayerID图层之下

### filter?

> **`optional`** **filter**: `Expression`

Mapbox filter表达式

### minZoomLevel?

> **`optional`** **minZoomLevel**: `number`

显示最小zoom层级

### maxZoom?

> **`maxZoomLevel`** **maxZoom**: `maxZoomLevel`

显示最大zoom层级

### slot?

> **`optional`** **slot**: `"bottom"` \| `"middle"` \| `"top"`

该层分配到的插槽。如果指定，并且存在具有该名称的插槽，它将被放置在层顺序中的该位置。

### style

> **style**: [`HeatmapLayerStyleProps`](HeatmapLayerStyleProps.md)

热力图层渲染样式自定义配置