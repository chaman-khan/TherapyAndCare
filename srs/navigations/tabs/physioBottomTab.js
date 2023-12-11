import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/patient/Home/home';
import Locations from '../../screens/patient/Locations/locations';
import Appointments from '../../screens/patient/Appointments/appointments';
import Profile from '../../screens/patient/Profile/profile';
import AppointmentStack from '../stacks/appointmentStack';
import PatientStack from '../stacks/patientStack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#20B7FE',
        inactiveTintColor: 'gray', 
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'relative',
          borderTopWidth: 0,
          height: 64,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          fontFamily: 'Poppins',
        },
        tabBarItemStyle: {
          paddingVertical: 2,
          paddingHorizontal: 20,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let Screen_name = route.name;
          if (Screen_name === 'Home') {
            iconName = require('../../Assets/Images/home.png');
          } else if (Screen_name === 'Locations') {
            iconName = require('../../Assets/Images/locations.png');
          } else if (Screen_name === 'AppointmentStack') {
            iconName = require('../../Assets/Images/Appointments.png');
          } else if (Screen_name === 'Profile') {
            iconName = require('../../Assets/Images/profile.png');
          }
          return (
            <Image
              source={iconName}
              size={size}
              tintColor={color}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={PatientStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Locations"
        component={Locations}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AppointmentStack"
        component={AppointmentStack}
        options={{
          headerShown: false,
          title: 'Appointment',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
