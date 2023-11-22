import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ScheduledMeetings = ({ userid }) => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    // Fetch scheduled meetings from your backend API using the new endpoint
    fetch(`http://localhost:8080/schedules?userid=${userid}`)
      .then((response) => response.json())
      .then((data) => setMeetings(data))
      .catch((error) => console.error('Error fetching scheduled meetings:', error));
  }, [userid]);

  // Filter meetings into upcoming and finished based on the 'done' boolean
  const upcomingMeetings = meetings.filter((meeting) => !meeting.done);
  const finishedMeetings = meetings.filter((meeting) => meeting.done);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.meetingsContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Upcoming Meetings</Text>
          {upcomingMeetings.length === 0 ? (
            <Text style={styles.noMeetingsText}>No upcoming appointments</Text>
          ) : (
            upcomingMeetings.map((meeting) => (
              <View key={meeting.scheduleid} style={styles.meetingItem}>
                <Text style={styles.title}>{meeting.counselorid}</Text>
                <Text style={styles.date}>
                  <MaterialIcons name="date-range" size={24} color="#30d5c8" /> {meeting.date}
                </Text>
                <Text style={styles.time}>
                  <Ionicons name="time" size={24} color="#30d5c8" /> {meeting.time}
                </Text>
                
              </View>
            ))
          )}
        </View>
      

        <View style={styles.sectionContainer}>
  <Text style={styles.sectionTitle1}>Finished Meetings</Text>
  {finishedMeetings.length === 0 ? (
    <Text style={styles.noMeetingsText}>No Finished Meetings</Text>
  ) : (
    finishedMeetings.map((meeting) => (
      <View key={meeting.scheduleid} style={styles.meetingItem}>
        <Text style={styles.title1}>{meeting.counselorid}</Text>
        <Text style={styles.date1}>
          <MaterialIcons name="date-range" size={24} color="#FAA0A0" /> {meeting.date}
        </Text>
        <Text style={styles.time1}>
          <Ionicons name="time" size={24} color="#FAA0A0" /> {meeting.time}
        </Text>
      </View>
    ))
  )}
</View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  meetingsContainer: {
    padding: 16,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#30d5c8',
  },
  sectionTitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FAA0A0',
  },
  meetingItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#30d5c8',
  },
  title1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FAA0A0',
  },
  date: {
    fontSize: 14,
    color: '#30d5c8',
  },
  time: {
    fontSize: 14,
    color: '#30d5c8',
  },
  type: {
    fontSize: 14,
    color: '#30d5c8',
  },
  date1: {
    fontSize: 14,
    color: '#FAA0A0',
  },
  time1: {
    fontSize: 14,
    color: '#FAA0A0',
  },
  type1: {
    fontSize: 14,
    color: '#FAA0A0',
  },
  noMeetingsText:{
    fontSize: 20,
    color: '#FAA0A0',
    paddingLeft: 16,
    fontWeight: 'bold',
    paddingTop:16
  }
});

export default ScheduledMeetings;
