import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const AlertButton = ({ onPress, ButtonTitle }: { onPress: any, ButtonTitle: any }) => {
    return (
        <View style={styles.buttonContainer}>
            
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.text}>{ButtonTitle}</Text>
                </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 250,
        alignItems: 'center',
        backgroundColor: '#ff3300',
        borderRadius: 50,
        shadowColor: 'red',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 7, 
    },

    button: {
        padding: 15,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Lato-Black'
    },
});

export default AlertButton;
