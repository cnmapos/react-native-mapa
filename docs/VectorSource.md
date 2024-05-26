```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
     <Mapa.VectorSource
                url={tileJSONUrl}
                id="geojson-source"
                onPress={e => {
                    console.log(
                        `VectorSource onPress: ${e.features}`,
                        e.features,
                    );
                }}>
        ...
    </Mapa.VectorSource>
</Mapa.MapView>
```

# VectorSource

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

### urlTemplates

> **`optional`** **urlTemplates**: `string`[]

url模板列表，支持提供多个tileJSON地址模板。

#### Example

```ts
["https://mapa.example.com/vector/tiles/{z}/{x}/{y}.pbf"]
```

### minZoom

> **`optional`** **minZoom**: `number`

最小显示层级, 范围[0, 22]

#### Default Value

```ts
0
```

### maxZoom

> **`optional`** **maxZoom**: `number`

最大显示层级，范围[0, 22]

#### Default Value

```ts
22
```

### tms

> **`optional`** **tms**: `boolean`

是否反转y方向瓦片，默认是从左上角为起始位置

#### Default

```ts
false
```

### onPress()

> **`optional`** **onPress**: (`e`) => `void`

当前source对应的layer在其他source下的layer之上(更打的z-index)，则会出发onPress事件

#### Parameters

• **e**: `OnPressEvent`

事件信息

#### Returns

`void`

### hitbox

> **`optional`** **hitbox**: [`number`, `number`]

设置press时buffer范围

#### Default Value

```ts
[44, 44]
```
