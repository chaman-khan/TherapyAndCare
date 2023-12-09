import React, { useState } from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';

const BookingDetails = () => {
    const [name, setName] = useState('Mohit kumar')
    const [age, setAge] = useState('40')
    const [concern, setConcern] = useState('Neurological physical')
    const [contactNumber, setcontactNumber] = useState('887756XXX7')
    const [SessionTime, setSessionTime] = useState('10:00 Am')
    const [ScheduleDate, setScheduleDate] = useState('17 Nov 2023')
    const [ScheduleData, setScheduleData] = useState('Mohali , Punjab')
    const [City, setCity] = useState('170567')
    const [PinCode, setPinCode] = useState('17 Nov 2023')
  return (
    <View>
      <Image
        source={require('../../../Assets/Images/backArrow.png')}
        style={{width: '90%', alignSelf: 'center'}}
      />
      <Text style={{color: 'black', fontSize: 24}}>
        Thankyou for booking..!
      </Text>
      <Text
        style={{
          width: '70%',
          alignSelf: 'center',
          textAlign: 'center',
          fontSize: 18,
        }}>
        Your Physiotherapist on the way
      </Text>
      <View
        style={{
          width: '100%',
          backgroundColor: 'rgba(28, 118, 179, 0.2)',
          justifyContent: 'space-between',
        }}>
        <View style={{width: '47%', gap: 5}}>
          <Text style={styles.leftItem}>Your name</Text>
          <Text style={styles.leftItem}>Your age</Text>
          <Text style={styles.leftItem}>Your concern</Text>
          <Text style={styles.leftItem}>Contact number</Text>
          <Text style={styles.leftItem}>Session time</Text>
          <Text style={styles.leftItem}>Schedule date</Text>
          <Text style={styles.leftItem}>City / State</Text>
          <Text style={styles.leftItem}>Pin code</Text>
          <Text style={styles.leftItem}>Schedule Date</Text>
        </View>
        <View style={{width: '47%', gap: 5}}>
          <Text>{name}</Text>
          <Text>{age}</Text>
          <Text>{concern}</Text>
          <Text>{contactNumber}</Text>
          <Text>{SessionTime}</Text>
          <Text>{ScheduleData}</Text>
          <Text>{City}</Text>
          <Text>{PinCode}</Text>
          <Text>{ScheduleDate}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.Button_Box}
        onPress={() => navigation.navigate('Appointments')}>
        <View style={styles.Button} activeOpacity={0.7}>
          <Text style={styles.Verify_Text}>Done</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  leftItem: {color: 'black', fontSize: 16, fontFamily: 'Inter'},
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
export default BookingDetails;
