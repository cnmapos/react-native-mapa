```tsx
import Mapa from 'react-native-mapa';

const backgroundList: BackgroundListItem[] = [
    {
        id: 'MapboxVector',
        name: 'mapbox矢量',
        style: 'mapbox://styles/mapbox/dark-v10',
    },
    {
        id: 'Satellite',
        name: 'mapbox卫星',
        style: 'mapbox://styles/mapbox/satellite-v9',
    },
];

<Mapa.MapView>
    <Mapa.Background
        list={backgroundList}
        defaultValue={backgroundList[0].id}
    />
</Mapa.MapView>
```

背景图层组件

## Props

### defaultValue
默认选中的背景图层id、如果不设置、则默认是list的第一个要素的 id

> **`optional`** **defaultValue**: string


### list

> **`optional`** **list**: [`BackgroundListItem[]`](BackgroundListItem.md)

背景图层列表、如果不传、则默认是 高德矢量、高德卫星、mapbox矢量、mapbox卫星

##### Default Value

```ts
const defaultBackgroundList: BackgroundListItem[] = [
    {
        id: 'AmapVector',
        name: '高德矢量',
        style: {
            //...    
        },
    {
        id: 'AmapSatellite',
        name: '高德卫星',
        style: {
            // ...
        },
    },
    {
        id: 'MapboxVector',
        name: 'mapbox矢量',
        style: 'mapbox://styles/mapbox/dark-v10',
    },
    {
        id: 'Satellite',
        name: 'mapbox卫星',
        style: 'mapbox://styles/mapbox/satellite-v9',
    },
];
```



### renderItem()?

> **`optional`** **renderItem**:`(item: BackgroundListItem, active: boolean) => ReactNode`

自定义每个背景图层选项的UI渲染样式

#### Parameters

• **item**: `BackgroundListItem` 图层配置项

• **active**: `boolean` 当前背景图层是否是本图层

#### Returns

`ReactNode` 返回react组件

#### Example
```ts
    const renderListItem = (item, active) => {
        return (
            <View
                style={{
                    marginBottom: 10,
                    width: itemWidth,
                }}>
                <Text
                    style={{
                        color: active ? 'red' : '#000',
                        textAlign: 'center',
                    }}>
                    {item.name}
                </Text>
            </View>
        );
    };
    <Mapa.Background
        list={...}
        renderItem={renderListItem}
    />

```


### renderPanel()?

> **`optional`** **renderPanel**:`(operation: { close, open, changeBg, getCurrentBg }, list: BackgroundListItem) => ReactNode`

自定义整个背景组件图层面板

#### Parameters

• **operation**: `{ close, open, changeBg, getCurrentBg }` 提供四个方法让用户自行控制背景图层

• **list**: `BackgroundListItem[]` 背景图层配置列表

#### Returns

`ReactNode` 返回react组件

#### Example
```ts
    function CustomView(operation, list) {
        const {close} = operation;
        return (
            <View>
                <Button onPress={close}> 关闭 </Button>
                <Text>简单的面板内容</Text>
            </View>
    );
    <Mapa.Background
        list={backgroundList}
        renderPanel={CustomView}
    />

```


## Methods

> **close**

关闭背景图层组件弹窗

#### Returns

`void` 

> **open**

打开背景图层组件弹窗

#### Returns

`void` 

> **getCurrentBg**

获取当前背景图层ID

#### Returns

`string` 

> **changeBg**:`(id: string) => void`

修改背景图层为指定、id需要在 list 中存在才行、否则不生效

#### Returns

`void` 
