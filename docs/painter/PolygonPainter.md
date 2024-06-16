```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
     <Mapa.PolygonPainter id={'test'} onFinish={onFinish}  onError={onError} />
</Mapa.MapView>
```

# PolygonPainter
多边形绘制工具
## Props

### id

> **id**: `number` \| `string`

### children?

> **`optional`** **children**: `ReactElement` \| `ReactElement`[]

自定义Layer，可覆盖默认FillLayer

### lineStyle?

> **`optional`** **lineStyle**: [`LineLayerStyleProps`](../interfaces/LineLayerStyleProps.md)

绘制中线样式

### outCircleStyle?

> **`optional`** **outCircleStyle**: [`SymbolLayerStyleProps`](../interfaces/SymbolLayerStyleProps.md)

绘制中外圆样式

### innerCircleStyle?

> **`optional`** **innerCircleStyle**: [`SymbolLayerStyleProps`](../interfaces/SymbolLayerStyleProps.md)

绘制中内圆样式

### anchorStyle?

> **`optional`** **anchorStyle**: [`SymbolLayerStyleProps`](../interfaces/SymbolLayerStyleProps.md)

绘制中屏幕中心锚点样式

### fillStyle?

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
