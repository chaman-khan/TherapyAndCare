import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {theme} from '../../../constants/theme';
import {StyleSheet, FlatList} from 'react-native';
import StarRating from '../../../constants/starrating';

const Physiotherapist = ({navigation}) => {
  
  const DATA = [
    {
      id: 1,
      image: require('../../../Assets/Images/user.png'),
      doctorName: 'Dr. Sonam',
      specialist: 'Neurological physical therapist',
      availability: true,
      experience: 4,
      stars: 5,
      location: 'Phase 8B',
      locationDes: 'Industrial Area, Sector 74',
      min_fee: 200,
      patients: 300
    },
    {
      id: 2,
      image: require('../../../Assets/Images/user2.png'),
      doctorName: 'Dr. Mohit',
      specialist: 'Geriatric physical therapist',
      availability: false,
      experience: 7,
      stars: 3,
      location: 'Sec-74',
      locationDes: 'Ajit singh nagar, Mohali',
      min_fee: 150,
      patients: 200

    },
    {
      id: 3,
      image: require('../../../Assets/Images/user3.png'),
      doctorName: 'Dr. Naman',
      specialist: 'Orthopedic physical therapist',
      availability: false,
      experience: 3,
      stars: 4,
      location: 'Phase 11D',
      locationDes: 'Industrial Area, Sadar',
      min_fee: 300,
      patients: 100
      
    },
    {
      id: 4,
      image: require('../../../Assets/Images/user4.png'),
      doctorName: 'Dr. Karan',
      specialist: 'Cardiovascular Physiotherapist',
      availability: true,
      experience: 8,
      stars: 5,
      location: 'Cannt',
      locationDes: 'Srtreet 118, Kagaan',
      min_fee: 100,
      patients: 500

    },
    {
      id: 5,
      image: require('../../../Assets/Images/user.png'),
      doctorName: 'Dr. Karan',
      specialist: 'Cardiovascular Physiotherapist',
      availability: false,
      experience: 8,
      stars: 4,
      location: 'Sector 1C',
      locationDes: 'Naresh Pur, Porash',
      min_fee: 180,
      patients: 100

    },
    {
      id: 6,
      image: require('../../../Assets/Images/user2.png'),
      doctorName: 'Dr. Sonam',
      specialist: 'Neurological physical therapist',
      availability: true,
      experience: 2,
      stars: 3,
      location: 'Phase 8B',
      locationDes: 'Industrial Area, Sector 74',
      min_fee: 230,
      patients: 400

    },
    {
      id: 6,
      image: require('../../../Assets/Images/user.png'),
      doctorName: 'Dr. Sonam',
      specialist: 'Neurological physical therapist',
      availability: true,
      experience: 4,
      stars: 5,
      location: 'Phase 8B',
      locationDes: 'crpto agency, F block',
      min_fee: 310,
      patients: 300
      
    },
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.listItem} activeOpacity={1} onPress={() => {
        navigation.navigate('PatientStack', {
          screen: 'DoctorInfo',
          params: {item: item},
        });
      }}>
        <Image source={item.image} style={{width: '20%'}} />
        <View style={{width: '70%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
              {item.doctorName}
            </Text>
            {item.availability ? (
              <Text style={{color: '#008000'}}>Available</Text>
            ) : (
              <Text style={{color: '#F00'}}>Unavailable</Text>
            )}
          </View>
          <Text>{item.specialist}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <StarRating noOfStars={item.stars} />
              <Text style={{color: '#1C76B3'}}>
                {item.experience} years of Experience
              </Text>
            </View>
            <View style={styles.bookBtn}>
              {item.availability ? (
                <Text style={{color: 'white'}}>Book</Text>
              ) : (
                <Text style={{color: 'white'}}>Request</Text>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={styles.topBar}>
        <Image source={require('../../../Assets/Images/backArrow.png')} />
        <Text
          style={{
            color: theme.colors.primary,
            fontSize: 24,
            fontWeight: '400',
          }}>
          Physiotherapist
        </Text>
        <Image
          source={require('../../../Assets/Images/backArrow.png')}
          tintColor="transparent"
        />
      </View>
      <View style={{width: '100%', alignSelf: 'center', marginBottom: 150}}>
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
    width: '95%',
    alignSelf: 'center',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookBtn: {
    width: 63,
    backgroundColor: '#1C76B3',
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FAFAFA',
    paddingVertical: 10,
    marginVertical: 5,

    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: {width: 0, height: 1.5},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 10,
  },
});

export default Physiotherapist;
