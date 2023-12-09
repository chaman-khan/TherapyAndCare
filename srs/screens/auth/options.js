import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../constants/theme';

const Options = ({navigation}) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxToggle = checkboxNumber => {
    setIsChecked1(checkboxNumber === 1);
    setIsChecked2(checkboxNumber === 2);
  };

  return (
    <View>
      <Image
        source={require('../../Assets/Images/design.png')}
        style={{width: '100%'}}
      />
      <Text style={styles.headerText}>Choose One</Text>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => handleCheckboxToggle(1)}>
        <View
          style={[
            styles.checkboxView,
            {
              backgroundColor: isChecked1
                ? 'rgba(134, 206, 255, 0.1)'
                : 'white',
            },
          ]}>
          <View
            style={[
              styles.checkbox,
              // {backgroundColor: isChecked1 ? theme.colors.primary : 'white'},
            ]}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: isChecked1 ? theme.colors.primary : 'white',
                borderRadius: 5,
              }}></View>
          </View>
          <Text style={styles.checkboxText}>Physiotherapy</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => handleCheckboxToggle(2)}>
        <View
          style={[
            styles.checkboxView,
            {
              backgroundColor: isChecked2
                ? 'rgba(134, 206, 255, 0.1)'
                : 'white',
            },
          ]}>
          <View
            style={[
              styles.checkbox,
              // {backgroundColor: isChecked1 ? theme.colors.primary : 'white'},
            ]}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: isChecked2 ? theme.colors.primary : 'white',
                borderRadius: 5,
              }}></View>
          </View>
          <Text style={styles.checkboxText}>Patient</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton} activeOpacity={1} onPress={() => navigation.navigate('PatientStack')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: theme.colors.primary,
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 40,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#86CEFF',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 10,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxText: {
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: theme.colors.primary,
  },
  continueButton: {
    height: 50,
    width: '90%',
    backgroundColor: theme.colors.primary,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  continueButtonText: {
    color: 'white',
  },
});

export default Options;
