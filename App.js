import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// You can import from local files
import SplashScreen from './src/screen/Authentication/SplashScreen';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const AuthenticationStack =createStackNavigator();
const AuthenticationNavigator =()=>{
  return(
  <AuthenticationStack.Navigator
  screenOptions={{
    headerShown: false
  }}>
  <AuthenticationStack.Screen name="SplashScreen" component={SplashScreen} />
  </AuthenticationStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
    <AuthenticationNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
