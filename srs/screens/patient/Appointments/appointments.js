import React from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {theme} from '../../../constants/theme';

const {height} = Dimensions.get('screen');
const Appointments = ({navigation}) => {
  const DATA = [
    {
      id: 1,
      date: 'Nov 17',
      image: require('../../../Assets/Images/user2.png'),
      time: '10:30 AM',
      doctorName: 'Dr. Sonam',
      specialist: 'Neurological physical therapist',
      address: '456 Oak Avenue, City2',
    },
    {
      id: 2,
      date: 'Nov 17',
      time: '10:30 AM',
      image: require('../../../Assets/Images/user3.png'),
      doctorName: 'Dr. Sonam',
      specialist: 'Neurological physical therapist',
      address: '123 Main Street, City1',
    },
  ];
  const DATA1 = [
    {
      id: 1,
      image: require('../../../Assets/Images/Rectangle.png'),
      type: 'Orthopedic',
      date: '1 Dec 2023',
      stars: '4',
    },
    {
      id: 2,
      image: require('../../../Assets/Images/Rectangle.png'),
      type: 'OtherType',
      date: '10 Nov 2023',
      stars: '5',
    },
    {
      id: 3,
      image: require('../../../Assets/Images/Rectangle.png'),
      type: 'Cardiovascular',
      date: '20 March 2023',
      stars: '5',
    },
    {
      id: 4,
      image: require('../../../Assets/Images/Rectangle.png'),
      type: 'Geriatric',
      date: '15 July 2023',
      stars: '3',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', height: 104, marginVertical: 10}}
        activeOpacity={1}
        onPress={() => navigation.navigate('AppointmentStack', {screen: 'FreeCanceltion'})}>
        <View
          style={{
            width: '30%',
            backgroundColor: '#1C76B3',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>{item.date}</Text>
          <Text style={{color: 'white', fontSize: 12}}>{item.time}</Text>
        </View>
        <View style={{width: '70%', backgroundColor: '#F9F9F9'}}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Text style={{color: '#616161'}}>{item.specialist}</Text>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                fontWeight: '500',
                marginTop: 6,
              }}>
              {item.doctorName}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              <Image
                source={require('../../../Assets/Images/contact.png')}
                tintColor="#1C76B3"
              />
              <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Locations', {item})}>
                <Text style={{color: '#1C76B3'}}>See Location</Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 67,
                  height: 24,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#1C76B3',
                }}>
                <Text style={{color: 'white', fontSize: 16}}>Cancel</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem1 = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 20,
          justifyContent: 'space-between',
          borderColor: theme.colors.grey,
          borderBottomWidth: 0.5,
        }}>
        <Image
          source={item.image}
          style={{
            width: '35%',
            height: 94,
            backgroundColor: '#1C76B3',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        />
        <View
          style={{
            width: '65%',
            backgroundColor: '#F9F9F9',
            alignSelf: 'flex-end',
            height: 94,
          }}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
              {item.type}
            </Text>
            <Text style={{fontSize: 12, marginTop: 10, color: '#6A6A6A'}}>
              {item.date}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={require('../../../Assets/Images/star.png')} />
                <Text style={{color: 'black'}}>{item.stars}.0</Text>
              </View>
              <View
                style={{
                  height: 24,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#1C76B3',
                  paddingHorizontal: 5,
                }}>
                <Text style={{color: 'white', fontSize: 16}}>Book Again</Text>
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
        <Image
          source={require('../../../Assets/Images/notifi.png')}
          tintColor="transparent"
        />
      </View>
      <Text style={{fontSize: 20, color: 'black', fontFamily: 'Inter'}}>
        Upcoming
      </Text>
      <View style={{marginVertical: 10, height: height / 7}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'Inter',
          marginTop: 40,
        }}>
        History
      </Text>
      <View style={{marginVertical: 10, height: height / 2}}>
        <FlatList
          data={DATA1}
          renderItem={renderItem1}
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
