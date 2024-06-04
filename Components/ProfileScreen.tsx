import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const ProfileScreen = ({ user }: { user: any }) => {
    const { width, height } = Dimensions.get('screen');

    const Category = ({ title, icon }: { title: any, icon: any }) => {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'transparent',
                height: height / 12,
                width: '100%',
                justifyContent: 'space-between',
                paddingRight: 30,
                paddingLeft: 30
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
                    <Icon name={icon} size={15} color={'black'} />
                    <Text style={styles.categoryTitle}>{title}</Text>
                </View>
                <Icon name='angle-right' size={15} color={'black'} />
            </TouchableOpacity>

        );
    }
    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 30, backgroundColor: 'white' }}>
                <View>
                    <Image source={user.image} style={styles.image} />
                </View>
                <View style={{ width: 200, gap: 7 }}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.tel}>{user.tel}</Text>
                    <Text style={styles.occupation}>{user.occupation}</Text>

                </View>
            </View>
            <View style={[styles.categoryContainer, { width: width * 0.9, alignSelf: 'center', elevation: 5 }]}>
                <Category title='Notifications' icon={'bell'} />
                <Category title='Privacy' icon={'lock'} />
                <Category title='Security' icon={'shield'} />
                <Category title='Account' icon={'user'} />
                <Category title='Help' icon={'question'} />
                <Category title='About' icon={'info'} />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    image: {
        height: 70,
        width: 70,
        borderRadius: 10
    },
    name: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: 'black'
    },
    tel: {
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        color: 'black'
    },
    occupation: {
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        color: 'grey'
    },
    categoryTitle: {
        fontSize: 15,
        fontFamily: 'Lato-Bold'
    },
    categoryContainer: {
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        flex: 1,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default ProfileScreen;