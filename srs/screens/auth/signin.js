import React, {useState} from 'react';
import {
  Image,
  TextInput,
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../constants/theme';
import {
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;

    const emailRegex =
      /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      Alert.alert(
        'Email Error',
        'Please enter a valid email address.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        {cancelable: false},
      );
      return;
    } else {
      setEmailError(false);
    }
    if (!passwordRegex.test(password)) {
      setPasswordError(true);
      Alert.alert(
        'Password Error',
        'Password must be at least 6 characters long and contain at least one digit, one letter, and one special character.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        {cancelable: false},
      );
      return;
    } else {
      setPasswordError(false);
    }
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (emailError || passwordError) {
      Alert.alert(
        'Warning',
        'Please enter a valid user name or password.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('BottomTab'),
          },
        ],
        {cancelable: false},
      );
    } else {
      navigation.navigate('BottomTab');
    }
  };
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
      {emailError ? (
        <Text style={styles.Error_Text}>* Enter Valid Email</Text>
      ) : null}
      <View style={styles.input}>
        <Image source={require('../../Assets/Images/contact.png')} />
        <TextInput placeholder="Contact Number" style={{fontSize: 16}} />
      </View>
      {passwordError ? (
        <Text style={styles.Error_Text}>* Enter Valid password</Text>
      ) : null}
      <TouchableOpacity
        style={{
          height: 50,
          width: '90%',
          backgroundColor: theme.colors.primary,
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        onPress={() =>{ navigation.navigate('Options'); }}
        // onPress={handleLogin}
      >
        <Text style={{color: 'white'}}>Submit</Text>
      </TouchableOpacity>
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
  Error_Text: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: responsiveScreenFontSize(1.2),
    color: 'red',
    marginLeft: responsiveScreenWidth(3),
    marginTop: 3,
  },
});

export default SignIn;
