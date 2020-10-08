import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-elements';

import styles from '../config/theme';

class Weather extends React.Component {
  render() {
    return (
      <Card
        containerStyle={styles.card}
      >
        <Text>Sorrento, 12°</Text>
      </Card>
    );
  }
}

export default Weather;