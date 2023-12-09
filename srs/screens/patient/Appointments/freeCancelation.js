import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../../constants/theme';

const {height} = Dimensions.get('screen');

const FreeCanceltion = ({navigation}) => {
  const [isShow, setIsShow] = useState(false);
  const [isShow1, setIsShow1] = useState(false);
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
          Free cancellation
        </Text>
        <Image
          source={require('../../../Assets/Images/notifi.png')}
          tintColor="transparent"
        />
      </View>
      <View
        style={{
          width: '100%',
          height: 150,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FCFCFC',
          marginTop: 30,
        }}>
        <Text
          style={{
            width: '90%',
            fontSize: 18,
            fontFamily: 'Inter',
            color: 'black',
            textAlign: 'center',
          }}>
          Feel free to cancel the appointment with at least a 24-hour notice.
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.Button_Box}
        onPress={() => {
          setIsShow1(false);
          navigation.navigate('CancelationPolicy');
        }}>
        <View style={styles.Button} activeOpacity={0.7}>
          <Text style={styles.Verify_Text}>Confirm</Text>
        </View>
      </TouchableOpacity>
      {isShow && (
        <Modal onRequestClose={() => setIsShow(false)}>
          <View
            style={{
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 200,
              alignSelf: 'center',
              gap: 20,
              backgroundColor: '#F6FFFD',
              paddingVertical: 30,
            }}>
            <Text style={{color: '#1C76B3', fontSize: 20, fontFamily: 'Inter'}}>
              Appointment cancellation
            </Text>
            <Text
              style={{
                fontSize: 16,
                width: '90%',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              Lorem Ipsum is simply dummy of the printing and typesetting
              industry
            </Text>
            <View
              style={{
                width: '60%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={styles.modalBtn}
                onPress={() => {
                  setIsShow1(true);
                  setIsShow(false);
                }}>
                <Text style={{color: 'white'}}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsShow(false)}
                style={styles.modalBtn}>
                <Text style={{color: 'white'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      {isShow1 && (
        <Modal onRequestClose={() => setIsShow(false)}>
          <View
            style={{
              width: '90%',
              height: height,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#1C76B3',
                fontSize: 24,
                fontFamily: 'Inter',
                textAlign: 'center',
              }}>
              Your appointment has been cancelled
            </Text>
            <TouchableOpacity
        activeOpacity={1}
        style={styles.Button_Box}
        onPress={() => navigation.navigate('BottomTab')}>
        <View style={styles.Button} activeOpacity={0.7}>
          <Text style={styles.Verify_Text}>Check out</Text>
        </View>
      </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  Button_Box: {
    // borderWidth:2,
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 60,
  },
  Verify_Text: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  modalBtn: {
    width: '40%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C76B3',
  },
});
export default FreeCanceltion;
