import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import { MORE_TOP_PLACES, TOP_PLACES } from '../data';
import { Searchbar } from 'react-native-paper';
import SubHeader from './SubHeader';
import Topic from './Topic';
import BeachPlaces from './MenuItems/BeachPlaces';
import LakePlaces from './MenuItems/LakePlaces';
import MainHeader from './MainHeader';
import SearchTabNavigator from './SearchTabNavigator';



interface Place {
    id: number;
    image: any;
    image1: any;
    image2: any;
    image3: any;
    image4: any;
    title: string;
    location: string;
    description: string;
}


const SearchScreen = ({ navigation }: { navigation: any }) => {
    const handlePress = (place: Place) => {
        navigation.navigate('TripDetails', { place });
    };
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([]);

    const onChangeSearch = (query: any) => {
        setSearchQuery(query);
        if (query === '') {
            setFilteredPlaces([]);
        } else {

            const filteredTopPlaces = TOP_PLACES.filter(place =>
                place.title.toLowerCase().includes(query.toLowerCase())
            );
            const filteredMoreTopPlaces = MORE_TOP_PLACES.filter(place =>
                place.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredPlaces([...filteredTopPlaces, ...filteredMoreTopPlaces]);
        }
    }
    return (
        <View style={styles.container}>
           
            <Text style={styles.topic1}>Where do</Text>
            <Text style={styles.topic2}>you want to go?</Text>
            <Searchbar
                placeholder="Search for a location"
                onChangeText={onChangeSearch}
                value={searchQuery}
                iconColor='grey'
                placeholderTextColor={'grey'}
                style={{ backgroundColor: '#F6F6F6', width: "90%", alignSelf: 'center', height: 64 }}
            /> 

            {searchQuery !== '' &&
                <ScrollView
                    style={{ backgroundColor: 'white', zIndex: 1 , position: 'absolute', width:'100%', top:175, height: 450, marginBottom:100}}

                >
                    {filteredPlaces.map(place => (
                        <View key={place.id} >
                            <TouchableOpacity key={place.id} onPress={() => handlePress(place)} >
                                <View style={styles.titleContainer} >
                                    <Image style={styles.image} source={place.image}/>
                                    <Text style={styles.title}>{place.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            }
            <View style={{  width: '100%' }}>
                <View style={{ flexDirection: 'row', alignSelf: 'center', gap: 30, }}>
                    <View style={{ backgroundColor: '#D4F4FA', width: 50, height: 50, justifyContent: 'center', borderRadius: 10, shadowOpacity: 50, marginTop: 40 }}>
                        <Icon name='plane' size={20} color={'#0692B1'} style={{ textAlign: 'center' }} />
                    </View>
                    <View style={{ backgroundColor: '#D4F4FA', width: 50, height: 50, justifyContent: 'center', borderRadius: 10, shadowOpacity: 50, marginTop: 40 }}>
                        <Icon1 name='building' size={20} color={'#0692B1'} style={{ textAlign: 'center' }} />
                    </View>
                    <View style={{ backgroundColor: '#D4F4FA', width: 50, height: 50, justifyContent: 'center', borderRadius: 10, shadowOpacity: 50, marginTop: 40 }}>
                        <Icon name='camera' size={20} color={'#0692B1'} style={{ textAlign: 'center' }} />
                    </View>
                    <View style={{ backgroundColor: '#D4F4FA', width: 50, height: 50, justifyContent: 'center', borderRadius: 10, shadowOpacity: 50, marginTop: 40 }}>
                        <Icon1 name='shuttle-van' size={20} color={'#0692B1'} style={{ textAlign: 'center' }} />
                    </View>
                </View>
                
               
                
            </View>
            <View style={{ marginTop: 20}}>
                   
                   <Topic Title='Popular Flights' />
                   
               </View>
            <SearchTabNavigator/>
        </View>
        
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
       
    },
    topic1: {
        fontFamily: 'Lato-Black',
        fontSize: 20,
        color: 'black',
        width: '70%',
        paddingTop: 25,
        paddingLeft: 30
    },
    topic2: {
        fontFamily: 'Lato-Black',
        fontSize: 20,
        color: 'black',
        width: '70%',
        paddingLeft: 30,
        paddingBottom: 30
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginLeft:10
    },
    title: {
        fontFamily: 'Lato-Regular',
        color: 'black',
        margin: 30,
        
    },
    titleContainer: {
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 50,
        flexDirection:'row',
        alignItems:'center',
        elevation:3,
       
    }
},

);

export default SearchScreen;
