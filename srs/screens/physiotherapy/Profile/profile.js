import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {theme} from '../../../constants/theme';
import ImagePicker from 'react-native-image-crop-picker';

const Profile = () => {
  const [name, setname] = useState('Ramesh Kumar');
  const [no, setNo] = useState('+91 8777489568');
  const [email, setEmail] = useState('+xyz@gmail.com');
  const [address, setAdress] = useState('Industrial Area, Sector 74');
  const [city, setCity] = useState('Mohali, Punjab , 169878');
  const [source, setSource] = useState(
    require('../../../Assets/Images/user.png'),
  );

  const gallery = () => {
    ImagePicker.openPicker({}).then(images => {
      console.log(images);
      setSource(images.path);
    });
  };
  return (
    <View style={{width: '100%', alignSelf: 'center'}}>
      <View
        style={{width: '100%', backgroundColor: '#F6FFFD', marginBottom: 30}}>
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
            Profile
          </Text>
          <Image
            source={require('../../../Assets/Images/notifi.png')}
            tintColor="transparent"
          />
        </View>
        <View
          style={{width: '100%', alignSelf: 'center', alignItems: 'center'}}>
          <Image source={source} style={{width: 90, height: 90}} />
          <View
            style={{
              backgroundColor: '#1C76B3',
              padding: 6,
              borderRadius: 15,
              marginLeft: 60,
              marginTop: -15,
            }}>
            <TouchableOpacity
              onPress={() => {
                gallery();
              }}>
              <Image
                source={require('../../../Assets/Images/camera.png')}
                tintColor="white"
                style={{width: 18, height: 16}}
              />
            </TouchableOpacity>
          </View>
          <Text style={{color: 'black', fontSize: 16}}>{name}</Text>
          <Text style={{color: 'black', fontSize: 12}}>{no}</Text>
        </View>
      </View>
      <View style={styles.view}>
        <Text style={{color: '#1C76B3', fontSize: 18}}>Your Name</Text>
        <Text style={{color: 'black'}}> {name}</Text>
      </View>
      <View style={styles.view}>
        <Text style={{color: '#1C76B3', fontSize: 18}}>Your Email</Text>
        <Text style={{color: 'black'}}>{email}</Text>
      </View>
      <View style={styles.view}>
        <Text style={{color: '#1C76B3', fontSize: 18}}>Your Phone</Text>
        <Text style={{color: 'black'}}>{no}</Text>
      </View>
      <View style={styles.view}>
        <Text style={{color: '#1C76B3', fontSize: 18}}>Your Address</Text>
        <Text style={{color: 'black'}}>{address}</Text>
      </View>
      <View style={styles.view}>
        <Text style={{color: '#1C76B3', fontSize: 18}}>
          Your city / state / pincode
        </Text>
        <Text style={{color: 'black'}}>{city}</Text>
      </View>
      <View style={styles.view}>
        <Text style={{color: '#1C76B3', fontSize: 18}}>Your Name</Text>
        <Text style={{color: 'black'}}>{name}</Text>
      </View>
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
        onPress={() => navigation.navigate('Options')}>
        <Text style={{color: 'white'}}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  view: {
    width: '90%',
    alignSelf: 'center',
    borderColor: '#DEDEDE',
    borderBottomWidth: 1,
    gap: 5,
    marginVertical: 5,
  },
});
export default Profile;
