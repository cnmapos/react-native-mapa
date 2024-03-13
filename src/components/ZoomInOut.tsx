import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native"
import { MapContext } from "../MapContext";
import { Button, Icon } from "@rneui/base";

/**
 * 地图放大、缩小组件
 */
type Props = any;

const ZoomInOut = (props: Props) => {
    const context = useContext(MapContext);
    const styles = StyleSheet.create({
        container: { 
            position: 'absolute', left: 5, bottom: 5
        }
    });
    
    return (
        <View style={styles.container}>
            <Icon name='plus'
                type='antdesign'
            />
            <Icon name='stepforward'
                type='antdesign'
            />
            <Button title="Hello World" /> 
        </View>
    )
}

export default ZoomInOut;