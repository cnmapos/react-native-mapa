import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, Image, Button } from 'react-native';
import { ListItem } from '@rneui/themed';

const DATA = [
    {
        title: '地图',
        data: [
            {
                title: '基础地图',
                img: require('../assets/basic.png'),
                id: 'BaseMap',
            },
            {
                title: '底图组件',
                img: require('../assets/basic.png'),
            },
            {
                title: '控件',
                img: require('../assets/basic.png'),
            },
            {
                title: 'POI搜索',
                img: require('../assets/basic.png'),
            },
        ],
    },
    {
        title: '图层',
        data: [
            {
                title: '栅格图层',
                img: require('../assets/basic.png'),
            },
            {
                title: '矢量图层',
                img: require('../assets/basic.png'),
            },
            {
                title: '热力图',
                img: require('../assets/basic.png'),
            },
        ],
    },
    {
        title: '绘制',
        data: [
            {
                title: '折线绘制',
                img: require('../assets/basic.png'),
            },
            {
                title: '圆形绘制',
                img: require('../assets/basic.png'),
            },
            {
                title: '多边形绘制',
                img: require('../assets/basic.png'),
            },
            {
                title: '贝塞尔曲线绘制',
                img: require('../assets/basic.png'),
            },
        ],
    },
];

const HomeScreen = ({ navigation }: any) => {
    const jump = (item: any) => {
        navigation.navigate('Preview', { id: item.id });
    };
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item.title + index}
                renderItem={({ item }) => (
                    <View>
                        <ListItem key={item.title} bottomDivider>
                            <Image style={styles.img} source={item.img} />
                            <ListItem.Content>
                                {/* <ListItem.Title>{item.title}</ListItem.Title> */}
                                <Button onPress={() => jump(item)} title={item.title} />
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        marginHorizontal: 4,
        backgroundColor: '#fff',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    img: {
        width: 26,
        height: 26,
    },
    header: {
        fontSize: 24,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingLeft: 10,
    },
});

export { HomeScreen };
