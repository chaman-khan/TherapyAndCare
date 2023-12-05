/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import Splash from './srs/screens/splash';
import SignIn from './srs/screens/auth/signin';
import OTPVerification from './srs/screens/auth/otpverify';
import Options from './srs/screens/auth/options';

function App(): JSX.Element {

  return (
    <Options />
  );
}



export default App;
