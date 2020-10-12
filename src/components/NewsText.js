import React from 'react';

import { Text, StyleSheet, View, Share, Linking } from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import moment from 'moment';
import 'moment/locale/it'
moment.locale('it');

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  description: {
    marginBottom: 10,
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})

class NewsText extends React.Component {
  onShare = async (news) => {
    try {
      Share.share({
        message: news.title + "\n\n" + news.url,
        url: news.url
      });
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => Linking.openURL(this.props.news.url)}>
          <Text style={styles.title}>{this.props.news.title}</Text>
        </TouchableWithoutFeedback>
        <Text style={styles.description}>{this.props.news.description}</Text>
        <View style={styles.action}>
          <Text>{this.props.news.source.name} - {moment(this.props.news.publishedAt).fromNow()}</Text>

          <Button
            onPress={() => this.onShare(this.props.news)}
            icon={{
              name: "share",
              size: 16,
              color: "grey"
            }}
            title=""
            type="clear"
          />
        </View>
      </View>
    );
  }
}

export default NewsText;