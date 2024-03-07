import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  BackHandler,
} from 'react-native';
import React, {useState} from 'react';
import Octicans from 'react-native-vector-icons/Ionicons';
import ProgressBar from 'react-native-progress-bar-horizontal';
import PurpleButton from '../components/Button';
import Image from 'react-native-remote-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CountryPicker} from 'react-native-country-codes-picker';
import CountryFlag from 'react-native-country-flag';

const {width, height} = Dimensions.get('window');

const PhoneNumberScreen = props => {
  const [bool, setBool] = useState({
    modal: false,
  });
  const [dialCode, setDialCode] = useState('');
  const [number, setNumber] = useState('');
  const onChangeInput = (item, name) => {
    console.log(item.name.en);

    let dial = {
      code: item.dial_code,
      iso: item.code,
    };
    setDialCode(dial);
  };
  const ChangeInput = event => {
    setNumber(event);
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

        <Text style={[styles.textbold, {marginTop: '10%', marginBottom: '3%'}]}>
          My Number Is
        </Text>
        <View>
          <Text
            style={[
              styles.text,
              {color: '#333333', width: '70%', lineHeight: 20},
            ]}>
            We'll need your phone number to send an OTP for verification.
          </Text>
        </View>

        <View
          style={{
            borderRadius: 28,
            marginVertical: '3%',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            alignSelf: 'center',
          }}>
          <CountryFlag
            isoCode={dialCode.iso ? `${dialCode.iso}` : 'in'}
            size={32}
            style={{
              resizeMode: 'cover',
              borderRadius: 100,
            }}
          />

          <TouchableOpacity
            onPress={() => setBool({modal: true})}
            style={{flexDirection: 'row'}}>
            <Text
              style={[
                styles.text,
                {color: '#000000', lineHeight: 20, marginLeft: 10},
              ]}>
              {dialCode.code ? dialCode.code : '+91'}
            </Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={30}
              color="#8E8E8E"
            />
          </TouchableOpacity>

          <View
            style={{
              height: 18,
              width: 2,
              backgroundColor: '#D8D8D8',
            }}></View>
          <TextInput
            placeholder="Enter Phone Number"
            placeholderTextColor={'#888888'}
            style={{
              fontSize: 15,
              lineHeight: 20,
              fontFamily: 'Inter-Regular',
              color: 'black',
              paddingHorizontal: 5,
              flex: 0.6,
            }}
            onChangeText={ChangeInput}
            keyboardType="numeric"
            cursorColor={'transparent'}></TextInput>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <PurpleButton
            title="Continue"
            onPress={() =>
              props.navigation.navigate('otpverify', {number: number})
            }
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/FrameNumber.svg')}
          style={{
            height: (height * 50) / 100,
            width: (width * 100) / 100,
            //   backgroundColor: 'red',
          }}
        />
      </View>
      <CountryPicker
        show={bool.modal}
        style={{
          countryName: {color: 'black', fontSize: 17},
          dialCode: {color: 'black', fontSize: 16},
          countryButtonStyles: {width: '95%', alignSelf: 'center'},
          modal: {backgroundColor: 'transparent', height: '50%'},
          textInput: {
            textAlign: 'center',
            color: 'black',
            fontSize: 18,
            fontWeight: '500',
          },
        }}
        androidWindowSoftInputMode={'pan'}
        onBackdropPress={() => setBool({modal: false})}
        inputPlaceholder="Search your Country Code"
        pickerButtonOnPress={item => {
          onChangeInput(item, 'nationality');
          setBool({modal: false});
        }}
      />
    </ScrollView>
  );
};

export default PhoneNumberScreen;

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 16,
    fontFamily: 'Inter-Regular',
    letterSpacing: 0.3,
    alignSelf: 'center',
  },
  textbold: {
    color: '#000000',
    marginBottom: '5%',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 24,
    fontFamily: 'Inter-SemiBold',
    letterSpacing: 0.3,
    alignSelf: 'center',
  },
});
