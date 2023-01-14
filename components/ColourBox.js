import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColourBox = ({ colorName, hexCode }) => {
  const boxColour = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.box, boxColour]}>
      <Text style={styles.boxText}>
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
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColourBox;
