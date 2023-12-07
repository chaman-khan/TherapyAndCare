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
// import {
//   CountryPicker,
//   RegionDropdown,
//   CityDropdown,
// } from 'react-native-country-state-city';
import {Country, State, City} from 'country-state-city';
import RNPickerSelect from 'react-native-picker-select';

const Registration = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleCheckboxToggle = checkboxNumber => {
    setIsChecked1(checkboxNumber === 1);
    setIsChecked2(checkboxNumber === 2);
  };

  useEffect(() => {
    // Fetch country data
    const countryData = Country.getAllCountries();
    setCountries(countryData);
  }, []);

  const handleCountryChange = countryCode => {
    // Fetch state data based on the selected country
    const stateData = State.getStatesOfCountry(countryCode);
    setStates(stateData);
  };

  const handleStateChange = stateCode => {
    // Fetch city data based on the selected state
    const cityData = City.getCitiesOfState(stateCode);
    setCities(cityData);
  };

  return (
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

      <RNPickerSelect
        items={countries.map(country => ({
          label: country.isoCode,
          value: country.isoCode,
        }))}
        onValueChange={value => handleCountryChange(value)}
      />
      <RNPickerSelect
        items={states.map(state => ({label: state.name, value: state.isoCode}))}
        onValueChange={value => handleStateChange(value)}
      />
      <RNPickerSelect
        items={cities.map(city => ({label: city.name, value: city.name}))}
        onValueChange={value => console.log(value)}
      />
    </View>
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
});

export default Registration;
