import React from 'react';

import {Dimensions, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {theme} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const Splash = ({navigation}) => {
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
      <TouchableOpacity
        activeOpacity={1}
        style={{
          height: 50,
          width: '100%',
          backgroundColor: 'white',
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.btn}>Get Started</Text>
      </TouchableOpacity>
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
