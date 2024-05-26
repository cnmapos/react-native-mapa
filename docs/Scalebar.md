```tsx
import Mapa from 'react-native-mapa';
// 或者import { MapView, Scalebar } from 'react-native-mapa';

<Mapa.MapView>
    <Mapa.Scalebar pitch={60} />
</Mapa.MapView>;
```

# Scalebar

## Props

> **ScalebarProps**: `Object`

ScaleBar Props

## Type declaration

### visible?

> **`optional`** **visible**: `boolean`

是否显示，可选，默认 `true`

### options?

> **`optional`** **options**: `Options`

配置项可选，默认值参见 `defaultOptions`

## Example

```
import Mapa, {Scalebar} from 'react-native-mapa';
import {SafeAreaView} from 'react-native';
import React from 'react';

function ScalebarView(): React.JSX.Element {
   return (
       <SafeAreaView style={{height: '100%'}}>
           <Mapa.MapView>
               <Scalebar />
           </Mapa.MapView>
       </SafeAreaView>
   );
}

export default ScalebarView;

```
