import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    Image,
    Button,
} from 'react-native';
import {ListItem} from '@rneui/themed';

import RoutesConfig from '../routes';

const HomeScreen = ({navigation}: any) => {
    const jump = (item: any) => {
        navigation.navigate('Preview', {id: item.id, title: item.title});
    };
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={RoutesConfig}
                keyExtractor={(item, index) => item.title + index}
                renderItem={({item}) => (
                    <View>
                        <ListItem key={item.title} bottomDivider>
                            <Image style={styles.img} source={item.img} />
                            <ListItem.Content>
                                {/* <ListItem.Title>{item.title}</ListItem.Title> */}
                                <Button
                                    onPress={() => jump(item)}
                                    title={item.title}
                                />
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.header}>{title}</Text>
                )}
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

export {HomeScreen};
