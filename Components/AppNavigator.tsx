import React, { Profiler } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import FavouriteScreen from './FavouriteScreen';
import ProfileScreen from './ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../Constants/Colors';
import { StyleSheet, View} from 'react-native';


const Tab = createBottomTabNavigator();

 
const AppNavigator = () => {
  return (
    <View style ={{flex:1, }}>
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        
        tabBarShowLabel:false,
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
        tabBarStyle:{
          borderRadius: 50,
          height: 70,
          paddingBottom: 10,
          alignItems:'center',
          justifyContent:'center',
          opacity:0.9,
          marginBottom: 20,
          activeTintColor: 'red',
          elevation: 0,
          borderColor: 'transparent'
          
        },
        tabBarIconStyle:{

        }
        
      })}>
        <Tab.Screen name="Home" component={HomeScreen}options={{headerShown: false}} />
        <Tab.Screen name="Search" component={SearchScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Favorites" component={FavouriteScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
      
      </View>
  );
}


export default AppNavigator;
