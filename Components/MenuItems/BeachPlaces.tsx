// BeachPlaces.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ImageContainer from './ImageContainer';
import TopPlacesCarousel from '../TopPlacesCarousel';
import { TOP_PLACES } from '../../data';


const BeachPlaces = () => {

  return (
    <ScrollView horizontal style={styles.container} showsHorizontalScrollIndicator={false}>
      <TopPlacesCarousel places={TOP_PLACES} ></TopPlacesCarousel>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {

    backgroundColor: 'white',
    
  },

});

export default BeachPlaces;
