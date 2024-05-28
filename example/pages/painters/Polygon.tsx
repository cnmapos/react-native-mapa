import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Wrapper from '../../components/Wrapper';
import Mapa, {Position} from 'react-native-mapa';
import {Dialog, Text} from '@rneui/themed';
/**
 * Polygon props
 *
 * @category Props
 */
export type PolygonProps = {};

/**
  @category Component
 */
const Polygon = () => {
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
            <Mapa.PolygonPainter
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

export default Polygon;

const styles = StyleSheet.create({
    container: {},
});
