```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

 <Mapa.MapView>
    <Mapa.Camera />
    <Mapa.Weather akey={'XXX'} />
</Mapa.MapView>
```

# Weather
### akey

> **akey**: `string`

Weather REST请求key


### request?

> **`optional`** **request**: [`WeatherReuqest`](WeatherReuqest.md)

天气请求接口扩展
默认实现了amap的weather rest服务请求

### style?

> **`optional`** **style**: `PositionStyle`

默认显示在屏幕右下角，可设置style自定义位置

#### Example

```
{ right: 5, bottom: 5 } 或者 'right-top'
```

### detailEle()?

> **`optional`** **detailEle**: (`props`: [`WeatherData`]()) => `React.ReactElement` \| `null`

自定义天气预报详情组件
