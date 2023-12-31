import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Switch,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Text} from 'react-native-elements';
import {theme} from '../../../constants/theme';

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
    <ScrollView>
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
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
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
      <View style={{flexDirection: 'row', gap: 5, alignSelf: 'center', marginVertical: 40}}>
        <Text style={{color: 'black'}}>Your have to pay : </Text>
        <Text>₹{fee}</Text>
      </View>
      <View>
        <Text style={{color: 'black'}}>Card number</Text>
        <TextInput
          style={styles.input}
          placeholder="XXXX XXXX XXXX XXXX" placeholderTextColor={'grey'}
          keyboardType="numeric"
          value={creditCardNumber}
          onChangeText={text => formatCreditCardNumber(text)}
          maxLength={19}
          
        />
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginVertical: 20
        }}>
        <View style={{width: '45%'}}>
          <Text style={{color: 'black'}}>Expiration date</Text>
          <TextInput
            style={{...styles.input}}
            placeholder="MM / YY" placeholderTextColor={'grey'}
            keyboardType="numeric"
            value={expiryDate}
            onChangeText={text => formatExpiryDate(text)}
            maxLength={7} // Adjust based on your needs
          />
        </View>
        <View style={{width: '45%'}}>
          <Text style={{color: '#1C76B3'}}>CVV</Text>
          <TextInput
            style={{...styles.input}}
            placeholder=" . . ." placeholderTextColor={'grey'}
            keyboardType="numeric"
            value={cvv}
            onChangeText={text => formatCVV(text)}
            maxLength={4} // Set to 4 for most cards, adjust based on your needs
          />
        </View>
      </View>
      <View style={{marginBottom: 35}}>
        <Text style={{color: 'black'}}>Card holder’s name</Text>
        <TextInput style={styles.input} placeholder='Card holder name' placeholderTextColor={'grey'} value={name} onChangeText={txt => setName(txt)} />
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.Button_Box}
        onPress={() => navigation.navigate('BookingDetails')}>
        <View style={styles.Button} activeOpacity={0.7}>
          <Text style={styles.Verify_Text}>Pay</Text>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text>Save card data for future payment</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
    </ScrollView>
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
    borderColor: 'gray',
    borderWidth: 0.3,
    borderRadius: 5,
    padding: 10, color: 'black'
  },
  Button_Box: {
    // borderWidth:2,
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  Verify_Text: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
export default AccountDetails;
