import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Scheduled = ({navigation, route}) => {
    const {selectedTime} = route.params();
    const [time, setTime] = useState(null);


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
  }
  return (
    <View style={{width: '90%', alignSelf: 'center'}}>
      <Image
        source={require('../../../Assets/Images/backArrow.png')}
        style={{marginBottom: 60}}
      />
      <Text
        style={{
            width: '90%', alignSelf: 'center',
          fontSize: 24,
          fontFamily: 'Inter',
          color: 'black',
          textAlign: 'center',
          marginBottom: 30,
        }}>
        Your appointment has been scheduled..!
      </Text>
      <Text style={{width: '70%', alignSelf: 'center', fontSize: 16, marginBottom: 40}}>Please hold on; your therapist will get back to you soon.</Text>
      <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
      <Text>Time left : </Text>
      <Text>{time-selectedTime}</Text>
      </View>
      <TouchableOpacity
            activeOpacity={1}
            style={styles.Button_Box}
            onPress={() => navigation.navigate('AppointmentDetails')}>
            <View style={styles.Button} activeOpacity={0.7}>
              <Text style={styles.Verify_Text}>Confirm appointment</Text>
            </View>
          </TouchableOpacity>
    </View>
  );
};

const styles= StyleSheet.create({
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
})
export default Scheduled;
