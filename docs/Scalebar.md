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

options 可选配置中类型修饰如下：

```ts
type Options = {
    maxWidth?: number;
    unit?: Unit;
};
```

maxWidth: 表示比例尺的最大宽度（注意并不是渲染的长度，比例尺的渲染具体长度是根据比例尺计算得到的，maWidth 用于指定上限）.` maxWidth default 100`

unit: 表示 Scalebar 计算方式 可选值为 `'imperial' | 'metric' | 'nautical'`, 默认 `'metric'` .

> 配置项可选，默认值参见 `defaultOptions`

**defaultOptions** 值如下：

```ts
{
    maxWidth: 100,
    unit: 'metric',
}
```

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
