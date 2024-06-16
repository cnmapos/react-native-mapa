import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { MapContext } from '../modules/MapContext';
import { LocationEvent, PositionSlot } from '../mapa';
import MSlot from './slots/MSlot';

/**
 * Compass props
 *
 * @category Props
 */
export type CompassProps = {
    /**
     * 设置图标显示位置
     *
     * @defaultValue 'right'
     *
     * @example
     * ```
     * { right: 5, bottom: 5 }
     * 或者 'right'
     * ```
     */
    style?: PositionSlot | StyleProp<ViewStyle>;
};

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
        color: '#fff',
    },
    compass: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#bfbfbf',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c2c2c',
    },
    arrow: {
        width: 0,
        height: 0,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 20,
        borderStyle: 'solid',
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#fff',
    },
});

/**
 * 指南针组件，当地图加载完成后开始工作，针头指向正北方向。可适配：通过参数传递替换组件的图标/样式。
  @category Component
 */
const Compass = (props: CompassProps) => {
    const { style } = props;
    // const [heading, setHeading] = useState<number>(0);
    const [rotateStyle, setRotateStyle] = useState<any>(
        StyleSheet.create({
            ratate: {
                transform: [
                    {
                        rotate: '0deg',
                    },
                ],
            },
        })
    );
    const { map } = useContext(MapContext);

    const onLocationChange = (event: LocationEvent) => {
        if (event.coords && event.coords.heading) {
            // setHeading(event.coords.heading);
            const rotateDeg = `${event.coords.heading * (180 / Math.PI)}deg`;

            setRotateStyle(
                StyleSheet.create({
                    ratate: {
                        transform: [
                            {
                                rotate: rotateDeg,
                            },
                        ],
                    },
                })
            );
        }
    };

    useEffect(() => {
        map.locationManager.on('locationChange', onLocationChange);
        return () => {
            // subscription.remove();
            //map.locationManager.off('locationChange', onLocationChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <MSlot style={style}>
            <View style={[styles.compass, rotateStyle.rotate]}>
                <View style={[styles.arrow]} />
                <Text style={styles.heading}>N</Text>
                <Text />
            </View>
        </MSlot>
    );
};

export default Compass;
