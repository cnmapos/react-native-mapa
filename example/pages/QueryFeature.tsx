import {View, StyleSheet, SafeAreaView} from 'react-native';
import React, {useRef, useState} from 'react';
import Wrapper from '../components/Wrapper';
import Mapa, {
    FillLayerStyleProps,
    LineLayerStyleProps,
    OnPressEvent,
} from 'react-native-mapa';
import {Button, Dialog, Text} from '@rneui/themed';

/**
  @category Component
 */
const QueryFeature = () => {
    const tileJSONUrl = 'mapbox://cnmapos.clv6v4zsf01hy1trs8bdxuysy-3x58a';
    const [modalVisible, setModalVisible] = useState(false);
    const [center, setCenter] = useState();
    const [message, setMessage] = useState('');
    const style: FillLayerStyleProps = {
        fillOpacity: 0.5,
        fillColor: '#F00',
    };

    const style2: LineLayerStyleProps = {
        lineColor: '#00F',
        lineWidth: 3,
    };

    const ref = useRef<any>();

    const onPress = (
        feature: GeoJSON.Feature<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>,
    ) => {
        console.log('onPress', feature);
    };

    const onSourcePress = (e: OnPressEvent) => {
        if (e.features.length) {
            const feature = e.features[0];
            setMessage(
                `${feature.properties?.name}坐标为${center}, 行政区编码为${feature.properties?.adcode}`,
            );
            setModalVisible(true);
        }
    };

    const onQueryPress = async (name: string) => {
        const featureCollection = await ref.current.querySourceFeatures(
            'geojson-source',
            ['==', ['get', 'name'], name],
            ['510100'],
        );
        console.log('onQueryPress', featureCollection);
        if (featureCollection.features.length) {
            const feature = featureCollection.features[0];
            const center = JSON.parse(feature.properties.center).map(c =>
                Number(c),
            );
            setCenter(center);
            setMessage(
                `${feature.properties.name}坐标为${center}, 行政区编码为${feature.properties.adcode}`,
            );
            setModalVisible(true);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Mapa.MapView
                ref={ref}
                onPress={onPress}
                projection={'mercator'}
                style={'MapboxVector'}>
                <Mapa.Camera zoom={7} minzoom={1} center={center} />
                <Mapa.ZoomInOut />
                <Mapa.VectorSource
                    url={tileJSONUrl}
                    id="geojson-source"
                    onPress={onSourcePress}>
                    <Mapa.FillLayer
                        id="geoson-layer-fill"
                        sourceId="geojson-source"
                        sourceLayerID={'510100'}
                        style={style}
                    />
                    <Mapa.LineLayer
                        id="geojson-layer-line"
                        sourceId="geojson-source"
                        aboveLayerID={'geoson-layer-fill'}
                        sourceLayerID={'510100'}
                        style={style2}
                    />
                </Mapa.VectorSource>
            </Mapa.MapView>
            <View style={styles.select}>
                <Button
                    style={styles.button}
                    onPress={() => onQueryPress('青羊区')}>
                    青羊区
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => onQueryPress('锦江区')}>
                    锦江区
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => onQueryPress('成华区')}>
                    成华区
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => onQueryPress('金牛区')}>
                    金牛区
                </Button>
            </View>
            <Dialog
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}>
                <Dialog.Title title="Marker提示" />
                <Text>{message} </Text>
            </Dialog>
        </SafeAreaView>
    );
};

export default QueryFeature;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
    },
    select: {
        position: 'absolute',
        bottom: 5,
        left: 5,
    },
    button: {
        marginTop: 8,
    },
});
