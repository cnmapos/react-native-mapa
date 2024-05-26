**react-native-mapa** • [Readme](../README.md) \| [API](../globals.md)

***

[react-native-mapa](../README.md) / RegeoParams

# Type alias: RegeoParams

> **RegeoParams**: `ParamsBase` & `Object`

逆地理编码请求参数

## Type declaration

### location

> **location**: `Position`

### poitype?

> **`optional`** **poitype**: `string`

返回附近POI类型
多个使用"|"分割

### radius?

> **`optional`** **radius**: `number`

搜索半径，默认1000米

### roadlevel?

> **`optional`** **roadlevel**: `number`

当roadlevel=0时，显示所有道路
当roadlevel=1时，过滤非主干道路，仅输出主干道路数据

### extensions?

> **`optional`** **extensions**: `string`

返回结果控制
extensions 参数默认取值是 base，也就是返回基本地址信息；
extensions 参数取值为 all 时会返回基本地址信息、附近 POI 内容、道路信息以及道路交叉口信息。

#### Default Value

```ts
base
```

### homeorcorp?

> **`optional`** **homeorcorp**: `number`

是否优化POI返回顺序
以下内容需要 extensions 参数为 all 时才生效。
omeorcorp 参数的设置可以影响召回 POI 内容的排序策略，目前提供三个可选参数：
0：不对召回的排序策略进行干扰。
1：综合大数据分析将居家相关的 POI 内容优先返回，即优化返回结果中 pois 字段的poi顺序。
2：综合大数据分析将公司相关的 POI 内容优先返回，即优化返回结果中 pois 字段的poi顺序。

#### Default Value

```ts
0
```

## Source

geo.ts:11
