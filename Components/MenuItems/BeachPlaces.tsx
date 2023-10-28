// BeachPlaces.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageContainer from './ImageContainer';


const BeachPlaces = () => {



  return (
    <ScrollView horizontal={true} style={styles.container}>
      <ImageContainer imageSource={require('../../assets/images/tropical-beach.png')}
      title='Kanifushi'
      sub_title='Maldives, South Asia'
      rating='4.3'
      />
      <ImageContainer imageSource={require('../../assets/images/beach2.png')}
      title='Kanifushi'
      sub_title='Maldives, South Asia'
      rating='4.3'
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 400,
    backgroundColor: 'white',
    flex: 1
  },
 
});

export default BeachPlaces;
