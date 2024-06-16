import { View, StyleSheet } from 'react-native';
/**
 * RightSlot props
 *
 * @category Props
 */
export type RightSlotProps = {
    children: React.ReactNode[];
};

/**
  @category Component
 */
const RightSlot = (props: RightSlotProps) => {
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

export default RightSlot;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 5,
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
