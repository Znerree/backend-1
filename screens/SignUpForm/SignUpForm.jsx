import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import alert from './Alert';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const SignupForm = () => {
  const navigation = useNavigation();
  const [userid, setUserid] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [existingUser, setExistingUser] = useState({

    firstName: '',
    lastName: '',
    course: '',
    email: '',
    phoneNumber: '',
  });
  const [userExists, setUserExists] = useState(false);
  const handleBackToLogin = () => {
    // Navigate to the login screen when the back button is pressed
    navigation.navigate('Login');
  };
  // Function to send a POST request to the Spring Boot API
  const sendSignupRequest = async (userData) => {
    try {
      const response = await axios.post('welltalk.mysql.database.azure.com/signup', userData);

      // Handle the response here
      console.log('Response:', response.data);

      // Check if the response indicates success (you can modify this condition)
      if (response.status === 200) {

        console.log('Signup successful');
        clearFormFields();
        displaySuccessfulAlert();
      } else {
        // Handle other response statuses or errors
        console.log('Signup failed');
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    }
  };
  //fetching userid from the database

  const handleSignup = async () => {
    // Check if passwords match
    try {
      const response = await axios.get(`http://localhost:8080/user/${userid}`, {
        validateStatus: function (status) {
          return status === 200 || status === 404; // Treat 404 as a valid status
        },
      });

      if (response.status == 200) {
        setUserExists(true);
        const userData = response.data;
        setUserid(userData.userid);
        setFirstName(userData.firstName);
        setLastName(userData.LastName);
        setCourse(userData.course);
        setEmail(userData.email);
        setPhoneNumber(userData.phoneNumber);
        setPasswordError('This user already exists!');
      } else if (response.status == 404) {

        if (password !== confirmPassword) {
          setPasswordError('Passwords do not match');
          return;
        }
        if (!userid || !firstName || !lastName || !course || !email || !phoneNumber || !password) {
          setPasswordError('Please fill in all fields');
          return;
        }
        if (!/^\d+$/.test(phoneNumber)) {
          setPasswordError('Phone number must contain only digits');
          return;
        }
        // Create an object with user data
        const userData = {
          userid,
          firstName,
          lastName,
          course,
          email,
          phoneNumber,
          password,
        };
        sendSignupRequest(userData);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const displaySuccessfulAlert = () => {
    alert('Register', 'User successfully registered', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };
  const clearFormFields = () => {
    setUserid('');
    setFirstName('');
    setLastName('');
    setCourse('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
    setPasswordError('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackToLogin} style={styles.backButton}>
        <AntDesign name="back" size={30} color="turquoise" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={require('./welltalk.png')} style={styles.logo} />
      </View>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        style={userExists ? styles.inputRed : styles.input}
        placeholder="User ID"
        value={userid}
        onChangeText={(text) => setUserid(text)}
      />

      <TextInput
        style={userExists ? styles.inputRed : styles.input}
        placeholder="First Name"
        editable={true}
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />

      <TextInput
        style={userExists ? styles.inputRed : styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={userExists ? styles.inputRed : styles.input}
        placeholder="Course"
        value={course}
        onChangeText={setCourse}
      />

      <TextInput
        style={userExists ? styles.inputRed : styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={userExists ? styles.inputRed : styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric" // Set keyboardType to numeric to allow only digits
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        onChangeText={setConfirmPassword}
      />
      {passwordError !== '' && (
        <Text style={[styles.errorText, { color: 'red' }]}>{passwordError}</Text>
      )}
      <TouchableOpacity
        onPress={handleSignup}
        style={styles.outlinedButton}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By signing up you consent to "WellTalk"
        </Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  logo: {
    width: 130, 
    height: 130, 
    resizeMode: 'contain', 
    marginBottom: 13,
    marginLeft: 17,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white', 
  },
  header: {
    fontSize: 24,
    color: 'turquoise',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'turquoise', 
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    color: 'turquoise', 
  },
  inputRed: {
    height: 40,
    borderColor: 'red', // Set the border color to red
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    marginBottom: 16,
    color: 'red', // Set the text color to red
  },
  footerText: {
    marginTop: 3,
    fontSize: 12,
    textAlign: 'center',
    color: 'turquoise',
  },
  input: {
    height: 40,
    borderColor: 'turquoise', // Set the initial border color to transparent
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    marginBottom: 16,
    color: 'turquoise',
  },
  outlinedButton: {
    backgroundColor: 'turquoise',
    borderWidth: 1,
    borderColor: 'turquoise',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
  },
  successText: {
    color: 'turquoise',
    fontSize: 18,
    textAlign: 'center',
  },
  logoContainer: {
    alignItems: 'center', // Center the logo horizontally
    marginBottom: 13,
    marginLeft: 17,
    alignItems: 'center'
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1, // Ensure it's on top of other elements
  },
  inputNumeric: {
    height: 40,
    borderColor: 'turquoise',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    color: 'turquoise',
  },
 
});

export default SignupForm;