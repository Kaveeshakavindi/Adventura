// src/WelcomeScreen.tsx
import React from 'react';
import { SafeAreaView, Text, StyleSheet, ImageBackground } from 'react-native';
import Button from './Button';

const WelcomeScreen = ({ navigation }: { navigation: any }) => {
  
  const handleButtonPress = () => {
    navigation.navigate('AppNavigator');
  };
  const handleButtonPress1 = () => {
    navigation.navigate('Login');
  };


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.imageBackground}>
        <Text style={styles.text1}>Book your trip with</Text>
        <Text style={styles.logo}>ADVENTURA</Text>
        <Text style={styles.text2}>Let's make the life so a life.</Text>
        <Button title="Log In" onPress={handleButtonPress1} />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text1: {
    marginTop:250,
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    opacity: 0.7,
    fontFamily:'Lato-Regular'
  },
  logo:{
    color: 'white',
    fontFamily: 'Alatsi-Regular',
    fontSize: 40,
    textAlign: 'center'
  },
  text2:{
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    opacity: 0.7,
    paddingTop: 50,
    marginBottom:100,
    fontFamily:'Lato-Regular',
  
  },
  

});


export default WelcomeScreen;



