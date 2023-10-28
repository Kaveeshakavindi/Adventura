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
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { 
            fontSize: 12 ,
            fontWeight:'bold',
            textTransform: 'none' 
          },
          tabBarStyle:{
            elevation:0
          },
          tabBarIndicator: () => (
            <View
              style={{
                width: 100,
                height: 2,
                marginLeft: 0,
              }}>
                </View>
          ),
        }}
      >
        <Tab.Screen name="Beach" component={BeachPlaces} />
        <Tab.Screen name="Lake" component={LakePlaces} />
        <Tab.Screen name="Mountain" component={MountainPlaces} />
        <Tab.Screen name="Waterfall" component={WaterfallPlaces} />
      </Tab.Navigator>
      <View>
        <Text style={styles.topic2}>Top Destinations</Text>
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
    fontWeight: 'bold'
  },
  menu: {
  },
  menuItem: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 60,
    paddingTop: 20
  },
  topic2:{
    color: 'black',
    fontWeight:'bold',
    fontSize:22,
    padding: 25
  }
})
export default HomeScreen;
