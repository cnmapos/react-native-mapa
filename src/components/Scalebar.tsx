import { View } from 'react-native';
/**
 * Scalebar props
 *
 * @category Props
 */
export type ScalebarProps = {};

/**
  @category Component
 */
const Scalebar = (props: ScalebarProps) => {
    return (
        <Slot slot="rightTop" backgroundColor={'pink'}>
            <View />
        </Slot>
    );
};

export default Scalebar;
