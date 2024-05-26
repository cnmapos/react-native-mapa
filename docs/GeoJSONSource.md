```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.GeoJSONSource id="geojson-id" url={geojson}>
        ...
    </Mapa.GeoJSONSource>
</Mapa.MapView>
```
# GeoJSONSource

## Props
### id

> **id**: `string`

来源标识

### existing?

> **`optional`** **existing**: `boolean`

来源是否存在

#### Default Value

```ts
false
```

### url

> **url**: `string` \| `GeoJSON.GeometryCollection` \| `GeoJSON.Feature` \| `GeoJSON.FeatureCollection` \| `GeoJSON.Geometry`

HTTP(S)地址、文件路径或者GeoJSON格式对象

### tileMaxZoom

> **`optional`** **tileMaxZoom**: `number`

生成矢量瓦片的最大层级，地图会根据设置的最大层级自动生成瓦片提成渲染性能

#### Default Value

```ts
18
```

### buffer

> **`optional`** **buffer**: `number`

设置瓦片每个边的buffer值，如0表示没有buffer，512表示buffer和瓦片大小一样
当设置的值比较大渲染性能会降低

#### Default Value

```ts
128
```

### hitbox

> **`optional`** **hitbox**: [`number`, `number`]

设置press时buffer范围

#### Default Value

```ts
[44, 44]
```

### onPress()

> **`optional`** **onPress**: (`e`) => `void`

#### Parameters

• **e**: `OnPressEvent`

#### Returns

`void`

### children

> **children**: `ReactElement` \| `ReactElement`[]
