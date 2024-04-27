import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
/**
 * DrawControl props
 *
 * @category Props
 */
export type DrawControlProps = {
    onUndo: () => void;
    onAdd: () => void;
    onFinish: () => void;
};

/**
  @category Component
 */
const DrawControl = (props: DrawControlProps) => {
    const { onUndo, onAdd, onFinish } = props;

    return (
        <View style={styles.container}>
            <Button onPress={onUndo}>撤销</Button>
            <Button onPress={() => onAdd()}>添加</Button>
            <Button onPress={onFinish}>完成</Button>
        </View>
    );
};

export default DrawControl;

const styles = StyleSheet.create({
    container: {},
});
