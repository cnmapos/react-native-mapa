**react-native-mapa** • [Readme](../README.md) \| [API](../globals.md)

***

[react-native-mapa](../README.md) / WeatherParams

# Type alias: WeatherParams

> **WeatherParams**: `ParamsBase` & `Object`

天气查询参数

## Type declaration

### city

> **city**: `string`

城市编码
输入城市的adcode，adcode信息可参考城市编码表
https://lbs.amap.com/api/webservice/download

### extensions?

> **`optional`** **extensions**: `string`

气象类型
可选值：base/all
base:返回实况天气
all:返回预报天气

#### Default Value

```ts
base
```

## Source

weather.ts:6
