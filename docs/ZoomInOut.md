```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.ZoomInOut />
</Mapa.MapView>
```

ZoomInOut

## Props

### step?

> **`optional`** **step**: `number`

放大或缩小步长(step)

#### Default Value

```ts
1
```

### duration?

> **`optional`** **duration**: `number`

缩放、缩小执行周期

#### Default Value

```ts
100
```

### style?

> **`optional`** **style**: `PositionStyle`

默认显示在屏幕右上角，可设置style自定义位置

#### Example

```
{ right: 5, bottom: 5 }
或者 'right-top'
```

## Methods