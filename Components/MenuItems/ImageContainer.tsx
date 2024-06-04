import React from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ImageContainer = ({ imageSource, title, sub_title, rating }: { imageSource: any, title: any, sub_title: any, rating: any }) => {


    return (
        <View style={styles.container}>
            <ImageBackground source={imageSource} style={styles.image}>
                <View style={styles.allTextContainer}>
                    <View style={styles.ratingContainer}>
                        <Icon name='star' size={15} color={'#FFCA28'} style={{padding:5}}/>
                        <Text style={styles.rating}>{rating}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{sub_title}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        margin: 30,
        height: 400
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        width: 272,
        height: 355
    },
    allTextContainer: {
        position:'relative'
    },
    ratingContainer: {
        backgroundColor: 'white',
        width: 68,
        height: 26,
        left:170,
        top:260,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
       flexDirection: 'row',
        zIndex:2,
    },
    rating: {
        color: 'black',
        fontSize: 12,
        fontFamily:'Lato-Bold',
    },
    textContainer: {
        backgroundColor: 'white',
        bottom: 0,
        left: 12,
        top: 245,
        justifyContent: 'center',
        padding: 10,
        width: 245,
        height: 69,
        borderRadius: 13,
        zIndex:1
    },
    title: {
        color: 'black',
        fontSize: 16,
        fontFamily:'Lato-Bold',
    },
    subTitle: {
        color: 'grey',
        fontSize: 12,
        fontFamily:'Lato-Regular',
    }
});

export default ImageContainer;
