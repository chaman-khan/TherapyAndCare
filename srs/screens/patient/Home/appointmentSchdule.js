import React from 'react';
import App from '../../../../App';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { theme } from '../../../constants/theme';

const AppointmentDetails = () => {
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
          Schedule Appointment 
        </Text>
        <Image
          source={require('../../../Assets/Images/backArrow.png')}
          tintColor="transparent"
        />
      </View>
      <Text style={{fontSize: 20, fontFamily: 'Inter', color: 'black'}}>Select Date</Text>
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
})

export default AppointmentDetails;
