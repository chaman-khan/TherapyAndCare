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
import {ICountry, IState, ICity} from 'country-state-city';
import RNPickerSelect from 'react-native-picker-select';
import Flag from 'react-native-country-flag';
import CountryStateCityPicker from 'country-state-city';
import {Dropdown} from 'react-native-element-dropdown';
import Picker from 'react-native-picker-select';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {ScrollView} from 'react-native';

const Registration = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const handleCheckboxToggle = checkboxNumber => {
    setIsChecked1(checkboxNumber === 1);
    setIsChecked2(checkboxNumber === 2);
  };
  // console.log('====================================');
  // console.log(Country.getAllCountries());
  // console.log('====================================');
  const countries = Country.getAllCountries();
  const countryData = countries.map(country => ({
    label: country.flag,
    value: country.name,
    code: country.phonecode,
  }));

  const states = State.getStateByCodeAndCountry(selectedCountry);
  console.log('====================================');
  console.log(states);
  console.log('====================================');
  const stateData = countries.map(state => ({
    label: state.name,
    value: state.name,
  }));
  const cities = City.getCitiesOfState(selectedState);
  const cityData = cities.map(city => ({
    label: city.name,
    value: city.name,
  }));

  // countries.forEach(country => {
  //   console.log(country.isoCode);
  // });

  // useEffect(() => {
  //   // Fetch country data
  //   const countryData = Country.getAllCountries();
  //   setCountries(countryData);
  // }, []);

  const handleCountryChange = country => {
    setSelectedCountry(country);
    const states = CountryStateCityPicker.getStatesOfCountry(country);
    setSelectedState(states[0].isoCode); // Select the first state by default
    setCities(
      CountryStateCityPicker.getCitiesOfState(country, states[0].isoCode),
    );
  };

  const handleStateChange = state => {
    setSelectedState(state);
    setCities(CountryStateCityPicker.getCitiesOfState(selectedCountry, state));
  };
  const handleCityChange = city => {
    // Handle city change if needed
    console.log(city);
  };
  // console.log(ICountry);
  // console.log('====================================');
  // console.log(Country.getAllCountries());
  // console.log('====================================');

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
          <TextInput placeholder="Name" style={{fontSize: 16}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            alignSelf: 'center',
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
        <View style={styles.input}>
          <Image source={require('../../Assets/Images/email.png')} />
          <TextInput placeholder="Email Address" style={{fontSize: 16}} />
        </View>

        <View>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={countryData}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Country' : 'Select Country'}
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
          <View>
            <Text>{countryCode}</Text>
            <TextInput placeholder="" />
          </View>
        </View>

        <View style={styles.input}>
          <Image source={require('../../Assets/Images/address.png')} />
          <TextInput placeholder="address" style={{fontSize: 16}} />
        </View>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
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
        </View>
        <View style={styles.input}>
          <Image source={require('../../Assets/Images/pinCode.png')} />
          <TextInput placeholder="Pincode" style={{fontSize: 16}} />
        </View>
        <View style={styles.Button_Box}>
          <TouchableOpacity style={styles.Button} activeOpacity={0.7}>
            <Text style={styles.Verify_Text}>Submit</Text>
          </TouchableOpacity>
        </View>
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
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',

    paddingHorizontal: 20,
    marginVertical: 15,
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
  },
  Verify_Text: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  dropdown: {
    width: '45%',
    height: 50,
    borderColor: theme.colors.grey,
    borderWidth: 0.3,
    borderRadius: 6,
    paddingHorizontal: 30,
  },
  // DropDown_Item: {
  //   height: responsiveScreenHeight(2),
  //   width: '20%',
  //   fontSize: responsiveScreenFontSize(1.6),
  //   fontFamily: 'Poppins',
  //   color: '#000000',
  //   fontWeight: '400',
  // },
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

export default Registration;
