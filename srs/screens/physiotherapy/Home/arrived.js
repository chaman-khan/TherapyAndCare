import React from 'react';
import {StyleSheet} from 'react-native';

const Arrived = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={{width: '95%', alignSelf: 'center'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../Assets/Images/backArrow.png')}
          style={{alignSelf: 'flex-start', marginVertical: 10}}
        />
      </TouchableOpacity>
      <Text style={styles.txt}>
        You have arrived at the patient's location.
      </Text>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('PhysioTherapyStack', {
            screen: 'TimeOUt',
            params: {item},
          })
        }>
        <Text style={{color: 'white', fontSize: 16}}>Start Process</Text>
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
    marginTop: 150,
  },
});

export default Arrived;
