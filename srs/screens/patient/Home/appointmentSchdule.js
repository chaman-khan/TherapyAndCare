import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../../constants/theme';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const AppointmentDetails = () => {
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

  const [isPickerVisible, setPickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const showPicker = () => {
    setPickerVisibility(true);
  };

  const hidePicker = () => {
    setPickerVisibility(false);
  };

  const handleConfirm = time => {
    setSelectedTime(time);
    hidePicker();
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
      <Text style={{fontSize: 20, fontFamily: 'Inter', color: 'black', marginBottom: 20}}>
        Select Date
      </Text>
      <Calendar style={{backgroundColor: '#F8F8F8'}}
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

<View style={styles.container}>
      <TouchableOpacity onPress={showPicker}>
        <Text style={styles.selectedTimeText}>
          {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hidePicker}
      />
    </View>

      {selectedDate && (
        <View style={styles.selectedDateContainer}>
          <Text style={styles.selectedDateText}>{formattedDate}</Text>
        </View>
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
    backgroundColor: '#F6F6F6',
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
});

export default AppointmentDetails;
