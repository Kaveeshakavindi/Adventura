import { useNavigation, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeartButton from './HeartButton';
import AnotherComponent from './AnotherComponent';
 
interface Place {
    id: number;
    image: any;
    title: string;
    location: string;
    description: string;
}
interface FavPlace {
    id: number;
    image: any;
    title: string;
    location: string;
    description: string;
}

const TopPlacesCarousel = ({ places }: { places: Place[] }) => {

    const [favoritesArray, setFavoritesArray] = useState<FavPlace[]>([]);
    const HandleHeartPress = (place: FavPlace) => {
        const isFavorite = favoritesArray.some((fav) => fav.id === place.id);

        if (isFavorite) {
            setFavoritesArray((prev) => prev.filter((fav) => fav.id !== place.id));
        } else {
            setFavoritesArray((prev) => [...prev, place])
        }

    };

    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const handlePress = (place: Place) => {
        navigation.navigate('TripDetails', { place });
    };
    console.log('favoritesArray:', favoritesArray.map(place => place.title));
    
    
    
    return (

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
            {places && places.map((place) => (
                <View key={place.id}>
                    <HeartButton place={place} onPress={() => HandleHeartPress(place)} favoritesArray={favoritesArray} />
                    <TouchableOpacity key={place.id} onPress={() => handlePress(place)} >
                        <View key={place.id} style={styles.card}>

                            <Image source={place.image} style={styles.image} />
                            <View style={{ position: 'absolute' }}>
                                <Text style={styles.title}>{place.title}</Text>
                                <Text style={styles.location}>{place.location}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}


        </ScrollView>

    );
   


};




const styles = StyleSheet.create({
    carousel: {
        flexDirection: 'row',
        padding: 20,
        paddingTop: 20,
        height: 250,

    },
    card: {
        height: 200,
        marginRight: 16,
        width: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',

    },
    image: {
        width: '100%',
        height: '100%',

    },
    title: {
        fontSize: 25,
        marginVertical: 8,
        paddingHorizontal: 8,
        color: 'white',
        top: 75,
        fontFamily: 'Lato-Bold'
    },
    location: {
        fontSize: 20,
        color: 'white',
        paddingHorizontal: 8,
        top: 75,
        fontFamily: 'Lato-Regular'

    },

});

export default TopPlacesCarousel;
