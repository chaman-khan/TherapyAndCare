import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registration from '../../screens/patient/registration';
import Physiotherapist from '../../screens/patient/Home/physiotherapist';
import DoctorInfo from '../../screens/patient/Home/dosctorInfo';
import BottomTab from '../tabs/bottomTab';
import ConfirmInfo from '../../screens/patient/Home/doctorConfirmInfo';
import AddDetails from '../../screens/patient/Home/addDetails';
import AppointmentDetails from '../../screens/patient/Home/appointmentSchdule';

function PatientStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='ConfirmInfo' screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
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
    </Stack.Navigator>
  );
}

export default PatientStack;
