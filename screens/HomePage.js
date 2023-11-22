import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, Modal, TouchableOpacity, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js';
import { useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const HomePage = ({ userid, firstName }) => {
  const navigation = useNavigation();
  const [lastReminder, setLastReminder] = useState(null);
  const [meetings, setMeetings] = useState([]);

  
  useEffect(() => {
    // Fetch scheduled meetings from your backend API
    fetch(`http://localhost:8080/schedules?userid=${userid}`) // Adjust the URL
      .then((response) => response.json())
      .then((data) => setMeetings(data))
      .catch((error) => console.error('Error fetching scheduled meetings:', error));
  }, []);
  const upcomingMeetings = meetings.filter((meeting) => meeting.done === false);

  useEffect(() => {
    // Fetch the last reminder from your backend API
    fetch('http://localhost:8080/last')
      .then((response) => response.json())
      .then((data) => setLastReminder(data))
      .catch((error) => console.error('Error fetching last reminder:', error));
  }, []);
  const handleNotificationsPress = () => {
    navigation.navigate('Notifications');
  };

  const handleViewProfilePress = () => {
    navigation.navigate('ViewProfile');
  };
  const handleAboutUsPress = () => {
    navigation.navigate('AboutUs');
  };
  const handleProgressReportPress = () => {
    navigation.navigate('ProgressReport');
  };
  const handleReminderPress = () => {
    navigation.navigate('Reminder');
  };
  const handleScheduleMeetingsPress = () => {
    navigation.navigate('ScheduledMeetings');
  };
  const handleSignOut = () => {
    
    navigation.navigate('Login');
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const animationType = Platform.OS === 'ios' ? 'slide' : 'slide';
  const fromDirection = Platform.OS === 'ios' ? 'right' : undefined;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>
          <Text style={styles.welcomeText}> Welcome back!</Text>
          {'\n'}
          <Text style={styles.userName}>{firstName}</Text>
        </Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={toggleModal}
        >
          <Image
            source={require('./Photos/menu.png')}
            style={styles.headerImage}
          />
        </TouchableOpacity>
      </View>
      

      <TouchableOpacity onPress={handleScheduleMeetingsPress}>
      
      <View style={styles.square1}>         
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Upcoming Meetings</Text>
          {upcomingMeetings.length === 0 ? (
            <Text style={styles.noMeetingsText}>No upcoming appointments</Text>
          ) : (
            upcomingMeetings.map((meeting) => (
              <View key={meeting.scheduleid} style={styles.meetingItem}>
                <Text style={styles.titleCounselor}>{meeting.counselorid}</Text>
                <Text style={styles.date1}>
                  <MaterialIcons name="date-range" size={24} color="white" /> {meeting.date}
                </Text>
                <Text style={styles.time1}>
                  <Ionicons name="time" size={24} color="white" /> {meeting.time}
                </Text>
              </View>
            ))
          )}
        </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReminderPress}>
      {lastReminder && (
      <View style={styles.squareContainer}>
        <View style={styles.square}>
          <Text style={styles.containerTitle}>Reminders</Text>
          <Text style={styles.title}>{lastReminder.title}</Text>
          <Text style={styles.date}>{lastReminder.date}</Text>
          <Text style={styles.description}>{lastReminder.reminder}</Text>
          <Text style={styles.description}>{lastReminder.counselor}</Text>

        </View>
      </View>
    )}

    
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Image
                source={require('./Photos/Arrow.png')}
                style={styles.sidebarImage1}
              />
            </TouchableOpacity>
            <View style={styles.sidebar}>
              <TouchableOpacity style={styles.sidebarItem} onPress={handleViewProfilePress}>
                <Image
                  source={require('./Photos/Profile.png')}
                  style={styles.sidebarImage}
                />
                <Text>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem} onPress={handleNotificationsPress}>
                <Image
                  source={require('./Photos/Notifications.png')}
                  style={styles.sidebarImage}
                />
                <Text>Notifications</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem} onPress={handleAboutUsPress}>
                <Image
                  source={require('./Photos/AboutUs.png')}
                  style={styles.sidebarImage}
                />
                <Text>About Us</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem} onPress={handleProgressReportPress}>
              <Image
                  source={require('./Photos/progress.png')}
                  style={styles.sidebarImage}
                />
                <Text>Progress  Report</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem} onPress={handleSignOut}>
                <Image source={require('./Photos/logout.png')} style={styles.sidebarImage} />
                <Text>Sign Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16,
    paddingTop: 16
  },
  header: {
    flexDirection: 'row',
    paddingRight: 10,
    paddingBottom: 20,
  },
  headerImage: {
    width: 40,
    height: 40,
   
  },
  squareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  square: {
    width: 340,
    height: 260,
    backgroundColor: '#30d5c8',
    marginHorizontal: 8,
    borderRadius: 20,
    
  },
  menuButton: {
    position: 'absolute',
    top: 0, // Adjust as needed
    left: 290,
    right: 0,
    padding: 18, // Adjust as needed
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  modalContent: {
    width: '50%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
  },
  sidebar: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  sidebarImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  sidebarImage1: {
    width: 24,
    height: 24,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'blue',
  },
  containerTitle: {
    position: 'left',
    paddingHorizontal: 20,
    paddingTop: 10,
    top: 8,
    right: 8,
    fontSize: 20,
    color: '#fff',
  },
  icons: {
    position: 'relative',
    size: 50,
    color: '#fff',
  },
  welcomeText: {
    fontSize: 20,
    color: '#30d5c8',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#30d5c8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingTop: 10,
    right: 8,
  },
  date: {
    fontSize: 20,
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 20,
    right: 8,
  },
  description: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingTop: 10,
    right: 8,
  },
  sectionTitle: {
    fontSize: 20,
    color: 'white',
    paddingLeft: 16,
    paddingTop: 10
  },
  titleCounselor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 16,
    paddingBottom: 5,
    paddingTop: 10
  },
  date1: {
    fontSize: 16,
    color: 'white',
    paddingLeft: 16
  },
  time1: {
    fontSize: 16,
    color: 'white',
    paddingLeft: 16

  },
  type1: {
    fontSize: 16,
    color: 'white',
    paddingLeft: 16

  },
  square1: {
    width: 340,
    height: 160,
    backgroundColor: '#30d5c8',
    marginHorizontal: 8,
    borderRadius: 20,
    marginTop: 20
    
  },
  noMeetingsText:{
    fontSize: 20,
    color: 'white',
    paddingLeft: 16,
    fontWeight: 'bold',
    paddingTop:16
  },
  containerBar: {
    flex: 1,
    backgroundColor: '#30d5c8',
   
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white'
  },
});

export default HomePage;
