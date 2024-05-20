import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { MapContext } from '../modules/MapContext';
import { LocationEvent } from '../mapa';

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
    compass: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#bfbfbf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrow: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderStyle: 'solid',
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red',
    },
});

/**
 * 指南针组件，当地图加载完成后开始工作，针头指向正北方向。可适配：通过参数传递替换组件的图标/样式。
  @category Component
 */
const Compass = (props: CompassProps) => {
    const [heading, setHeading] = useState<number>(0);
    const { map } = useContext(MapContext);

    const onLocationChange = (event: LocationEvent) => {
        //
        console.log(event.coords.heading, '+++++++++++++++', event);
        if (event.coords && event.coords.heading) {
            setHeading(event.coords.heading);
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
        <View style={[styles.compass, { transform: [{ rotate: `${heading}deg` }] }]}>
            <View style={[styles.arrow]} />
            <Text style={styles.heading}>N</Text>
        </View>
    );
};

export default Compass;
