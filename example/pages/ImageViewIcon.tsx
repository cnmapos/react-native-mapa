import {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Mapa, {SymbolLayerStyleProps} from 'react-native-mapa';
import React from 'react';
import {Text} from '@rneui/base';
import exampleIcon from '../assets/example.png';
import pinIcon from '../assets/pin.png';
import provinces from '../assets/json/provinces.json';

/**
  @category Component
 */
const ImageViewIcon = () => {
    const [images, setImages] = useState({
        example: exampleIcon,
    });
    const onImageMissing = (imageKey: string) => {
        if (!Object.hasOwn(images, imageKey)) {
            setImages({
                ...images,
                [imageKey]: pinIcon,
            });
        }
    };

    const gejson: GeoJSON.FeatureCollection = {
        type: 'FeatureCollection',
        features: Object.values(provinces).map(val => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [...val],
            },
            properties: {},
        })),
    };

    const style: SymbolLayerStyleProps = {
        iconImage: 'viewIcon',
        iconAllowOverlap: true,
        iconSize: 1,
    };

    return (
        <SafeAreaView style={{height: '100%'}}>
            <Mapa.MapView>
                <Mapa.Camera zoom={3} />
                <Mapa.Images>
                    <Mapa.Image name="viewIcon">
                        <View style={styles.image}>
                            <Text>省会</Text>
                        </View>
                    </Mapa.Image>
                </Mapa.Images>
                <Mapa.GeoJSONSource id="gejson-id" url={gejson}>
                    <Mapa.SymbolLayer
                        id="geojson-layer-id"
                        sourceId="gejson-id"
                        style={style}
                    />
                </Mapa.GeoJSONSource>
            </Mapa.MapView>
        </SafeAreaView>
    );
};

export default ImageViewIcon;

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 20,
        backgroundColor: '#f00',
    },
});
