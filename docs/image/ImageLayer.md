```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.ImageSource coordinates={coordinates} id={'test-10'} url={imageUrl}>
        <Mapa.ImageLayer sourceId="test-10" id={'test-layer-10'} style={{rasterOpacity: 0.8}} />
    </Mapa.ImageSource>
</Mapa.MapView>
```


# ImageLayer
## Props

### id

> **id**: `string`

图层唯一标识

### sourceId

> **sourceId**: `string`

数据来源标识

### existing?

> **`optional`** **existing**: `boolean`

图层已经存在

#### Default Value

```ts
false
```

### slot?

> **`optional`** **slot**: `"bottom"` \| `"middle"` \| `"top"`

图层默认插槽位置

#### Default Value

```ts
middle
```

### filter?

> **`optional`** **filter**: `Pick`\<`RasterLayerStyle`, `"filter"`\>

### minZoom?

> **`optional`** **minZoom**: `number`

最小显示层级

#### Default Value

```ts
1
```

### maxZoom?

> **`optional`** **maxZoom**: `number`

最大显示层级

#### Default Value

```ts
30
```

### style

> **style**: `{ 'visibility'?: 'visible' | 'none'; 'rasterOpacity'?: number; }`
