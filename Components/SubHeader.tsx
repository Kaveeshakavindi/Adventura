import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SubHeader = ({ Title1, Title2 }: { Title1: any, Title2: any }) => {
   

    return (
        <View style={[styles.container]}>
            <Text style={styles.title1}>{Title1}</Text>
            <Text style={styles.title2}>{Title2}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingBottom: 20
        
    },
    title1: {
        fontFamily: 'Lato-Black',
        fontSize: 20,
        color: 'black',
        width: '70%',
        paddingTop: 0,
        paddingLeft: 10
    },
    title2: {
        fontFamily: 'Lato-Black',
        fontSize: 20,
        color: 'black',
        width: '70%',
        paddingLeft: 10,
        paddingBottom: 0
    },
});

export default SubHeader