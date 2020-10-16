// In App.js in a new project

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screen/homeScreen';
import LoginScreen from './screen/login';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
