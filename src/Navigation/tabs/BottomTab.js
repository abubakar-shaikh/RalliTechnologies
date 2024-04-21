import React from 'react';
import Dashboard from '../../Screens/Home/Dashboard';
import TalentNetwork from '../../Screens/Home/TalentNetwork';
import Post from '../../Screens/Home/Post';
import SavedJobs from '../../Screens/Home/SavedJobs';
import CareerAreas from '../../Screens/Home/CareerAreas';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DashboardIcon from '../../Assets/Images/dashboard.png';
import headhuntingIcon from '../../Assets/Images/headhunting.png';
import saveIcon from '../../Assets/Images/save.png';
import careerIcon from '../../Assets/Images/career.png';
import plusIcon from '../../Assets/Images/plus.png';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const CustomTabBarButton = ({onPress, children}) => (
  <TouchableOpacity
    style={{top: -27, justifyContent: 'center', alignItems: 'center'}}
    onPress={onPress}>
    <View
      style={{
        width: widthPercentageToDP(10),
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      // tabBarOptions={{showLabel: false}}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            position: 'absolute',
            bottom: 0,
            height: heightPercentageToDP(7),
            backgroundColor: '#fff',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        ],
      }}>
      <Tab.Screen
        name="DashboardScreen"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={DashboardIcon}
                resizeMode="contain"
                style={{
                  width: widthPercentageToDP(5),
                  height: heightPercentageToDP(2.5),
                  tintColor: focused ? '#f57b11' : '#000',
                }}
              />
              <Text
                style={{
                  color: focused ? '#f57b11' : '#000',
                  fontSize: widthPercentageToDP(3),
                }}>
                Dashboard
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TalentNetwork"
        component={TalentNetwork}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={headhuntingIcon}
                resizeMode="contain"
                style={{
                  width: widthPercentageToDP(5),
                  height: heightPercentageToDP(2.5),
                  tintColor: focused ? '#f57b11' : '#000',
                }}
              />
              <Text
                style={{
                  color: focused ? '#f57b11' : '#000',
                  fontSize: widthPercentageToDP(3),
                }}>
                Talent Network
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={plusIcon}
              resizeMode="contain"
              style={{
                width: widthPercentageToDP(20),
                height: heightPercentageToDP(10),
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="SavedJobs"
        component={SavedJobs}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={saveIcon}
                resizeMode="contain"
                style={{
                  width: widthPercentageToDP(5),
                  height: heightPercentageToDP(2.5),
                  tintColor: focused ? '#f57b11' : '#000',
                }}
              />
              <Text
                style={{
                  color: focused ? '#f57b11' : '#000',
                  fontSize: widthPercentageToDP(3),
                }}>
                Saved Jobs
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CareerAreas"
        component={CareerAreas}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={careerIcon}
                resizeMode="contain"
                style={{
                  width: widthPercentageToDP(5),
                  height: heightPercentageToDP(2.5),
                  tintColor: focused ? '#f57b11' : '#000',
                }}
              />
              <Text
                style={{
                  color: focused ? '#f57b11' : '#000',
                  fontSize: widthPercentageToDP(3),
                }}>
                Career Areas
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
