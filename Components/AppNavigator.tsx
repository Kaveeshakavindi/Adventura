import React, { Profiler } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import SearchScreen from './SearchScreen';
import FavouriteScreen from './FavoritesScreen';
import ProfileScreen from './ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {  View } from 'react-native';
import MainHeader from './MainHeader';
import AnotherComponent from './AnotherComponent';
import { NavigationContainer } from '@react-navigation/native';

interface Place {
  id: number;
  image: any;
  title: string;
  location: string;
  description: string;
};
const Tab = createBottomTabNavigator();


const AppNavigator = ({ route }: { route: any }) => {
  const { user, favoritesArray }: {user: any, favoritesArray:Place[]} = route.params; // Access user information
 

  return (
    <View style={{ flex: 1, }}>
      <MainHeader Title='Adventura' />
    
      <Tab.Navigator
        screenOptions={({ route }) => ({

          tabBarShowLabel: false,
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Favorites') {
              iconName = 'heart';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }

            return <Icon name={iconName as any} size={size} color={color} />;
          },
          tabBarStyle: {

            height: 70,
            paddingBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.9,
            marginBottom: 0,
            activeTintColor: 'black',
            elevation: 20


          },
          tabBarIconStyle: {

          }

        })}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Favorites" component={FavouriteScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Profile" options={{ headerShown: false }}>
          {() => <ProfileScreen user={user} />}
        </Tab.Screen>
      </Tab.Navigator>
     
   
    </View>
  );
}


export default AppNavigator;
