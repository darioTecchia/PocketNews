import React from "react";
import { StyleSheet, View } from "react-native";
import NewsList from "../../components/NewsList";
import Weather from "../../components/Weather";

const HomeScreen = () => {

  return (
    <View
      style={{
        marginTop: 35,
      }}
    >
      <NewsList></NewsList>
    </View>
  );
};

export default HomeScreen;
