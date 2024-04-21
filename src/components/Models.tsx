import { StyleSheet } from 'react-native';
import Mapbox from '@rnmapbox/maps';
/**
 * Models props
 *
 * @category Props
 */
export type ModelsProps = {
    /**
     * 模型key和模型地址的键值对，模型定制为url或者asset id
     */
    models: { [key in string]: string | number };
};

/**
  @category Component
 */
const Models = (props: ModelsProps) => {
    const { models } = props;

    return <Mapbox.Models models={models} />;
};

export default Models;

const styles = StyleSheet.create({
    container: {},
});
