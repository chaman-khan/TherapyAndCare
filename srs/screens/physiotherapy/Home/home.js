import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../../constants/theme';
import {cancelButtonStyles} from 'react-native-modal-datetime-picker';

const {height} = Dimensions.get('screen');

const Home = ({navigation}) => {
  const [location, setLocation] = useState('Phase 8B');
  const [locationDes, setLocationDes] = useState('Industrial Area, Sector 74');

  const DATA = [
    {
      id: 1,
      image: require('../../../Assets/Images/p1.png'),
      name: 'Mohit Kumar',
      Age: 40,
      concern: 'Kinesiology Taping',
      contact: '887756XXX7',
      time: '70:00 AM',
      date: '15 Nov 2023',
      timeLeft: 2,
    },
    {
      id: 2,
      image: require('../../../Assets/Images/p2.png'),
      name: 'Sanjna singh',
      Age: 40,
      concern: 'Neurological physical',
      contact: '887756XXX7',
      time: '10:00 AM',
      date: '15 Nov 2023',
      timeLeft: 2,
    },
    {
      id: 3,
      image: require('../../../Assets/Images/p3.png'),
      name: 'Manan singh',
      Age: 40,
      concern: 'Neurological',
      contact: '887756XXX7',
      time: '10:00 AM',
      date: '15 Nov 2023',
      timeLeft: 2,
    },
    {
      id: 4,
      image: require('../../../Assets/Images/p4.png'),
      name: 'Anish dutt',
      Age: 40,
      concern: 'Cardiovascular',
      contact: '785675768',
      time: '10:00 AM',
      date: '15 Nov 2023',
      timeLeft: 2,
    },
    {
      id: 5,
      image: require('../../../Assets/Images/p1.png'),
      name: 'Mohit Kumar',
      Age: 40,
      concern: 'Geriatric',
      contact: '887756XXX7',
      time: '10:00 AM',
      date: '15 Nov 2023',
      timeLeft: 2,
    },
    {
      id: 6,
      image: require('../../../Assets/Images/p1.png'),
      name: 'Mohit Kumar',
      Age: 40,
      concern: 'Geriatric',
      contact: '887756XXX7',
      time: '10:00 AM',
      date: '15 Nov 2023',
      timeLeft: 2,
    },
    {
      id: 7,
      image: require('../../../Assets/Images/p1.png'),
      name: 'Mohit Kumar',
      Age: 40,
      concern: 'Geriatric',
      contact: '887756XXX7',
      time: '10:00 AM',
      date: '15 Nov 2023',
      timeLeft: 2,
    },
    {
      id: 8,
      image: require('../../../Assets/Images/p1.png'),
      name: 'Mohit Kumar',
      Age: 40,
      concern: 'Geriatric',
      contact: '887756XXX7',
      time: '10:00 AM',
      date: '15 Nov 2023',
      timeLeft: 2,
    },
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.renderContainer}
        onPress={() => navigation.navigate('PatientDetail', {item})}>
        <Image source={item.image} />
        <View style={{width: '70%', gap: 10}}>
          <Text style={styles.nameStayle}>{item.name}</Text>
          <Text style={{color: '#1C76B3'}}>
            Time left : {item.timeLeft} Hours
          </Text>
          <View style={styles.btnView}>
            <TouchableOpacity activeOpacity={1} style={styles.confirm}>
              <Text style={{color: 'white'}}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.location}>
              <Text style={{color: '#1C76B3'}}>See Location</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={styles.topBar}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Image source={require('../../../Assets/Images/location.png')} />
          <View>
            <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>{location}</Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: 'grey'}}>{locationDes}</Text>
          </View>
        </View>
        <Image
          source={require('../../../Assets/Images/notifi.png')}
          tintColor="transparent"
        />
      </View>
      <Text style={styles.header}>Patient Appointments</Text>
      <View style={{height: height - height / 3, marginBottom: 100}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    width: '90%',
    height: 80,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  renderContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
  },
  nameStayle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  confirm: {
    width: '45%',
    height: 25,
    backgroundColor: '#1C76B3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  location: {
    width: '40%',
    height: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    fontFamily: 'Inter',
    fontSize: 24,
    color: theme.colors.primary,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Home;
