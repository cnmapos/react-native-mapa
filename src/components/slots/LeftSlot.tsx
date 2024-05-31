import { View, StyleSheet } from 'react-native';
/**
 * LeftSlot props
 *
 * @category Props
 */
export type LeftSlotProps = {
    children: React.ReactNode[];
};

/**
  @category Component
 */
const LeftSlot = (props: LeftSlotProps) => {
    console.log('LeftSlot', props);

    return (
        <View style={styles.container}>
            {props.children?.map((Child, index) => (
                <View key={index} style={styles.childWrap}>
                    {Child}
                </View>
            ))}
        </View>
    );
};

export default LeftSlot;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 5,
        top: 5,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    childWrap: {
        marginTop: 1,
        marginBottom: 1,
    },
});
