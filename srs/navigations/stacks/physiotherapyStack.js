import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registration from '../../screens/physiotherapy/registration';
import PhysioBottomtab from '../tabs/physioBottomTab';
import PatientDetail from '../../screens/physiotherapy/Home/patientDetail';
import Availability from '../../screens/physiotherapy/Home/availability';
import ConfirmScreen from '../../screens/physiotherapy/Home/confirmScreen';
import TimeOUt from '../../screens/physiotherapy/Home/timeOut';
import SessionDetail from '../../screens/physiotherapy/Home/sessionDetail';

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
      <Stack.Screen
        name="PatientDetail"
        component={PatientDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Availability"
        component={Availability}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConfirmScreen"
        component={ConfirmScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TimeOUt"
        component={TimeOUt}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SessionDetail"
        component={SessionDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PhysioTherapyStack;
