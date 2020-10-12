import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const logoStyle = StyleSheet.create({
  logo: {
    textAlign: 'center',
    fontSize: 48
  }
})

class Logo extends React.Component {
  render() {
    return (
      <View>
        <Text style={logoStyle.logo}>
          <Text>Pocket</Text>
          <Text style={{fontWeight: 'bold'}}>News</Text>
        </Text>
      </View>
    );
  }
}

export default Logo;