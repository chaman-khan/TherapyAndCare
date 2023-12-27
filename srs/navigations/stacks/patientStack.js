import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registration from '../../screens/patient/registration';
import Physiotherapist from '../../screens/patient/Home/physiotherapist';
import DoctorInfo from '../../screens/patient/Home/dosctorInfo';
import ConfirmInfo from '../../screens/patient/Home/doctorConfirmInfo';
import AddDetails from '../../screens/patient/Home/addDetails';
import AppointmentDetails from '../../screens/patient/Home/appointmentSchdule';
import Scheduled from '../../screens/patient/Home/scheduled';
import NotificationMessage from '../../screens/patient/Home/notificationMessage';
import FeedBack from '../../screens/patient/Home/feedBack';
import AccountDetails from '../../screens/patient/Home/accountDetails';
import BookingDetails from '../../screens/patient/Home/bookingDetails';
import Home from '../../screens/patient/Home/home';
import BottomTab from '../tabs/bottomTab';

function PatientStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='BottomTab' screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Physiotherapist"
        component={Physiotherapist}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DoctorInfo"
        component={DoctorInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConfirmInfo"
        component={ConfirmInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddDetails"
        component={AddDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotificationMessage"
        component={NotificationMessage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Scheduled"
        component={Scheduled}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FeedBack"
        component={FeedBack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountDetails"
        component={AccountDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookingDetails"
        component={BookingDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default PatientStack;
