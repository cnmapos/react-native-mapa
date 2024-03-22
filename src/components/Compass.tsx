import { StyleSheet, Text, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { useEffect, useState } from 'react';
import { Magnetometer } from 'expo-sensors';

/**
 * Compass props
 *
 * @category Props
 */
export type CompassProps = {};

const styles = StyleSheet.create({
    compassContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 25,
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
});

/**
 * 指南针组件，当地图加载完成后开始工作，针头指向正北方向。可适配：通过参数传递替换组件的图标/样式。
  @category Component
 */
const Compass = (props: CompassProps) => {
    const [heading, setHeading] = useState<number>(0);

    useEffect(() => {
        const subscription = Magnetometer.addListener((event) => {
            // const newHeading = result.magHeading;
            const { y, x } = event;
            const newHeading = Math.atan2(y, x) * (180 / Math.PI);
            setHeading(newHeading);
        });

        Magnetometer.setUpdateInterval(100); // 设置更新频率

        return () => {
            subscription.remove();
        };
    }, []);

    // TODO: 本周沟通！！！
    // 1、map 需要提供运行时注册回调的能力，比如：地图初始化完成：通知各组件注册的回调函数获取数据！！
    // 2、底部组件不能在非 Map 下的应用，因此内部实际可以考虑使用 Mapbox 提供的基础组件进行封装！！！

    return (
        <Mapbox.MarkerView coordinate={[]} anchor={{ x: 0.5, y: 0.5 }}>
            <View style={[styles.compassContainer, { transform: [{ rotate: `${360 - heading}deg` }] }]}>
                <Text style={styles.heading}>N</Text>
            </View>
        </Mapbox.MarkerView>
    );
};

export default Compass;
