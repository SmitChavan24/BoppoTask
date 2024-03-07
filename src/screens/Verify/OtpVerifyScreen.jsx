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
import React, {useState, useRef, useCallback} from 'react';
import Octicans from 'react-native-vector-icons/Ionicons';
import ProgressBar from 'react-native-progress-bar-horizontal';
import PurpleButton from '../components/Button';
import Image from 'react-native-remote-svg';
import Toast from 'react-native-toast-message';
const {width, height} = Dimensions.get('window');

const OtpVerifyScreen = props => {
  const Number = props.route.params.number;
  const [digit, setDigit] = useState(['', '', '', '']);
  const digitRefs = [useRef(), useRef(), useRef(), useRef()];

  const HandleSubmit = () => {
    const enteredValue = digit.join('');
    const expectedValue = '5154';

    if (enteredValue === expectedValue) {
      props.navigation.navigate('nameverify');
    } else {
      Toast.show({
        type: 'error',
        text1: 'Entered Otp Is Not Valid',
      });
    }
  };
  const handleInputChange = useCallback(
    (text, index, event) => {
      const newDigit = [...digit];
      newDigit[index] = text;
      setDigit(newDigit);

      if (event?.nativeEvent?.key === 'Backspace') {
        setDigit(['', '', '', '']);
        if (digitRefs[0] && digitRefs[0].current) {
          digitRefs[0].current.focus();
        }
      }

      if (
        text !== '' &&
        index < digitRefs.length - 1 &&
        digitRefs[index + 1] &&
        digitRefs[index + 1].current
      ) {
        digitRefs[index + 1].current.focus();
      }
    },
    [digit, digitRefs],
  );

  return (
    <ScrollView contentContainerStyle={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <Toast position="top" bottomOffset={20} />
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{marginLeft: '3%', flex: 0.3}}
            onPress={() => props.navigation.goBack()}>
            <Octicans name="arrow-back" size={45} color="black" />
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <ProgressBar
              progress={0.5}
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
          +91 {Number ? Number : '9930630872'}
        </Text>
        {/* <OtpInput onOtpChange={handleOtpChange} /> */}
        <View style={{marginVertical: '7%'}}>
          <View
            style={{
              width: '100%',
              height: '8%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            {[0, 1, 2, 3].map(index => (
              <View key={index} style={styles.otp}>
                <TextInput
                  style={styles.input}
                  autoFocus={index === 0}
                  cursorColor={'transparent'}
                  placeholder="-"
                  placeholderTextColor={'black'}
                  value={digit[index]}
                  onChangeText={text => handleInputChange(text, index)}
                  onKeyPress={event =>
                    handleInputChange(digit[index], index, event)
                  }
                  keyboardType="numeric"
                  maxLength={1}
                  ref={digitRefs[index]}
                  onSubmitEditing={() => {
                    if (index < digitRefs.length - 1) {
                      digitRefs[index + 1].current.focus();
                    }
                  }}
                />
              </View>
            ))}
          </View>
        </View>

        <Text style={[styles.text, {lineHeight: 24}]}>Didn’t receive OTP?</Text>
        <TouchableOpacity onPress={() => setDigit(['', '', '', ''])}>
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
          <PurpleButton title="Verify" onPress={HandleSubmit} />
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
  otp: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: '1%',
    borderWidth: 1,
    borderColor: 'rgba(228, 228, 228, 1)',
  },
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
  input: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Inter-SemiBold',
  },
});

{
  /* <View
style={{
  width: '100%',
  height: '8%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
}}>
<View
  style={{
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: '1%',
    borderWidth: 1,
    borderColor: 'rgba(228, 228, 228, 1)',
  }}>
  <TextInput
    style={styles.input}
    autoFocus={true}
    cursorColor={'transparent'}
    value={digit}
    onChangeText={text => handleInputChange(text)}
    // onFocus={() => handleFocus(index)}
    keyboardType="numeric"
    maxLength={1}
  />
</View>
<View
  style={{
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: '1%',
    borderWidth: 1,
    borderColor: 'rgba(228, 228, 228, 1)',
  }}>
  <TextInput
    style={styles.input}
    autoFocus={true}
    cursorColor={'transparent'}
    value={digit}
    onChangeText={text => handleInputChange(text)}
    // onFocus={() => handleFocus(index)}
    keyboardType="numeric"
    maxLength={1}
  />
</View>
<View
  style={{
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: '1%',
    borderWidth: 1,
    borderColor: 'rgba(228, 228, 228, 1)',
  }}>
  <TextInput
    style={styles.input}
    autoFocus={true}
    cursorColor={'transparent'}
    value={digit}
    onChangeText={text => handleInputChange(text)}
    // onFocus={() => handleFocus(index)}
    keyboardType="numeric"
    maxLength={1}
  />
</View>
<View
  style={{
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: '1%',
    borderWidth: 1,
    borderColor: 'rgba(228, 228, 228, 1)',
  }}>
  <TextInput
    style={styles.input}
    autoFocus={true}
    cursorColor={'transparent'}
    value={otp}
    onChangeText={text => handleInputChange(text)}
    // onFocus={() => handleFocus(index)}
    keyboardType="numeric"
    maxLength={1}
  />
</View>
</View> */
}
