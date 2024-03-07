import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Octicans from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressBar from 'react-native-progress-bar-horizontal';
import Image from 'react-native-remote-svg';
import PurpleButton from '../components/Button';
import MaterialCommunity from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('window');

const InterestScreen = props => {
  const [dataInterest, setDataInterest] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
    eleven: false,
    twelve: false,
  });

  const OnClick = key => {
    setDataInterest(prevData => ({
      ...prevData,
      [key]: !prevData[key], // Toggle the value (opposite of the current value)
    }));
    console.log(dataInterest);
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{marginLeft: '3%', flex: 0.3}}
            onPress={() => props.navigation.goBack()}>
            <Octicans
              name="arrow-back"
              size={35}
              color={dataInterest.one ? '#FFFFFF' : 'black'}
            />
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
        <Text style={styles.textbold}>Select Up To 3 Interest</Text>
        <View>
          <Text
            style={[
              styles.text,
              {color: '#333333', width: '35%', lineHeight: 20},
            ]}>
            Tell us what piques your curiosity and passions
          </Text>
        </View>

        <View style={{width: '90%', alignSelf: 'center', marginVertical: '8%'}}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity
              onPress={() => OnClick('one')}
              style={[
                styles.interest,
                dataInterest.one ? {backgroundColor: '#FF5069'} : {},
              ]}>
              <Octicans
                name="book"
                size={35}
                color={dataInterest.one ? '#FFFFFF' : 'black'}
              />

              <Text
                style={[
                  styles.itext,
                  dataInterest.one ? {color: '#FFFFFF'} : {},
                ]}>
                Reading
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => OnClick('two')}
              style={[
                styles.interest,
                dataInterest.two ? {backgroundColor: '#FF5069'} : {},
              ]}>
              <MaterialCommunityIcons
                name="camera-iris"
                size={35}
                color={dataInterest.two ? '#FFFFFF' : 'black'}
              />

              <Text
                style={[
                  styles.itext,
                  dataInterest.two ? {color: '#FFFFFF'} : {},
                ]}>
                PhotoGraphy
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity
              onPress={() => OnClick('three')}
              style={[
                styles.interest,
                dataInterest.three ? {backgroundColor: '#FF5069'} : {},
              ]}>
              <Octicans
                name="game-controller"
                size={35}
                color={dataInterest.three ? '#FFFFFF' : 'black'}
              />

              <Text
                style={[
                  styles.itext,
                  dataInterest.three ? {color: '#FFFFFF'} : {},
                ]}>
                Gaming
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => OnClick('four')}
              style={[
                styles.interest,
                dataInterest.four ? {backgroundColor: '#FF5069'} : {},
              ]}>
              <Octicans
                name="musical-notes-sharp"
                size={35}
                color={dataInterest.four ? '#FFFFFF' : 'black'}
              />

              <Text
                style={[
                  styles.itext,
                  dataInterest.four ? {color: '#FFFFFF'} : {},
                ]}>
                Music
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => OnClick('five')}
              style={[
                styles.interest,
                dataInterest.five ? {backgroundColor: '#FF5069'} : {},
              ]}>
              <MaterialCommunityIcons
                name="airplane"
                size={35}
                color={dataInterest.five ? '#FFFFFF' : 'black'}
              />

              <Text
                style={[
                  styles.itext,
                  dataInterest.five ? {color: '#FFFFFF'} : {},
                ]}>
                Travel
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity
              onPress={() => OnClick('six')}
              style={[
                styles.interest,
                dataInterest.six ? {backgroundColor: '#FF5069'} : {},
              ]}>
              <Octicans
                name="color-palette-sharp"
                size={35}
                color={dataInterest.six ? '#FFFFFF' : 'black'}
              />

              <Text
                style={[
                  styles.itext,
                  dataInterest.six ? {color: '#FFFFFF'} : {},
                ]}>
                Painting
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => OnClick('seven')}
              style={[
                styles.interest,
                dataInterest.seven ? {backgroundColor: '#FF5069'} : {},
              ]}>
              <MaterialCommunity
                name="emoji-people"
                size={35}
                color={dataInterest.seven ? '#FFFFFF' : 'black'}
              />

              <Text
                style={[
                  styles.itext,
                  dataInterest.seven ? {color: '#FFFFFF'} : {},
                ]}>
                Politics
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity
              onPress={() => OnClick('eight')}
              style={[
                styles.interest,
                dataInterest.eight ? {backgroundColor: '#FF5069'} : {},
              ]}>
              <MaterialCommunityIcons
                name="camera-iris"
                size={35}
                color={dataInterest.eight ? '#FFFFFF' : 'black'}
              />

              <Text
                style={[
                  styles.itext,
                  dataInterest.eight ? {color: '#FFFFFF'} : {},
                ]}>
                Charity
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => OnClick('nine')}
              style={[
                styles.interest,
                dataInterest.nine ? {backgroundColor: '#FF5069'} : {},
              ]}>
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={35}
                color={dataInterest.nine ? '#FFFFFF' : 'black'}
              />

              <Text
                style={[
                  styles.itext,
                  dataInterest.nine ? {color: '#FFFFFF'} : {},
                ]}>
                Cooking
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => OnClick('ten')}
              style={[
                styles.interest,
                dataInterest.ten ? {backgroundColor: '#FF5069'} : {},
              ]}>
              <Octicans
                name="paw"
                size={35}
                color={dataInterest.ten ? '#FFFFFF' : 'black'}
              />

              <Text
                style={[
                  styles.itext,
                  dataInterest.ten ? {color: '#FFFFFF'} : {},
                ]}>
                Pets
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity
              onPress={() => OnClick('eleven')}
              style={[
                styles.interest,
                dataInterest.eleven ? {backgroundColor: '#FF5069'} : {},
              ]}>
              <Octicans
                name="basketball-outline"
                size={35}
                color={dataInterest.eleven ? '#FFFFFF' : 'black'}
              />

              <Text
                style={[
                  styles.itext,
                  dataInterest.eleven ? {color: '#FFFFFF'} : {},
                ]}>
                Sports
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => OnClick('twelve')}
              style={[
                styles.interest,
                dataInterest.twelve ? {backgroundColor: '#FF5069'} : {},
              ]}>
              <MaterialCommunityIcons
                name="hanger"
                size={35}
                color={dataInterest.twelve ? '#FFFFFF' : 'black'}
              />

              <Text
                style={[
                  styles.itext,
                  dataInterest.twelve ? {color: '#FFFFFF'} : {},
                ]}>
                fashion
              </Text>
            </TouchableOpacity>
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
          onPress={() => props.navigation.navigate('photoverify')}
        />
      </View>
    </ScrollView>
  );
};

export default InterestScreen;

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
  interest: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: '2%',
    paddingHorizontal: '5%',
    borderRadius: 30,
    margin: '2%',
  },
  itext: {
    marginLeft: '2%',
    color: 'black',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
});
