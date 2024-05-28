
```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.RectanglePainter id={'test'} onFinish={onFinish} />
</Mapa.MapView>
```

# RectanglePainter
矩形绘制工具
## Props
### id

> **id**: `number` \| `string`

### children?

> **`optional`** **children**: `ReactElement` \| `ReactElement`[]

自定义Layer，可覆盖默认Layer图层

### fillStyle?

> **`optional`** **fillStyle**: [`FillLayerStyleProps`](FillLayerStyleProps.md)

绘制中面样式

### outCircleStyle?

> **`optional`** **outCircleStyle**: [`SymbolLayerStyleProps`](../interfaces/SymbolLayerStyleProps.md)

绘制中外圆样式

### innerCircleStyle?

> **`optional`** **innerCircleStyle**: [`SymbolLayerStyleProps`](../interfaces/SymbolLayerStyleProps.md)

绘制中内圆样式

### anchorStyle?

> **`optional`** **anchorStyle**: [`SymbolLayerStyleProps`](../interfaces/SymbolLayerStyleProps.md)

绘制中屏幕中心锚点样式

### anchorStyle?

> **`optional`** **fillStyle**: [`FillLayerStyleProps`](FillLayerStyleProps.md)

绘制中面样式

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
