# POIObject

> **POIObject**: `Pick`\<`Address`, `"address"`\> & `Pick`\<`District`, `"adcode"`\> & `Object`

POI属性

## Type declaration

### id

> **id**: `string`

POI唯一标识

### parent

> **parent**: `string`

父POI的ID
当前POI如果有父POI，则返回父POI的ID。可能为空

### distance?

> **`optional`** **distance**: `number`

### pcode

> **pcode**: `string`

POI所在省份编码
extensions=all时返回

### type

> **type**: `string`

POI类型

#### Example

```ts
汽车服务;充电站;充电站
```

### photos

> **photos**: `Object`[]

### typecode

> **typecode**: `string`

兴趣点类型编码

### citycode

> **citycode**: `string`

城市编码
extensions=all时返回

### adname

> **adname**: `string`

区域名称
区县级别的返回，例如朝阳区

### alias

> **alias**: `string`

#### Example

```ts
'万城万充汽车充电站(环球创意广场)'
```

### tel

> **tel**: `string`

### pname

> **pname**: `string`

POI所在省份名称
若是直辖市的时候，此处直接显示市名，例如北京市

### cityname

> **cityname**: `string`

城市名
若是直辖市的时候，此处直接显示市名，例如北京市

### name

> **name**: `string`

POI名称

#### Example

```ts
万城万充汽车充电站(环球创意广场充电站)
```

### location

> **location**: `Position`

坐标

### biz\_type

> **biz\_type**: `string`[]

行业类型

### postcode

> **postcode**: `string`

邮编
extensions=all时返回

### website

> **website**: `string`

POI的网址
extensions=all时返回

### email

> **email**: `string`

extensions=all时返回

### entrLocation

> **entrLocation**: `Position`

POI的入口经纬度
extensions=all时返回，也可用作于POI的到达点；

### exitLocation

> **exitLocation**: `Position`

POI的出口经纬度
目前不会返回内容；

### naviPoiid

> **naviPoiid**: `string`

POI导航id
extensions=all时返回

### gridcode

> **gridcode**: `string`

地理格ID
extensions=all时返回

### parkingType

> **parkingType**: `string`

停车场类型
仅在停车场类型POI的时候显示该字段
展示停车场类型，包括：地下、地面、路边
extensions=all的时候显示

### tag

> **tag**: `string`

该POI的特色内容
 主要出现在美食类POI中，代表特色菜
例如“烤鱼,麻辣香锅,老干妈回锅肉”
extensions=all时返回

### indoorMap

> **indoorMap**: `number`

是否有室内地图标志
1，表示有室内相关数据
0，代表没有室内相关数据
extensions=all时返回

### indoorData

> **indoorData**: `Object`[]

室内地图相关数据
当indoor_map=0时，字段为空
extensions=all时返回
