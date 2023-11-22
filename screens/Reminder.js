import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Reminder = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    // Fetch reminders from your backend API
    fetch('http://localhost:8080/reminderall')
      .then((response) => response.json())
      .then((data) => setReminders(data))
      .catch((error) => console.error('Error fetching reminders:', error));
  }, []);

  // Reverse the reminders array
  const reversedReminders = [...reminders].reverse();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {reversedReminders.map((reminder) => (
        <View key={reminder.reminderId} style={styles.reminderItem}>
          <Text style={styles.title}>{reminder.title}</Text>
          <Text style={styles.date}>{reminder.date}</Text>
          <Text style={styles.description}>{reminder.reminder}</Text>
          {reminder.image && (
            <View>
              <Image
                source={{ uri: `data:image/png;base64,${reminder.image}` }}
                style={styles.image}
                resizeMode='contain'
              />
              <Text style={styles.counselor}>{reminder.counselor}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop: 870
  },
  reminderItem: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#30d5c8',
  },
  date: {
    fontSize: 14,
    color: '#777',
  },
  description: {
    marginTop: 8,
    fontSize: 16,
  },
  image: {
    aspectRatio: 1, // To maintain the image's aspect ratio
    borderRadius: 8,
  },
  counselor: {
    marginTop: 8,
    fontSize: 14,
    color: '#777',
  },
});

export default Reminder;
