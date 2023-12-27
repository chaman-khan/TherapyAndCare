import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../../constants/theme';
import {Country, State, City} from 'country-state-city';
import {Dropdown} from 'react-native-element-dropdown';

import {ScrollView} from 'react-native';
import { responsiveScreenFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
const AddDetails = ({navigation}) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryCode, setCountryCode] = useState('91');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const countries = Country.getAllCountries();


  useEffect(() => {
    // Find the country based on the entered country code
    const countryWithCode = countries.find(
      country => country.phonecode === countryCode,
    );

    if (countryWithCode) {
      // Update the selected country and country code
      setSelectedCountry(countryWithCode.name);
      setCountryCode(countryWithCode.phonecode);
    }
  }, [countryCode]);
  console.log(selectedCountry);
  const selectedCountryData = countries.find(
    country => country.name === selectedCountry,
  );
  let stateData = [];
  let cityData = [];
  let states = [];

  console.log('Selected Country:', selectedCountry);

  if (selectedCountryData) {
    // Remove the 'let' keyword here
    states = State.getStatesOfCountry(selectedCountryData.isoCode);
    console.log('States:', states);

    stateData = states.map(state => ({
      label: state.name,
      value: state.name,
    }));
  } else {
    console.log('Selected country not found in data:', selectedCountry);
  }
  const selectedStateData = states.find(state => state.name === selectedState);

  if (selectedStateData) {
    console.log('Selected state:', selectedState);

    const cities = City.getCitiesOfState(selectedStateData.isoCode);
    console.log('Cities:', cities);

    cityData = cities.map(city => ({
      label: city.name,
      value: city.name,
    }));
    console.log('City data:', cityData);
  } else {
    console.log('Selected state not found in data:', selectedState);
  }
  return (
    <ScrollView>
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
            Add details
          </Text>
          <Image
            source={require('../../../Assets/Images/backArrow.png')}
            tintColor="transparent"
          />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Patient name" placeholderTextColor={'grey'} style={{fontSize: 16, color: 'black'}} />
        </View>
        <View style={{...styles.input, justifyContent: 'space-between'}}>
          <TextInput placeholder="Patient age" placeholderTextColor={'grey'} style={{fontSize: 16, color: 'black'}} />
          <Image source={require('../../../Assets/Images/downArrow.png')} />
        </View>
{/* 
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}> */}
          
          <View style={styles.input}>
            <TextInput
               placeholderTextColor={'grey'} style={{fontSize: 16, color: 'black'}}
              value={`+${countryCode}`}
              onChangeText={txt => setCountryCode(txt.replace(/\D/g, ''))}
            />
            <TextInput placeholder="Phone Number"  placeholderTextColor={'grey'} style={{fontSize: 16, color: 'black'}}  />
          </View>
        {/* </View> */}

        <View style={styles.input}>
          <TextInput placeholder="Patient address" placeholderTextColor={'grey'} style={{fontSize: 16, color: 'black'}} />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
            marginVertical: 10
          }}>
            <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={stateData}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'State' : 'State'}
            value={selectedState}
            itemTextStyle={styles.DropDown_Item}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setSelectedState(item.value);
              setIsFocus(false);
            }}
          />
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={cityData}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'City' : 'City'}
            value={selectedCity}
            itemTextStyle={styles.DropDown_Item}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setSelectedCity(item.value);
              setIsFocus(false);
            }}
          />
          
        </View>
        <View style={styles.input}>
          <Image source={require('../../../Assets/Images/pinCode.png')} />
          <TextInput placeholder="Pincode" placeholderTextColor={'grey'} style={{fontSize: 16, color: 'black'}} />
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.Button_Box}
          onPress={() => navigation.navigate('AppointmentDetails')}>
          <View style={styles.Button} activeOpacity={0.7}>
            <Text style={styles.Verify_Text}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  input1: {
    width: '100%',
    height: 52,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // gap: 30,
    borderWidth: 0.5,
    borderColor: theme.colors.grey,
    borderRadius: 1,
    paddingHorizontal: 15,
  },
  input: {
    width: '100%',
    height: 52,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    borderWidth: 0.5,
    borderColor: theme.colors.grey,
    borderRadius: 1,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  Button_Box: {
    // borderWidth:2,
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.primary,
    marginTop: 30,
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
  dropdown1: {
    width: '35%',
    height: 50,
    borderColor: theme.colors.grey,
    borderWidth: 0.3,
    borderRadius: 6,
    paddingHorizontal: 17,
  },
  dropdown: {
    width: '45%',
    height: 50,
    borderColor: theme.colors.grey,
    borderWidth: 0.3,
    // borderRadius: 6,
    paddingHorizontal: 30,
  },
  DropDown_Item: {
    height: responsiveScreenHeight(2),
    width: '20%',
    fontSize: responsiveScreenFontSize(1.6),
    fontFamily: 'Poppins',
    color: '#000000',
    fontWeight: '400',
  },
  placeholderStyle: {
    fontFamily: 'Inter',
    color: '#818181',
    fontSize: 16,
    fontWeight: '400',
  },
  selectedTextStyle: {
    // height:48,
    width: '91%',
    fontSize: 16,
    fontFamily: 'Inter',
    color: '#000000',
    fontWeight: '400',
  },
});

export default AddDetails;
