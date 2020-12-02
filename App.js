import 'react-native-gesture-handler';
import React, { Component, useState, useEffect } from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Firebase
import auth from '@react-native-firebase/auth';

// Icons
import Ionicons from '@expo/vector-icons/Ionicons';

import { StyleSheet, Image, Text, View, Button, TextInput, YellowBox } from 'react-native';

// Components
import { PreferencesView } from './Components/screens/PreferencesView';
import { HomeView } from './Components/screens/HomeView';
import { MatchingView } from './Components/screens/MatchingView';
import { LoginView } from './Components/screens/LoginView';
import { ProfileView } from './Components/screens/ProfileView';
import { InboxView } from './Components/screens/InboxView';


// Settings Components
import { SettingsView } from './Components/screens/SettingsView';

import { block } from 'react-native-reanimated';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const UserContext = React.createContext({
  name: 'Guest',
})

// Recommended method
// TODO: Reorganize the stacks into separate stack containers
// https://reactnavigation.org/docs/tab-based-navigation/
const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    // Sets state.user to user information received from Firebase 
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
    return (
      <NavigationContainer>
        <UserContext.Provider value={this.state.user}>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeView"
              component={HomeView}
              options={{ headerShown: false }}
              initialParams={{ user: user }}
            />
            <Stack.Screen
              name="LoginView"
              component={LoginView}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </UserContext.Provider>
      </NavigationContainer>
    )

    // Logged in
  } else {
    console.log(user)

    // Display preferences screen if user has not finished preferences
    // otherwise navigation to home screen or if they wish to edit preferences
    return (
      <NavigationContainer>
        <UserContext.Provider value={user}>
          <Navigator />
        </UserContext.Provider>
      </NavigationContainer>
    );
  }
}

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PreferencesView"
        component={PreferenceContextWrapper}
        options={{ headerShown: false, headerTransparent: true }}
      />
       <Stack.Screen
        name="MatchingView"
        component={MatchingContextWrapper}
      />
      <Stack.Screen
        name="ProfileView"
        component={ProfileContextWrapper}
      />
      <Stack.Screen
        name="SettingsView"
        component={SettingsContextWrapper} /> 

      {/* Connect Tabs */}

      <Stack.Screen
        name="Connect"
        component={ConnectContextWrapper}
        options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
}


function ConnectTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Connect') {
            iconName = focused ? require("./assets/images/shape-13.png") : require("./assets/images/shape-66.png")
          } else if (route.name === 'Profile') {
            iconName = focused ? require("./assets/images/shape-12.png") : require("./assets/images/shape-12.png")
          } else if (route.name === 'Inbox') {
            iconName = focused ? require("./assets/images/shape-18.png") : require("./assets/images/shape-7.png")
          }

          // return <Ionicons name={iconName} size={size} color={color} />;
          return (
            <Image source={iconName} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: { height: 75 }
      }}>
      <Tab.Screen name="Connect"
        component={MatchingContextWrapper} />
      <Tab.Screen name="Inbox" component={InboxView} />
      <Tab.Screen name="Profile" component={ProfileContextWrapper} />
    </Tab.Navigator>
  );
}

const PreferenceContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <PreferencesView {...user}
        navigation={navigation}
        route={route}
      />
    )}
  </UserContext.Consumer>
)

const MatchingContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <MatchingView {...user}
        navigation={navigation}
        route={route}
      />
    )}
  </UserContext.Consumer>
)

const ProfileContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <ProfileView {...user}
        navigation={navigation}
        route={route}
      />
    )}
  </UserContext.Consumer>
)

const SettingsContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <SettingsView {...user}
        navigation={navigation}
        route={route}
      />
    )}
  </UserContext.Consumer>
)

const ConnectContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <ConnectTabs {...user}
        navigation={navigation}
        route={route}
      />
    )}
  </UserContext.Consumer>
)

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

// Ref 1.
{/* See if there is a function to make headerShown depending
            on current stack screen 

            if current stack === profile... then headerShown for Connect is true
            
            https://stackoverflow.com/questions/53040094/how-to-get-current-route-name-in-react-navigation
            */}