
```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.Marker position={position1} allowOverlap={true}>
        <View>
            <Button onPress={() => onPress()}>
                我是可点击的marker1
            </Button>
        </View>
    </Mapa.Marker>
</Mapa.MapView>
```

#  Marker

## Props

### position

> **position**: `[number, number]`

Marker经纬度坐标

### anchor?

> **`optional`** **anchor**: `[number, number]`

Marker锚点，x、y的值范围为[0, 1]
当anchor为[0, 0]时表示top-left，当anchor为[1, 1]时表示bottom-right

#### Default Value
```ts
[0.5, 0.5]
```

### allowOverlap?

> **`optional`** **allowOverlap**: `boolean`

地图上邻近的marker是否重叠显示。如果为false，表示重叠的marker只会有一个显示在地图上

#### Default Value

```ts
false
```

### children

> **children**: `ReactElement`

自定义Maker显示内容
