// src/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Components/WelcomeSreen';
import HomeScreen from './Components/HomeScreen';
import AppNavigator from './Components/AppNavigator';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import BeachPlaces from './Components/MenuItems/BeachPlaces';
import Home from './Components/Home'
import { StatusBar } from 'react-native';
import TripDetailScreen from './Components/TripDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden/>   
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="AppNavigator" component={AppNavigator} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="BeachPlaces" component={BeachPlaces}/>
        <Stack.Screen name="Home2" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="TripDetails" component={TripDetailScreen} options={{headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
