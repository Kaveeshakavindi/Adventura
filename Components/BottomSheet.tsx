import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal';


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

const BottomSheet = ({ isVisible, onClose, places }: { isVisible: any, onClose: any, places: Place[] }) => {
    const windowWidth = useWindowDimensions().width;
    const [selectedImage, setSelectedImage] = useState(places[0].image1);
    if (!isVisible) {
        return null;
    }

    return (
        <Modal
            statusBarTranslucent
            isVisible={isVisible}
            style={styles.modal}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.5}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
        >
            <View style={[styles.container, { width: windowWidth }]}>

                <View style={styles.content}>

                    {places.map((place) => (
                        <View key={place.id}>

                            <Text style={styles.title}>{place.title}</Text>
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <Icon name='location-sharp' size={17} color='#058af0' style={{ fontWeight: 'bold', paddingRight: 5 }} />
                                <Text style={styles.location}>{place.location}</Text>
                            </View>
                            <Text style={styles.about}>About</Text>
                            <Text style={styles.description}>{place.description}</Text>
                            <Text style={styles.about}>Image</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={() => setSelectedImage(place.image1)}>
                                    <Image source={place.image1} style={styles.moreImage} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSelectedImage(place.image2)}>
                                    <Image source={place.image2} style={styles.moreImage} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSelectedImage(place.image3)}>
                                    <Image source={place.image3} style={styles.moreImage} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSelectedImage(place.image4)}>
                                    <Image source={place.image4} style={styles.moreImage} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                    {selectedImage && (
                        <View style={styles.selectedImageContainer}>
                            <Image source={selectedImage} style={styles.selectedImage} />
                        </View>
                    )}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        top: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    content: {
        padding: 30,

    },
    closeButton: {
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    title: {
        fontFamily: 'Lato-Black',
        fontSize: 25,
        color: 'black'
    },
    location: {
        fontFamily: 'Lato-Bold',
        color: 'black',

    },
    about: {
        fontFamily: 'Lato-Bold',
        color: 'black',
        fontSize: 17,
        paddingTop: 20,
        paddingBottom: 20

    },
    description: {
        color: '#919191',
        fontFamily: 'Lato-Regular',
        lineHeight: 25,
        textAlign: 'justify'
    },
    moreImage: {
        height: 75,
        width: 50,
        borderRadius: 10
    },
    modal: {
        margin: 0,
        justifyContent: 'flex-end',

    },
    selectedImageContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    selectedImage: {
        height: 220,
        width: 330,
        borderRadius: 10,
 
    }

});

export default BottomSheet;
