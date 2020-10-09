import React from "react";

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Text, Button } from 'react-native-elements';

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
            options={(navigation) => ({
              headerTitle: props => <Text {...props} />,
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigation.navigate('Settings')}
                  icon={{
                    name: "settings",
                    size: 32,
                    color: "grey"
                  }}
                  title=""
                  type="clear"
                />
              ),
            })}
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