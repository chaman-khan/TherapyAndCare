import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../../constants/theme';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Availability = ({navigation, route}) => {

  const {item} = route.params;

  let d = new Date();
  //   let d1 = new WeekCalendar();
  let month = d.getMonth();
  let date = d.getDate();
  let day = d.getDay();
  let day1 = d.toLocaleDateString();
  let currentWeek = Math.ceil((date + 6 - day) / 7);
  let year = d.getFullYear();
  let lastDayOfMonth = new Date(year, month + 1, 0).getDate();

  const [fromTime, setFromTime] = useState('9:00 AM');
  const [toTime, setToTime] = useState('1:00 AM');
  const [isPickerVisible, setPickerVisibility] = useState(false);
  const [isPickerVisible1, setPickerVisibility1] = useState(false);

  const showPicker = () => {
    setPickerVisibility(true);
  };

  const hidePicker = () => {
    setPickerVisibility(false);
  };

  const handleConfirm = time => {
    const selectedTime = moment(time);
    setFromTime(selectedTime.format('h:mm:A'));
    hidePicker();
  };
  const showPicker1 = () => {
    setPickerVisibility1(true);
  };

  const hidePicker1 = () => {
    setPickerVisibility1(false);
  };

  const handleConfirm1 = time => {
    const selectedTime = moment(time);
    setToTime(selectedTime.format('h:mm:A'));
    hidePicker1();
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

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const currentDayName = dayNames[day];

  return (
    <View>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goback()}>
          <Image source={require('../../../Assets/Images/backArrow.png')} />
        </TouchableOpacity>
        <Text
          style={{
            color: theme.colors.primary,
            fontSize: 24,
            fontWeight: '400',
          }}>
          Set availability
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          {/* {dayNames.map((day, index) => (
            <View key={index} style={{alignItems: 'center'}}>
              <Text style={{color: 'black'}}>{day}</Text>
              <Text style={{color: 'blue'}}>{(date + index) % lastDayOfMonth || lastDayOfMonth}</Text>
            </View>
          ))} */}

          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'black'}}>{dayNames[0]}</Text>
            <Text style={{color: 'black'}}>25</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'black'}}>{dayNames[1]}</Text>
            <Text style={{color: 'black'}}>26</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'black'}}>{dayNames[2]}</Text>
            <Text style={{color: 'black'}}>27</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'blue'}}>{dayNames[3]}</Text>
            <Text style={{color: 'blue'}}>28</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'black'}}>{dayNames[4]}</Text>
            <Text style={{color: 'black'}}>29</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'black'}}>{dayNames[5]}</Text>
            <Text style={{color: 'black'}}>30</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'black'}}>{dayNames[6]}</Text>
            <Text style={{color: 'black'}}>1</Text>
          </View>
        </View>
        <Text style={{color: 'black', fontSize: 20}}>Select time</Text>
        <DateTimePickerModal
          isVisible={isPickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hidePicker}
        />
        <DateTimePickerModal
          isVisible={isPickerVisible1}
          mode="time"
          onConfirm={handleConfirm1}
          onCancel={hidePicker1}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={showPicker}
            activeOpacity={1}
            style={styles.time}>
            <Text style={{color: 'black'}}>{fromTime}</Text>
            <Image source={require('../../../Assets/Images/belowArrow.png')} />
          </TouchableOpacity>
          <Text style={{color: 'black'}}> to</Text>
          <TouchableOpacity
            onPress={showPicker1}
            activeOpacity={1}
            style={styles.time}>
            <Text style={{color: 'black'}}>{toTime}</Text>
            <Image source={require('../../../Assets/Images/belowArrow.png')} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={1}
          onPress={() =>
            navigation.navigate('PhysioTherapyStack', {screen: 'ConfirmScreen', params: {item}})
          }>
          <Text style={{color: 'white', fontSize: 16}}>Schedule</Text>
        </TouchableOpacity>
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
  time: {
    width: '35%',
    height: 33,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btn: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C76B3',
    marginTop: 50,
  },
});

export default Availability;
