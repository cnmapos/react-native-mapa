```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
 <Mapa.Camera pitch={60} />
</Mapa.MapView>
```
# MapView

## Props
### projection?

> **`optional`** **projection**: [`Projection`](./Projection.md)

坐标投影系

### style?

> **`optional`** **style**: `'AmapSatellite' | 'AmapSatellite' | 'MapboxVector' | 'MapboxSatellite'`

地图样式，支持高德矢量地图、高德卫星图、Mapbox矢量地图、mapbox卫星地图，默认显示高德矢量地图。

### onPress()

> **`optional`** **onPress**: (`feature`) => `void`

地图点击事件

#### Parameters

• **feature**: `PressFeature`

点击位置信息

#### Example

```
{
 "geometry": {"coordinates": [104.06190928823503, 30.657739121986168], "type": "Point"},
 "properties": {"screenPointX": 197.3333282470703, "screenPointY": 372.3333333333333},
 "type": "Feature"
}
```


### onLongPress()?

> **`optional`** **onLongPress**: (`feature`) => `void`

长按地图触发事件

#### Example

```
{
 "geometry": {"coordinates": [104.06190928823503, 30.657739121986168], "type": "Point"},
 "properties": {"screenPointX": 197.3333282470703, "screenPointY": 372.3333333333333},
 "type": "Feature"
}
```

#### Parameters

• **feature**: `PressFeature`


### onMapIdle()?

> **`optional`** **onMapIdle**: (`e`) => `void`

当地图闲置时触发

#### Parameters

• **e**: `MapIdleEvent`

## Methods
### getCenter()

获取地图视图中心坐标```[lng, lat]```
 #### Returns ```Promise<Position>```
#### arguments

### getPointInView(location: Position): Promise```<Position>```;
根据经纬度获取视图坐标
 #### Returns 视图坐标[x, y]
 #### arguments
 | Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| location | `Position` | ✓ | 经纬度坐标 |

### getCoordinateFromView(location: Position): Promise```<Position>```;
根据视图坐标获取经纬度
 #### Returns 经纬度坐标[lng, lat]
#### arguments
 | Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| location | `Position` | ✓ | 视图坐标[x, y] |
### setCenter(location: Position);
设置中心坐标
 #### Returns void
#### arguments
 | Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
location | `Position` | ✓ | 经纬度坐标[lng, lat] |
### flyTo(center: Position, duration?: number)
设置中心坐标并飞行到该位置
 #### Returns void
 #### arguments
 | Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| center | `Position` | ✓ | 经纬度坐标[lng, lat] |
| duration | `number` |  | 飞行时间，默认100毫秒 |

### getZoom(): Promise<number | undefined>;
获取当前地图缩放级别
### Returns 缩放级别

### querySourceFeatures(sourceId: string, filter: FilterExpression, layerIDs: string[]): Promise```<FeatureCollection>```

按来源查询feature集合

#### Returns Promise```<FeatureCollection>```
#### arguments
 | Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| sourceId | `string` | ✓ | 来源id |
| filter | `FilterExpression` | ✓ | 过滤条件，mapbox style表达式 |
| layerIDs | `string[]` | ✓ | 图层id列表 |

### queryRenderFeatures(bbox: BBox, filter: FilterExpression | [], layerIDs?: string[]): ```Promise<FeatureCollection>```
按bbox查询可视区域feature集合
#### Returns Promise```<FeatureCollection>```
#### arguments
 | Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| bbox | `BBox` | ✓ | [minX, minY, maxX, maxY] |
| filter | `FilterExpression` | ✓ | 过滤条件，mapbox style表达式 |
| layerIDs | `string[]` |  | 图层id列表 |

### getVisibleBounds(): Promise<[Position, Position] | undefined>;
获取可见视图区域的[ne, sw]
#### Returns Promise```<[Position, Position] | undefined>```
