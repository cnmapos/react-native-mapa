```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.Camera pitch={60} />
    <Mapa.GeoJSONSource id={'geojson-id'} url={geojson}>
         <Mapa.LineLayer id="geojson-layer-id" sourceId="gejson-id" style={style} />
    </Mapa.GeoJSONSource>
</Mapa.MapView>
```

# LineLayer

# Props 
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

> **`optional`** **slot**: [`LayerSlot`](LayerSlot.md)

### style

> **style**: [`LineLayerStyleProps`](LineLayerStyleProps.md)

