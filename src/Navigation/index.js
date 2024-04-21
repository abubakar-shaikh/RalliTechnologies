import React from 'react';

import {navigationRef} from '../Utils/rootNavigation';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Auth/Login';
import Signup from '../Screens/Auth/Signup';
import BottomTab from './tabs/BottomTab';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="SignupScreen" component={Signup} />
        <Stack.Screen name="DashboardScreen" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
