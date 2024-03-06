import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React from 'react';
import ProgressBar from 'react-native-progress-bar-horizontal';
import Octicans from 'react-native-vector-icons/Ionicons';
import PurpleButton from '../components/Button';
import Image from 'react-native-remote-svg';

const {width, height} = Dimensions.get('window');
const NameScreen = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{marginLeft: '3%'}}
            onPress={() => props.navigation.goBack()}>
            <Octicans name="arrow-back" size={45} color="black" />
          </TouchableOpacity>
          <View style={{marginLeft: '18%'}}>
            <ProgressBar
              progress={0.7}
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

        <Text style={styles.textbold}>What’s Your Name?</Text>
        <Text
          style={[
            styles.text,
            {color: '#333333', width: '70%', lineHeight: 20},
          ]}>
          Let's Get to Know Each Other
        </Text>
        <View style={{width: '80%', alignSelf: 'center'}}>
          <TextInput
            cursorColor={'#000000'}
            style={{
              borderColor: '#FF5069',
              borderWidth: 1,
              width: '90%',
              borderRadius: 30,
              alignSelf: 'center',
              marginVertical: '5%',
              color: '#000000',
              fontSize: 18,
              fontFamily: 'Inter-Regular',
              paddingHorizontal: '5%',
              paddingVertical: '3%',
            }}></TextInput>
          <PurpleButton
            title="Continue"
            onPress={() => props.navigation.navigate('interestverify')}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/FrameName.svg')}
          style={{
            height: (height * 50) / 100,
            width: (width * 100) / 100,
            //   backgroundColor: 'red',
          }}
        />
      </View>
    </View>
  );
};

export default NameScreen;

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
