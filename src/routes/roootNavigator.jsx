import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import AppRoutes from '../utils/route';
import Create from '../screens/create';
import { AppColor } from '../utils/color';

const Stack = createNativeStackNavigator();

const RoootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerStyle: {
          backgroundColor: AppColor.GRAY,
        },
      }}
    >
      <Stack.Screen name={AppRoutes.HOME} component={Home} />
      <Stack.Screen name={AppRoutes.CREATE} component={Create} />
    </Stack.Navigator>
  );
};

export default RoootNavigator;
