import React from 'react';
import {Image, TextInput, View, Text, StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

const SignIn = () => {
  return (
    <View>
      <Image source={require('../../Assets/Images/design.png')} />
      <Text
        style={{
          color: theme.colors.primary,
          fontFamily: 'Inter',
          fontSize: 24,
          fontStyle: 'normal',
          fontWeight: '400',
          textAlign: 'center',
          marginVertical: 40,
        }}>
        Login
      </Text>
      <View style={styles.input}>
        <Image source={require('../../Assets/Images/email.png')} />
        <TextInput placeholder="Email" style={{fontSize: 16}} />
      </View>
      <View style={styles.input}>
        <Image source={require('../../Assets/Images/contact.png')} />
        <TextInput placeholder="Contact Number" style={{fontSize: 16}} />
      </View>
      <View
        style={{
          height: 50,
          width: '90%',
          backgroundColor: theme.colors.primary,
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: 'white'}}>Submit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 60,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    borderWidth: 0.1,
    borderColor: theme.colors.grey,
    borderRadius: 1,
    marginVertical: 7,
    paddingHorizontal: 15,
  },
});

export default SignIn;
