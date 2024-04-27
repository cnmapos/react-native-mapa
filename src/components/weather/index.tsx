import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { ForecastWheatherObject, PositionStyle, RealWeatherObject, WeatherData, WeatherReuqest } from '../../mapa';
import React, { useContext, useState } from 'react';
import { BottomSheet, Text } from '@rneui/themed';
import { AMapGeoRequest, AMapWeatherRequest, MapContext } from '../../mapa';
import Detail from './Detail';
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
     * 定位图标是否在地图上显示
     * @defaultValue true
     */
    visible?: boolean;
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
     * 或者 'right-top'
     * ```
     */
    style?: PositionStyle; // | PositionSlot;
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
    const { map } = useContext(MapContext);
    const {
        akey,
        request = new AMapWeatherRequest({
            key: akey,
        }),
        visible = true,
        detailEle: DettailEle = Detail,
    } = props;
    const containerStyle: StyleProp<ViewStyle> = props.style
        ? { position: 'absolute', ...props.style }
        : styles.container;
    const geoCodeRequest = new AMapGeoRequest({ key: akey });
    const [realWeather, setRealWeather] = useState<RealWeatherObject[]>([]);
    const [forecastWeather, setForecastWeather] = useState<ForecastWheatherObject[]>([]);
    const [detailVisible, setDetailVisible] = useState(false);

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
            setRealWeather(result.lives || []);
        }
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

    return visible ? (
        <View style={containerStyle}>
            <Text onPress={onOpen}>
                {realWeather?.[0]?.city}:{realWeather[0]?.temperature}:{realWeather[0]?.weather}
            </Text>
            <BottomSheet modalProps={{}} isVisible={detailVisible}>
                <DettailEle data={{ lives: realWeather, forecasts: forecastWeather }} onClose={onClose} />
            </BottomSheet>
        </View>
    ) : null;
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
});
