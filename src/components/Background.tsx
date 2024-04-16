import { View, StyleSheet, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomSheet, Text, Header, Button } from '@rneui/themed';
import { useState } from 'react';
import { BackgroundLayer } from '@rnmapbox/maps';
/**
 * Background props
 *
 * @category Props
 */
export type BackgroundProps = {};

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
    return (
        <View>
            <Icon name="layers-outline" style={styles.icon} onPress={onOpen} />
            <BottomSheet modalProps={{}} isVisible={detailVisible} containerStyle={styles.containerStyle}>
                <BackgroundPanel onClose={onClose} />
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

const BackgroundPanel = (props: any) => {
    const onClose = () => {
        props?.onClose();
    };

    const list = [
        {
            id: 'baidu',
            url: 'https://sj-fd.zol-img.com.cn/g5/M00/0D/00/ChMkJlf69rOIOrcpAABcJ73TnMcAAWxLwEXVeQAAFw_713.jpg',
            text: '百度地图',
        },
        {
            id: 'gaode',
            url: 'https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4',
            text: '高德地图',
        },
        {
            id: 'wx1',
            url: 'https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4',
            text: '卫星地图',
        },
        {
            id: 'wx2',
            url: 'https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4',
            text: '卫星地图2',
        },
    ];

    const clickHandle = (id: string) => {
        console.log(id);
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
                    {list.map((item) => {
                        return (
                            <ImageWithText
                                key={item.id}
                                id={item.id}
                                onClick={clickHandle}
                                style={backgroundPanelStyles.backgroundItem}
                                imgUrl={item.url}
                                text={item.text}
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
                <Image
                    style={{ ...ImageWithTextStyles.image }}
                    resizeMode="contain"
                    source={{
                        uri: props.imgUrl,
                    }}
                />
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
});
