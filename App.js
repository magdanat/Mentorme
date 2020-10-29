import 'react-native-gesture-handler';
import React, { Component, useState, useEffect } from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Firebase
import auth from '@react-native-firebase/auth';

// Icons
import Ionicons from '@expo/vector-icons/Ionicons';

import { StyleSheet, Text, View, Button, TextInput, YellowBox } from 'react-native';

// Components
import { PreferencesView } from './Components/PreferencesView';
import { HomeView } from './Components/HomeView';
import { MatchingView } from './Components/MatchingView';
import { LoginView } from './Components/LoginView';
import { ProfileView } from './Components/ProfileView';

// Settings Components
import { SettingsView } from './Components/SettingsView';

import { block } from 'react-native-reanimated';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Recommended method
// TODO: Reorganize the stacks into separate stack containers
// https://reactnavigation.org/docs/tab-based-navigation/
const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
  
    // Not logged in
    if (!user) {
      console.log(user)

      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeView"
              component={HomeView}
            />
            {/* <Stack.Screen
              name="PreferencesView"
              component={PreferencesView}
            /> */}
            {/* <Stack.Screen
              name="MatchingView"
              component={MatchingView}
            /> */}
            <Stack.Screen
              name="LoginView"
              component={LoginView}
            />
            {/* <Stack.Screen
              name="ProfileView"
              component={ProfileView}
            /> */}
  
            {/* Connect Tabs */}
            {/* <Stack.Screen name="Connect" component={ConnectTabs}/> */}
          </Stack.Navigator>
        </NavigationContainer>
    )
    
    // Logged in
    } else {
      console.log(user)
      return (
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen
              name="HomeView"
              component={HomeView}
            /> */}
            <Stack.Screen
              name="PreferencesView"
              component={PreferencesView}
            />
            <Stack.Screen
              name="MatchingView"
              component={MatchingView}
            />
            <Stack.Screen
              name="ProfileView"
              component={ProfileView}
            />
            <Stack.Screen
              name="SettingsView"
              component={SettingsView}/>
  
            {/* Connect Tabs */}
            <Stack.Screen name="Connect" component={ConnectTabs}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
}

function ConnectTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route}) => ({
        tabBarIcon: ({ focused, color, size}) => {
          let iconName;

          if (route.name === 'Connect') {
            iconName = focused ? 'handshake-o' : 'handshake'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style:{height: 75}
      }}
      >
      <Tab.Screen name="Connect" component={MatchingView}/>
      <Tab.Screen name="Profile" component={ProfileView}/>
    </Tab.Navigator>
  )
}

export default App

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // PreferencesView
  prefViewContainer: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: 'center',
  },
  prefViewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30
  },
  prefViewText: {
    fontSize: 15,
    color: "grey",
    marginBottom: 5,
    marginLeft: 30,
    marginRight: 30
  },
  prefViewButtons: {
    marginTop: 40,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center"
  },
  prefViewButton: {
    backgroundColor: "white",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 30,
    padding: 55,
    paddingBottom: 250,
    margin: 10,
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: "#cccccc"
  },
  prefViewButtonTwo: {
    backgroundColor: "white",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 30,
    // padding: 55,
    width: 150,
    height: 150,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: "#cccccc"
  },
  prefViewButtonText: {
    color: "#fbc015",
    fontWeight: "bold"
  },
  prefViewButtonsTwo: {
    marginTop: 40,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center",
  },
});