import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';

const PhoneNumberScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <Text>PhoneNumberScreen</Text>
    </View>
  );
};

export default PhoneNumberScreen;

const styles = StyleSheet.create({});
