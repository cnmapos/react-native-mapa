import {StyleSheet} from 'react-native';
import Wrapper from '../../components/Wrapper';
import React, {useState} from 'react';
import Mapa, {Position} from 'react-native-mapa';
import {Dialog, Text} from '@rneui/themed';

/**
  @category Component
 */
const Rectangle = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState<string>();
    const onFinish = (data: Position[]) => {
        setMessage(data.map(p => p.join(' ')).join(','));
        setModalVisible(true);
    };
    const onError = (error: {message: string}) => {
        setMessage(error.message);
        setModalVisible(true);
    };

    return (
        <Wrapper>
            <Mapa.Camera zoom={10} />
            <Mapa.RectanglePainter
                id={'test'}
                onFinish={onFinish}
                onError={onError}
            />
            <Dialog
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}>
                <Dialog.Title title="绘制结果" />
                <Text>{message} </Text>
            </Dialog>
        </Wrapper>
    );
};

export default Rectangle;
