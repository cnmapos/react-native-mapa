```tsx
import Mapa from 'react-native-mapa';
import { View } from 'react-native'

const center = [104.06189140695824, 30.65796677659171];
const zoom = 14;
const backgroundList: BackgroundListItem[] = [
    {
        id: 'AmapVector',
        name: '高德矢量',
        style: {
            version: '1.0.0',
            name: 'AMap',
            constants: {},
            sources: {
                amap: {
                    type: 'raster',
                    tiles: [
                        'https://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}',
                    ],
                },
            },
            sprite: '',
            glyphs: '',
            layers: [
                {
                    id: 'amap',
                    source: 'amap',
                    type: 'raster',
                },
            ],
        },
        logoUrl:
            'https://play-lh.googleusercontent.com/l3jypy2cfNXc6R3vWstSgWHqZz-WKn5K3HyDSjDehwoh8rrsXan1byG45TQzDTkZ3azG',
    },
    {
        id: 'AmapSatellite',
        name: '高德卫星',
        style: {
            version: '1.0.0',
            name: 'AMap',
            constants: {},
            sources: {
                amap: {
                    type: 'raster',
                    tiles: [
                        'https://webst04.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
                    ],
                },
            },
            sprite: '',
            glyphs: '',
            layers: [
                {
                    id: 'amap',
                    source: 'amap',
                    type: 'raster',
                },
            ],
        },
        logoUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXY77AHfx3UBMxU9HqeskpBqswohYCjMLmtR2NpA1dw&s',
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
const ref = useRef(null);

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

<Mapa.MapView>
    <Mapa.Background
        ref={ref}
        list={backgroundList}
        defaultValue={backgroundList[0].id}
        renderItem={renderListItem}
    />
</Mapa.MapView>
```

背景图层组件

## Props

### ref

> **`optional`** **ref**: `React.ref`

背景图层组件的引用对象、暴露 4 个API供父组件命令式操作背景图层组件

##### Example
```ts
ref.current.close(): void; // 关闭背景图层组件弹窗
ref.current.open(): void; // 打开背景图层组件弹窗
ref.current.getCurrentBg(): string; //获取当前背景图层
ref.current.changeBg(id: BackgroundListItem['id']): void; // 修改背景图层为指定、id需要在 list 中存在才行、否则不生效
```

### defaultValue
默认选中的背景图层id、如果不设置、则默认是list的第一个要素的 id

> **`optional`** **defaultValue**: string


### list

> **`optional`** **list**:  `BackgroundListItem[]`

##### BackgroundListItem
```ts
type BackgroundListItem = {
    /**
     * 背景图层唯一id
     */
    id: string;
    /**
     * 背景图层名称
     */
    name: string;

    /**
     * 背景图层style的请求URL地址或者配置对象
     */
    style: string | Object;

    /**
     * logo图像地址
     */
    logoUrl?: string;
};
```

背景图层列表、如果不传、则默认是 高德矢量、高德卫星、mapbox矢量、mapbox卫星

##### Default Value

```ts
const defaultBackgroundList: BackgroundListItem[] = [
    {
        id: 'AmapVector',
        name: '高德矢量',
        style: {
            version: '1.0.0',
            name: 'AMap',
            constants: {},
            sources: {
                amap: {
                    type: 'raster',
                    tiles: [
                        'https://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}',
                    ],
                },
            },
            sprite: '',
            glyphs: '',
            layers: [
                {
                    id: 'amap',
                    source: 'amap',
                    type: 'raster',
                },
            ],
        },
        logoUrl:
            'https://play-lh.googleusercontent.com/l3jypy2cfNXc6R3vWstSgWHqZz-WKn5K3HyDSjDehwoh8rrsXan1byG45TQzDTkZ3azG',
    },
    {
        id: 'AmapSatellite',
        name: '高德卫星',
        style: {
            version: '1.0.0',
            name: 'AMap',
            constants: {},
            sources: {
                amap: {
                    type: 'raster',
                    tiles: ['https://webst04.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'],
                },
            },
            sprite: '',
            glyphs: '',
            layers: [
                {
                    id: 'amap',
                    source: 'amap',
                    type: 'raster',
                },
            ],
        },
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXY77AHfx3UBMxU9HqeskpBqswohYCjMLmtR2NpA1dw&s',
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

---

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
        list={backgroundList}
        renderItem={renderListItem}
    />

```

---

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
    function CustomView(props) {
        const {close} = props;
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


