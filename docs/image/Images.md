```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.Images images={images} onImageMissing={onImageMissing} />
</Mapa.MapView>
```
# Images
## Props
### images?

> **`optional`** **images**: `{ [key in string]: string | ImageSourcePropType }`

图像来源，支持格式
\{uri: 'http://...'\} or require('image.png') or import 'image.png'

### onImageMissing()?

> **`optional`** **onImageMissing**: (`imageKey`) => `void`

当图层在渲染图片时未找到imageKey对应的图像，则触发onImageMissing事件，可用于更新动态更新images集合

#### Example

```
 <Images
   images={images}
    onImageMissing={(key) => {
      if (key != 'pin-known') {
        this.setState({
          images: { ...this.state.images, [imageKey]: pinIcon },
        });
      }
    }}
  >
```

#### Parameters

• **imageKey**: `string`

#### Returns

`void`

### children?

> **`optional`** **children**: `TypedReactNode`\<*typeof* [`Image`](../functions/Image.md)\>
