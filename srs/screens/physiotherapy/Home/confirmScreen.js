import React from 'react';
import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ConfirmScreen = ({navigation, route}) => {
  const {item} = route.params;
  console.log('====================================');
  console.log(item);
  console.log('====================================');
  return (
    <View style={{width: '95%', alignSelf: 'center'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require('../../../Assets/Images/backArrow.png')}
        style={{alignSelf: 'flex-start', marginVertical: 10}}
      />
      </TouchableOpacity>
      <Text
        style={styles.txt}>
        Your appointment has been confirmed with patient..!
      </Text>
      <TouchableOpacity style={styles.btn} activeOpacity={1} onPress={() => navigation.navigate('PhysioBottomtab', {screen: 'Locations', params: {item}})}>
        <Text style={{color: 'white', fontSize: 16}}>Track</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C76B3',
    marginTop: 50,
  },
  txt: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 100,
  }
});

export default ConfirmScreen;
