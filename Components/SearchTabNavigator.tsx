import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BeachPlaces from './MenuItems/BeachPlaces';
import LakePlaces from './MenuItems/LakePlaces';
import MountainPlaces from './MenuItems/MountainPlaces';
import WaterfallPlaces from './MenuItems/WaterfallPlaces';


const Tab = createMaterialTopTabNavigator();
const SearchTabNavigator = () => {
    return (
      
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 13,
                    textTransform: 'none',
                    fontFamily: 'Lato-Regular',
                    
                   
                },
                tabBarStyle: {
                    elevation: 0
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
       
    );
}

export default SearchTabNavigator

