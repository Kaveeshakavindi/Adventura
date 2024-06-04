import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Feather';

const MainHeader = ({ Title }: { Title: any }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { marginTop: insets.top, padding:20 }]}>
            <Icon name='align-left' size={30} color={'black'} />
            <Text style={styles.title}>{Title}</Text>
            <Icon name='bell' size={30} color={'black'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       
        top:0,
        width:'100%',
        zIndex: 1, // Ensures it's above other elements
        backgroundColor: 'white', // You might want to add a background color
        paddingHorizontal: 20,
        
    },
    title:{
        fontSize: 24,
        fontFamily: 'Alatsi-Regular',
        color: '#0cada8',
     
    },
});

export default MainHeader