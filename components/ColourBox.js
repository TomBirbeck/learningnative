import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColourBox = ({ colorName, hexCode }) => {
  const boxColour = {
    backgroundColor: hexCode,
  };
  const textColour = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.box, boxColour]}>
      <Text style={[styles.boxText, textColour]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 4,
  },
  boxText: {
    fontWeight: 'bold',
  },
});

export default ColourBox;
