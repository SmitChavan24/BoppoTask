import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
import ProgressBar from 'react-native-progress-bar-horizontal';
import React from 'react';
import Octicans from 'react-native-vector-icons/Ionicons';
import Image from 'react-native-remote-svg';
import PurpleButton from '../components/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('window');

const PhotoScreen = props => {
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
              progress={1}
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
        <Text style={styles.textbold}>Upload Your Photo</Text>
        <View>
          <Text
            style={[
              styles.text,
              {color: '#333333', width: '45%', lineHeight: 20},
            ]}>
            We'd love to see you. Upload a photo for your dating journey.
          </Text>
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginVertical: '8%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: '3%',
            }}>
            <Pressable
              style={{
                borderColor: '#FF5069',
                borderWidth: 1,
                borderStyle: 'dashed',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                marginRight: '4%',
                borderRadius: 10,
              }}>
              <MaterialIcons name="add-circle" size={45} color="#FF5069" />
            </Pressable>
            <View style={{justifyContent: 'space-evenly'}}>
              <Pressable
                style={{
                  borderColor: '#FF5069',
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  borderRadius: 10,
                  marginBottom: '10%',
                  padding: '10%',
                }}>
                <MaterialIcons name="add-circle" size={45} color="#FF5069" />
              </Pressable>
              <Pressable
                style={{
                  borderColor: '#FF5069',
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: '10%',
                  borderRadius: 10,
                }}>
                <MaterialIcons name="add-circle" size={45} color="#FF5069" />
              </Pressable>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Pressable
              style={{
                borderColor: '#FF5069',
                borderWidth: 1,
                borderStyle: 'dashed',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                marginRight: '3%',
                borderRadius: 10,
                padding: '10%',
              }}>
              <MaterialIcons name="add-circle" size={45} color="#FF5069" />
            </Pressable>
            <Pressable
              style={{
                borderColor: '#FF5069',
                borderWidth: 1,
                borderStyle: 'dashed',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                marginRight: '3%',
                padding: '10%',
                borderRadius: 10,
              }}>
              <MaterialIcons name="add-circle" size={45} color="#FF5069" />
            </Pressable>
            <Pressable
              style={{
                borderColor: '#FF5069',
                borderWidth: 1,
                borderStyle: 'dashed',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,

                borderRadius: 10,
                padding: '10%',
              }}>
              <MaterialIcons name="add-circle" size={45} color="#FF5069" />
            </Pressable>
          </View>
        </View>
      </View>

      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/FrameInterest.svg')}
          style={{
            height: (height * 50) / 100,
            width: (width * 100) / 100,
            //   backgroundColor: 'red',
          }}
        />
      </View>
      <View
        style={{
          bottom: 0,
          position: 'absolute',
          width: '90%',
          alignSelf: 'center',
          marginBottom: '2%',
        }}>
        <PurpleButton
          title="Continue"
          onPress={() => console.log('it ended')}
        />
      </View>
    </View>
  );
};

export default PhotoScreen;

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
