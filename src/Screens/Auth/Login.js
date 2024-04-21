import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Logo from '../../Assets/Images/LOGO.png';
import AppleLogo from '../../Assets/Images/apple-logo.png';
import FacebookLogo from '../../Assets/Images/facebook.png';
import GoogleLogo from '../../Assets/Images/google.png';
import {Button, CheckBox, Input} from '@rneui/themed';
import SocialIcon from '../../Components/SocialIcon';

const socialIcon = [
  {id: 1, image: FacebookLogo},
  {id: 2, image: GoogleLogo},
  {id: 3, image: AppleLogo},
];
const Login = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);
  const [isRemember, setIsRemember] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
        <View style={styles.header}>
          <AIcon
            name={'leftcircle'}
            size={widthPercentageToDP(6)}
            color={'#000'}
          />
          <Image
            style={{
              height: heightPercentageToDP(12),
              width: widthPercentageToDP(24),
            }}
            resizeMode="contain"
            source={Logo}
          />
        </View>

        <Text style={styles.loginText}>Login Your Account</Text>

        <View style={styles.divider}></View>

        <View style={{marginTop: heightPercentageToDP(2.5)}}>
          <Text style={styles.labelStyle}>Email*</Text>

          <View style={styles.containerStyle}>
            <Input
              value={Email}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              placeholder={'Enter Full Email'}
              placeholderTextColor={'#D4D4D4'}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View style={{marginTop: heightPercentageToDP(2.5)}}>
          <Text style={styles.labelStyle}>Password*</Text>

          <View style={styles.containerStyle}>
            <Input
              value={Password}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              placeholder={'**********'}
              placeholderTextColor={'#D4D4D4'}
              onChangeText={setPassword}
              secureTextEntry={isSecure}
              rightIcon={
                !isSecure ? (
                  <TouchableOpacity onPress={() => setIsSecure(true)}>
                    <Icon
                      name="eye"
                      size={widthPercentageToDP(6)}
                      color="#D0D2D1"
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setIsSecure(false)}>
                    <Icon
                      name="eye-off"
                      size={widthPercentageToDP(6)}
                      color="#D0D2D1"
                    />
                  </TouchableOpacity>
                )
              }
            />
          </View>
        </View>

        <CheckBox
          containerStyle={{width: widthPercentageToDP(80), alignSelf: 'center'}}
          textStyle={{marginLeft: 0, fontWeight: 'normal', color: '#000'}}
          size={widthPercentageToDP(5)}
          checkedColor="#f57b11"
          title="Remember Me"
          checked={isRemember}
          onPress={() => setIsRemember(!isRemember)}
        />

        <Button
          title="Login"
          buttonStyle={styles.buttonStyle}
          titleStyle={{fontWeight: 'bold', fontSize: widthPercentageToDP(4)}}
          containerStyle={styles.btnContainerStyle}
          onPress={() => navigation.navigate('DashboardScreen')}
        />

        <View
          style={{
            alignItems: 'center',
            marginTop: heightPercentageToDP(2),
          }}>
          <Text style={{color: '#1a2b6d', textDecorationLine: 'underline'}}>
            Forget Your Password?
          </Text>
          <Text
            style={{
              color: '#f57b11',
              textDecorationLine: 'underline',
              marginTop: heightPercentageToDP(0.7),
            }}>
            Create Account
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#000',
              marginTop: heightPercentageToDP(3),
              fontSize: widthPercentageToDP(4),
            }}>
            Or Continue With
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: heightPercentageToDP(3),
            alignSelf: 'center',
            width: widthPercentageToDP(60),
          }}>
          {socialIcon?.map((item, index) => {
            return <SocialIcon key={index} image={item.image} />;
          })}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: heightPercentageToDP(6),
          }}>
          <Text style={{color: '#000'}}>Don't Have An Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={{color: '#000', fontWeight: 'bold'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

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
