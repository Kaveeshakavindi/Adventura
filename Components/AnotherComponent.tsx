import React, { useContext } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import AnotherComponent from './TopPlacesCarousel'
import SubHeader from './SubHeader';
import { Image } from 'react-native-animatable';
import TopPlacesCarousel from './TopPlacesCarousel';

interface FavPlace {
    id: number;
    image: any;
    title: string;
    location: string;
    description: string;
}
const { width, height } = Dimensions.get('screen');

const AnotherComponent1 = () => {

    return (
       <View style={{flex:1, backgroundColor:'white', margin:0}}>
        <SubHeader Title1='My' Title2='Favorites'/>
            <Image source={require('../assets/images/turkey.jpg')} style={styles.image}/>
       </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: height*0.2,
        width:width*0.4,
        marginLeft:30,
        borderRadius:20
    }
});
export default AnotherComponent1;
