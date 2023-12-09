import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../../constants/theme';

const ConfirmInfo = ({navigation}) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [elevation1, setElevation1] = useState(5);
  const [elevation2, setElevation2] = useState(5);

  const handleCheckboxToggle = checkboxNumber => {
    setIsChecked1(checkboxNumber === 1);
    setIsChecked2(checkboxNumber === 2);
    // setElevation1(checkboxNumber === 1 && isChecked1 ? 5 : 1);
    // setElevation2(checkboxNumber === 2 && isChecked2 ? 5 : 1);
  };
  return (
    <View style={{width: '90%', alignSelf: 'center'}}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../Assets/Images/backArrow.png')} />
        </TouchableOpacity>
        <Text
          style={{
            color: theme.colors.primary,
            fontSize: 24,
            fontWeight: '400',
          }}>
          Choose one
        </Text>
        <Image
          source={require('../../../Assets/Images/backArrow.png')}
          tintColor="transparent"
        />
      </View>
      <Text
        style={{
          width: '80%',
          fontSize: 16,
          alignSelf: 'center',
          fontFamily: 'Inter',
          textAlign: 'center',
          marginBottom: 30,
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
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
              // elevation: elevation1,
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
          <Text style={styles.checkboxText}>Book yourself</Text>
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
              // elevation: elevation2,
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
          <Text style={styles.checkboxText}>Book for relatives / friends</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 50,
          width: '100%',
          backgroundColor: theme.colors.primary,
          marginVertical: 50,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }} activeOpacity={1}
        onPress={() => navigation.navigate('PatientStack', {screen: 'AddDetails'})}
        // onPress={handleLogin}
      >
        <Text style={{color: 'white'}}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    // backgroundColor: 'white', // Set a background color to prevent unwanted shadow issues
    // elevation: 5,
    // shadowColor: 'rgba(0, 0, 0, 0.7)',
    // shadowOffset: {width: 0, height: 1.5},
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
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
});
export default ConfirmInfo;
