import React from 'react';
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const Splash = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handlePress = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Image source={require('./Photos/Logo.png')} style={styles.logo} />    
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set your background color here
  },
  logo: {
    flex: 1, // Take up the available space
    resizeMode: 'contain', 
    aspectRatio: 0.4
    
  },
  
});

export default Splash;
