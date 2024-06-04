import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet from './BottomSheet';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const TripDetailScreen = ({ route }: { route: any }) => {
    
    const { place } = route.params;
    const navigation = useNavigation();
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

    const toggleBottomSheet = () => {
        setBottomSheetVisible(!bottomSheetVisible);
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            toggleBottomSheet();
        }, 1500);

        return () => clearTimeout(timeout);
    }, []); // Empty dependency array ensures this useEffect runs only once on component mount

    return (
        <View>
            <Image source={place.image} style={styles.image} />
            <LinearGradient
                colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0)']}
                style={StyleSheet.absoluteFill}
            />
            <View style={{ position: 'absolute' }}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Icon1 name='angle-left' color={'white'} size={30} style={{ padding: 30 }} />
                </TouchableOpacity>
                <Text style={styles.title}>{place.title}</Text>
                <View style={{ flexDirection: 'row', left:30 }}>
                    <Icon name='location-outline' size={20} color='white' style={{ fontWeight: 'bold', top: 70 }} />
                    <Text style={styles.location}>{place.location}</Text>
                </View>

                <BottomSheet isVisible={bottomSheetVisible} onClose={toggleBottomSheet} places={[place]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontFamily: 'Lato-Bold',
        color: 'white',
        fontSize: 40,
        top: 60,
        left: 30,
    },
    location: {
        fontFamily: 'Lato-Light',
        color: 'white',
        fontSize: 30,
        top: 60,
        left: 0
    },


});

export default TripDetailScreen;
