import React from 'react';

import { View } from 'react-native';

import Greetings from './Greetings';
import Weather from './Weather';
import Logo from './Logo';

class Header extends React.Component {
  render() {
    return (
      <View>
        <Logo/>
        <Greetings navigation={this.props.navigation}/>
        <Weather/>
      </View>
    );
  }
}

export default Header;