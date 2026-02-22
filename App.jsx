import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RoootNavigator from './src/routes/roootNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <RoootNavigator />
    </NavigationContainer>
  );
};

export default App;
