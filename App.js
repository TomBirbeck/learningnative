import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ColourBox from './components/ColourBox';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colours
        </Text>
        <ColourBox colorName='Cyan' hexCode='#2aa198' />
        <ColourBox colorName='Blue' hexCode='#268bd2' />
        <ColourBox colorName='Magenta' hexCode='#d33682' />
        <ColourBox colorName='Orange' hexCode='#cb4b16' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
