```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.Camera />
    <Mapa.POIFinder akey={akey} />
</Mapa.MapView>
```
# POIFinder
POI搜索组件，默认使用高德API， akey为POI搜索需要的key
## Props
### placeholder

> **`optional`** **placeholder**: `string`

搜索框默认提示信息

### radius

> **`optional`** **radius**: `number`

搜索半径，单位m

### akey

> **akey**: `string`

POI REST请求key

### debounceDuraton?

> **`optional`** **debounceDuraton**: `number`

POI请求延迟周期
默认100ms

### request

> **`optional`** **request**: [`POIRequest`](POIRequest.md)

POI请求接口定义：默认实现了amap的web rest服务请求，支持按POI接口自定义扩展

### listEle()

> **`optional`** **listEle**: (`props`) => `React.ReactElement` \| `null`

POI结果列表自定义组件

#### Example

```
<ListEle
 keyboards={text}
 count={count}
 pois={list}
 onPOIPress={onPOIPress}/>
```

#### Parameters

• **props**

• **props\.count**: `number`

• **props\.pois**: [`POIObject`](./amap/POIObject.md)

• **props\.keyboards**: `string`

• **props\.onPOIPress**

#### Returns

`React.ReactElement` \| `null`

### detailEle()

> **`optional`** **detailEle**: (`props`) => `React.ReactElement` \| `null`

POI详情自定义组件

#### Example

```
<POIDetail poi={selectedPOI} />
```

#### Parameters

• **props**

• **props\.poi**: [`POIObject`](./amap/POIObject.md)

#### Returns

`React.ReactElement` \| `null`


## Methods