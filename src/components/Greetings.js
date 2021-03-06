import React from 'react';

import { Text, StyleSheet, View, Alert } from 'react-native';
import { Card, Button } from 'react-native-elements';

import AsyncStorage from '@react-native-community/async-storage';

import moment from 'moment';
import 'moment/locale/it'
moment.locale('it');

import styles from '../config/theme';

const greetingsStyle = StyleSheet.create({
  text: {
    fontSize: 32
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
})

class Greetings extends React.Component {
  state = {
    greeting: '',
    name: ''
  };

  async componentDidMount() {
    this.setState({
      name: await AsyncStorage.getItem('name')
    });

    let now = moment().hour();
    if (now >= 5 && now < 12) {
      this.setState({
        greeting: 'Buongiorno'
      })
    } else if (now >= 12 && now < 18) {
      this.setState({
        greeting: 'Buon pomeriggio'
      })
    } else {
      this.setState({
        greeting: 'Buona sera'
      })
    }
  }

  render() {
    return (
      <Card
        containerStyle={styles.card}
      >
        <View style={greetingsStyle.view}>
          <Text
            style={greetingsStyle.text}
          >{this.state.greeting}{!this.state.name ? "!" : `, ${this.state.name}.`}</Text>
        </View>
      </Card>
    );
  }
}

export default Greetings;