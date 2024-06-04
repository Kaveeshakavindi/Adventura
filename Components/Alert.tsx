import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import AlertButton from './AlertButton';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const Alert = ({ title, description, onPress, ButtonTitle }: { title: any, description: any, onPress: any, ButtonTitle: any }) => {
    const { width, height } = Dimensions.get('screen');

    return (
        <View style={[styles.container, { width: width * 0.8, top: height / 4 }]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <AlertButton onPress={onPress} ButtonTitle={ButtonTitle} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 10,
        alignSelf: 'center',
        padding: 50,
        borderRadius: 20,
        shadowOpacity: 0.1,
        shadowColor: 'red',
        zIndex: 1,
        position: 'absolute',
    },

    title: {
        fontFamily: 'Lato-Bold',
        color: '#ff3300',
        fontSize: 20,
        alignItems: 'center',
        padding: 15
    },
    description: {
        fontFamily: 'Lato-Regular',
        paddingTop: 0,
        padding: 20,
        width: 250,
        textAlign: 'center'
    }
});

export default Alert