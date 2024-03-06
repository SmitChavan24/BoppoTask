import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const PurpleButton = props => {
  const {onPress, title = '', style} = props;
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={[styles.buttonStyle]}>
        <Text style={[styles.buttonLabel, style]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PurpleButton;

const styles = StyleSheet.create({
  buttonLabel: {
    fontSize: 16,
    // fontFamily: globalColors.fontBold,
    color: '#FFFFFF',
    letterSpacing: 0.3,
    lineHeight: 20,
  },
  buttonStyle: {
    borderRadius: 25,
    backgroundColor: '#FF5069',
    margin: 12,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
