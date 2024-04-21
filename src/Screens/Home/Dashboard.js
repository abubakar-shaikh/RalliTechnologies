import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import horiLogo from '../../Assets/Images/horiLogo.png';
import menuIcon from '../../Assets/Images/menu.png';
import filterIcon from '../../Assets/Images/filter.png';
import profileIcon from '../../Assets/Images/profile.png';
import bellIcon from '../../Assets/Images/bell.png';
import {Input} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import JobCard from '../../Components/JobCard';

const icons = [
  {id: 1, image: bellIcon},
  {id: 2, image: filterIcon},
  {id: 3, image: profileIcon},
  {id: 4, image: menuIcon},
];
const jobs = [
  {
    title: 'Entry Level Software Specialist',
    address: 'Charleston, South Carolina, United States',
  },
  {
    title: 'Senior Hydraulic Engineer',
    address: 'Houston, Texas, United States',
  },
  {
    title: 'Entry Level Software Specialist',
    address: 'Charleston, South Carolina, United States',
  },
  {
    title: 'Senior Hydraulic Engineer',
    address: 'Houston, Texas, United States',
  },
  {
    title: 'Entry Level Software Specialist',
    address: 'Charleston, South Carolina, United States',
  },
  {
    title: 'Senior Hydraulic Engineer',
    address: 'Houston, Texas, United States',
  },
];

const Dashboard = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#1A2B6D'}}>
      <StatusBar backgroundColor={'#1A2B6D'} barStyle="light-content" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: widthPercentageToDP(85),
          alignSelf: 'center',
          paddingTop: heightPercentageToDP(2),
          paddingBottom: heightPercentageToDP(5),
        }}>
        <Image
          source={horiLogo}
          resizeMode="contain"
          style={{
            height: heightPercentageToDP(9),
            width: widthPercentageToDP(18),
          }}
        />
        <View style={{flexDirection: 'row'}}>
          {icons?.map((item, index) => {
            return (
              <Image
                source={item?.image}
                key={index}
                style={{
                  marginHorizontal: widthPercentageToDP(1),
                  height: heightPercentageToDP(2.5),
                  width: widthPercentageToDP(5),
                }}
              />
            );
          })}
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: heightPercentageToDP(12),
          backgroundColor: '#fff',
          borderTopRightRadius: widthPercentageToDP(12),
          borderTopLeftRadius: widthPercentageToDP(12),
        }}>
        <View style={{marginTop: heightPercentageToDP(5)}}>
          <Text
            style={{
              color: '#111111',
              fontWeight: '500',
              fontSize: widthPercentageToDP(5),
              width: widthPercentageToDP(55),
              paddingHorizontal: widthPercentageToDP(7),
            }}>
            Your Company's Active Job Postings
          </Text>
          {jobs?.map((item, index) => {
            return (
              <JobCard
                key={index}
                title={item?.title}
                address={item?.address}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.containerStyle}>
        <Input
          value={search}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          placeholder={'Search'}
          placeholderTextColor={'#D4D4D4'}
          onChangeText={setSearch}
          rightIcon={
            <TouchableOpacity onPress={() => console.log('search')}>
              <Icon
                name="search"
                size={widthPercentageToDP(6)}
                color="#D0D2D1"
              />
            </TouchableOpacity>
          }
        />
      </View>
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  containerStyle: {
    padding: 0,
    backgroundColor: 'white',
    height: heightPercentageToDP(7),
    width: widthPercentageToDP(84),
    alignSelf: 'center',
    borderRadius: widthPercentageToDP(1.3),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 6,
    position: 'absolute',
    top: heightPercentageToDP(12),
  },
  inputContainerStyle: {
    padding: 0,
    height: heightPercentageToDP(7),
    borderBottomWidth: 0,
  },
  inputStyle: {
    height: heightPercentageToDP(7),
    fontSize: widthPercentageToDP(4),
  },
});
