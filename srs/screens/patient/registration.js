import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../constants/theme';

const Registration = () => {
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
      <Text style={styles.headerText}>register</Text>
      <View style={styles.input}>
        <Image source={require('../../Assets/Images/name.png')} />
        <TextInput placeholder="Name" style={{fontSize: 16}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
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
          <View style={styles.checkboxView}>
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
      </View>
      <View style={styles.input}>
        <Image source={require('../../Assets/Images/email.png')} />
        <TextInput placeholder="Email Address" style={{fontSize: 16}} />
      </View>
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
    marginBottom: 20,
  },
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
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '45%',
    alignSelf: 'center',
    alignItems: 'center',

    paddingHorizontal: 20,
    marginVertical: 15,
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
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: 'black',
  },
});

export default Registration;
