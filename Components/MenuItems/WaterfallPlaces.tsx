import React from 'react';
import { ScrollView, StyleSheet, Text} from 'react-native';
import { TOP_PLACES } from '../../data';
import TopPlacesCarousel from '../TopPlacesCarousel';



const WaterfallPlaces = () => {

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
export default WaterfallPlaces;