import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapContext } from '../MapContext';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = any;

/**
 * 地图放大、缩小组件
 *
 * @category Component
 */
const ZoomInOut = (props: Props) => {
    const context = useContext(MapContext);
    console.log(context);
    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            left: 5,
            bottom: 5,
        },
    });

    return (
        <View style={styles.container}>
            <Text>
                <Icon name="rocket" size={30} color="#900" />;
            </Text>
            <Icon.Button name="facebook" backgroundColor="#3b5998" />
        </View>
    );
};

export default ZoomInOut;
