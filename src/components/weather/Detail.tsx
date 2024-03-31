import { View, StyleSheet } from 'react-native';
import { WeatherData } from '../../types';
import { Header, Icon, ListItem, Text } from '@rneui/themed';
/**
 * Detail props
 *
 * @category Props
 */
export type DetailProps = {
    /**
     * 天气数据
     */
    data: WeatherData;
    /**
     * 详情页面关闭事件
     * @param e
     * @returns
     */
    onClose: (e: { data: WeatherData }) => void;
};

/**
  @category Component
 */
const Detail = (props: DetailProps) => {
    const { onClose } = props;
    const { forecasts } = props.data;

    const onCloseClick = () => {
        onClose?.({ data: props.data });
    };

    return (
        <View>
            <Header
                containerStyle={styles.header}
                rightComponent={
                    <Text>
                        <Icon onPress={onCloseClick} name="close" type="font-awesome" />
                    </Text>
                }
            />
            {forecasts?.map((f, i) => (
                <View key={i}>
                    <ListItem>
                        <ListItem.Content>
                            <ListItem.Title>
                                {f.province}:{f.city}
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    {f.casts?.map((c, j) => (
                        <ListItem key={c.week}>
                            <ListItem.Content>
                                <ListItem.Title>
                                    {c.date}, {c.dayweather}, {c.nightweather}
                                </ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))}
                </View>
            ))}
        </View>
    );
};

export default Detail;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 5,
        bottom: 20,
    },
    header: {
        backgroundColor: '#fff',
    },
});
