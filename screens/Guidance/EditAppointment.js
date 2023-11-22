import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const EditAppointment = () => { 
  const route = useRoute();
  const { appointment } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>View Appointment</Text>
      <View style={styles.appointmentItem}>
        <Text style={styles.counselorName}>{appointment.counselorsName}</Text>
        <Text>Date: {appointment.date}</Text>
        <Text>Time: {appointment.time}</Text>
        <Text>Message: {appointment.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  appointmentItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  counselorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default EditAppointment;
