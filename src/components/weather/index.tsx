import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import {
    ForecastWheatherObject,
    MSlotInterface,
    PositionSlot,
    RealWeatherObject,
    WeatherData,
    WeatherReuqest,
} from '../../mapa';
import React, { useContext, useState } from 'react';
import { BottomSheet, Button, Text } from '@rneui/themed';
import { AMapGeoRequest, AMapWeatherRequest, MapContext } from '../../mapa';
import Detail from './Detail';
import MSlot from '../slots/MSlot';
/**
 * Weather props
 *
 * @category Props
 */
export type WeatherProps = {
    /**
     * Weather REST请求key
     */
    akey: string;
    /**
     * 天气请求接口扩展
     * 默认实现了amap的weather rest服务请求
     */
    request?: WeatherReuqest;
    /**
     * 默认显示在屏幕右下角，可设置style自定义位置
     * @example
     * ```
     * { right: 5, bottom: 5 }
     * 或者 'right'
     * ```
     */
    style?: PositionSlot | StyleProp<ViewStyle>;
    /**
     * 自定义天气预报详情组件
     * @param {WeatherData} props
     * @returns
     */
    detailEle?: (props: WeatherData) => React.ReactElement | null;
};

/**
  @category Component
 */
const Weather = (props: WeatherProps) => {
    const { style } = props;
    const { map } = useContext(MapContext);
    const {
        akey,
        request = new AMapWeatherRequest({
            key: akey,
        }),
        detailEle: DettailEle = Detail,
    } = props;
    const geoCodeRequest = new AMapGeoRequest({ key: akey });
    const [realWeather, setRealWeather] = useState<RealWeatherObject[]>([]);
    const [forecastWeather, setForecastWeather] = useState<ForecastWheatherObject[]>([]);
    const [detailVisible, setDetailVisible] = useState(false);
    const slotRef = React.useRef<MSlotInterface>(null);

    const onRequest = async ({ type = 0 }) => {
        const center = await map.getCenter();
        const geoCodeData = await geoCodeRequest.decodeAddress({ key: akey, location: center });
        const result = await request.weather({
            key: akey,
            extensions: type ? 'all' : 'base',
            city: geoCodeData.regeocode.addressComponent.adcode,
        });
        if (type) {
            setForecastWeather(result.forecasts || []);
        } else {
            console.log('weather', result.lives);
            setRealWeather(result.lives || []);
        }

        slotRef.current?.refresh();
    };

    map.on('loaded', () => {
        // 查询实时天气
        onRequest({ type: 0 });
        // 查询天气预报
        onRequest({ type: 1 });
    });

    const onOpen = async () => {
        if (!forecastWeather.length) {
            onRequest({ type: 1 });
        }
        setDetailVisible(true);
    };

    const onClose = async () => {
        setDetailVisible(false);
    };

    return (
        <View>
            <MSlot ref={slotRef} style={style}>
                <Button type="outline" style={styles.button} size="md" onPress={onOpen}>
                    <Text>{(realWeather[0]?.temperature || '?') + '℃'}</Text>
                </Button>
            </MSlot>

            <BottomSheet modalProps={{}} isVisible={detailVisible}>
                <DettailEle data={{ lives: realWeather, forecasts: forecastWeather }} onClose={onClose} />
            </BottomSheet>
        </View>
    );
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 5,
        bottom: 20,
    },
    header: {
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#fff',
    },
});
