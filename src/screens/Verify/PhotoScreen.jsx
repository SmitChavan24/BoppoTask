import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import ProgressBar from 'react-native-progress-bar-horizontal';
import React, {useState} from 'react';
import Octicans from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

import PurpleButton from '../components/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('window');

const PhotoScreen = props => {
  const [image, setImage] = useState('');
  const [ione, setImageone] = useState('');
  const [itwo, setImagetwo] = useState('');
  const [ithree, setImagethree] = useState('');
  const [ifour, setImagefour] = useState('');
  const [ifive, setImagefive] = useState('');
  const pickImage = async event => {
    console.log(event);
    try {
      ImagePicker.openPicker({
        width: 500,
        height: 600,
        cropping: true,
      })
        .then(image => {
          if (event == 'image') {
            setImage(image.path);
          } else if (event == 'one') {
            setImageone(image.path);
          } else if (event == 'two') {
            setImagetwo(image.path);
          } else if (event == 'three') {
            setImagethree(image.path);
          } else if (event == 'four') {
            setImagefour(image.path);
          } else {
            setImagefive(image.path);
          }
        })
        .catch(err => console.log(err));
    } catch (error) {}
  };

  const pickImageS = async event => {
    console.log(event);
    try {
      ImagePicker.openPicker({
        width: 500,
        height: 600,
        cropping: true,
      })
        .then(image => {
          if (event == 'three') {
            setImagethree(image.path);
          } else if (event == 'four') {
            setImagefour(image.path);
          } else {
            setImagefive(image.path);
          }
        })
        .catch(err => console.log(err));
    } catch (error) {}
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
            {image ? (
              <Image
                source={{uri: image}}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: '25%',
                  paddingVertical: '30%',
                  marginRight: '3%',
                  borderRadius: 10,
                }}></Image>
            ) : (
              <Pressable
                style={{
                  borderColor: '#FF5069',
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: '25%',
                  marginRight: '3%',
                  borderRadius: 10,
                }}
                onPress={() => pickImage('image')}>
                <MaterialIcons name="add-circle" size={45} color="#FF5069" />
              </Pressable>
            )}

            <View style={{justifyContent: 'space-evenly'}}>
              {ione ? (
                <Image
                  source={{uri: ione}}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    padding: '25%',
                    paddingVertical: '30%',
                    marginRight: '3%',
                    borderRadius: 10,
                  }}></Image>
              ) : (
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
                  }}
                  onPress={() => pickImage('one')}>
                  <MaterialIcons name="add-circle" size={45} color="#FF5069" />
                </Pressable>
              )}
              {itwo ? (
                <Image
                  source={{uri: itwo}}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    padding: '25%',
                    paddingVertical: '30%',
                    marginRight: '3%',
                    borderRadius: 10,
                  }}></Image>
              ) : (
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
                  }}
                  onPress={() => pickImage('two')}>
                  <MaterialIcons name="add-circle" size={45} color="#FF5069" />
                </Pressable>
              )}
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {ithree ? (
              <Image
                source={{uri: ithree}}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: '25%',
                  paddingVertical: '30%',
                  marginRight: '3%',
                  borderRadius: 10,
                }}
              />
            ) : (
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
                }}
                onPressIn={() => pickImageS('three')}>
                <MaterialIcons name="add-circle" size={45} color="#FF5069" />
              </Pressable>
            )}
            {ifour ? (
              <Image
                source={{uri: ifour}}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: '25%',
                  paddingVertical: '30%',
                  marginRight: '3%',
                  borderRadius: 10,
                }}></Image>
            ) : (
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
                }}
                onPress={() => pickImageS('four')}>
                <MaterialIcons name="add-circle" size={45} color="#FF5069" />
              </Pressable>
            )}
            {ifive ? (
              <Image
                source={{uri: ifive}}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: '25%',
                  paddingVertical: '30%',
                  marginRight: '3%',
                  borderRadius: 10,
                }}></Image>
            ) : (
              <TouchableOpacity
                style={{
                  borderColor: '#FF5069',
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,

                  borderRadius: 10,
                  padding: '10%',
                }}
                onPress={() => pickImageS()}>
                <MaterialIcons name="add-circle" size={45} color="#FF5069" />
              </TouchableOpacity>
            )}
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
    </ScrollView>
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
