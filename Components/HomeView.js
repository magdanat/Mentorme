import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
// import { styles } from '../App.js';

export const HomeView = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.welcomeTitle}>Welcome</Text>
      <TouchableOpacity>
        <Text style={styles.loginLinkedIn}>Log in with LinkedIn</Text>
      </TouchableOpacity>
      <Text> OR</Text>
      <View style={styles.loginInfo}>
        <TextInput
          placeholder={"Mobile Number / Email"} />
        <TextInput
          placeholder={"Full Name"} />
        <TextInput
          placeholder={"Password"} />
      </View>
      <TouchableOpacity
          onPress={() => navigation.navigate('PreferencesView')}>
        <Text
          style={styles.signUpButton}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <View style={styles.loginRow}>
        <Text>
          Already have an account?
            </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginView')}>
          <Text style={styles.loginRowButton}>
              Log In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'grey',
    // alignItems: 'center',
  },
  // Home View
  homeContainer: {
    height: '80%',
    // position: 'absolute',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: 'white',
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
  },  
  welcomeTitle: {
    fontSize: 20,
    marginTop: -40,
    fontWeight: 'bold',
  },
  loginLinkedIn: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#0e76a8',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    width: 300,
    borderRadius: 25,
  },
  signUpButton: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fbc015',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    width: 300,
    borderRadius: 25,
  },
  loginInfo: {
    marginTop: 20,
    marginBottom: 20,
    width: 300,
    paddingLeft: 10,
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  loginRow: {
    flexDirection: 'row',
  },
  loginRowButton: {
    color: 'blue',
    marginLeft: 10
  }
})