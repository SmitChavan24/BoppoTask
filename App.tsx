import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Auth/LoginScreen';
import Splash from './src/screens/Splash';
import PhoneNumberScreen from './src/screens/Verify/PhoneNumberScreen';
import OtpVerifyScreen from './src/screens/Verify/OtpVerifyScreen';
import NameScreen from './src/screens/Verify/NameScreen';
import InterestScreen from './src/screens/Verify/InterestScreen';
import PhotoScreen from './src/screens/Verify/PhotoScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="phoneverify"
          component={PhoneNumberScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="otpverify"
          component={OtpVerifyScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="nameverify"
          component={NameScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="interestverify"
          component={InterestScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="photoverify"
          component={PhotoScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
