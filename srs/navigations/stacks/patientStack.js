import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registration from '../../screens/patient/registration';

function PatientStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default PatientStack;
