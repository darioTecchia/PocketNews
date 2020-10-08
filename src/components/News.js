import React from 'react';
import { StyleSheet, Linking, Image } from 'react-native';
import { Card } from 'react-native-elements';
import NewsText from "./NewsText";

import styles from '../config/theme';

const newsStyle = StyleSheet.create({
  cardImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 300,
    marginLeft: styles.card.padding * -1,
    marginRight: styles.card.padding * -1,
    marginTop: styles.card.padding * -1,
    marginBottom: styles.card.padding
  }
})

class News extends React.Component {
  render() {
    return (
      <Card
        containerStyle={styles.card}
        onPress={() => Linking.openURL(this.props.news.url)}
      >
        <Image 
          style={newsStyle.cardImage}
          source={{
            uri: this.props.news.urlToImage
          }} />
        <NewsText news={this.props.news} />
      </Card>
    );
  }
}

export default News;