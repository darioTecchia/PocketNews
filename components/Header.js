import React, { Component } from 'react';
import { View } from 'react-native';
import Greetings from './Greetings';
import Weather from './Weather';
import Logo from './Logo';

class Header extends Component {
  render() {
    return (
      <View>
        <Logo/>
        <Greetings/>
        <Weather/>
      </View>
    );
  }
}

export default Header;