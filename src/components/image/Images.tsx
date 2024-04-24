import Mapbox from '@rnmapbox/maps';
import { ReactElement } from 'react';
import { ImageSourcePropType } from 'react-native';
import Image from './Image';
import React from 'react';

type TypedReactNode<T> = ReactElement<T> | Array<TypedReactNode<T>> | never;
/**
 * Images props
 *
 * @category Props
 */
export type ImagesProps = {
    /**
     * 图像来源，支持格式
     * {uri: 'http://...'} or require('image.png') or import 'image.png'
     */
    images?: { [key in string]: string | ImageSourcePropType };
    /**
     * 当图层在渲染图片时未找到imageKey对应的图像，则触发onImageMissing事件，可用于更新动态更新images集合
     *
     * @example
     * ```
     *  <Images
     *    images={images}
     *     onImageMissing={(key) => {
     *       if (key != 'pin-known') {
     *         this.setState({
     *           images: { ...this.state.images, [imageKey]: pinIcon },
     *         });
     *       }
     *     }}
     *   >
     * ```
     */
    onImageMissing?: (imageKey: string) => void;
    children?: TypedReactNode<typeof Image>;
};

/**
  @category Component
 */
const Images = (props: ImagesProps) => {
    const { images, children, onImageMissing } = props;
    // Mapbox.Images限制了children只能为Mapbox.Image类型
    const convertedChildren = React.Children.toArray(children).map((c: any) => <Mapbox.Image {...c.props} />);
    return (
        <Mapbox.Images images={images} onImageMissing={onImageMissing}>
            {convertedChildren}
        </Mapbox.Images>
    );
};

export default Images;
