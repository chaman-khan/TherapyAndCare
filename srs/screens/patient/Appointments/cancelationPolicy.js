import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { theme } from '../../../constants/theme';

const CancelationPolicy = ({navigation}) => {
    const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const handleCheckboxToggle = checkboxNumber => {
    setIsChecked1(checkboxNumber === 1);
    setIsChecked2(checkboxNumber === 2);
    setIsChecked3(checkboxNumber === 3);
    setIsChecked4(checkboxNumber === 4);
    setIsChecked5(checkboxNumber === 5);
    console.log('====================================');
    console.log(checkboxNumber.value);
    console.log('====================================');
    setMessage(checkboxNumber.value);

  };
  const [message, setMessage] = useState('');
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
          Cancellation policy
        </Text>
        <Image
          source={require('../../../Assets/Images/notifi.png')}
          tintColor="transparent"
        />
      </View>
      <Text style={{color: 'black', fontSize: 20}}>Reasons</Text>
      <View
          style={{
            width: '100%',
            alignSelf: 'center',
            alignItems: 'flex-start',
            marginTop: 10,
            // justifyContent: 'flex-start',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleCheckboxToggle(1)}
            style={styles.checkboxView}>
            <View style={[styles.checkbox]}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: isChecked1
                    ? theme.colors.primary
                    : 'transparent',
                  borderRadius: 5,
                }}></View>
            </View>
            <Text style={styles.checkboxText}>I don’t want physiotherapy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleCheckboxToggle(2)}
            style={styles.checkboxView}>
            <View style={[styles.checkbox]}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: isChecked2
                    ? theme.colors.primary
                    : 'transparent',
                  borderRadius: 5,
                }}></View>
            </View>
            <Text style={styles.checkboxText}>I Changed my mood</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleCheckboxToggle(3)}
            style={styles.checkboxView}>
            <View
              style={
                styles.checkbox}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: isChecked3
                    ? theme.colors.primary
                    : 'transparent',
                  borderRadius: 5,
                }}></View>
            </View>
            <Text style={styles.checkboxText}>Fee structure is too high</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleCheckboxToggle(4)}
            style={styles.checkboxView}>
            <View
              style={
                styles.checkbox}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: isChecked4
                    ? theme.colors.primary
                    : 'transparent',
                  borderRadius: 5,
                }}></View>
            </View>
            <Text style={styles.checkboxText}>Lorem Ipsum is simply dummy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleCheckboxToggle(5)}
            style={styles.checkboxView}>
            <View
              style={
                styles.checkbox}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: isChecked5
                    ? theme.colors.primary
                    : 'transparent',
                  borderRadius: 5,
                }}></View>
            </View>
            <Text style={styles.checkboxText}>Lorem Ipsum is simply dummy</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Add your message"
          style={{
            width: '100%',
            alignSelf: 'center',
            height: 116,
            backgroundColor: '#F6F6F6',
            textAlign: 'center',
            borderColor: '#86CEFF',
            borderWidth: 1,
            borderRadius: 6,
            marginTop: 20,
          }}
        />
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            backgroundColor: theme.colors.primary,
            marginVertical: 50,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          onPress={() => navigation.navigate('CancelationFeePolicy', {})}
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
    height: 50,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FAFAFA',
    marginVertical: 5,
    paddingHorizontal: 10  },
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
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: 'black',
  },
});
export default CancelationPolicy;
