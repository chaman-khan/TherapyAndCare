import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../../constants/theme';
import ImagePicker from 'react-native-image-crop-picker'

const TimeOUt = ({navigation, route}) => {
  const {item} = route.params;

  const [hours, setHours] = useState('2');
  const [min, setMin] = useState('43');

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
          Session Timeout
        </Text>
        <Image
          source={require('../../../Assets/Images/backArrow.png')}
          tintColor="transparent"
        />
      </View>
      <View
        style={{
          width: '70%',
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginTop: 30,
        }}>
        <Image
          source={require('../../../Assets/Images/timeOut.png')}
          style={{width: 25, height: 25}}
        />
        <Text style={{color: 'black'}}>Your session will expire in</Text>
      </View>
      <Text style={styles.txt}>{`${hours} hour ${min} mins`}</Text>
      <Text
        style={{
          width: '80%',
          color: '#4E4E4E',
          textAlign: 'center',
          alignSelf: 'center',
        }}>
        Please click “Continue” to keep working; or click “Log off” to end your
        session now.
      </Text>
      <View style={styles.row}>
        <View style={{width: '45%'}}>
          <TouchableOpacity activeOpacity={1} style={styles.view} onPress={gallery}>
            <Image source={require('../../../Assets/Images/addNotes.png')}/>
          </TouchableOpacity>
          <Text style={{color: '#1C76B3', textAlign: 'center'}}>Add Notes</Text>
        </View>
        <View style={{width: '45%'}}>
          <TouchableOpacity activeOpacity={1} style={styles.view} onPress={gallery}>
            <Image source={require('../../../Assets/Images/uploads.png')} />
          </TouchableOpacity>
          <Text style={{color: '#1C76B3', textAlign: 'center'}}>
            Upload documents
          </Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.btn}
        onPress={() =>
          navigation.navigate('PhysioTherapyStack', {
            screen: 'SessionDetail',
            params: {item},
          })
        }>
        <Text style={{color: 'white'}}>Log off</Text>
      </TouchableOpacity>
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
  view: {
    width: '100%',
    height: 113,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
  },
  row: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: '90%',
    height: 45,
    alignSelf: 'center',
    backgroundColor: '#1C76B3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  txt: {
    width: '100%',
    color: '#1C76B3',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 50,
  },
});

export default TimeOUt;
