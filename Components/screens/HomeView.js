import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

// import firebase from 'firebase/app'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

// Models
import { createNewUser } from '../models/User.js';

export const HomeView = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [pass, setPassword] = useState("")
  const [repass, setRePass] = useState("")

  const updatePassword = () => {

  }

  // Checks state to see if information entered is valid,
  // navigate to PreferencesView 
  const checkSignInInfo = (props) => {
    navigation.navigate('PreferencesView')
  }

  // TODO: Put this in the user model in User.js as a function
  // Check if user form for creating account is properly filled out,
  // then create an account and sign user in if form is filled properly.
  const createUser = () => {
    let validForm = true

    // Check if email is valid
    if (email.length <= 0 || email.substring(email.length - 4) != ".com") {
      console.log("Invalid email")
      validForm = false
    }

    // Check if first name entry is appropriate length
    if (fName.length <= 0) {
      console.log("Invalid first name")
      validForm = false
    }

    // Check if last name entry is appropriate length
    if (lName.length <= 0) {
      console.log("Invalid last name")
      validForm = false
    }

    // Check if passwords are the same
    if (pass != repass && pass.length != 0) {
      console.log("Passwords do not match")
      validForm = false
    }

    // Once form is properly filled out
    // New accounts will go to the preferences page
    if (validForm) {
      auth().createUserWithEmailAndPassword(email, pass)
        .then(() => {
          console.log('User account created')

          // Write new user information into Firebase
          var cUser = auth().currentUser

          cUser.updateProfile({
            displayName: fName + " " + lName
          })

          createNewUser(cUser.uid, email, fName, lName)        

          // Send user to preferences screen
          // along with current user information
          // navigation.navigate("PreferencesView")
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
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
          onChangeText={text => setFName(text)}
          value={fName}
          placeholder={"First Name"} />
        <TextInput
          onChangeText={text => setLName(text)}
          value={lName}
          placeholder={"Last Name"} />
        <TextInput
          onChangeText={text => setPassword(text)}
          value={pass}
          placeholder={"Password"} />
        <TextInput
          onChangeText={text => setRePass(text)}
          value={repass}
          placeholder={"Re-enter Password"} />
      </View>


      <TouchableOpacity
        onPress={
          createUser
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
  },
  // Home View
  homeContainer: {
    height: '80%',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: 'white',
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