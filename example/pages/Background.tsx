import Mapa, {Slot} from 'react-native-mapa';
import {SafeAreaView, View, Text, Dimensions} from 'react-native';
import {BackgroundListItem} from '../../src/components/Background';
import React, {useRef} from 'react';
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth * 0.25; // 25% 的屏幕宽度
import {Button} from '@rneui/themed';

function CustomView(props) {
    const {onClick} = props;
    return (
        <View>
            <Button onPress={onClick}> 关闭 </Button>
            <Text>哈哈</Text>
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

    const renderCustomPanel = ({close}) => {
        const click = () => {
            close();
        };
        return <CustomView onClick={click} />;
    };

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

    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView>
                <Slot slot="rightTop" backgroundColor={'transparent'}>
                    <Mapa.Background
                        ref={ref}
                        list={backgroundList}
                        defaultValue={backgroundList[0].id}
                        // renderPanel={renderCustomPanel}
                        // renderItem={renderListItem}
                    />
                    <Mapa.Camera zoom={zoom} center={center} />
                </Slot>
            </Mapa.MapView>
        </SafeAreaView>
    );
}

export default PreView;
