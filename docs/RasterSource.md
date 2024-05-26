```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';
const gdwx = {
    tms: false,
    tiles: [
        'https://webst03.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    ],
};
<Mapa.MapView>
    <Mapa.RasterSource
        id="test-raster-source"
        tileSize={256}
        tms={gdwx.tms}
        tileUrlTemplates={gdwx.tiles}>
        ...
    </Mapa.RasterSource>
</Mapa.MapView>
```

# RasterSource

## Props
### id

> **id**: `string`

来源标识

### existing

> **`optional`** **existing**: `boolean`

id映射到已经存在的source。如果为true，则不会新创建来源

### url

> **`optional`** **url**: `string`

TileJSON来源信息配置地址

### tileUrlTemplates

> **`optional`** **tileUrlTemplates**: `string`[]

url模板列表，支持提供多个tileJSON地址模板

#### Example

```ts
["https://mapa.example.com/vector/tiles/{z}/{x}/{y}.pbf"]
```

### minZoomLevel

> **`optional`** **minZoomLevel**: `number`

最小显示层级, 范围[0, 22]

#### Default Value

```ts
0
```

### maxZoomLevel

> **`optional`** **maxZoomLevel**: `number`

最大显示层级，范围[0, 22]

#### Default Value

```ts
22
```

### tileSize
> **`optional`** **tileSize**: `number`

地图图块的大小。
Mapbox url 默认为 256，所有其他默认为 512。

### tms

> **`optional`** **tms**: `boolean`

是否反转y方向瓦片，默认是从左上角为起始位置

#### Default

```ts
false
```



