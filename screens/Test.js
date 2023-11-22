import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';


export default function Test({ navigation, route }) {
  const [idNo, setId] = useState('');

  const HandleUser = (idNo) => {
    navigation.navigate('Notifications', {idNo});
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        id="outlined"
        style={styles.input}
        placeholder="Enter Id"
        value={idNo}
        onChangeText={setId}
      />
    <TouchableOpacity style={styles.addButton} onPress={() => 
        HandleUser(idNo)} >
        <Ionicons name="enter" size={50} color="black" />
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    typeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    label: {
      marginRight: 10,
    },
    switchText: {
      marginLeft: 5,
    },
    displayText: {
      marginBottom: 10,
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    saveButton: {
      backgroundColor: '#30d5c8',
      borderRadius: 5,
      padding: 10,
      alignItems: 'center',
    },
    deleteButton: {
      backgroundColor: '#fc6467',
      borderRadius: 5,
      padding: 10,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    input2: {
      height: 500,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });
  

