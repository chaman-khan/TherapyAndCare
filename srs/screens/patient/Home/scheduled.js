import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {theme} from '../../../constants/theme';
import moment from 'moment';

const Scheduled = ({navigation, route}) => {
  const {selectedTime} = route.params;
  const [time, setTime] = useState(null);
  const selectedTimeLocal = moment.utc(selectedTime).local();

  console.log('====================================');
  console.log('selectedTimeLocal: ', selectedTimeLocal);
  console.log('selectedTime: ', selectedTime);
  console.log('====================================');
  useEffect(() => {
    let currentTime = getCurrentTime();
    setTime(currentTime);
  }, []);

  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
    return hours + ':' + minutes + ':' + seconds;
  };
  const timeDifference = moment(selectedTimeLocal).diff(
    moment(),
    'hours',
    true,
  );
  const timeLeft = Math.max(0, Math.ceil(timeDifference));

  const hours1 = selectedTime.getUTCHours();
  const minutes1 = selectedTime.getUTCMinutes();
  const date1 = selectedTime.getUTCDate();
  console.log('====================================');
  console.log('hours', hours1);
  console.log('minutes', minutes1);
  console.log('Date', date1);
  console.log('====================================');
  console.log('====================================');
  console.log('Current Time:', time);
  console.log('Time Difference:', timeDifference);
  console.log('Time Left:', timeLeft);
  console.log('====================================');
  const formatTimeLeft = hours => {
    if (hours === 0) {
      return 'Less than an hour';
    } else {
      const days = Math.floor(hours / 24);
      const remainingHours = hours % 24;
      const daysText = days > 0 ? `${days} days` : '';
      const hoursText =
        remainingHours > 0 ? `${remainingHours.toFixed(2)} hours` : '';
      return `${daysText} ${hoursText}`;
    }
  };
  return (
    <View style={{width: '90%', alignSelf: 'center'}}>
      <TouchableOpacity
        style={{marginBottom: 60, marginTop: 15}}
        onPress={() => navigation.goBack()}>
        <Image source={require('../../../Assets/Images/backArrow.png')}  />
      </TouchableOpacity>
      <Text
        style={{
          width: '90%',
          alignSelf: 'center',
          fontSize: 24,
          fontFamily: 'Inter',
          color: 'black',
          textAlign: 'center',
          marginBottom: 30,
        }}>
        Your appointment has been scheduled..!
      </Text>
      <Text
        style={{
          width: '70%',
          alignSelf: 'center',
          fontSize: 16,
          marginBottom: 40, color: '#808080'
        }}>
        Please hold on; your therapist will get back to you soon.
      </Text>
      <View
        style={{width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{color: '#1C76B3'}}>Time left : </Text>
        {timeDifference >= 0 ? (
          <Text style={{color: 'black'}}>{formatTimeLeft(timeLeft)}</Text>
        ) : (
          <Text style={{color: 'black'}}>Time Over</Text>
        )}
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.Button_Box}
        onPress={() => navigation.navigate('NotificationMessage')}>
        <View style={styles.Button} activeOpacity={0.7}>
          <Text style={styles.Verify_Text}>Checkout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Button_Box: {
    // borderWidth:2,
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.primary,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Verify_Text: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
export default Scheduled;
