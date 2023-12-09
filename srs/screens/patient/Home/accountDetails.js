import React, {useState} from 'react';
import {Image, StyleSheet, Switch, TextInput, View} from 'react-native';
import {Text} from 'react-native-elements';
import { theme } from '../../../constants/theme';

const AccountDetails = ({navigation}) => {
  const [fee, setFee] = useState('200');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [name, setName] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const formatCreditCardNumber = input => {
    const numericValue = input.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/(\d{4})/g, '$1 ');
    setCreditCardNumber(formattedValue);
  };

  const formatExpiryDate = input => {
    const numericValue = input.replace(/\D/g, '');
    let formattedValue = numericValue.replace(/^(\d{2})/, '$1 / ');
    setExpiryDate(formattedValue);
  };

  const formatCVV = input => {
    const numericValue = input.replace(/\D/g, '');

    setCVV(numericValue);
  };

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
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
          Account Details
        </Text>
        <Image
          source={require('../../../Assets/Images/notifi.png')}
          tintColor="transparent"
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image source={require('../../../Assets/Images/visa.png')} />
        <Image source={require('../../../Assets/Images/MasterCard.png')} />
        <Image source={require('../../../Assets/Images/Rupay.png')} />
        <Image source={require('../../../Assets/Images/paypal.png')} />
      </View>
      <View
        style={{
          width: '50%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <Image source={require('../../../Assets/Images/gpay.png')} />
        <Image source={require('../../../Assets/Images/paytm.png')} />
      </View>
      <View style={{flexDirection: 'row', gap: 5}}>
        <Text style={{color: black}}>Your have to pay : </Text>
        <Text>{fee}</Text>
      </View>
      <View>
        <Text>Card number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Credit Card Number"
          keyboardType="numeric"
          value={creditCardNumber}
          onChangeText={text => formatCreditCardNumber(text)}
          maxLength={19} // Adjust based on your needs
        />
      </View>
      <View
        style={{
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>Expiration date</Text>
          <TextInput
            style={[...styles.input, {width: '45%'}]}
            placeholder="MM / YY"
            keyboardType="numeric"
            value={expiryDate}
            onChangeText={text => formatExpiryDate(text)}
            maxLength={7} // Adjust based on your needs
          />
        </View>
        <View>
          <Text style={{color: '#1C76B3'}}>CVV</Text>
          <TextInput
            style={[...styles.input, {width: '45%'}]}
            placeholder=" . . ."
            keyboardType="numeric"
            value={cvv}
            onChangeText={text => formatCVV(text)}
            maxLength={4} // Set to 4 for most cards, adjust based on your needs
          />
        </View>
      </View>
      <View>
        <Text>Card holder’s name</Text>
        <TextInput value={name} onChangeText={txt => setName(txt)} />
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.Button_Box}
        onPress={() => navigation.navigate('Scheduled', {selectedTime})}>
        <View style={styles.Button} activeOpacity={0.7}>
          <Text style={styles.Verify_Text}>Pay</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text>Save card data for future payment</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  Button_Box: {
    // borderWidth:2,
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 60,
  },
  Verify_Text: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
export default AccountDetails;
