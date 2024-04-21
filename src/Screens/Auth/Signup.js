import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AIcon from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Logo from '../../Assets/Images/LOGO.png';

import {Button, Input} from '@rneui/themed';

const Signup = ({navigation, navigation: {navigate, goBack}}) => {
  const [nameOfCompany, setNameOfCompany] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <View style={styles.header}>
        <AIcon
          name={'leftcircle'}
          size={widthPercentageToDP(6)}
          color={'#000'}
          onPress={() => goBack()}
        />
        <Image
          source={Logo}
          style={{
            height: heightPercentageToDP(12),
            width: widthPercentageToDP(24),
          }}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.loginText}>Employer Registration</Text>

      <View style={styles.divider}></View>
      <ScrollView
        contentContainerStyle={{paddingBottom: heightPercentageToDP(3)}}
        showsVerticalScrollIndicator={false}>
        <View style={{marginTop: heightPercentageToDP(2.5)}}>
          <Text style={styles.labelStyle}>Name Of Company</Text>

          <View style={styles.containerStyle}>
            <Input
              value={nameOfCompany}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              placeholder={'Enter Comapny Name'}
              placeholderTextColor={'#D4D4D4'}
              onChangeText={setNameOfCompany}
            />
          </View>
        </View>
        <View style={{marginTop: heightPercentageToDP(2.5)}}>
          <Text style={styles.labelStyle}>Company Email Address</Text>

          <View style={styles.containerStyle}>
            <Input
              value={companyEmail}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              placeholder={'info@example.com'}
              placeholderTextColor={'#D4D4D4'}
              onChangeText={setCompanyEmail}
            />
          </View>
        </View>
        <View style={{marginTop: heightPercentageToDP(2.5)}}>
          <Text style={styles.labelStyle}>Company Phone Number</Text>

          <View style={styles.containerStyle}>
            <Input
              value={companyPhone}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              placeholder={'(123) 456 7890'}
              placeholderTextColor={'#D4D4D4'}
              onChangeText={setCompanyPhone}
            />
          </View>
        </View>
        <View style={{marginTop: heightPercentageToDP(2.5)}}>
          <Text style={styles.labelStyle}>City</Text>

          <View style={styles.containerStyle}>
            <Input
              value={city}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              placeholder={'Enter City'}
              placeholderTextColor={'#D4D4D4'}
              onChangeText={setCity}
            />
          </View>
        </View>
        <View style={{marginTop: heightPercentageToDP(2.5)}}>
          <Text style={styles.labelStyle}>State</Text>

          <View style={styles.containerStyle}>
            <Input
              value={state}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              placeholder={'Enter State'}
              placeholderTextColor={'#D4D4D4'}
              onChangeText={setState}
            />
          </View>
        </View>
        <View style={{marginTop: heightPercentageToDP(2.5)}}>
          <Text style={styles.labelStyle}>Address</Text>

          <View style={styles.containerStyle}>
            <Input
              value={address}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              placeholder={'Enter Address'}
              placeholderTextColor={'#D4D4D4'}
              onChangeText={setAddress}
            />
          </View>
        </View>

        <Button
          title="Register Now"
          buttonStyle={styles.buttonStyle}
          titleStyle={{fontWeight: 'bold', fontSize: widthPercentageToDP(4)}}
          containerStyle={styles.btnContainerStyle}
          onPress={() => console.log('aye')}
        />
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    width: '55%',
    justifyContent: 'space-between',
    marginTop: heightPercentageToDP(1),
    marginLeft: widthPercentageToDP(6),
  },
  labelStyle: {
    fontSize: widthPercentageToDP(4),
    color: '#000',
    marginLeft: widthPercentageToDP(13),
    marginBottom: heightPercentageToDP(0.75),
  },
  containerStyle: {
    padding: 0,
    backgroundColor: 'white',
    height: heightPercentageToDP(7),
    width: widthPercentageToDP(80),
    alignSelf: 'center',
    borderRadius: widthPercentageToDP(1.3),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 6,
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
  loginText: {
    color: '#000',
    width: widthPercentageToDP(80),
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: widthPercentageToDP(6),
    marginTop: heightPercentageToDP(2),
  },
  divider: {
    borderWidth: widthPercentageToDP(0.4),
    borderColor: '#000',
    width: widthPercentageToDP(23),
    marginLeft: widthPercentageToDP(10),
    marginTop: heightPercentageToDP(0.3),
  },
  btnContainerStyle: {
    width: widthPercentageToDP(80),
    alignSelf: 'center',
    marginTop: heightPercentageToDP(2),
  },
  buttonStyle: {
    backgroundColor: '#f57b11',
    borderRadius: 5,
    paddingVertical: heightPercentageToDP(2),
  },
});
