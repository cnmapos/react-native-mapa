```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.Images>
        <Mapa.Image name="viewIcon">
            <View style={styles.image}>
                <Text>自定义Image</Text>
            </View>
        </Mapa.Image>
    </Mapa.Images>
</Mapa.MapView>
```

# Image

## Props
### name
> **name**: `string`
图像key

### scale
> **`optional`** **scale**: `number`
图像缩放比例

### children
> **children**: `ReactElement`
自定义图像显示内容
