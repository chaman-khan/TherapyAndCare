import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../constants/theme';
import ImagePicker from 'react-native-image-crop-picker';

const SessionDetail = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [source, setSource] = useState();

  const newConcernData = [
    {id: 1, value: 'Kinesiology Taping'},
    {id: 2, value: 'Neurological physical'},
    {id: 3, value: 'Neurological'},
    {id: 4, value: 'Cardiovascular'},
    {id: 5, value: 'Geriatric'},
    {id: 6, value: 'Geriatric'},
    {id: 7, value: 'Geriatric'},
    {id: 8, value: 'Geriatric'},
  ];

  const gallery = () => {
    ImagePicker.openPicker({}).then(images => {
      console.log(images);
      setSource(images.path);
    });
  };

  return (
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
          Session Details
        </Text>
        <Image
          source={require('../../../Assets/Images/backArrow.png')}
          tintColor="transparent"
        />
      </View>
      <View style={{width: '90%', alignSelf: 'center', gap: 15}}>
        <TextInput
          placeholder="Patient name"
          placeholderTextColor={'grey'}
          value={name}
          onChangeText={txt => setName(txt)}
          style={styles.input}
        />
        <TextInput
          placeholder="Patient age"
          placeholderTextColor={'grey'}
          value={age}
          onChangeText={txt => setAge(txt)}
          style={styles.input}
        />
        <TextInput
          placeholder="Patient contact number"
          placeholderTextColor={'grey'}
          value={phone}
          onChangeText={txt => setPhone(txt)}
          style={styles.input}
        />
        <Dropdown
          style={[styles.dropdown, isFocus && {backgroundColor: '#FAFAFA'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={newConcernData}
          maxHeight={300}
          labelField="value"
          valueField="id"
          placeholder={!isFocus ? 'Patient Concern' : 'Patient Concern'}
          value={selectedCity}
          itemTextStyle={styles.DropDown_Item}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setSelectedCity(item.id);
            setIsFocus(false);
          }}
        />
        <View style={{backgroundColor: '#F4F4F4'}}>
          <View
            style={{
              width: '85%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'black', fontSize: 18}}>Signature</Text>
            <Text style={{color: '#1C76B3', fontSize: 18}}>Clear</Text>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              width: '85%',
              height: 146,
              alignSelf: 'center',
              backgroundColor: 'white',
            }}
            onPress={gallery}>
            {source && <Image source={{uri: source}} style={{flex: 1}} />}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.btn}
            onPress={() => navigation.replace('PhysioTherapyStack')}>
            <Text style={{color: 'white', fontSize: 16}}>Submit</Text>
          </TouchableOpacity>
        </View>
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
  },
  dropdown: {
    width: '100%',
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
  input: {
    width: '100%',
    borderColor: theme.colors.grey,
    borderWidth: 0.3,
    paddingLeft: 10,
  },
  btn: {
    width: '100%',
    height: 45,
    alignSelf: 'center',
    backgroundColor: '#1C76B3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default SessionDetail;
