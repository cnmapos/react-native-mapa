# Type NearParams

> **NearParams**: `ParamsBase` & `PartialPick`\<`Page`, `"offset"` \| `"page"`\> & `Object`

周边搜索参数

## Type declaration

### location

> **location**: `Position`

查询中心坐标

### keywords

> **keywords**: `string`

搜索关键字

### radius?

> **`optional`** **radius**: `number`

查询半径
取值范围:0-50000。规则：大于50000按默认值，单位：米

### types?

> **`optional`** **types**: `string`[]

查询POI类型
当keywords和types均为空的时候，默认指定types为050000（餐饮服务）、070000（生活服务）、120000（商务住宅）
详细查看POI分类编码: https://lbs.amap.com/api/webservice/download

### city?

> **`optional`** **city**: `string`

查询城市
可选值：城市中文、中文全拼、citycode、adcode
如：北京/beijing/010/110000
当用户指定的经纬度和city出现冲突，若范围内有用户指定city的数据，则返回相关数据，否则返回为空。
如：经纬度指定石家庄，而city却指定天津，若搜索范围内有天津的数据则返回相关数据，否则返回为空。

### sortrule?

> **`optional`** **sortrule**: `string`

规定返回结果的排序规则。
按距离排序：distance；综合排序：weight

#### Default Value

```ts
distance
```

### extensions?

> **`optional`** **extensions**: `string`

返回结果控制
此项默认返回基本地址信息；取值为all返回地址信息、附近POI、道路以及道路交叉口信息。
