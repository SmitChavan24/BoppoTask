import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  BackHandler,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Image from 'react-native-remote-svg';
import SwipeButton from 'rn-swipe-button';
import Feather from 'react-native-vector-icons/FontAwesome5';
import Toast from 'react-native-toast-message';
import {useIsFocused} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const LoginScreen = props => {
  const [exitApp, SetExitApp] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();
    }
  }, [exitApp, isFocused]);
  const backAction = () => {
    if (exitApp == false) {
      SetExitApp(true);
      Toast.show({
        type: 'error',
        text1: 'Please Back Again To Exit',
      });
    } else if (exitApp == true) {
      BackHandler.exitApp();
    }

    setTimeout(() => {
      SetExitApp(false);
    }, 1500);
    return true;
  };
  const CheckoutButton = () => {
    return (
      <View>
        <Feather color="#FF5069" size={25} name="phone-alt" />
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#FFFFFF" // Replace with your desired color
      />
      <Toast position="bottom" bottomOffset={20} />
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
          width: '78%',
          marginBottom: '5%',
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
          width: '70%',
          marginBottom: '3%',
          alignSelf: 'center',
        }}>
        Join us to discover your ideal partner and ignite the sparks of romance
        in your journey.
      </Text>

      <View
        style={{
          bottom: 0,
          position: 'absolute',
          width: '100%',
          marginBottom: '3%',
        }}>
        <SwipeButton
          title="Login with Phone"
          railBackgroundColor="#FF5069"
          railBorderColor="#FF5069"
          onSwipeSuccess={() => props.navigation.navigate('phoneverify')}
          titleColor="#FFFFFF"
          titleFontSize={18}
          shouldResetAfterSuccess={true}
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
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
