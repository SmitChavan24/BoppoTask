import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Octicans from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressBar from 'react-native-progress-bar-horizontal';
import Image from 'react-native-remote-svg';
import PurpleButton from '../components/Button';
import MaterialCommunity from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('window');

const InterestScreen = props => {
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
            <Octicans name="arrow-back" size={35} color="black" />
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
            <TouchableOpacity style={styles.interest}>
              <Octicans name="book" size={35} color="black" />

              <Text style={{marginLeft: '2%', color: 'black'}}>Reading</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interest}>
              <MaterialCommunityIcons
                name="camera-iris"
                size={35}
                color="black"
              />

              <Text style={{marginLeft: '2%', color: 'black'}}>
                PhotoGraphy
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity style={styles.interest}>
              <Octicans name="game-controller" size={35} color="black" />

              <Text style={{marginLeft: '2%', color: 'black'}}>Gaming</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interest}>
              <Octicans name="musical-notes-sharp" size={35} color="black" />

              <Text style={{marginLeft: '2%', color: 'black'}}>Music</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interest}>
              <MaterialCommunityIcons name="airplane" size={35} color="black" />

              <Text style={{marginLeft: '2%', color: 'black'}}>Travel</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity style={styles.interest}>
              <Octicans name="color-palette-sharp" size={35} color="black" />

              <Text style={{marginLeft: '2%', color: 'black'}}>Painting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interest}>
              <MaterialCommunity name="emoji-people" size={35} color="black" />

              <Text style={{marginLeft: '2%', color: 'black'}}>Politics</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity style={styles.interest}>
              <MaterialCommunityIcons
                name="camera-iris"
                size={35}
                color="black"
              />

              <Text style={{marginLeft: '2%', color: 'black'}}>Charity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interest}>
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={35}
                color="black"
              />

              <Text style={{marginLeft: '2%', color: 'black'}}>Cooking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interest}>
              <Octicans name="paw" size={35} color="black" />

              <Text style={{marginLeft: '2%', color: 'black'}}>Pets</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity style={styles.interest}>
              <Octicans name="basketball-outline" size={35} color="black" />

              <Text style={{marginLeft: '2%', color: 'black'}}>Sports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interest}>
              <MaterialCommunityIcons name="hanger" size={35} color="black" />

              <Text style={{marginLeft: '2%', color: 'black'}}>fashion</Text>
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
    borderRadius: 30,
    margin: '2%',
  },
});
