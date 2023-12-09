import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import StarRating from '../../../constants/starrating';
import {theme} from '../../../constants/theme';

const Locations = () => {
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
          Feedback
        </Text>
        <Image
          source={require('../../../Assets/Images/backArrow.png')}
          tintColor="transparent"
        />
      </View>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <Text style={{fontSize: 20, fontFamily: 'Inter', textAlign: 'center'}}>
          Tell us what went wrong...!
        </Text>
        <View style={{width: '60%', height: 50, alignSelf: 'center'}}>
          <Image source={require('../../../Assets/Images/starGroup.png')} />
        </View>
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text>Choose my answer </Text>
        <Image source={require('../../../Assets/Images/smile.png')} />
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
    marginBottom: 100,
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

export default Locations;
