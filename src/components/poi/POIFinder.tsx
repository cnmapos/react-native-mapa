import {
    Dimensions,
    KeyboardEvent,
    StyleSheet,
    Text,
    TextInputSubmitEditingEventData,
    View,
    ViewStyle,
} from 'react-native';
import { MapContext } from '../../MapContext';
import { useContext, useRef, useState } from 'react';
import { Icon, SearchBar } from '@rneui/themed';
import { AMapPOI } from '../../modules/POI';
import _ from 'lodash';
import { POIProperties, SearchNearData, searchMaxRadius } from '../../types';
import POIList from './POIList';
import { MarkerView } from '@rnmapbox/maps';
import POIDetail from './POIDetail';

enum POIModeEnum {
    // 查询模式
    Default = 0,
    // 列表展示模式
    Search = 1,
    // 详情模式
    Detail = 2,
}

/**
 * POIFinder props
 *
 * @category Props
 */
export type POIFinderProps = {
    /**
     * 搜索框默认提示信息
     */
    placeholder?: string;
    /**
     * 搜索半径，单位m
     */
    radius?: number;
    /**
     * POI REST请求密钥信息
     */
    akey: string;

    /**
     * POI请求延迟周期
     * 默认100ms
     */
    debounceDuraton?: number;
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
    const { map } = useContext(MapContext);
    const { placeholder, akey, debounceDuraton = 100 } = props;
    let { radius = 5000 } = props;
    if (radius > searchMaxRadius) {
        radius = 5000;
    }
    const searchRef = useRef<any>();
    const poiClient = new AMapPOI();
    const [text, setText] = useState<string>('');
    const [pois, setPois] = useState<SearchNearData>();
    const [selectedPOI, setSelectedPOI] = useState<POIProperties>();
    // const [cardVisible, setCardVisible] = useState<boolean>(false);
    const [currentMode, setCurrentMode] = useState<POIModeEnum>(POIModeEnum.Default);
    const onFocus = () => {
        setCurrentMode(POIModeEnum.Search);
    };
    const onCancel = () => {
        if (text) {
            setText('');
        } else {
            setCurrentMode(POIModeEnum.Default);
            searchRef.current?.blur();
        }
    };
    const searchNear = _.debounce(async (keyboards: string) => {
        const location = await map.getCenter();
        const result = await poiClient.searchNear({
            key: akey,
            keywords: keyboards,
            location: location.map((c) => c.toFixed(6)).join(','),
            radius,
        });
        console.log('result', result);
        if (!result?.code) {
            setPois(result?.data);
        }
    }, debounceDuraton);
    const onChangeText = async (val: string) => {
        setText(val);
        if (currentMode === POIModeEnum.Search) {
            // val && searchNear(val);
        }
    };

    const onSearchPress = async (val: string) => {
        text && searchNear(text);
    };

    const onSearchSubmit = (e: any) => {
        text && searchNear(text);
    };

    const onClosePress = async () => {
        setText('');
        setCurrentMode(POIModeEnum.Search);
    };

    const onPOIPress = (poi: POIProperties) => {
        if (poi) {
            searchRef.current?.blur();
            map.setCenter(poi.location);
            setSelectedPOI(poi);
            setText(poi.name);
            setCurrentMode(POIModeEnum.Detail);
        }
    };

    return (
        <>
            <View
                pointerEvents={'box-none'}
                style={[
                    styles.container,
                    currentMode === POIModeEnum.Search && styles.containerFull,
                    currentMode === POIModeEnum.Detail && styles.containerDetail,
                ]}
            >
                <SearchBar
                    ref={searchRef as any}
                    containerStyle={styles.searchbar}
                    inputContainerStyle={styles.input}
                    value={text}
                    showCancel={false}
                    placeholder={placeholder}
                    onFocus={onFocus}
                    onChangeText={onChangeText}
                    onSubmitEditing={onSearchSubmit}
                    readOnly={currentMode === POIModeEnum.Detail}
                    clearIcon={
                        currentMode === POIModeEnum.Detail ? (
                            <Icon onPress={onClosePress as any} name="close" type="font-awesome" />
                        ) : undefined
                    }
                    searchIcon={
                        currentMode === POIModeEnum.Search ? (
                            <Icon onPress={onCancel} name="chevron-left" type="font-awesome" />
                        ) : currentMode === POIModeEnum.Default ? (
                            <Icon name="search" type="font-awesome" />
                        ) : (
                            <Icon name="location-outline" type="ionicon" />
                        )
                    }
                />
                {currentMode === POIModeEnum.Search && (
                    <View style={styles.searchcard}>
                        <POIList
                            keyboards={text}
                            count={pois?.count || 0}
                            pois={pois?.pois || []}
                            onPOIPress={onPOIPress}
                        />
                    </View>
                )}
                {currentMode === POIModeEnum.Detail && (
                    <View pointerEvents={'box-none'} style={styles.searchcard}>
                        <POIDetail poi={selectedPOI!} />
                    </View>
                )}
            </View>

            {currentMode == POIModeEnum.Detail && (
                <MarkerView coordinate={selectedPOI!.location}>
                    <Text>
                        <Icon size={40} color={'#00F'} name="location" type="ionicon" />
                    </Text>
                </MarkerView>
            )}
        </>
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
        // margin: 5,
        width: '100%',
        alignItems: 'stretch',
    },
    containerFull: {
        height: screen.height - 10,
        bottom: undefined,
        top: 5,
    },
    containerDetail: {
        backgroundColor: 'transparent',
        height: screen.height - 10,
        bottom: undefined,
        top: 5,
    },
    searchbar: {
        backgroundColor: '#fff',
        borderWidth: 0,
        marginHorizontal: 5,
        borderRadius: 5,
        marginBottom: 5,
        borderBlockColor: '#FFF',
    },
    input: {
        backgroundColor: '#fff',
    },
    searchcard: {
        flex: 1,
        width: '100%',
    },
});
