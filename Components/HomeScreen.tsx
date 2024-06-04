// src/HomeScreen.tsx
import React from 'react';
import { Image, ScrollView, View, SafeAreaView, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppNavigator from './AppNavigator';
import BeachPlaces from './MenuItems/BeachPlaces';
import LakePlaces from './MenuItems/LakePlaces';
import MountainPlaces from './MenuItems/MountainPlaces';
import WaterfallPlaces from './MenuItems/WaterfallPlaces';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchTabNavigator from './SearchTabNavigator';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const FirstRow = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.topic1}>Discover</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 40 }}>
          <Icon name='search' size={20} color={'black'} style={{ padding: 10 }} />
          <Icon name='bell' size={20} color={'black'} />
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>

      <FirstRow />
      <SearchTabNavigator/>
      <View>
        <Text style={styles.topic2}>Top Destinations</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.topDestinationContainer}>
            <Image source={require('../assets/images/tropical-beach.png')}
              style={styles.topDestinationImage} />
            <View style={styles.topDestTextContainer}>
              <Text style={styles.topDestTopic}>Kanifushi</Text>
              <Text style={styles.topDestSubTopic}>Maldives</Text>
            </View>
          </View>
          <View style={styles.topDestinationContainer}>
            <Image source={require('../assets/images/beach2.png')}
              style={styles.topDestinationImage} />
            <View style={styles.topDestTextContainer}>
              <Text style={styles.topDestTopic}>Kanifushi</Text>
              <Text style={styles.topDestSubTopic}>Maldives</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topic1: {
    padding: 20,
    color: 'black',
    fontSize: 30,
    fontFamily:'Lato-Black',
  },
  topic2: {
    color: 'black',
    fontSize: 22,
    padding: 30,
    fontFamily:'Lato-Black',
  },
  topDestinationContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    width: 150,
    borderRadius: 15,
    alignItems: 'center',
    marginLeft: 30,
    marginBottom: 10
  },
  topDestinationImage: {
    width: 66,
    height: 73,
    borderRadius: 15
  },
  topDestTopic: {
    color: 'black',
    fontSize: 12,
    fontFamily:'Lato-Bold',
  },
  topDestSubTopic: {
    color: 'black',
    opacity: 0.4,
    fontSize: 10,
    fontFamily:'Lato-Regular',
  },
  topDestTextContainer: {
    paddingLeft: 10

  }
})
export default HomeScreen;
