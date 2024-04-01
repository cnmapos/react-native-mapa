import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

const ContainerSlot = ({ children }) => {
    const [bottomCenterHeight, setBottomCenterHeight] = useState(0);
    const [bottomOffset, setBottomOffset] = useState(0);

    const handleBottomCenterLayout = (event) => {
        const { height } = event.nativeEvent.layout;
        setBottomCenterHeight(height);
    };

    return (
        <View style={styles.container}>
            <View style={styles.bottomLeft} onLayout={(event) => setBottomOffset(event.nativeEvent.layout.height)}>
                {children.bottomLeft}
            </View>
            <View style={styles.bottomRight}>{children.bottomRight}</View>
            <View style={[styles.bottomCenter, { bottom: bottomOffset }]} onLayout={handleBottomCenterLayout}>
                {children.bottomCenter}
            </View>
        </View>
    );
};

const App = () => {
    return (
        <ContainerSlot>
            {{
                bottomLeft: <View style={styles.item}>Bottom Left</View>,
                bottomRight: <View style={styles.item}>Bottom Right</View>,
                bottomCenter: <View style={styles.item}>Bottom Center</View>,
            }}
        </ContainerSlot>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    bottomLeft: {
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
    bottomRight: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    bottomCenter: {
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -50 }],
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
    },
});

export default App;
