import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../../constants/theme';
import {weekdays} from 'moment';
import {WeekCalendar} from 'react-native-calendars';
import CalendarStrip from 'react-native-calendar-strip';

const Availability = () => {
  let d = new Date();
  //   let d1 = new WeekCalendar();
  let month = d.getMonth();
  let date = d.getDate();
  let day = d.getDay();
  let day1 = d.toLocaleDateString();
  let currentWeek = Math.ceil((date + 6 - day) / 7);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelected = date => {
    setSelectedDate(date);
    // Additional logic for when a date is selected
  };

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentMonthName = monthNames[month];

  const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const currentDayName = dayNames[day];
  return (
    <View>
      <View style={styles.topBar}>
        <Image source={require('../../../Assets/Images/backArrow.png')} />
        <Text
          style={{
            color: theme.colors.primary,
            fontSize: 24,
            fontWeight: '400',
          }}>
          Patient Details
        </Text>
        <Image
          source={require('../../../Assets/Images/backArrow.png')}
          tintColor="transparent"
        />
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginVertical: 30,
          gap: 30,
        }}>
        <Text style={{color: 'black', fontSize: 20}}>{currentMonthName}</Text>
        <View>
          <View>
            <Text style={{color: 'black'}}>{dayNames[0]}</Text>
            <Text style={{color: 'black'}}>{d1}</Text>
          </View>
          {/* <View style={{backgroundColor: 'red', width: 200, height: 100}}>
            <CalendarStrip
              selectedDate={selectedDate}
              onPressDate={handleDateSelected}
            />
          </View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Availability;
