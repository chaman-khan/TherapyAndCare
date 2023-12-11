import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registration from '../../screens/physiotherapy/registration';
import PhysioBottomtab from '../tabs/physioBottomTab';

const PhysioTherapyStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Registration"
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
    </Stack.Navigator>
  );
};

export default PhysioTherapyStack;
