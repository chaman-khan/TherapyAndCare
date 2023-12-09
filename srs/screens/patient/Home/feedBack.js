import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import StarRating from '../../../constants/starrating';
import {theme} from '../../../constants/theme';

const FeedBack = ({navigation}) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const handleCheckboxToggle = checkboxNumber => {
    setIsChecked1(checkboxNumber === 1);
    setIsChecked2(checkboxNumber === 2);
    setIsChecked3(checkboxNumber === 3);
    setIsChecked4(checkboxNumber === 4);
  };
  return (
    <ScrollView>
      <View>
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
            Feedback
          </Text>
          <Image
            source={require('../../../Assets/Images/backArrow.png')}
            tintColor="transparent"
          />
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text
            style={{fontSize: 20, fontFamily: 'Inter', textAlign: 'center'}}>
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
            width: '90%',
            alignSelf: 'center',
            alignItems: 'flex-start',
            marginTop: 50,
            // justifyContent: 'flex-start',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleCheckboxToggle(1)}
            style={styles.checkboxView}>
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
            <Text style={styles.checkboxText}>Lorem Ipsum is simply dummy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleCheckboxToggle(2)}
            style={styles.checkboxView}>
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
            <Text style={styles.checkboxText}>Lorem Ipsum is simply dummy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleCheckboxToggle(3)}
            style={styles.checkboxView}>
            <View
              style={[
                styles.checkbox,
                // {backgroundColor: isChecked1 ? theme.colors.primary : 'white'},
              ]}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: isChecked3
                    ? theme.colors.primary
                    : 'transparent',
                  borderRadius: 5,
                }}></View>
            </View>
            <Text style={styles.checkboxText}>Lorem Ipsum is simply dummy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => handleCheckboxToggle(4)}
            style={{...styles.checkboxView, borderBottomWidth: 0.5}}>
            <View
              style={[
                styles.checkbox,
                // {backgroundColor: isChecked1 ? theme.colors.primary : 'white'},
              ]}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: isChecked4
                    ? theme.colors.primary
                    : 'transparent',
                  borderRadius: 5,
                }}></View>
            </View>
            <Text style={styles.checkboxText}>Other</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Add your message"
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 116,
            backgroundColor: '#F6F6F6',
            textAlign: 'center',
            borderColor: '#86CEFF',
            borderWidth: 1,
            borderRadius: 6,
            marginTop: 20,
          }}
        />
        <TouchableOpacity
          style={{
            height: 50,
            width: '90%',
            backgroundColor: theme.colors.primary,
            marginVertical: 50,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          onPress={() => navigation.navigate('Options')}
          // onPress={handleLogin}
        >
          <Text style={{color: 'white'}}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    marginBottom: 50,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: theme.colors.grey,
    borderTopWidth: 0.5,
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
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#1C76B3',
  },
});

export default FeedBack;
