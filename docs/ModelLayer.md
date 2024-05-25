

```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

const models = {
    car: require('../assets/models/sportcar.glb'),
};

<Mapa.MapView>
    <Mapa.Models models={models} />
    <Mapa.GeoJSONSource url={gejson} id="geojson-id">
        <Mapa.ModelLayer
            id="model-layer-id"
            sourceId="geojson-id"
            style={style}
        />
    </Mapa.GeoJSONSource>
</Mapa.MapView>
```

# ModelLayer

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

### minZoom?

> **`optional`** **minZoom**: `number`

显示最小zoom层级

### maxZoom?

> **`optional`** **maxZoom**: `number`

显示最大zoom层级

### slot?

> **`optional`** **slot**: `"bottom"` \| `"middle"` \| `"top"`

### style

> **style**: [`ModelLayerStyleProps`](ModelLayerStyleProps.md)
