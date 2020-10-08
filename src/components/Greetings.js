import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

import moment from 'moment';

import styles from '../config/theme';

const greetingsStyle = StyleSheet.create({
  text: {
    fontSize: 32
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})

class Greetings extends React.Component {
  state = {
    greeting: ''
  };

  componentDidMount() {
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
        <View style={greetingsStyle.view}>
          <Text style={greetingsStyle.text}>{this.state.greeting} Dario.</Text>
          <Button
              onPress={() => this.props.navigation.navigate('Settings')}
              icon={{
                name: "settings",
                size: 32,
                color: "grey"
              }}
              title=""
              type="clear"
            />
        </View>
      </Card>
    );
  }
}

export default Greetings;