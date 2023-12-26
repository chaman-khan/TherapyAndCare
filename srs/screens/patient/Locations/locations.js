import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {theme} from '../../../constants/theme';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';

const Locations = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = useState('Select Location');
  const [latitude, setLatitude] = useState();
  const [longitude, setlongitude] = useState();

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      setLatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
    });
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
    });
    getCurrentLocation();
    // dispatch(getAllCategories(loginData, categorySuccess, categoryError));
    // dispatch(authLoad(false));
  }, [longitude, longitude]);

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
            <View style={styles.Button_Box}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.Button}
                onPress={() => {
                  setShowMap(false);
                  setCurrentLocation('Location picked');
                }}>
                <Text style={styles.Sign_Up_Text}>Pick location</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Locations;
