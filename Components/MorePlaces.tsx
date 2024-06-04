import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Place {
    id: number;
    image: any;
    title: string;
    location: string;
    description: string;
}

const MorePlaces = ({ places }: { places: Place[] }) => {
    const { width, height } = Dimensions.get('screen');
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const handlePress = (place: Place) => {
        navigation.navigate('TripDetails', { place });
    };
    return (

        <View style={[styles.container, { width: width, alignSelf: 'center' }]}>
            {places.map((place) => (
                <TouchableOpacity key={place.id} onPress={() => handlePress(place)}  >
                    <View key={place.id} style={styles.card} >
                        <Image source={place.image} style={[styles.image, { width: width * 0.40, height: 200, }]} />
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']}
                            style={styles.gradient}
                        ></LinearGradient>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{place.title}</Text>
                            <Text style={styles.location}>{place.location}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignContent: 'center',

    },
    card: {

        marginBottom: 16,
        position: 'relative'
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 15,
        width: '100%',


    },
    image: {
        borderRadius: 15,

    },
    textContainer: {
        position: 'absolute',
    },

    title: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        left: 10,
        top: 150,
        fontSize: 15
    },
    location: {
        top: 150,
        left: 10,
        color: 'white',
        fontFamily:'Lato-Italic'
    }
});

export default MorePlaces