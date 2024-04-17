import {View, StyleSheet, Modal} from 'react-native';
import Wrapper from '../components/Wrapper';
import Mapa, {Position} from 'react-native-mapa';
import React, {useState} from 'react';
import {Button} from '@rneui/themed';
import {Text} from '@rneui/base';
import {SafeAreaView} from 'react-native-safe-area-context';

/**
  @category Component
 */
const Marker = () => {
    const position1: Position = [104.07572, 30.65089];
    const position2: Position = [104.07592, 30.60089];
    const [modalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState('');

    const onPress = (num: string) => {
        setMessage('你点击了Marker' + num);
        setModalVisible(true);
    };

    return (
        <Wrapper>
            <Mapa.Camera zoom={10} center={position1} />
            <Mapa.ZoomInOut />
            <Mapa.Marker position={position1} allowOverlap={true}>
                <View>
                    <Button onPress={() => onPress('1')}>
                        我是可点击的marker1
                    </Button>
                </View>
            </Mapa.Marker>
            <Mapa.Marker position={position2} allowOverlap={true}>
                <View>
                    <Button onPress={() => onPress('2')}>
                        我是可点击的marker2
                    </Button>
                </View>
            </Mapa.Marker>
            <Modal
                style={styles.modal}
                animationType="slide"
                transparent={false}
                visible={modalVisible}>
                <SafeAreaView>
                    <View style={styles.modalContent}>
                        <Text>{message} </Text>
                        <Button onPress={() => setModalVisible(false)}>
                            关闭
                        </Button>
                    </View>
                </SafeAreaView>
            </Modal>
        </Wrapper>
    );
};

export default Marker;

const styles = StyleSheet.create({
    container: {},
    modal: {
        backgroundColor: '#F00',
    },
    modalContent: {
        marginTop: 200,
    },
});
