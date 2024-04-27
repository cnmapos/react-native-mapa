import Mapbox from '@rnmapbox/maps';
import React, { ReactElement, forwardRef, memo } from 'react';
/**
 * Image props
 *
 * @category Props
 */
export type ImageProps = {
    /**
     * 图像key
     */
    name: string;
    /**
     * 图像缩放因子
     *
     * @defaultValue 1;
     */
    scale?: number;
    children: ReactElement;
};

/**
  @category Component
 */
const Image = memo(
    forwardRef((props: ImageProps, ref: any) => {
        const { name, scale = 1, children } = props;
        return (
            <Mapbox.Image name={name} scale={scale}>
                {children}
            </Mapbox.Image>
        );
    })
);

Image.displayName = 'Image';

export default Image;
