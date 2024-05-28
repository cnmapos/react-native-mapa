# POIRequest

POI搜索接口

## Methods

### searchByKey()

> **searchByKey**(`params`): `Promise`\<`ResResult`\<[`POIData`](./amap/POIData.md)\>\>

关键词搜索

#### Parameters

• **params**: `KeyParams`

#### Returns

`Promise`\<`ResResult`\<[`POIData`](./amap/POIData.md)\>\>


### searchByDistance()

> **searchByDistance**(`params`): `Promise`\<`ResResult`\<[`POIData`](./amap/POIData.md)\>\>

周边搜索

#### Parameters

• **params**: [`NearParams`](./amap/NearParams.md)

#### Returns

`Promise`\<`ResResult`\<[`POIData`](./amap/POIData.md)\>\>

### searchByPolygon()

> **searchByPolygon**(`params`): `Promise`\<`ResResult`\<[`POIData`](./amap/POIData.md)\>\>

多边形搜索

#### Parameters

• **params**: [`PolygonParams`](./amap//PolygonParams.md)

#### Returns

`Promise`\<`ResResult`\<[`POIData`](./amap/POIData.md)\>\>
