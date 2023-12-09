import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {View, Text} from 'react-native';
import {theme} from '../../../constants/theme';
import {FlatList} from 'react-native';
import {StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  const [location, setLocation] = useState('Phase 8B');
  const [locationDes, setLocationDes] = useState('Industrial Area, Sector 74');

  const DATA = [
    {
      id: 1,
      image: require('../../../Assets/Images/Rectangle.png'),
      diseaseType: 'Neurological',
    },
    {
      id: 2,
      image: require('../../../Assets/Images/Rectangle.png'),
      diseaseType: 'Cardiovascular',
    },
    {
      id: 3,
      image: require('../../../Assets/Images/Rectangle.png'),
      diseaseType: 'Geriatric',
    },
    {
      id: 4,
      image: require('../../../Assets/Images/Rectangle.png'),
      diseaseType: 'Kinesiology Taping',
    },
    {
      id: 5,
      image: require('../../../Assets/Images/Rectangle.png'),
      diseaseType: 'Neurological',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.renderView} activeOpacity={1} onPress={() => {
        navigation.navigate('PatientStack', {
          screen: 'Physiotherapist',
          params: {item: item},
        });
      }}>
        <Image source={item.image} style={{width: '40%'}} />
        <View style={styles.listView}>
          <Text style={styles.itemText}>{item.diseaseType}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.topBar}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Image source={require('../../../Assets/Images/location.png')} />
          <View>
            <Text style={{fontSize: 14, fontWeight: '500'}}>{location}</Text>
            <Text style={{fontSize: 12, fontWeight: '400'}}>{locationDes}</Text>
          </View>
        </View>
        <Image source={require('../../../Assets/Images/notifi.png')} />
      </View>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search Here"
          style={{width: '80%', fontSize: 14, textAlign: 'center'}}
        />
        <View style={{width: '10%'}}>
        <Image
          source={require('../../../Assets/Images/search.png')}
          style={{width: 24, height: 24}}
        />
        </View>
      </View>
      <View style={{marginTop: 40, marginBottom: 150}}>
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
  searchBox: {
    width: '90%',
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: theme.colors.primary,
    borderWidth: 0.4,
    borderRadius: 6,
    alignSelf: 'center',
  },
  renderView: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgba(28, 118, 179, 0.1)',
    marginVertical: 10,
  },
  listView: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.primary,
  },
});
export default Home;
