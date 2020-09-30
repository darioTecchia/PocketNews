import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

import moment from 'moment';

import styles from '../config/theme';

const greetingsStyle = StyleSheet.create({
  text: {
    fontSize: 32
  }
})

class Greetings extends Component {
  state = {
    greeting: ''
  };

  componentDidMount() {
    console.log('MOUNT');
    let now = moment().hour();
    if(now >= 5 && now < 12) {
      this.setState({
        greeting: 'Buongiorno,'
      })
    } else if(now >= 12 && now < 18) {
      this.setState({
        greeting: 'Buon pomeriggio,'
      })
    } else {
      this.setState({
        greeting: 'Buona sera,'
      })
    }
  }

  render() {
    return (
      <Card
        containerStyle={styles.card}
      >
        <Text style={greetingsStyle.text}>{this.state.greeting} Dario.</Text>
      </Card>
    );
  }
}

export default Greetings;