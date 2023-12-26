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
import MapView, {Marker} from 'react-native-maps';
const {width, height} = Dimensions.get('screen');

const Locations = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = useState('Select Location');
  const [latitude, setLatitude] = useState();
  const [longitude, setlongitude] = useState();

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(info => {
      console.log('info');
      console.log(info);
      console.log('info');
      setLatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
    });
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

  useEffect(() => {
    requestLocationPermission();
  }, []);
  const onRegionChange = region => {
    setLatitude(region.latitude);
    setlongitude(region.longitude);
  };

  return (
    <ScrollView>
      <View>
        <View
          style={{
            height: '100%',
            width: width,
            zIndex: 100,
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MapView
            // provider={PROVIDER_GOOGLE}
            onRegionChange={onRegionChange}
            style={{height: '50%', width: '100%', backgroundColor: 'red'}}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              title="Current Location"
            />
          </MapView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Locations;
