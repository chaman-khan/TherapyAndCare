import React, {useState, useRef} from 'react';
import {
  Image,
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {theme} from '../../constants/theme';

const OTPVerification = ({navigation}) => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const handleVerificationCodeChange = (text, index) => {
    // Ensure only numeric input
    if (/^[0-9]+$/.test(text) || text === '') {
      const newCode = [...verificationCode];
      newCode[index] = text;
      setVerificationCode(newCode);

      // Move to the next input
      if (text !== '' && index < verificationCode.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleVerifyCode = () => {
    const code = verificationCode.join('');
    if (code.length === 4) {
      // Code verification logic here
      Alert.alert('Success', 'Verification code is correct!');
      navigation.navigate('Options');
    } else {
      Alert.alert('Incorrect', 'Please enter a 6-digit verification code.');
    }
  };

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../../Assets/Images/design.png')}
        style={{width: '100%'}}
      />
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
        OTP Verification
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: 18,
          color: '#7B7B7B',
        }}>
        We have send the OTP on
        <Text style={{color: 'black'}}> 99XXXXX778 </Text>
        will apply auto to the fields
      </Text>
      <View style={styles.Input_Box}>
        <View style={styles.codeContainer}>
          {verificationCode.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={text => handleVerificationCodeChange(text, index)}
            />
          ))}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'center',
          marginTop: 20,
          gap: 6,
        }}>
        <Text
          style={{
            fontFamily: 'Inter',
            fontSize: 18,
            color: '#1D1D1D',
          }}>
          If you don't receive code
        </Text>
        <TouchableOpacity activeOpacity={1}>
          <Text
            style={{
              color: theme.colors.primary,
              fontFamily: 'Inter',
              fontSize: 18,
            }}>
            Resend
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Button_Box}>
        <TouchableOpacity
          onPress={handleVerifyCode}
          style={styles.Button}
          activeOpacity={0.7}>
          <Text style={styles.Verify_Text}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Input_Box: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // borderWidth: 2,
    marginTop: 50,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginBottom: 20,
    alignItems: 'center',
    // borderWidth:1
  },
  Button_Box: {
    // borderWidth:2,
    width: '100%',
    height: 48,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Button: {
    width: '90%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1CB5FD',
    borderRadius: 11,
  },
  Verify_Text: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  input: {
    height: 48,
    width: '23%',
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    textAlign: 'center',
    marginHorizontal: 5,
    fontSize: 20,
    marginHorizontal: 8,
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
    color: '#000000',
    fontSize: 12,
  },
});
export default OTPVerification;
