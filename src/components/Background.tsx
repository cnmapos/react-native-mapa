import { View, StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomSheet, Text, Header, Button, Avatar } from '@rneui/themed';
import { useState, useContext, useEffect } from 'react';
import { BackgroundLayer } from '@rnmapbox/maps';
import { MapContext } from '../modules/MapContext';
import { StyleIDs } from '../types';

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth * 0.25; // 25% 的屏幕宽度

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
    /**
     * logo图像地址
     */
    logoUrl?: string;
};

/**
 * Background props
 *
 * @category Props
 */
export type BackgroundProps = {
    /**
     * 背景图层列表
     * @defaultValue []
     */
    list: BackgroundListItem[];
    /**
     * 背景图层列表
     * @defaultValue ''
     */
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

    const { list = [], defaultValue = '' } = props;
    const { map } = useContext(MapContext);
    const [currentBg, setCurrentBg] = useState(defaultValue);
    useEffect(() => {
        setCurrentBg(defaultValue);
    }, [defaultValue]);

    // 背景组件初始化时、根据默认选中的value、修改mapview的style
    useEffect(() => {
        const target = list.filter((item) => item.id === defaultValue)?.[0];
        if (!target) {
            return;
        }
        const { styleJSON, styleURL } = target;
        map.updateStyle({ styleURL: styleURL || '', styleJSON: styleJSON || '' });
    }, [list, defaultValue, map]);

    const backDropClickHandle = () => {
        // 点击背景、需要关闭bottomsheet
        setDetailVisible(false);
    };
    return (
        <View>
            <Icon name="layers-outline" style={styles.icon} onPress={onOpen} />
            <BottomSheet
                onBackdropPress={backDropClickHandle}
                modalProps={{}}
                isVisible={detailVisible}
                containerStyle={styles.containerStyle}
            >
                <BackgroundPanel {...props} currentBg={currentBg} setCurrentBg={setCurrentBg} onClose={onClose} />
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
    setCurrentBg: (id: string) => void;
};
const BackgroundPanel = (props: BackgroundPanelProps) => {
    const { list, currentBg, setCurrentBg, onClose } = props;
    const { map } = useContext(MapContext);

    const closeHandle = () => {
        onClose();
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
                    <Button type="clear" size="sm" onPress={closeHandle}>
                        <Icon style={backgroundPanelStyles.headerCloseBtn} name="close-outline" />
                    </Button>
                }
            />
            <View style={backgroundPanelStyles.backgroundItemList}>
                {props?.list?.map((item) => {
                    return (
                        <ImageWithText
                            key={item.id}
                            id={item.id}
                            onClick={clickHandle}
                            style={backgroundPanelStyles.backgroundItem}
                            highlight={currentBg === item.id}
                            imgUrl={item.logoUrl}
                            text={item.name}
                        />
                    );
                })}
            </View>
        </View>
    );
};

const ImageWithText = (props: {
    id: string;
    imgUrl: string;
    text: string;
    style: Object;
    onClick: Function;
    highlight: boolean;
}) => {
    return (
        <Pressable onPress={() => props?.onClick(props.id)}>
            <View style={{ ...ImageWithTextStyles.wrapper, ...props.style }}>
                {props.imgUrl ? (
                    <Image
                        style={
                            props.highlight
                                ? { ...ImageWithTextStyles.image, ...ImageWithTextStyles.imageHightlight }
                                : ImageWithTextStyles.image
                        }
                        resizeMode="contain"
                        source={{
                            uri: props.imgUrl,
                        }}
                    />
                ) : (
                    <Avatar
                        title={props.text}
                        size={40}
                        containerStyle={
                            props.highlight
                                ? { ...ImageWithTextStyles.avatarContainer, ...ImageWithTextStyles.avatarHighlight }
                                : ImageWithTextStyles.avatarContainer
                        }
                    />
                )}
                <Text
                    style={
                        props.highlight
                            ? { ...ImageWithTextStyles.text, ...ImageWithTextStyles.textHighlight }
                            : ImageWithTextStyles.text
                    }
                >
                    {props.text}
                </Text>
            </View>
        </Pressable>
    );
};

const ImageWithTextStyles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 4,
    },
    imageHightlight: {
        borderWidth: 0.8,
        borderColor: '#40a6f9',
    },
    avatarContainer: {
        backgroundColor: '#BDBDBD',
        borderRadius: 4,
    },
    avatarHighlight: {
        borderStyle: 'solid',
        borderWidth: 0.8,
        borderColor: '#40a6f9',
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        marginTop: 4,
    },

    textHighlight: {
        color: '#008dff',
    },
});

const backgroundPanelStyles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
        display: 'block',
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
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingTop: 10,
    },

    backgroundItem: {
        width: itemWidth,
        marginBottom: 10,
    },
});
