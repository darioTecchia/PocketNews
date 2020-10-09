import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Card, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../config/theme';

const nameStyle = StyleSheet.create({
  nameWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainWrapper: {
  },
  inputStyle: {
    borderColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
    padding: 8,
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
      <View style={nameStyle.mainWrapper}>
        <Card containerStyle={styles.card}>
          <Text style={styles.cardTitle}>Saluto</Text>
          <View style={nameStyle.nameWrapper}>
            <TextInput
              style={nameStyle.inputStyle}
              placeholder="Inserisci il tuo nome"
              onChangeText={text => this.setState({name: text})}
              onSubmitEditing={() => this.handleNameChanges()}
              value={this.state.name}
            />
            <Button
              onPress={() => this.handleNameChanges()}
              style={{ width: '20%' }}
              title="Salva"
              type="clear"
            />
          </View>
        </Card>
      </View>
    );
  }
}

export default SettingsScreen;