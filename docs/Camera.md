```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
 <Mapa.Camera zoom={zoom} center={center} heading={heading} pitch={pitch}  />
</Mapa.MapView>
```
MapView

## Props
### zoom

> **`optional`** **zoom**: `number`

地图显示层级

#### Default Value

```ts
15
```

### maxzoom

> **`optional`** **maxzoom**: `number`

最大显示层级

#### Default Value

```ts
21
```

### minzoom

> **`optional`** **minzoom**: `number`

最小显示层级

#### Default Value

```ts
3
```

### center

> **`optional`** **center**: `PositionLike`

设置中心坐标

### heading

> **`optional`** **heading**: `number`

偏航角

### pitch

> **`optional`** **pitch**: `number`

俯仰角

### bounds

> **`optional`** **bounds**: [`Bounds`](./Bounds.md)

地图可视范围
例如[104.061891, 30.65796, 104.062304, 30.65900]
或者\{ sw: [104.061891, 30.65796], ne: [104.062304, 30.65900] \}

### followLocation

> **`optional`** **followLocation**: `boolean`

跟随用户定位

### followZoomLevel

> **`optional`** **followZoomLevel**: `number`

跟随用户定位的zoom层级

### followPitch

> **`optional`** **followPitch**: `number`

跟随用户定位的俯仰角

### followHeading

> **`optional`** **followHeading**: `number`

跟随用户定位的偏航角


### onChange()

> **`optional`** **onChange**: (`e`) => `void`
摄像机位置、偏航角、俯仰角发生改变时触发
#### Parameters

• **e**: [`CameraEvent`](./CameraEvent.md)

#### Returns

`void`

## Methods
