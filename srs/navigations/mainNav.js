import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import SignIn from '../screens/auth/signin';
import Options from '../screens/auth/options';
import OTPVerification from '../screens/auth/otpverify';
import BottomTab from './tabs/bottomTab';
import PhysioTherapyStack from './stacks/physiotherapyStack';
import PatientStack from './stacks/patientStack';
import AppointmentStack from './stacks/appointmentStack';

function MainNav() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen name="PatientStack" component={PatientStack} />
        <Stack.Screen name="PhysioTherapyStack" component={PhysioTherapyStack} />
        <Stack.Screen name="AppointmentStack" component={AppointmentStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
