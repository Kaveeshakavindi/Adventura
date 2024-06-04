import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import TopPlacesCarousel from './TopPlacesCarousel';

interface Place {
    id: number;
    image: any;
    title: string;
    location: string;
    description: string;
}

const HeartButton = ({ place, favoritesArray, onPress }: { place: Place, favoritesArray: Place[], onPress:any }) => {
    
    return (
        <View style={{
            position: 'absolute',
            zIndex: 1,
            left: 255,
            top: 10,
            padding: 7,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50
        }} >
            <TouchableOpacity onPress={onPress}>
            <Icon name={favoritesArray.some(fav => fav.id === place.id) ? 'heart' : 'heart-o'} size={20} color={favoritesArray.some(fav => fav.id === place.id) ? 'red' : 'black'} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default HeartButton