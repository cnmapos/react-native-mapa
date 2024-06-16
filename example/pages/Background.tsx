import Mapa, {Slot} from 'react-native-mapa';
import {SafeAreaView, View, Text, Dimensions} from 'react-native';
import {BackgroundListItem} from '../../src/components/Background';
import React, {useRef} from 'react';
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth * 0.25; // 25% 的屏幕宽度
import {Button} from '@rneui/themed';

function CustomView(props: any) {
    const {list, operation} = props;
    return (
        <View>
            <Button onPress={operation?.close}> 关闭 </Button>
            {list.map((item: BackgroundListItem) => {
                return (
                    <Button
                        type="outline"
                        key={item.id}
                        onPress={() => operation.changeBg(item.id)}>
                        {item.name}
                    </Button>
                );
            })}
        </View>
    );
}

function PreView({navigation}: any): React.JSX.Element {
    Mapa.setAccessToken(
        'sk.eyJ1IjoiY25tYXBvcyIsImEiOiJjbHRqa2RqNzgwczhnMnFrOWNnZ2t5bHA3In0.WJN2DQHS9dwoKVHyfiBKYg',
    );
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

    const renderListItem = (item: BackgroundListItem, active: boolean) => {
        return (
            <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    marginBottom: 10,
                    width: itemWidth,
                }}>
                <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        color: active ? 'red' : '#000',
                        textAlign: 'center',
                    }}>
                    {item.name}
                </Text>
            </View>
        );
    };

    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView>
                <Slot slot="rightTop" backgroundColor={'transparent'}>
                    <Mapa.Background
                        ref={ref}
                        list={backgroundList}
                        backgroundId={backgroundList[0].id}
                        // renderItem={renderListItem}
                    >
                        <CustomView />
                    </Mapa.Background>
                    <Mapa.Camera zoom={zoom} center={center} />
                </Slot>
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default PreView;
