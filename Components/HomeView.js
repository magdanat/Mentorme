import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
// import { styles } from '../App.js';

import auth from '@react-native-firebase/auth';


export const HomeView = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [pass, setPassword] = useState("")
  const [repass, setRePass] = useState("")

  const updatePassword = () => {

  }


  // Checks state to see if information entered is valid,
  // navigate to PreferencesView 
  const checkSignInInfo = (props) => {
    console.log('Testcheck')
    navigation.navigate('PreferencesView')
  }

  // Check if user form for creating account is properly filled out,
  // then create an account and sign user in if form is filled properly.
  const createUser = () => {
    // auth().createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
    // .then(() => {
    //   console.log('User account created & signed in!');
    // })
    // .catch(error => {
    //   if (error.code === 'auth/email-already-in-use') {
    //     console.log('That email address is already in use!');
    //   }
  
    //   if (error.code === 'auth/invalid-email') {
    //     console.log('That email address is invalid!');
    //   }
  
    //   console.error(error);
    // });

    // Check if email is valid
    if (email.length >= 0 && email.substring(email.length - 4) == ".com") {
      console.log("Valid email")
    }
    
    if (pass != repass) {
      console.log("Passwords do not match")
    }

  }

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.welcomeTitle}>Welcome</Text>
      <TouchableOpacity
        >
        <Text style={styles.loginLinkedIn}>Log in with LinkedIn</Text>
      </TouchableOpacity>
      <Text> OR</Text>
      <View style={styles.loginInfo}>
        <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder={"Mobile Number / Email"} />
        <TextInput
          placeholder={"Full Name"} />
        <TextInput
          placeholder={"Password"} />
        <TextInput
          placeholder={"Re-enter Password"}/>
      </View>


      <TouchableOpacity
          onPress={
            // checkSignInInfo
            createUser
            // () => navigation.navigate('PreferencesView')
            }>
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