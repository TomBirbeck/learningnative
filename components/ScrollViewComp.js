import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

const ScrollViewComponent = () => {
    return (
<ScrollView style={{width: '100%'}}>
    <Text style={{ fontSize: 40 }}>Testing</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 40 }}>The</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 40 }}>Scroll</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 40 }}>View</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 40 }}>In</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 40 }}>A</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 40 }}>Component</Text>
  </ScrollView>
);
}

export default ScrollViewComponent