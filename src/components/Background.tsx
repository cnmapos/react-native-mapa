import { View, StyleSheet, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomSheet, Text, Header, Button, Avatar } from '@rneui/themed';
import { useState, useContext, useEffect } from 'react';
import { BackgroundLayer } from '@rnmapbox/maps';
import { MapContext } from '../modules/MapContext';
import { StyleIDs } from '../types';

export type BackgroundListItem = {
    /**
     * 背景图层唯一id
     */
    id: string;
    /**
     * 背景图层名称
     */
    name: string;
    /**
     * 背景图层style的请求URL地址
     */
    styleURL?: string;
    /**
     * 背景图层的style配置对象
     */
    styleJSON?: Object;
};

/**
 * Background props
 *
 * @category Props
 */
export type BackgroundProps = {
    /**
     * 背景图层列表
     * @defaultValue [StyleIDs.AmapVector, StyleIDs.AmapSatellite, StyleIDs.MapboxVector, StyleIDs.MapboxSatellite]
     */
    list?: BackgroundListItem[];
    defaultValue: BackgroundListItem.id;
};

/**
  @category Component
 */
const Background = (props: BackgroundProps) => {
    const [detailVisible, setDetailVisible] = useState(false);

    const onOpen = async () => {
        setDetailVisible(true);
    };
    const onClose = () => {
        setDetailVisible(false);
    };

    const { list, defaultValue } = props;
    const { map } = useContext(MapContext);

    // 背景组件初始化时、根据默认选中的value、修改mapview的style
    useEffect(() => {
        const { styleJSON, styleURL } = list.filter((item) => item.id === defaultValue)[0];
        map.updateStyle({ styleURL: styleURL || '', styleJSON: styleJSON || '' });
    }, [list, defaultValue, map]);

    return (
        <View>
            <Icon name="layers-outline" style={styles.icon} onPress={onOpen} />
            <BottomSheet modalProps={{}} isVisible={detailVisible} containerStyle={styles.containerStyle}>
                <BackgroundPanel {...props} onClose={onClose} />
            </BottomSheet>
        </View>
    );
};

export default Background;
const styles = StyleSheet.create({
    containerStyle: {
        height: '100%',
        position: 'relative',
    },
    icon: {
        fontSize: 26,
        width: 26,
        height: 26,
    },
});

type BackgroundPanelProps = BackgroundProps & {
    onClose: () => void;
};
const BackgroundPanel = (props: BackgroundPanelProps) => {
    const { list, defaultValue } = props;
    const { map } = useContext(MapContext);

    const [currentBg, setCurrentBg] = useState(defaultValue);

    useEffect(() => {
        setCurrentBg(defaultValue);
    }, [defaultValue]);

    const onClose = () => {
        props?.onClose();
    };

    const clickHandle = (id: string) => {
        const { styleJSON, styleURL } = props?.list?.filter((item) => item.id === id)[0];
        map.updateStyle({ styleURL: styleURL || '', styleJSON: styleJSON || '' });
        setCurrentBg(id);
    };

    return (
        <View style={backgroundPanelStyles.container}>
            <Header
                style={backgroundPanelStyles.header}
                backgroundColor={'#f7f7f7'}
                leftComponent={<Text style={backgroundPanelStyles.headerText}>图层</Text>}
                rightComponent={
                    <Button type="clear" size="sm" onPress={onClose}>
                        <Icon style={backgroundPanelStyles.headerCloseBtn} name="close-outline" />
                    </Button>
                }
            />
            <View>
                <View style={backgroundPanelStyles.backgroundItemList}>
                    {props?.list?.map((item) => {
                        return (
                            <ImageWithText
                                key={item.id}
                                id={item.id}
                                onClick={clickHandle}
                                style={
                                    (backgroundPanelStyles.backgroundItem,
                                    currentBg === item.id ? backgroundPanelStyles.selected : {})
                                }
                                imgUrl={item.url}
                                text={item.name}
                            />
                        );
                    })}
                </View>
            </View>
        </View>
    );
};

const ImageWithText = (props: { id: string; imgUrl: string; text: string; style: Object; onClick: Function }) => {
    return (
        <View style={{ ...ImageWithTextStyles.wrapper, ...props.style }}>
            <Pressable onPress={() => props?.onClick(props.id)}>
                {props.imgUrl ? (
                    <Image
                        style={{ ...ImageWithTextStyles.image }}
                        resizeMode="contain"
                        source={{
                            uri: props.imgUrl || '',
                        }}
                    />
                ) : (
                    <Avatar size={32} rounded title={props.text} containerStyle={{ backgroundColor: 'blue' }} />
                )}

                <Text>{props.text}</Text>
            </Pressable>
        </View>
    );
};

const ImageWithTextStyles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 50,
    },
});

const backgroundPanelStyles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    headerText: {
        fontWeight: '300',
        fontSize: 18,
    },
    headerCloseBtn: {
        fontSize: 18,
    },
    backgroundItemList: {
        flexDirection: 'row',
        flexWrap: 'wrap',

        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 4,
    },

    backgroundItem: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '25%',
    },

    selected: {
        backgroundColor: 'pink',
        // boxSizing: 'border-box',
        // borderStyle: 'solid',
        // borderColor: '#000',
    },
});
