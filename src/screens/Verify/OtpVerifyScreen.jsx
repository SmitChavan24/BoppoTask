import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Octicans from 'react-native-vector-icons/Ionicons';
import ProgressBar from 'react-native-progress-bar-horizontal';
import PurpleButton from '../components/Button';
import Image from 'react-native-remote-svg';

const {width, height} = Dimensions.get('window');

const OtpVerifyScreen = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={{marginLeft: '3%'}}
          onPress={() => props.navigation.goBack()}>
          <Octicans name="arrow-back" size={45} color="black" />
        </TouchableOpacity>
        <View style={{marginLeft: '18%'}}>
          <ProgressBar
            progress={0.3}
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

      <View style={{alignSelf: 'center', backgroundColor: 'blue'}}>
        <Text>Verification Code</Text>
        <Text> Please enter code we just send to</Text>
        <Text>+91 99292 77633</Text>

        <Text>Didn’t receive OTP?</Text>
        <Text>Resend Code</Text>

        <PurpleButton title="Verify" />
      </View>

      <Image
        source={require('../../assets/FrameVerify.svg')}
        style={{
          height: (height * 50) / 100,
          width: (width * 100) / 100,
          bottom: 0,
          position: 'absolute',
          //   backgroundColor: 'red',
        }}
      />
    </View>
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
});
