import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About Our App</Text>
      <Text style={styles.description}>
        Welcome to our mental health and wellness app designed to support students in their emotional well-being and personal growth journey.
      </Text>
      <Text style={styles.sectionTitle}>Key Features:</Text>
      <View style={styles.featureContainer}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <Text style={styles.featureText}>
              {feature}
            </Text>
          </View>
        ))}
      </View>
      <Text style={styles.note}>
        We are committed to providing you with a safe and supportive environment for your mental health and personal development. Your well-being is our priority.
      </Text>
    </ScrollView>
  );
};

const features = [
  "Set Appointments: Schedule meetings with school guidance counselors to get the help and guidance you need.",
  "Journaling: Express your thoughts and feelings through journaling. Create and manage your personal journals with ease.",
  "Mental Exercises: Access a variety of mental exercises tailored to enhance cognitive wellness.",
  "Physical Exercises: Stay physically active with exercise routines to improve your overall well-being."
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5', // Background color
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#30D5C8', // Text color
    textAlign: 'center', // Center align the text
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black', // Text color
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#30D5C8', // Text color
  },
  featureContainer: {
    marginHorizontal: 10,
  },
  featureItem: {
    marginBottom: 15,
  },
  featureText: {
    fontSize: 16,
    color: 'black', // Text color
  },
  note: {
    fontSize: 16,
    color: 'gray', // Text color
    marginTop: 20,
  },
});

export default AboutUs;
