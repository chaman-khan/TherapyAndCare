import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';

const ConfirmScreen = () => {
  return (
    <View style={{width: '95%', alignSelf: 'center'}}>
      <Image
        source={require('../../../Assets/Images/backArrow.png')}
        style={{alignSelf: 'flex-start'}}
      />
      <Text style={{color: 'black', fontSize: 24, textAlign: 'center', marginTop: 100}}>
        Your appointment has been confirmed with patient..!
      </Text>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 45,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1C76B3',
          marginTop: 50
        }}
        activeOpacity={1}>
        <Text>Track</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmScreen;
