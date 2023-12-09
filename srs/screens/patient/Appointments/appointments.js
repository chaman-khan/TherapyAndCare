import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import { theme } from '../../../constants/theme';

const Appointments = ({navigation}) => {
  const DATA = [
    {
      id: 1,
      date: 'Nov 17',
      time: '10:30 AM',
      doctorName: 'Dr. Sonam',
      specialist: 'Neurological physical therapist',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View>
        <View
          style={{
            width: '20%',
            backgroundColor: '#1C76B3',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>{item.date}</Text>
          <Text style={{color: 'white', fontSize: 12}}>{item.time}</Text>
        </View>
        <View style={{width: '80%', backgroundColor: '#F9F9F9'}}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Text style={{color: 'black'}}>{item.specialist}</Text>
            <Text style={{fontSize: 12, color: 'black'}}>
              {item.doctorName}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Image source={require('../../../Assets/Images/contact.png')} />
              <TouchableOpacity>Seel Location</TouchableOpacity>
              <View
                style={{
                  width: '25%',
                  height: 24,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 16}}>Cancel</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
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
          Appointments
        </Text>
        <Image source={require('../../../Assets/Images/notifi.png')} />
      </View>
      <Text style={{fontSize: 20}}>Upcoming</Text>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
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
});
export default Appointments;
