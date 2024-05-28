
# WeatherReuqest

天气接口

## Methods

### weather()

> **weather**(`params`): `Promise`\<`ResResult`\<[`WeatherData`](./amap/WeatherData.md)\>\>

获取天气预报信息

```
export type ResResult = WeatherData & {
    /**
     * 1：成功；0：失败
     */
    status: 0 | 1;
    /**
     * 返回状态信息
     */
    info: string;
    /**
     * 返回状态编码
     * 状态编码列表：https://lbs.amap.com/api/webservice/guide/tools/info
     */
    infocode: string;
};
```

#### Parameters

• **params**: [`WeatherParams`](./amap/WeatherParams.md)

请求参数

#### Returns

`Promise`\<`ResResult`\<[`WeatherData`](./amap/WeatherData.md)\>\>
