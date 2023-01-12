import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import FlatListComponent from './components/FlatList';
import SectionListComponents from './components/SectionList';
import Header from './components/Header';
import ScrollViewComponent from './components/ScrollViewComp';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <TextInput type='text' placeholder='text here' style={styles.TextInput}/>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput type='number' placeholder='number here' style={styles.TextInput}/>
      <Text>App building?</Text>
      <FlatListComponent/>
      <SectionListComponents/>
      <ScrollViewComponent/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
