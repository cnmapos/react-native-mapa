import { Text, View } from 'react-native';

/**
 * map.locationManager.addListener((location) => {})实时监听坐标信息，其中包含偏航角heading
 */

const Compass = (props: any) => {
    return (
        <View>
            <Text>指南针</Text>
        </View>
    );
};

export default Compass;
