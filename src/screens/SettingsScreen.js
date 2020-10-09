import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Card, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../config/theme';

const nameStyle = StyleSheet.create({
  text: {
    fontSize: 32
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})

class SettingsScreen extends React.Component {

  state = {
    name: ''
  }

  async handleNameChanges() {
    await AsyncStorage.setItem('name', this.state.name);
  }

  async componentDidMount() {
    this.setState({
      name: await AsyncStorage.getItem('name')
    })
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <Card containerStyle={styles.card}>
          <Text>Saluto</Text>
          <View style={nameStyle.view}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Inserisci il tuo nome"
              onChangeText={text => this.setState({name: text})}
              onSubmitEditing={() => this.handleNameChanges()}
              value={this.state.name}
            />
            <Button
              onPress={() => this.handleNameChanges()}
              icon={{
                name: "save",
                size: 32,
                color: "grey"
              }}
              title=""
              type="clear"
            />
          </View>

        </Card>
      </View>
    );
  }
}

export default SettingsScreen;