import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import Image from 'react-native-remote-svg';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('login');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#FFFFFF" // Replace with your desired color
      />
      <View style={{marginBottom: '20%'}}>
        <Image
          source={require('../assets/Cupid.svg')}
          style={{height: 300, width: 300}}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
