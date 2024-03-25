import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { POIObject } from '../..';
import { Icon } from '@rneui/base';
import { globalStyles } from '../../modules/styles';
/**
 * POIList props
 *
 * @category Props
 */
export type POIListProps = {
    count: number;
    pois: POIObject[];
    keyboards: string;
    onPOIPress: (poi: POIObject) => void;
};

/**
  @category Component
 */
const POIList = (props: POIListProps) => {
    const { count, pois, keyboards, onPOIPress } = props;
    const onPOIItemPress = (poi: POIObject) => {
        onPOIPress?.(poi);
    };

    return (
        <View style={[styles.container, globalStyles.background]}>
            <View style={styles.header}>
                <Icon size={20} name="search" type="font-awesome" />
                <Text style={styles.headerKey}>{keyboards}</Text>
                <Text>约{count}条结果</Text>
            </View>
            <ScrollView style={styles.list}>
                {pois.slice(0, 10).map((p, i) => (
                    <TouchableOpacity
                        key={p.address + i}
                        onPress={() => {
                            onPOIItemPress(p);
                        }}
                    >
                        <View style={styles.listItem} key={p.name}>
                            <Icon name="location-outline" type="ionicon" />
                            <View style={[globalStyles.colFlex, globalStyles.rowPadding, { flex: 1 }]}>
                                <View style={[globalStyles.rowFlex]}>
                                    <Text style={[styles.headerText]}>{p.name}</Text>
                                    {i === 0 && <Text>距离最近</Text>}
                                </View>
                                <View style={[globalStyles.rowFlex, { alignItems: 'center' }]}>
                                    <Text style={[globalStyles.tipText]}>
                                        {p.type?.split(';')?.slice(1, 2)?.join('/') || ''}
                                    </Text>
                                    <View style={{ marginLeft: 10, flex: 1 }}>
                                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={[globalStyles.tipText]}>
                                            {p.address}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default POIList;

const styles = StyleSheet.create({
    container: {
        height: '90%',
        padding: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
    },
    headerKey: {
        color: '#00f',
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
    },
    headerText: {
        fontWeight: '400',
    },
    list: {
        width: '100%',
        flex: 1,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        width: '100%',
    },
});
