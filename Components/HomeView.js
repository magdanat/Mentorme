import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { styles } from '../App.js';

export const HomeView = ({ navigation }) => {
    return (
      <View style={styles.container}>
           <Text>Welcome</Text>
           <Button
             title="Log in with LinkedIn"/>
           <Text>OR</Text>
           <TextInput
              placeholder={"Mobile Number / Email"}/>
          <TextInput
              placeholder={"Full Name"}/>
          <TextInput
            placeholder={"Password"}/>       
          <Button
             title="Sign Up"
             onPress={() =>
                navigation.navigate('PreferencesView')}/>
          <View>
            <Text>
              Already have an account?
            </Text>
            <Button
              title="Log in"/>
          </View>
      </View>
    );
  };