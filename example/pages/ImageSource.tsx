import {SafeAreaView} from 'react-native';
import Mapa from 'react-native-mapa';
import React from 'react';
import imageUrl from '../assets/taylor.png';
// const imageUrl =
//     'https://img0.baidu.com/it/u=1754265925,3520618105&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=751';

/**
  @category Component
 */
const ImageSource = () => {
    const coordinates = [
        [104.06189140695824, 30.65796677659171],
        [104.07089240695824, 30.65796677659171],
        [104.07089240695824, 30.64796577659171],
        [104.06189140695824, 30.64796577659171],
    ] as any;
    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView>
                <Mapa.Camera center={coordinates[0]} />
                <Mapa.ImageSource
                    coordinates={coordinates}
                    id={'test-10'}
                    url={imageUrl as string}>
                    <Mapa.ImageLayer
                        sourceId="test-10"
                        id={'test-layer-10'}
                        style={{rasterOpacity: 0.8}}
                    />
                </Mapa.ImageSource>
            </Mapa.MapView>
        </SafeAreaView>
    );
};

export default ImageSource;
