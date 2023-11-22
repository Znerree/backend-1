import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DatePicker from 'react-datepicker'; // Import DatePicker
import { format } from 'date-fns'; // Import date-fns format function


const AppointmentList = ({ userid }) => {
  console.log(userid);
  
  const navigation = useNavigation();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('all'); // 'all', 'offline', 'online'
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to parse date string into a JavaScript Date object
  function parseDateString(dateString) {
    const parsedDate = new Date(Date.parse(dateString));
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate;
    } else {
      return null;
    }
  }

  useEffect(() => {
    // Fetch the data from your API endpoint
    axios
      .get('http://localhost:8080/getAllAppointment')
      .then((response) => {
        console.log('API Response Data:', response.data);
        setAppointments(response.data);
        setLoading(false);
        console.log('userid in AppointmentList (componentDidMount):', userid);
      })
      .catch((error) => {
        console.error('Error fetching appointments: ', error);
        setLoading(false);
      });
  }, []);

  const renderAppointmentItem = ({ item }) => {
    console.log("Rendering appointment: ", item.type);

    const parsedDate = parseDateString(item.date);

    if (
      (filterType === 'all' || filterType === item.type) &&
      (!selectedDate || (parsedDate && format(parsedDate, 'MMMM d, yyyy') === format(selectedDate, 'MMMM d, yyyy')))
    ) {
      return (
        <TouchableOpacity
          style={[styles.appointment, { backgroundColor: '#30d5c8' }]}
          onPress={() => {
            navigation.navigate('MakeAppointment', { appointmentData: item });
          }}
        >
          <Text style={styles.counselorName}><Ionicons name="person" size={24} color="white" /> {item.counselorsName}</Text>
          <Text style={styles.appointmentText}><AntDesign name="calendar" size={24} color="white"/> {item.date}</Text>
          <Text style={styles.appointmentText}><Ionicons name="time-outline" size={24} color="white" /> {item.time}</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.filterLabel}>Date:</Text>
      <DatePicker
        className={styles.datePicker}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MMMM d, yyyy"
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    paddingHorizontal: 8,
  },
  appointment: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  appointmentText: {
    fontSize: 16,
    marginBottom: 8,
    color: 'white',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
  },
  counselorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterLabel: {
    fontSize: 20,
    marginRight: 8,
    color: '#30d5c8',
    fontWeight: 'bold',
  },
  filterPicker: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#ddd',
  },
  datePicker: {
    width: '100%',
    marginTop: 16,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noAppointmentText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // You can customize the color
  },
});

export default AppointmentList;