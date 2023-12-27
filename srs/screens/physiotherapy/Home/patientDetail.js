import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../../constants/theme';

const PatientDetail = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <ScrollView>
      <View>
        <View style={{backgroundColor: 'white'}}>
            <View style={styles.topBar}>
              <Image source={require('../../../Assets/Images/backArrow.png')} />
              <Text
                style={{
                  color: theme.colors.primary,
                  fontSize: 24,
                  fontWeight: '400',
                }}>
                Patient Details
              </Text>
              <Image
                source={require('../../../Assets/Images/backArrow.png')}
                tintColor="transparent"
              />
            </View>
          <Image
            source={item.image}
            style={{
              width: 108,
              height: 108,
              alignSelf: 'center',
              marginVertical: 100,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            marginVertical: 30,
          }}>
          <View style={{width: '50%', gap: 15}}>
            <Text style={styles.leftText}>Patient Name </Text>
            <Text style={styles.leftText}>Patient Age </Text>
            <Text style={styles.leftText}>Patient concern</Text>
            <Text style={styles.leftText}>Contact Number</Text>
            <Text style={styles.leftText}>Session Time</Text>
            <Text style={styles.leftText}>Schedule Date</Text>
          </View>
          <View style={{width: '50%', gap: 15}}>
            <Text style={styles.rightText}>{item.name}</Text>
            <Text style={styles.rightText}>{item.Age}</Text>
            <Text style={styles.rightText}>{item.concern}</Text>
            <Text style={styles.rightText}>{item.contact}</Text>
            <Text style={styles.rightText}>{item.time}</Text>
            <Text style={styles.rightText}>{item.date}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() =>navigation.navigate('Availability')}
          style={{
            width: '90%',
            height: 45,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.colors.primary,
            marginVertical: 50,
          }}>
          <Text style={{color: 'white'}}>Confirm Appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

  const styles = StyleSheet.create({
    topBar: {
      flexDirection: 'row',
      width: '95%',
      alignSelf: 'center',
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  leftText: {
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
    color: 'black',
  },
  rightText: {
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#616161',
  },
});

export default PatientDetail;
