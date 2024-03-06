import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Octicans from 'react-native-vector-icons/Ionicons';
import ProgressBar from 'react-native-progress-bar-horizontal';
import PurpleButton from '../components/Button';
import Image from 'react-native-remote-svg';
import OtpInput from '../components/Otp';
const {width, height} = Dimensions.get('window');

const OtpVerifyScreen = props => {
  const handleOtpChange = otp => {
    // Validate the OTP or perform any action with the OTP in the parent component
    console.log('Received OTP:', otp);
    // Add your validation logic or further processing here
  };
  return (
    <ScrollView contentContainerStyle={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{marginLeft: '3%', flex: 0.3}}
            onPress={() => props.navigation.goBack()}>
            <Octicans name="arrow-back" size={45} color="black" />
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <ProgressBar
              progress={0.2}
              width={220}
              borderWidth={1}
              fillColor="#FF5069"
              unfilledColor="#FFE9F1"
              height={15}
              borderRadius={20}
              borderColor="#FFE9F1"
            />
          </View>
        </View>

        <Text style={styles.textbold}>Verification Code</Text>
        <Text style={styles.text}> Please enter code we just send to</Text>
        <Text style={[styles.textbold, {marginTop: '0.5%', fontSize: 14}]}>
          +91 99292 77633
        </Text>
        <View style={{marginVertical: '7%'}}>
          <OtpInput onOtpChange={handleOtpChange} />
        </View>

        <Text style={[styles.text, {lineHeight: 24}]}>Didn’t receive OTP?</Text>
        <TouchableOpacity>
          <Text
            style={[
              styles.textbold,
              {
                marginTop: '0.5%',
                fontSize: 14,
                color: '#FF5069',
                textDecorationLine: 'underline',
              },
            ]}>
            Resend Code
          </Text>
        </TouchableOpacity>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <PurpleButton
            title="Verify"
            onPress={() => props.navigation.navigate('nameverify')}
          />
        </View>
      </View>

      <Image
        source={require('../../assets/FrameVerify.svg')}
        style={{
          height: (height * 50) / 100,
          width: (width * 100) / 100,
        }}
      />
    </ScrollView>
  );
};

export default OtpVerifyScreen;

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Inter-Regular',
    letterSpacing: 0.3,
    alignSelf: 'center',
  },
  textbold: {
    color: '#000000',
    marginTop: '10%',
    marginBottom: '3%',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 24,
    fontFamily: 'Inter-SemiBold',
    letterSpacing: 0.3,
    alignSelf: 'center',
  },
});
