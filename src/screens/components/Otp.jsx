import React, {useState, useRef, useEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const OtpInput = ({onOtpChange}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef(
    Array(4)
      .fill(null)
      .map(() => React.createRef()),
  );
  useEffect(() => {
    // Call the callback in the parent component when OTP changes
    onOtpChange(otp.join(''));
  }, [otp, onOtpChange]);

  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    setOtp(newOtp);

    // Auto-focus on the next input
    if (text !== '' && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleFocus = index => {
    setOtp(prevOtp => prevOtp.map((value, i) => (i === index ? '' : value)));
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <View key={index} style={styles.otp}>
          <TextInput
            ref={ref => (inputRefs.current[index] = ref)}
            style={styles.input}
            autoFocus={true}
            cursorColor={'transparent'}
            value={digit}
            onChangeText={text => handleInputChange(text, index)}
            onFocus={() => handleFocus(index)}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  input: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
  },
});

export default OtpInput;
