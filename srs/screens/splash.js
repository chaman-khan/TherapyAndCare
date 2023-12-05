import React from 'react';

import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {theme} from '../constants/theme';
const {width, height} = Dimensions.get('screen');

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{height: height / 5}} />
      <Image source={require('../Assets/Images/logo.png')} />
      <Text style={styles.heading}>Therapy & Care</Text>
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: 'white',
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.btn}>Get Started</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Inter',
    fontWeight: '500',
    marginTop: 20,  
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '400',
    marginVertical: 20,
  },
  btn: {
    color: theme.colors.primary,
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
  },
});

export default Splash;
