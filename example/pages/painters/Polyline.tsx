import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Wrapper from '../../components/Wrapper';
import Mapa, {Position} from 'react-native-mapa';
import {Dialog, Text} from '@rneui/themed';

/**
 * Polyline props
 *
 * @category Props
 */
export type PolylineProps = {};

/**
  @category Component
 */
const Polyline = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState<string>();
    const onFinish = (data: Position[]) => {
        setMessage(data.map(p => p.join(' ')).join(','));
        setModalVisible(true);
    };
    return (
        <Wrapper>
            <Mapa.Camera zoom={10} />
            <Mapa.PolylinePainter id={'test'} onFinish={onFinish} />
            <Dialog
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}>
                <Dialog.Title title="绘制结果" />
                <Text>{message} </Text>
            </Dialog>
        </Wrapper>
    );
};

export default Polyline;
