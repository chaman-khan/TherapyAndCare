import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const TimeOUt = () => {
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
          Session Timeout
        </Text>
        <Image
          source={require('../../../Assets/Images/backArrow.png')}
          tintColor="transparent"
        />
      </View>
      <View
        style={{
          width: '85%',
          alignSelf: 'flex-start',
          flexDirection: 'row',
          gap: 10,
        }}>
        <Image source={require('../../../Assets/Images/timeOut.png')} />
        <Text>Your session will expire in</Text>
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
});

export default TimeOUt;
