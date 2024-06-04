import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet } from 'react-native';

const TextBox = ({label}:{label:any}) => {
    const [isFocused, setIsFocused] = useState(false);
    const translateY = new Animated.Value(-5);
  
    const handleFocus = () => {
      setIsFocused(true);
      Animated.timing(translateY, {
        toValue: -10,
        duration: 200,
        useNativeDriver: true,
      }).start();
    };
  
    const handleBlur = () => {
        if (!isFocused) {
            Animated.timing(translateY, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }).start();
          }
    };
  
    
  
    return (
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.placeholder,
            {
              transform: [{ translateY }],
              fontSize: isFocused ? 12 : 12,
              color: isFocused ? 'grey' : 'grey',
            },
          ]}
        >
          {label}
        </Animated.Text>
        <TextInput
          style={[styles.input]}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      width: '90%',
      marginVertical: 10,
      position: 'relative',
      alignSelf: 'center',
    },
    placeholder: {
      position: 'absolute',
      left: 10,
      top: 10,
      zIndex: 1,
    },
    input: {
      height: 64,
      borderWidth: 1,
      borderColor: 'grey',
      padding: 10,
      fontSize: 16,
      borderRadius: 5,
      
    },
  });
  
  export default TextBox;
  
