import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../../constants/theme';
const {height} = Dimensions.get('screen');
const CancelationFeePolicy = ({navigation, route}) => {
  const [isChecked, setIsChecked] = useState(false);
  const {message1} = route.params;
  const [isShow, setIsShow] = useState(false);
  const [fee, setFee] = useState('90');
  const [image, setImage] = useState(
    require('../../../Assets/Images/visa.png'),
  );
  console.log(message1);
  const [creditCardNumber, setCreditCardNumber] = useState('');

  const formatCreditCardNumber = input => {
    const numericValue = input.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/(\d{4})/g, '$1 ');
    setCreditCardNumber(formattedValue);
  };
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
      <View
        style={{
          height: 71,
          backgroundColor: '#FAFAFA',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#6C6C6C'}}>{message1}</Text>
      </View>
      <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', gap: 10}}>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 30,
            fontSize: 20,
            color: 'black',
          }}>
          Fees charges :
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 30,
            fontSize: 20,
            color: '#696969',
          }}>
          ₹{fee}
        </Text>
      </View>
      <Text style={{arginVertical: 20, fontSize: 20, color: '#1D1D1D', marginBottom: 8}}>
        Saved payment options
      </Text>
      <View
        style={{height: 110, backgroundColor: '#FCFCFC', paddingVertical: 10}}>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            borderColor: 'grey',
            borderBottomWidth: 0.5,
            height: '50%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image source={image} />
          <TextInput
            style={styles.input}
            placeholder="XXXX XXXX XXXX XXXX" placeholderTextColor={'grey'}
            keyboardType="numeric"
            value={creditCardNumber}
            onChangeText={text => formatCreditCardNumber(text)}
            maxLength={19} // Adjust based on your needs
          />
          <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
            <View style={[styles.checkbox]}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: isChecked
                    ? theme.colors.primary
                    : 'transparent',
                  borderRadius: 5,
                }}></View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            height: '50%',
            width: '90%',
            alignSelf: 'center',
          }}
          onPress={() => setIsShow(true)}>
          <Text style={{color: '#1C76B3', fontSize: 14}}>More options</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          height: 45,
          width: '100%',
          backgroundColor: theme.colors.primary,
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginBottom: 100,
        }}
        onPress={() => {
          navigation.replace('PatientStack');
        }}>
        <Text style={{color: 'white'}}>Pay</Text>
      </TouchableOpacity>
      {isShow && (
        <Modal
          onRequestClose={() => setIsShow(false)}
          transparent
          style={{backgroundColor: 'rgba(250, 250, 250, 0.3)'}}>
          <View
            style={{
              width: '100%',
              paddingVertical: 30,
              marginTop: 200,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              gap: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                setImage(require('../../../Assets/Images/MasterCard.png'));
                setIsShow(false);
              }}>
              <Image
                source={require('../../../Assets/Images/MasterCard.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setImage(require('../../../Assets/Images/Rupay.png'));
                setIsShow(false);
              }}>
              <Image source={require('../../../Assets/Images/Rupay.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setImage(require('../../../Assets/Images/paypal.png'));
                setIsShow(false);
              }}>
              <Image source={require('../../../Assets/Images/paypal.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setImage(require('../../../Assets/Images/paytm.png'));
                setIsShow(false);
              }}>
              <Image source={require('../../../Assets/Images/paytm.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setImage(require('../../../Assets/Images/visa.png'));
                setIsShow(false);
              }}>
              <Image source={require('../../../Assets/Images/visa.png')} />
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
  input: {
    height: 50,
    padding: 10,
    color: 'black'
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CancelationFeePolicy;
