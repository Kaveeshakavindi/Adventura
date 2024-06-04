import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const Button = ({ onPress, title }:{onPress:any, title:any}) => {
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer:{
    alignItems: 'center',
    
  },
  button: {
    backgroundColor: 'black',
    padding:20,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center', 
    width:300,
    elevation:5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily:'Lato-Regular'
  },
});

export default Button;
