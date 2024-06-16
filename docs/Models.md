```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Camera } from 'react-native-mapa';

const models = {
    car: require('../assets/models/sportcar.glb'),
};

<Mapa.MapView>
   <Mapa.Models models={models} />
</Mapa.MapView>
```

# Models
三维模型集合，可通过ModelLayer的style引入到图层使用
## Props

### models

> **models**: `{ [key in string]: string | number }`

模型key和模型地址的键值对，模型定制为url或者asset id
