```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.ImageSource
        coordinates={coordinates} id={'test-10'} url={imageUrl}>
        ...
    </Mapa.ImageSource>
</Mapa.MapView>
```

# ImageSource
## Props

### id

> **id**: `string`

source唯一标识

### url

> **url**: `string`

网络请求地址或者本地路径

### coordinates

> **coordinates**: [`Position`, `Position`, `Position`, `Position`]

图片显示坐标位置：左上、右上、右下、左下

### children
Image layer
> **children**: `ReactElement` \| `ReactElement`[]