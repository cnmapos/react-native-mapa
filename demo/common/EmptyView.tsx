import { StyleSheet, Text } from 'react-native';

const EmptyView = () => {
    return <Text style={styles.container}>该demo尚未未实现</Text>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        marginHorizontal: 4,
        backgroundColor: '#fff',
        textAlign: 'center',
        alignItems: 'center',
    },
});
export default EmptyView;
