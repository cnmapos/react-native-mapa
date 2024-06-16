```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
     <Mapa.CirclePainter id={'test'} onFinish={onFinish}  onError={onError} />
</Mapa.MapView>
```

# CirclePainter
圆绘制工具
## Props
### id

> **id**: `number` \| `string`

### circleStyle?

> **`optional`** **circleStyle**: [`CircleLayerStyleProps`](CircleLayerStyleProps.md)

绘制中圆样式

### anchorStyle?

> **`optional`** **anchorStyle**: [`SymbolLayerStyleProps`](SymbolLayerStyleProps.md)

绘制中屏幕中心锚点样式

### onFinish()?

> **`optional`** **onFinish**: (`e`) => `void`

绘制完成回调

#### Parameters

• **e**: `Position`[]

#### Returns

`void`

### onError()?

> **`optional`** **onError**: (`e`) => `void`

绘制错误回调

#### Parameters

• **e**

• **e\.message**: `string`

#### Returns

`void`
