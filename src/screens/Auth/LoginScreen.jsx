import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Image from 'react-native-remote-svg';
import SwipeButton from 'rn-swipe-button';
import Feather from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('window');

const LoginScreen = props => {
  const CheckoutButton = () => {
    return (
      <View>
        <Feather color="#FF5069" size={25} name="phone-alt" />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#FFFFFF" // Replace with your desired color
      />
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/Cupid.svg')}
          style={{height: (height * 10) / 100, width: (width * 30) / 100}}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/Frame.svg')}
          style={{height: (height * 50) / 100, width: (width * 100) / 100}}
        />
      </View>
      <Text
        style={{
          color: '#000000',
          textAlign: 'center',
          fontSize: 24,
          fontFamily: 'Inter-SemiBold',
          lineHeight: 29,
          width: '60%',
          alignSelf: 'center',
        }}>
        Discover Love Where Your Story Begins.
      </Text>

      <Text
        style={{
          color: '#000000',
          textAlign: 'center',
          fontSize: 15,
          fontFamily: 'Inter-Regular',
          lineHeight: 20,
          width: '47%',
          alignSelf: 'center',
        }}>
        Join us to discover your ideal partner and ignite the sparks of romance
        in your journey.
      </Text>
      <SwipeButton
        title="Login with Phone"
        railBackgroundColor="#FF5069"
        railBorderColor="#FF5069"
        onSwipeSuccess={() => props.navigation.navigate('phoneverify')}
        titleColor="#FFFFFF"
        titleFontSize={18}
        railFillBackgroundColor="#FFFFFF"
        railFillBorderColor="#FFFFFF"
        titleStyles={{fontFamily: 'Inter-SemiBold'}}
        thumbIconBorderColor="#FFFFFF"
        thumbIconBackgroundColor="#FFFFFF"
        railStyles={{
          margin: '1%',
        }}
        thumbIconComponent={CheckoutButton}
        containerStyles={{
          width: '80%',
          alignSelf: 'center',
          backgroundColor: '#FF5069',
          marginVertical: '5%',
        }}
      />
      <TouchableOpacity>
        <Text
          style={{
            color: '#000000',
            textAlign: 'center',
            fontSize: 14,
            lineHeight: 16,
            fontFamily: 'Inter-Regular',
            letterSpacing: 0.3,
            alignSelf: 'center',
          }}>
          Don’t have an account?{' '}
          <Text
            style={{
              color: '#FF5069',
              textAlign: 'center',
              fontFamily: 'Inter-SemiBold',
              fontSize: 15,
              lineHeight: 16,
            }}>
            Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
