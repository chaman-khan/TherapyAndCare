import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';

const DoctorInfo = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <View>
      <View
        style={{
          width: '100%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{alignSelf: 'flex-start', marginLeft: 10}}>
          <Image source={require('../../../Assets/Images/backArrow.png')} />
        </TouchableOpacity>

        <Image
          source={item.image}
          style={{width: 116, height: 116, marginVertical: 20}}
        />
        <View style={{flexDirection: 'row', gap: 10, marginVertical: 10}}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>
            {item.doctorName}
          </Text>
          <Image source={require('../../../Assets/Images/verified.png')} />
        </View>
        <Text>{item.specialist}</Text>
        <View style={{flexDirection: 'row', gap: 10, marginVertical: 15}}>
          <Image
            source={require('../../../Assets/Images/location.png')}
            style={{width: 24, height: 24}}
          />
          <Text style={{fontSize: 16}}>
            {item.location} {item.locationDes}
          </Text>
        </View>
      </View>
      <View style={{width: '85%', alignSelf: 'center', marginVertical: 30}}>
        <View style={{flexDirection: 'row', gap: 20, marginBottom: 50}}>
          <Text style={{fontSize: 16, color: 'black'}}>
            Minimum fees charges
          </Text>
          <Text style={{color: '#1C76B3', fontSize: 16}}>₹{item.min_fee}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <View
            style={{
              width: '30%',
              height: 67,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              gap: 10,
            }}>
            <Text style={{color: 'black'}}>Patients</Text>
            <View
              style={{
                flexDirection: 'row',
                width: '60%',
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../../Assets/Images/name.png')}
                style={{width: 15, height: 18}}
              />
              <Text>{item.patients}+</Text>
            </View>
          </View>
          <View
            style={{
              width: '30%',
              height: 67,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              gap: 10,
            }}>
            <Text style={{color: 'black'}}>Experience</Text>
            <View
              style={{
                flexDirection: 'row',
                width: '45%',
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <Text>{item.experience}</Text>
              <Text>Yrs+</Text>
            </View>
          </View>
          <View
            style={{
              width: '30%',
              height: 67,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              gap: 10,
            }}>
            <Text style={{color: 'black'}}>Rating</Text>
            <View
              style={{
                flexDirection: 'row',
                width: '45%',
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../../Assets/Images/star.png')}
                style={{width: 18, height: 17}}
              />
              <Text>{item.stars}.0</Text>
            </View>
          </View>
        </View>
        <View style={{gap: 10, marginVertical: 20}}>
          <Text style={{color: 'black', fontSize: 16}}>Degree</Text>
          <Text>Master of Physiotherapy</Text>
        </View>
        <View>
          <Text style={{color: 'black', fontSize: 16}}>Availability</Text>
          <View style={{flexDirection: 'row', gap: 30}}>
            <Text>Mon - Fri: </Text>
            <Text>9:30 - 4:30 </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 50
          }}>
          <View
            style={{
              width: '45%',
              backgroundColor: '#1C76B3',
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Confirm</Text>
          </View>
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Locations')}
            style={{
              width: '45%',
              backgroundColor: '#1C76B3',
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default DoctorInfo;