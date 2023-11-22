import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import LoginFormat from "./screens/LogInForm/LoginFormat";
import CreateJournalV2 from "./screens/JournalForm/CreateJournalV2";
import EditJournalV2 from "./screens/JournalForm/EditJournalV2";
import JournalList from "./screens/JournalForm/JournalList";
import HomePage from "./screens/HomePage";
import AppointmentList from "./screens/AppointmentForm/AppointmentList";
import SignupForm from "./screens/SignUpForm/SignUpForm";
import ViewProfile from "./screens/ViewProfile/ViewProfile";
import MakeAppointment from "./screens/AppointmentForm/MakeAppointment";
import ViewRequests from './screens/Guidance/ViewRequests';
import EditAppointment from './screens/Guidance/EditAppointment';
import { FontAwesome } from '@expo/vector-icons';
import SetAppointment from './screens/AppointmentForm/SetAppointment';
import Notifications from './screens/Notifications';
import Splash from './screens/Splash';
import MindAndBodyGym from './screens/MindAndBodyGym/MindAndBodyGym';
import AboutUs from './screens/AboutUs';
import ProgressReport from './screens/ProgressReport';
import Reminder from './screens/Reminder';
import ScheduledMeetings from './screens/ScheduledMeetings';
import EditProfile from './screens/ViewProfile/EditProfile';
import ForgotPassword from './screens/LogInForm/ForgotPassword';
import ResetPasswordConfirmation from "./screens/LogInForm/ResetPasswordConfirmation"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  function ProfileStack({ route }) {
    const { userid, firstName } = route.params;
  
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ViewProfile"
          component={() => <ViewProfile userid={userid} firstName={firstName} />}
          options={{
            title: 'Profile',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#ffffff', // Set the desired font color here
            },
            headerTintColor: '#ffffff',
            headerStyle: { backgroundColor: '#30d5c8' },
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={() => <EditProfile userid={userid} firstName={firstName} />}
          options={{
            title: 'Edit Profile',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#ffffff', // Set the desired font color here
            },
            headerTintColor: '#ffffff',
            headerStyle: { backgroundColor: '#30d5c8' },
          }}
        />
      </Stack.Navigator>
    );
  }
  
  function Guidance(){
    return(
      <Stack.Navigator>
        <Stack.Screen
          name="ViewRequests"
          component={ViewRequests}
          options = {{ headerShown:false }}
        />
         <Stack.Screen 
         name="EditAppointment" 
         component={EditAppointment} 
         options = {{ headerShown:false }} />
      </Stack.Navigator>
    )
  }
  function AppointStack({ route }) {
    // You can remove the following lines
    // const { userid, firstName } = route.params;
  
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SetAppointment"
          component={() => (
            <SetAppointment
              userid={route.params.userid}
              firstName={route.params.firstName}
            />
          )}
          options={{
            title: "Appointment",
            headerTitleStyle: {
              color: 'white',
            fontWeight: 'bold',
            fontSize: 25 // Set the font color to white
            },
            headerStyle: {
            backgroundColor: '#30d5c8', // Set the background color to #30d5c8
          },
          headerTintColor:'white',
          headerLeft: null, // Remove the back button
          headerShown: true,
          }}
        />
        <Stack.Screen
          name="MakeAppointment"
          component={() => (
            <MakeAppointment
              userid={route.params.userid}
              firstName={route.params.firstName}
            />
          )}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function JournalStack({ route }) {

    return (
      <Stack.Navigator>
        <Stack.Screen
        name="JournalList"
        component={() => (
          <JournalList
            userid={route.params.userid}
            firstName={route.params.firstName}
          />
        )}
        options={{
          headerTitle: 'Journal',
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25 // Set the font color to white
          },
          headerStyle: {
            backgroundColor: '#30d5c8', // Set the background color to #30d5c8
          },
          headerLeft: null, // Remove the back button
          headerShown: true,
        }}
      />
        <Stack.Screen
          name="EditJournalV2"
          component={EditJournalV2}
          options={{
            title: "Journal Edit",
            headerTitleStyle: {
              color: 'white',
            fontWeight: 'bold',
            fontSize: 25 // Set the font color to white
            },
            headerStyle: {
            backgroundColor: '#30d5c8', // Set the background color to #30d5c8
          },
          headerTintColor:'white'
          }}
        />
        <Stack.Screen
          name="CreateJournalV2"
          component={() => (
          <CreateJournalV2
            userid={route.params.userid}
          />
        )}
          options={{
            title: "Create a Journal",
            headerTitleStyle: {
              color: 'white',
            fontWeight: 'bold',
            fontSize: 25 // Set the font color to white
            },
            headerStyle: {
            backgroundColor: '#30d5c8', // Set the background color to #30d5c8
          },
          headerTintColor:'white'
          }}
        />
      </Stack.Navigator>
    );
  }

  function HomePageStack({route}){

    return (
      <Stack.Navigator>
        <Stack.Screen
        name="HomePage"
        component={() => (
          <HomePage
            userid={route.params.userid}
            firstName={route.params.firstName}
          />
        )}
        options={{ headerShown: false }}
      />
        <Stack.Screen
          name="Notifications"
          component={() => (
          <Notifications
            userid={route.params.userid}
            firstName={route.params.firstName}

          />
          
        )}
        options={{ title: "Notifications", headerTitleAlign: 'center', headerTitleStyle: {
      color: "#ffffff" // Set the desired font color here
    }, headerTintColor: '#ffffff',
    headerStyle:{ backgroundColor: '#30d5c8'}}}
    />
 <Stack.Screen
        name="ViewProfile"
        component={() => (
          <ViewProfile
            userid={route.params.userid}
            firstName={route.params.firstName}
          />
        )}
        options={{ title: "Profile", headerTitleAlign: 'center', headerTitleStyle: {
      color: "#ffffff" // Set the desired font color here
    }, headerTintColor: '#ffffff',
    headerStyle:{ backgroundColor: '#30d5c8'}}}
    />
    <Stack.Screen
        name="EditProfile"
        component={() => (
          <EditProfile
            userid={route.params.userid}
            firstName={route.params.firstName}
          />
        )}
        options={{ title: "Edit Profile", headerTitleAlign: 'center', headerTitleStyle: {
      color: "#ffffff" // Set the desired font color here
    }, headerTintColor: '#ffffff',
    headerStyle:{ backgroundColor: '#30d5c8'}}}
    />
    
 <Stack.Screen
        name="AboutUs"
        component={() => (
          <AboutUs
            userid={route.params.userid}
            firstName={route.params.firstName}
          />
        )}
        options={{ title: "About Us", headerTitleAlign: 'center', headerTitleStyle: {
      color: "#ffffff" // Set the desired font color here
    }, headerTintColor: '#ffffff',
    headerStyle:{ backgroundColor: '#30d5c8'}}}
    />
        <Stack.Screen
        name="ProgressReport"
        component={() => (
          <ProgressReport
            userid={route.params.userid}
            firstName={route.params.firstName}
          />
        )}
        options={{ title: "Progress Report", headerTitleAlign: 'center', headerTitleStyle: {
      color: "#ffffff" // Set the desired font color here
    }, headerTintColor: '#ffffff',
    headerStyle:{ backgroundColor: '#30d5c8'}}}
    />
        <Stack.Screen
          name="Reminder"
          component={() => (
          <Reminder
            userid={route.params.userid}
            firstName={route.params.firstName}

          />
          
        )}
        options={{ title: "Reminders", headerTitleAlign: 'center', headerTitleStyle: {
      color: "#ffffff" // Set the desired font color here
    }, headerTintColor: '#ffffff',
    headerStyle:{ backgroundColor: '#30d5c8'}}}
    />
        <Stack.Screen
          name="ScheduledMeetings"
          component={() => (
          <ScheduledMeetings
            userid={route.params.userid}
            firstName={route.params.firstName}

          />
          
        )}
        options={{ title: "Scheduled Meetings", headerTitleAlign: 'center', headerTitleStyle: {
      color: "#ffffff" // Set the desired font color here
    }, headerTintColor: '#ffffff',
    headerStyle:{ backgroundColor: '#30d5c8'}}}
    />
      
      
      </Stack.Navigator>

    )
  }
  function MainStack({ route }) {
    const { userid, firstName } = route.params;

    return (
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
        <Tab.Screen
          name="HomePageStack"
          component={HomePageStack}       
          initialParams={{ userid, firstName }}
   
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="home"
                size={30}
                color={focused ? "#30d5c8" : "gray"}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Journal"
          component={JournalStack}
          initialParams={{ userid, firstName }}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="notebook-plus"
                size={30}
                color={focused ? "#30d5c8" : "gray"}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
         name="AppointStack"
          component={AppointStack}
          initialParams={{ userid,firstName }} // Pass the initial parameters here
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo
               name="circle-with-plus"
              size={30}
              color={focused ? "#30d5c8" : "gray"}
              />
            ),
           headerShown: false,
          }}
        />
        <Tab.Screen
          name="MindAndBodyGym"
          component={MindAndBodyGym}
          initialParams={{ userid }}
          options={{ 
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="gamepad" size={30} color={focused ? "#30d5c8" : "gray"} />
            ),
       
            title: "Mind & Body Gym",
            headerTitleStyle: {
              color: 'white',
            fontWeight: 'bold',
            fontSize: 25 // Set the font color to white
            },
            headerStyle: {
            backgroundColor: '#30d5c8', // Set the background color to #30d5c8
          },
          headerTintColor:'white'
        
 }}
        />
      </Tab.Navigator>

      
    );
  }

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
          component={Splash}
          options={{ headerShown: false }}
      />
        <Stack.Screen
          name="Login"
          component={LoginFormat}
          options={{ headerShown: false }}
        /> 
         <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="ResetPasswordConfirmation"
          component={ResetPasswordConfirmation}
          options={{ headerShown: false }}
        /> 
        

        <Stack.Screen
        name="SignupForm"
        component={SignupForm}
        options={{ headerShown: false }}/>
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{ headerShown: false }}
        />  
      
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

export default App;
