import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';

const Appointments = () => {
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
          Notification Message
        </Text>
        <Image source={require('../../../Assets/Images/notifi.png')} />
      </View>

      <Text
        style={{
          fontSize: 24,
          fontFamily: 'Inter',
          width: '90%',
          alignSelf: 'center',
          textAlign: 'center',
          color: 'black',
        }}>
        Your therapy appointment has been confirmed
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: 'Inter',
          textAlign: 'center',
          marginVertical: 30,
        }}>
        You can pay now
      </Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.Button_Box}
        onPress={() => navigation.navigate('Scheduled', {selectedTime})}>
        <View style={styles.Button} activeOpacity={0.7}>
          <Text style={styles.Verify_Text}>Confirm appointment</Text>
        </View>
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
  Button_Box: {
    // borderWidth:2,
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 60,
  },
  Verify_Text: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
export default Appointments;
