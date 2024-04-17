import { View, StyleSheet } from 'react-native';
import { MapContext } from '../MapContext';
import { Position } from '../../types';
import { ReactElement } from 'react';
import Mapbox from '@rnmapbox/maps';
/**
 * ImageSource props
 *
 * @category Props
 */
export type ImageSourceProps = {
    /**
     * source唯一标识
     */
    id: string;
    /**
     * 网络请求地址或者本地路径
     */
    url: string;
    /**
     * 坐标位置：左上、右上、右下、左下
     */
    coordinates: [Position, Position, Position, Position];

    children: ReactElement | ReactElement[];
};

/**
  @category Component
 */
const ImageSource = (props: ImageSourceProps) => {
    const { url, coordinates, id, children } = props;
    return (
        <Mapbox.ImageSource id={id} url={url} coordinates={coordinates}>
            {children}
        </Mapbox.ImageSource>
    );
};

export default ImageSource;

const styles = StyleSheet.create({
    container: {},
});
