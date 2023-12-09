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
});

export default Locations;
