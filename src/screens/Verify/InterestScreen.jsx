import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Octicans from 'react-native-vector-icons/Ionicons';
import ProgressBar from 'react-native-progress-bar-horizontal';

const InterestScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity style={{marginLeft: '3%'}}>
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
      <Text>InterestScreen</Text>
    </View>
  );
};

export default InterestScreen;

const styles = StyleSheet.create({});
