import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';
import {theme} from '../../constants/theme';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Options = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null); // Track the selected checkbox

  // Handle checkbox clicks
  const handleCheckboxClick = checkboxValue => {
    if (checkboxValue !== selectedCheckbox) {
      setSelectedCheckbox(checkboxValue);
    } else {
      setSelectedCheckbox(null);
    }
  };

  return (
    <View>
      <Image
        source={require('../../Assets/Images/design.png')}
        style={{width: '100%'}}
      />
      <Text
        style={{
          color: theme.colors.primary,
          fontFamily: 'Inter',
          fontSize: 24,
          fontStyle: 'normal',
          fontWeight: '400',
          textAlign: 'center',
          marginVertical: 40,
        }}>
        Choose One
      </Text>

      <BouncyCheckbox
        size={25}
        fillColor={theme.colors.primary}
        unfillColor="#FFFFFF"
        title="Physiotherapy"
        isChecked={selectedCheckbox === 'Physiotherapy'} // Check based on selectedCheckbox
        onPress={() => handleCheckboxClick('Physiotherapy')}
        text="Physiotherapy"
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 2}}
        textStyle={{fontFamily: 'JosefinSans-Regular'}}
        style={styles.checkbox}
      />
      <BouncyCheckbox
        size={25}
        fillColor={theme.colors.primary}
        unfillColor="#FFFFFF"
        text="Patient"
        title="Patient"
        isChecked={selectedCheckbox === 'Patient'} // Check based on selectedCheckbox
        onPress={() => handleCheckboxClick('Patient')}
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 2}}
        textStyle={{fontFamily: 'JosefinSans-Regular'}}
        style={styles.checkbox}
      />
      <View
        style={{
          height: 50,
          width: '90%',
          backgroundColor: theme.colors.primary,
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: 'white'}}>Continue</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: '90%',
    height: 70,
    alignSelf: 'center',
    borderColor: '#86CEFF',
    borderWidth: 1,
    gap: 30,
    paddingHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: theme.colors.primary,
  },
});

export default Options;
