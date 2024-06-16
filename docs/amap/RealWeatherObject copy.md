**react-native-mapa** • [Readme](../../README.md) \| [API](../../modules.md)

***

[react-native-mapa](../../README.md) / [index](../README.md) / RealWeatherObject

# Type alias: RealWeatherObject

> **RealWeatherObject**: `Object` & `Pick`\<`Province`, `"province"`\> & `Pick`\<`City`, `"city"`\>

实时天气信息

## Type declaration

### weather

> **weather**: `string`

天气现象（汉字描述）

### temperature

> **temperature**: `string`

实时气温，单位：摄氏度

### winddirection

> **winddirection**: `string`

风向描述

### windpower

> **windpower**: `string`

风力级别，单位：级

### humidity

> **humidity**: `string`

空气湿度

### reporttime

> **reporttime**: `string`

数据发布的时间

## Source

src/types/amap/weather.ts:27
