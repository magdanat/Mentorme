import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, YellowBox } from 'react-native';
import { PreferencesView } from './pages/PreferencesView';
import { HomeView } from './pages/HomeView';
import { HomePage } from './pages/HomePage';
import { Perference} from './pages/Perference';
import { RecommentationList } from './pages/RecommentationList';
import { Mentor } from './pages/Mentor';
import { Inbox } from './pages/Inbox';
import { Profile } from './pages/Profile';
import { Chat } from './pages/Chat';
import { Tips } from './pages/Tips';
import { ConversationStarter} from './pages/ConversationStarter';

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
            name="Perference"
            component={Perference}
          />
          <Stack.Screen
            name="RecommentationList"
            component={RecommentationList}
          />
          <Stack.Screen
            name="Mentor"
            component={Mentor}
          />
          <Stack.Screen
            name="Inbox"
            component={Inbox}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
          />
          <Stack.Screen
            name='Chat'
            component={Chat}
          />
          <Stack.Screen
            name='Tips'
            component={Tips}
          />
          <Stack.Screen
            name='ConversationStarter'
            component={ConversationStarter}
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