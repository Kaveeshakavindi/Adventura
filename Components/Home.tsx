import React from 'react';
import { MORE_TOP_PLACES, TOP_PLACES } from '../data';

import TopPlacesCarousel from './TopPlacesCarousel';
import { View, Text, ScrollView } from 'react-native';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';
import Topic from './Topic';
import MorePlaces from './MorePlaces';

const Home: React.FC = () => {

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          

            <ScrollView style={{ backgroundColor: 'white' }}>

                <SubHeader Title1="Find Your" Title2='Dream Trip' />

                <View style={{ justifyContent: 'center', alignItems: 'center', height: 250 }}>
                    <TopPlacesCarousel places={TOP_PLACES} />
                </View>
                <Topic Title='Top places to visit' />
                
                    <MorePlaces places={MORE_TOP_PLACES} />
             
            </ScrollView>
        </View>
    );

};

export default Home;