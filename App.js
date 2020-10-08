import React from "react";

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;