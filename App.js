import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, YellowBox } from 'react-native';
import { PreferencesView } from './PreferencesView';
import { HomeView } from './HomeView';
import { HomePage } from './HomePage';
import { SignUpPage }  from './SignUpPage';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomePage"
            component={HomePage}
          />
          <Stack.Screen
            name="HomeView"
            component={HomeView}
          />
          <Stack.Screen
            name="PreferencesView"
            component={PreferencesView}
          />
          <Stack.Screen
            name="SignUpPage"
            component={SignUpPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    backgroundColor: 'yellow'
  },
  test2: {
    backgroundColor: 'green'
  }

});

// export const prefStyles = StyleSheet.create({ 
//   preferences: {
//     container: {}
//   }
// })