import React from 'react';
import { Text, ScrollView, StyleSheet} from 'react-native';
import TopPlacesCarousel from '../TopPlacesCarousel';
import { MORE_TOP_PLACES, TOP_PLACES } from '../../data';



const MountainPlaces = () => {

    return (
      <ScrollView horizontal style={styles.container} >
        <TopPlacesCarousel places={MORE_TOP_PLACES} ></TopPlacesCarousel>
      </ScrollView>
    );
  }
  const styles = StyleSheet.create({
    container: {
  
      backgroundColor: 'white',
      
    },
  
  });
export default MountainPlaces;