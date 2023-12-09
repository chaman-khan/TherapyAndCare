import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {theme} from '../../../constants/theme';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const {height} = Dimensions.get('screen');
const AppointmentDetails = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = day => {
    setSelectedDate(day.dateString);
  };
  const formattedDate = selectedDate
    ? moment(selectedDate).format('DD - MMMM - YYYY')
    : '';
  const renderCustomHeader = dateObject => {
    const monthYearText = moment(dateObject.dateString).format('MMMM YYYY');
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{monthYearText}</Text>
      </View>
    );
  };

  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);
  const [isPM, setIsPM] = useState(false);
  const [isPickerVisible, setPickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const showPicker = () => {
    setPickerVisibility(true);
  };

  const hidePicker = () => {
    setPickerVisibility(false);
  };

  const handleConfirm = time => {
    const selectedTime = moment(time);
    setHours(selectedTime.format('h')); // Set hours
    setMinutes(selectedTime.format('mm')); // Set minutes
    setIsPM(selectedTime.format('A') === 'PM');
    hidePicker();
  };

  const incrementHours = () => {
    setHours((hours + 1) % 12 || 12);
  };

  const decrementHours = () => {
    setHours((hours - 1 + 12) % 12 || 12);
  };

  const incrementMinutes = () => {
    setMinutes((minutes + 1) % 60);
  };

  const decrementMinutes = () => {
    setMinutes((minutes - 1 + 60) % 60);
  };

  const toggleAMPM = () => {
    setIsPM(!isPM);
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
          Schedule Appointment
        </Text>
        <Image
          source={require('../../../Assets/Images/backArrow.png')}
          tintColor="transparent"
        />
      </View>
      <ScrollView style={{height: height-100}}>
        <View >
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Inter',
              color: 'black',
              marginBottom: 20,
            }}>
            Select Date
          </Text>
          <Calendar
            style={{backgroundColor: '#F8F8F8'}}
            onDayPress={onDayPress}
            markedDates={{[selectedDate]: {selected: true}}}
            // renderHeader={renderCustomHeader}
            theme={{
              textMonthFontWeight: 'bold', // Adjust the fontWeight for the month text
              textDayHeaderFontWeight: 'bold', // Adjust the fontWeight for the day names
              arrowStyle: {
                fontSize: 24,
              },
            }}
          />

          <TouchableOpacity activeOpacity={1} onPress={showPicker}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Inter',
                color: 'black',
                marginVertical: 20,
              }}>
              Select Time
            </Text>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isPickerVisible}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={hidePicker}
          />

          <TouchableOpacity onPress={showPicker} activeOpacity={1}>
            <View style={styles.container1}>
              <View style={styles.timeSection}>
                <TouchableOpacity onPress={incrementHours}>
                  <Image
                    source={require('../../../Assets/Images/downArrow.png')}
                    tintColor="#1C76B3"
                    style={{width: 12, height: 12, transform: [{scaleY: -1}]}}
                  />
                </TouchableOpacity>
                <Text>{`0${hours}`.slice(-2)} h</Text>
                <TouchableOpacity onPress={decrementHours}>
                  <Image
                    source={require('../../../Assets/Images/downArrow.png')}
                    tintColor="#1C76B3"
                    style={{width: 12, height: 12}}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.timeSection}>
                <TouchableOpacity onPress={incrementMinutes}>
                  <Image
                    source={require('../../../Assets/Images/downArrow.png')}
                    tintColor="#1C76B3"
                    style={{width: 12, height: 12, transform: [{scaleY: -1}]}}
                  />
                </TouchableOpacity>
                <Text style={styles.timeDigit}>
                  {`0${minutes}`.slice(-2)} m
                </Text>
                <TouchableOpacity onPress={decrementMinutes}>
                  <Image
                    source={require('../../../Assets/Images/downArrow.png')}
                    tintColor="#1C76B3"
                    style={{width: 12, height: 12}}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.timeSection}>
                <TouchableOpacity onPress={toggleAMPM}>
                  <Text
                    style={{
                      ...styles.button,
                      color: isPM ? 'black' : '#1C76B3',
                    }}>
                    AM
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleAMPM}>
                  <Text
                    style={{
                      ...styles.button,
                      color: isPM ? '#1C76B3' : 'black',
                    }}>
                    PM
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          {selectedDate && (
            <View style={styles.selectedDateContainer}>
              <Text style={styles.selectedDateText}>{formattedDate}</Text>
            </View>
          )}
          <TouchableOpacity
            activeOpacity={1}
            style={styles.Button_Box}
            onPress={() => navigation.navigate('Scheduled', {selectedTime})}>
            <View style={styles.Button} activeOpacity={0.7}>
              <Text style={styles.Verify_Text}>Confirm appointment</Text>
            </View>
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
  headerContainer: {
    padding: 10,
    // backgroundColor: theme.colors.primary,
    alignItems: 'center',
  },

  headerText: {
    fontSize: 16,
    fontFamily: 'Inter',
    // fontWeight: '400',
    // color: theme.colors.primary,
  },
  selectedDateContainer: {
    width: '100%',
    height: 86,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  },

  selectedDateText: {
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: 'black',
  },
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  selectedTimeText: {
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeSection: {
    width: '30%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingVertical: 5,
    gap: 5,
  },
  timeDigit: {
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: '400',
    marginHorizontal: 10,
  },
  button: {
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
  },

  Button_Box: {
    // borderWidth:2,
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.primary,
    marginTop: 30,
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

export default AppointmentDetails;
