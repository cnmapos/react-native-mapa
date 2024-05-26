```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

const style: RasterLayerStyleProps = {
    rasterOpacity: 0.6,
};
const gdwx = {
    tms: false,
    tiles: [
        'https://webst03.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    ],
};
<Mapa.MapView>
    <Mapa.Camera pitch={60} />
    <Mapa.RasterSource
        id="test-raster-source"
        tileSize={256}
        tms={gdwx.tms}
        tileUrlTemplates={gdwx.tiles}>
        <Mapa.RasterLayer
            id="test-raster-source-layer"
            sourceId="test-raster-source"
            style={style}
        />
    </Mapa.RasterSource>
</Mapa.MapView>
```

# RasterLayer

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

> **style**: [`RasterLayerStyleProps`](RasterLayerStyleProps.md)

栅格图层渲染样式自定义配置