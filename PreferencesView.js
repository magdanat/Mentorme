import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { styles } from './App.js';


// switch between different views
// when clicking arrow button
export const PreferencesView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Tell us who you are...</Text>
      <div>
        <div>
          <Button
            title="Your Legal Name"/>
          <Button
            title="Preferred Name"/>
        </div>
      </div>
    </View>
  )
}
