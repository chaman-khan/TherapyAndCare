import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FreeCanceltion from '../../screens/patient/Appointments/freeCancelation';
import Appointments from '../../screens/patient/Appointments/appointments';
import CancelationPolicy from '../../screens/patient/Appointments/cancelationPolicy';

const AppointmentStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Appointments"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Appointments"
        component={Appointments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FreeCanceltion"
        component={FreeCanceltion}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CancelationPolicy"
        component={CancelationPolicy}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppointmentStack;
