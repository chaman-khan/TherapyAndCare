import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registration from '../../screens/physiotherapy/registration';
import PhysioBottomtab from '../tabs/physioBottomTab';
import PatientDetail from '../../screens/physiotherapy/Home/patientDetail';

const PhysioTherapyStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="PhysioBottomtab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PhysioBottomtab"
        component={PhysioBottomtab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PatientDetail"
        component={PatientDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PhysioTherapyStack;
