# Type PolygonParams

> **PolygonParams**: `ParamsBase` & `Page` & `Pick`\<`KeyParams`, `"keywords"` \| `"types"` \| `"extensions"`\> & `Object`

多边形范围POI查询参数

## Type declaration

### polygon

> **polygon**: `Position`[]

经纬度坐标对
经纬度小数点后不得超过6位。
多边形为矩形时，可传入左上右下两顶点坐标对
