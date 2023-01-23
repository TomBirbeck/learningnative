// import 'react-native-gesture-handler'
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './screens/Home';
import ColourPalette from './screens/ColourPalette';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ColourPalette' component={ColourPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

