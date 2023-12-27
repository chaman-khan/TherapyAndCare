import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {theme} from '../../../constants/theme';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
const {width, height} = Dimensions.get('screen');

const Locations = ({navigation, route}) => {
  const {item} = route?.params ?? {};

  const [currentLocation, setCurrentLocation] = useState('Select Location');
  const [latitude, setLatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [mapInitialized, setMapInitialized] = useState(false);

  const [img, setImg] = useState(require('../../../Assets/Images/user.png'));
  const [name, setname] = useState('Ramesh Kumar');
  const [address, setAdress] = useState('Industrial Area, Sector 74');
  const [specialist, setSpecialist] = useState('Neurological physical therapy');
  const [distance, setDistance] = useState('15');

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      info => {
        console.log('info', info);
        setLatitude(info.coords.latitude);
        setlongitude(info.coords.longitude);
        setMapInitialized(true);
      },
      error => {
        console.error('Error getting location:', error);
      },
    );
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
        // Display a message to the user or navigate to settings
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleSearch = async () => {
    // Perform a search using the searchText, for example, using a geocoding service
    // Here, a simple example is used by setting the searchedLocation directly
    setSearchedLocation({
      latitude: 37.7749, // Replace with the actual latitude from the search
      longitude: -122.4194, // Replace with the actual longitude from the search
    });
  };

  useEffect(() => {
    if (!mapInitialized) {
      requestLocationPermission();
    }
  }, [mapInitialized]);
  const onRegionChange = region => {
    setLatitude(region.latitude);
    setlongitude(region.longitude);
  };

  return (
    <ScrollView>
      <View>
        {mapInitialized && (
          <View
            style={{
              width: width,
              height: height,
              alignSelf: 'center',
              backgroundColor: 'white',
            }}>
            <View style={{zIndex: 2}}>
              {item && (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('../../../Assets/Images/backArrow.png')}
                    tintColor={'black'}
                    style={{marginLeft: 20, marginTop: 20}}
                  />
                </TouchableOpacity>
              )}
              <View style={styles.input}>
                <TextInput
                  placeholder="Search Here"
                  placeholderTextColor={'grey'}
                  style={{width: '80%', textAlign: 'center', color: 'grey'}}
                  value={searchText}
                  onChangeText={text => setSearchText(text)}
                  onSubmitEditing={handleSearch} // Call handleSearch when the user presses Enter
                />
                <View style={{width: '15%'}}>
                  <Image
                    source={require('../../../Assets/Images/search.png')}
                    tintColor={'#1C76B3'}
                    style={{width: 24, height: 24}}
                  />
                </View>
              </View>
            </View>
            <MapView
              provider={PROVIDER_GOOGLE}
              onRegionChange={onRegionChange}
              style={{
                width: width,
                height: height - height / 2.5,
                backgroundColor: 'red',
                position: 'absolute',
              }}
              initialRegion={{
                latitude: searchedLocation?.latitude || latitude,
                longitude: searchedLocation?.longitude || longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              {searchedLocation && (
                <Marker
                  coordinate={{
                    latitude: searchedLocation.latitude,
                    longitude: searchedLocation.longitude,
                  }}
                  title="Searched Location"
                />
              )}
            </MapView>
            <TouchableOpacity
              style={{
                ...styles.info,
                marginTop: item ? height - height / 2 : height - height / 2.2,
              }}
              activeOpacity={1}
              onPress={() => (item ? navigation.navigate('TimeOUt') : null)}>
              <TouchableOpacity activeOpacity={1}>
                <Text style={{color: '#008000', textAlign: 'right'}}>
                  Available
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Image source={item ? item.image : img} />
                <View style={{width: '70%', gap: 5}}>
                  <Text style={{color: 'black', fontSize: 20}}>
                    {item ? item.doctorName : name}
                  </Text>
                  <Text style={{color: '#616161'}}>
                    {item ? item.specialist : specialist}
                  </Text>
                  <Text style={{color: '#616161'}}>
                    {item ? item.address : address}
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                  <View style={{flexDirection: 'row', gap: 7}}>
                    <Image
                      source={require('../../../Assets/Images/location.png')}
                      tintColor={'#1C76B3'}
                      style={{width: 20, height: 20}}
                    />
                    <Text style={{color: '#616161'}}>{distance} KM</Text>
                  </View>
                  <Text style={{color: '#1C76B3'}}>(10 Am - 2 Pm)</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  info: {
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    paddingBottom: 30,
    marginVertical: 10,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
  },
  input: {
    width: '90%',
    height: 44,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 20,
  },
});
export default Locations;
