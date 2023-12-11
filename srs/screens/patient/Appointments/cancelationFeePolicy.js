import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const CancelationFeePolicy = () => {
  return (
    <View style={{width: '90%', alignSelf: 'center'}}>
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
          Cancellation policy
        </Text>
        <Image
          source={require('../../../Assets/Images/notifi.png')}
          tintColor="transparent"
        />
      </View>
      <Text style={{color: 'black', fontSize: 20}}>Reasons</Text>
      <View>
        <Text></Text>
      </View>
    </View>
  );
};

export default CancelationFeePolicy;
