import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const Topic = ({ Title }: { Title: any}) => {
   

    return (
        <View style={[styles.container]}>
            <Text style={styles.title1}>{Title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingLeft: 20,
        paddingBottom: 0,
    
    },
    title1:{
        fontSize: 15,
        fontFamily: 'Lato-Black',
        color: 'black',
     
    },
    
});

export default Topic