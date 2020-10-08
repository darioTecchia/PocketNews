import React from "react";
import { StyleSheet, View } from "react-native";
import NewsList from "../components/NewsList";

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <NewsList navigation={this.props.navigation}></NewsList>
      </View>
    );
  }
}

export default HomeScreen;