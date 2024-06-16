import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { POIObject } from '../..';
import { globalStyles } from '../../modules/styles';
import { normalizeDistance } from '../../utils/unit';
import { Divider } from '@rneui/themed';
/**
 * POIDetail props
 *
 * @category Props
 */
export type POIDetailProps = {
    /**
     * POI详细信息
     */
    poi: POIObject;
};

/**
  @category Component
 */
const POIDetail = (props: POIDetailProps) => {
    const { poi } = props;
    const distance = normalizeDistance(poi.distance!);
    return (
        <View pointerEvents={'box-none'} style={styles.container}>
            <View pointerEvents={'box-none'} style={styles.empty} />
            <View pointerEvents={'auto'} style={styles.detail}>
                <View style={[globalStyles.rowPadding]}>
                    <Text style={[{ fontSize: 16, marginBottom: 5 }]}>{poi.name}</Text>
                    <Text style={[globalStyles.tipText]}>{poi.type?.split(';')?.slice(1, 2)?.join('/') || ''}</Text>
                </View>
                <Divider style={[globalStyles.rowMargin]} />
                <View style={[{ marginBottom: 5 }]}>
                    <Text>
                        距你{distance.value}
                        {distance.unit}
                    </Text>
                </View>
                <View style={[]}>
                    <Text style={[globalStyles.tipText]}>{poi.address}</Text>
                </View>
                <Divider style={[globalStyles.rowMargin]} />
                <FlatList
                    data={poi.photos}
                    numColumns={2}
                    keyExtractor={(e) => e.url}
                    renderItem={(img) => <Image style={styles.image} source={{ uri: img.item.url }} />}
                />
            </View>
        </View>
    );
};

export default POIDetail;

const styles = StyleSheet.create({
    container: {
        height: '90%',
    },
    empty: {
        flex: 1,
    },
    detail: {
        backgroundColor: '#fff',
        maxHeight: '50%',
        paddingHorizontal: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    header: {},
    image: {
        aspectRatio: 1,
        flex: 1,
    },
});
