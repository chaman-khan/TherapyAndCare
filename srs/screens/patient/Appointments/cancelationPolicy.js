import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../../constants/theme';

const CancelationPolicy = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleCheckboxToggle = checkboxNumber => {
    setSelectedItem(selectedItem === checkboxNumber ? null : checkboxNumber);
  };

  const generateMessage = () => {
    // Customize this part based on your requirements
    const messages = {
      1: 'I don’t want physiotherapy',
      2: 'I Changed my mood',
      3: 'Fee structure is too high',
      4: 'Lorem Ipsum is simply dummy',
      5: 'Lorem Ipsum is simply dummy',
    };

    return selectedItem ? messages[selectedItem] : '';
  };
  const [message, setMessage] = useState('');
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
      <ScrollView>
        <View>
          <Text style={{color: 'black', fontSize: 20}}>Reasons</Text>
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              alignItems: 'flex-start',
              marginTop: 10,
              // justifyContent: 'flex-start',
            }}>
            {Array.from({length: 5}, (_, i) => i + 1).map(checkboxNumber => (
              <TouchableOpacity
                key={checkboxNumber}
                activeOpacity={1}
                onPress={() => handleCheckboxToggle(checkboxNumber)}
                style={styles.checkboxView}>
                <View style={[styles.checkbox]}>
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor:
                        selectedItem === checkboxNumber
                          ? theme.colors.primary
                          : 'transparent',
                      borderRadius: 5,
                    }}></View>
                </View>
                <Text style={styles.checkboxText}>
                  {checkboxNumber === 1
                    ? 'I don’t want physiotherapy'
                    : checkboxNumber === 2
                    ? 'I Changed my mood'
                    : checkboxNumber === 3
                    ? 'Fee structure is too high'
                    : checkboxNumber === 4
                    ? 'Lorem Ipsum is simply dummy'
                    : 'Lorem Ipsum is simply dummy'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TextInput
            placeholder="Add your message" placeholderTextColor={'grey'}
            style={{
              width: '100%',
              alignSelf: 'center',
              height: 116,
              backgroundColor: '#F6F6F6',
              textAlign: 'center',
              borderColor: '#86CEFF',
              borderWidth: 1,
              borderRadius: 6,
              marginTop: 20,
              color: 'black'
            }}
            value={generateMessage()}
          />
          <TouchableOpacity
            style={{
              height: 50,
              width: '100%',
              backgroundColor: theme.colors.primary,
              marginTop: 50,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginBottom: 100
            }}
            onPress={() => {
              const message1 = generateMessage();
              navigation.navigate('CancelationFeePolicy', {message1});
            }}>
            <Text style={{color: 'white'}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FAFAFA',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 10,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxText: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: 'black',
  },
});
export default CancelationPolicy;
