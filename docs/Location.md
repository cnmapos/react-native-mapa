```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.Location locateWhenInit={true} visible={true} style="right" />
</Mapa.MapView>
```

用户定位

## Props

### visible

> **visible**: `boolean`

定位图标是否在地图上显示

#### Default Value

```ts
true
```

### style

> **`optional`** **style**: `PositionStyle` \| [`PositionSlot`](../../types/type-aliases/PositionSlot.md)

默认显示在屏幕右下角，可设置style自定义位置

##### Example

```
{ right: 5, bottom: 5 }
或者 'right-top'
```

### locateWhenInit?

> **`optional`** **locateWhenInit**: `boolean`

初始化时自动定位

#### Default Value

```ts
false
```

### onChange()?

> **`optional`** **onChange**: (`e`) => `void`

监听最新定位信息

#### Parameters

• **e**: `LocationEvent`

事件信息

#### Returns

`void`
