import { View, StyleSheet } from 'react-native';
/**
 * BottomSlot props
 *
 * @category Props
 */
export type BottomSlotProps = {
    children: React.ReactNode[];
};

/**
  @category Component
 */
const BottomSlot = (props: BottomSlotProps) => {
    return (
        <View style={styles.container}>
            {props.children.map((Child, index) => (
                <View key={index} style={styles.childWrap}>
                    {Child}
                </View>
            ))}
        </View>
    );
};

export default BottomSlot;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: '50%',
        bottom: 5,
        transform: [{ translateX: -50 }],

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    childWrap: {
        marginLeft: 2,
        marginRight: 2,
    },
});
