import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import FlatListComponent from './components/FlatList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <TextInput type='text' placeholder='text here' style={styles.TextInput}/>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput type='number' placeholder='number here' style={styles.TextInput}/>
      <Text>App building?</Text>
      <FlatListComponent/>
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
