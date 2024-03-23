import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';
import { MapContext } from '../MapContext';
import { useRef, useState } from 'react';
import { BottomSheet, Button, Icon, ListItem, SearchBar } from '@rneui/themed';
/**
 * POIFinder props
 *
 * @category Props
 */
export type POIFinderProps = {
    placeholder?: string;
};

/**
 *
 *
 * https://blog.csdn.net/qq_34273059/article/details/98943840
 * 实现方案：根据手势信息更新面板位置
 * 1.搜索框默认显示在下部，当获取焦点后，设置搜索面板visible为true
 * 2.当拖拽搜索面板时，根据手势信息实时更新搜索面板的大小、位置
 * 3.在拖拽过程中地图组件位置需要跟着调整，当拖拽到屏幕50%时，地图组件全部隐藏
 *
 * 计划：
 * 优先实现搜索功能，先搜索框固定在底部，获取焦点搜索面板100%窗口显示，点击回退按钮再返回到原始状态。
 *
  @category Component
 */
const POIFinder = (props: POIFinderProps) => {
    const { placeholder } = props;
    const searchRef = useRef<any>();
    const [text, setText] = useState<string>('');
    const [cardVisible, setCardVisible] = useState<boolean>(false);
    const onFocus = () => {
        setCardVisible(true);
    };
    const onCancel = () => {
        setText('');
        setCardVisible(false);
        searchRef.current?.blur();
    };
    return (
        <View style={{ ...styles.container, ...(cardVisible ? styles.containerFull : {}) }}>
            <SearchBar
                ref={searchRef as any}
                containerStyle={styles.searchbar}
                inputContainerStyle={styles.input}
                showCancel={false}
                placeholder={placeholder}
                onFocus={onFocus}
                searchIcon={
                    cardVisible ? (
                        <Icon onPress={onCancel} name="chevron-left" type="font-awesome" />
                    ) : (
                        <Icon name="search" type="font-awesome" />
                    )
                }
            />
            {cardVisible && <View style={styles.searchcard} />}
        </View>
    );
};

export default POIFinder;

const screen = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 5,
        margin: 5,
        width: screen.width - 10,
        alignItems: 'stretch',
        backgroundColor: '#fff',
    },
    containerFull: {
        height: screen.height - 10,
        bottom: undefined,
        top: 5,
    },
    searchbar: {
        backgroundColor: '#fff',
        borderWidth: 0,
    },
    input: {
        backgroundColor: '#fff',
    },
    searchcard: {
        flex: 1,
    },
});
