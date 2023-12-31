import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../constants/theme';
import {Country, State, City} from 'country-state-city';
import {Dropdown} from 'react-native-element-dropdown';
import ImagePicker from 'react-native-image-crop-picker';

import {ScrollView} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

const Registration = ({navigation}) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [countryData, setCountryData] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [countries, setCountries] = useState([]);

  const handleCheckboxToggle = checkboxNumber => {
    setIsChecked1(checkboxNumber === 1);
    setIsChecked2(checkboxNumber === 2);
  };
  const fetchCountryData = async () => {
    const countries = Country.getAllCountries();
    setCountries(countries);
    const countryData = countries.map(country => ({
      label: country.flag,
      value: country.name,
      code: country.phonecode,
    }));
    setCountryData(countryData);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);
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

  console.log('Selected State:', selectedState);

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

  const gallery = () => {
    ImagePicker.openPicker({}).then(images => {
      console.log(images);
      setSource(images.path);
    });
  };
  return (
    <ScrollView>
      <View>
        <Image
          source={require('../../Assets/Images/design.png')}
          style={{width: '100%'}}
        />
        <Text style={styles.headerText}>Register</Text>
        <View style={styles.input}>
          <Image source={require('../../Assets/Images/name.png')} />
          <TextInput
            placeholder="Name"
            placeholderTextColor={'grey'}
            style={{fontSize: 16, color: 'black'}}
          />
        </View>
        <View style={{width: '80%', alignSelf: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              width: '70%',
              alignSelf: 'flex-start',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => handleCheckboxToggle(1)}>
              <View style={styles.checkboxView}>
                <View
                  style={[
                    styles.checkbox,
                    // {backgroundColor: isChecked1 ? theme.colors.primary : 'white'},
                  ]}>
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: isChecked1
                        ? theme.colors.primary
                        : 'transparent',
                      borderRadius: 5,
                    }}></View>
                </View>
                <Text style={styles.checkboxText}>Male</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => handleCheckboxToggle(2)}>
              <View style={styles.checkboxView}>
                <View
                  style={[
                    styles.checkbox,
                    // {backgroundColor: isChecked1 ? theme.colors.primary : 'white'},
                  ]}>
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: isChecked2
                        ? theme.colors.primary
                        : 'transparent',
                      borderRadius: 5,
                    }}></View>
                </View>
                <Text style={styles.checkboxText}>Female</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.input}>
          <Image source={require('../../Assets/Images/email.png')} />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={'grey'}
            style={{fontSize: 16, color: 'black'}}
          />
        </View>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <Dropdown
            style={[styles.dropdown1, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={countryData}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Country' : '...'}
            value={selectedCountry}
            itemTextStyle={styles.DropDown_Item}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setSelectedCountry(item.value);
              setCountryCode(item.code);
              setIsFocus(false);
            }}
          />
          <View style={styles.input1}>
            <TextInput
              style={{width: '25%', fontSize: 16, color: 'black'}}
              value={`+${countryCode}`}
              onChangeText={txt => setCountryCode(txt.replace(/\D/g, ''))}
            />
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor={'grey'}
              style={{fontSize: 16, color: 'black'}}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.input}>
          <Image source={require('../../Assets/Images/address.png')} />
          <TextInput
            placeholder="address"
            placeholderTextColor={'grey'}
            style={{fontSize: 16, color: 'black'}}
          />
        </View>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
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
          <Image source={require('../../Assets/Images/pinCode.png')} />
          <TextInput
            placeholder="Pincode"
            placeholderTextColor={'grey'}
            style={{fontSize: 16, color: 'black'}}
          />
        </View>
        <View style={styles.input}>
          <Image source={require('../../Assets/Images/experience.png')} />
          <TextInput
            placeholder="Years  of Experience"
            placeholderTextColor={'grey'}
            style={{fontSize: 16, color: 'black'}}
          />
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text style={{color: '#535353', fontSize: 20}}>Upload documents </Text>
          <Image
            source={require('../../Assets/Images/redStar.png')}
            style={{width: 10, height: 10}}
          />
        </View>
        <TouchableOpacity style={styles.docs} onPress={() => gallery()}>
          <Image
            source={require('../../Assets/Images/upload.png')}
            tintColor="transparent"
          />

          <Text style={{color: '#1C76B3'}}>Degree certificates</Text>
          <Image source={require('../../Assets/Images/upload.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.docs} onPress={() => gallery()}>
          <Image
            source={require('../../Assets/Images/upload.png')}
            tintColor="transparent"
          />

          <Text style={{color: '#1C76B3'}}>State council registration details</Text>
          <Image source={require('../../Assets/Images/upload.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.Button_Box}
          onPress={() => navigation.replace('PhysioBottomtab')}>
          <View style={styles.Button} activeOpacity={0.7}>
            <Text style={styles.Verify_Text}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: theme.colors.primary,
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
  },
  input1: {
    width: '60%',
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // gap: 30,
    borderWidth: 0.1,
    borderColor: theme.colors.grey,
    borderRadius: 1,
    paddingHorizontal: 15,
  },
  input: {
    width: '90%',
    height: 60,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    borderWidth: 0.1,
    borderColor: theme.colors.grey,
    borderRadius: 1,
    marginVertical: 7,
    paddingHorizontal: 15,
    color: 'black',
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    alignSelf: 'flex-start',
    alignItems: 'center',

    // justifyContent: 'flex-start',

    // paddingHorizontal: 20,
    // marginVertical: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 10,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxText: {
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: 'black',
  },
  Button_Box: {
    // borderWidth:2,
    width: '90%',
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
    borderRadius: 6,
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
  docs: {
    height: 60,
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: '#1C76B3',
    borderWidth: 0.6,
    borderRadius: 10,
    marginVertical: 5,
  },
});

export default Registration;
