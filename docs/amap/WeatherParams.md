# WeatherParams

> **WeatherParams**: [`ParamsBase`](ParamsBase.md) & `Object`

天气查询参数, Object属性定义在Props

## Props

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
