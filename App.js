import 'react-native-gesture-handler';
import React, { Component, useState, useEffect } from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Firebase
import auth from '@react-native-firebase/auth';

// Icons
import Ionicons from '@expo/vector-icons/Ionicons';

import { StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';

// Main Components
import { PreferencesView } from './Components/screens/PreferencesView';
import { HomeView } from './Components/screens/HomeView';
import { LoginView } from './Components/screens/LoginView';

// Loading
import { LoadingView } from './Components/screens/LoadingView';

// Logged-In Components
import { MatchingView } from './Components/screens/MatchingView';
import { ProfileView } from './Components/screens/ProfileView';
import { FavoritesListView } from './Components/screens/FavoritesListView';
import { InboxView } from './Components/screens/InboxView';
import { MatchingProfileView } from './Components/screens/MatchingProfileView';
import { MessagesView } from './Components/screens/MessagesView';
import { FilterPreferencesView } from './Components/screens/FilterPreferencesView';

// Edit Components
import { EditProfileView } from './Components/screens/EditProfileView';
import { EditComponentView } from './Components/screens/EditComponentView';
import { EditAccountSettingsView } from './Components/screens/EditAccountSettingsView';
import { AddComponentView } from './Components/screens/AddComponentView';
import { ChooseComponentView } from './Components/screens/ChooseComponentView';
import { ImagePickerView } from './Components/screens/ImagePickerView';

// Settings Components
import { SettingsView } from './Components/screens/SettingsView';
import { AccountSettingsView } from './Components/screens/AccountSettingsView';
import { AboutView } from './Components/screens/AboutView';

// Models
import * as userModel from './Components/models/User.js';
import * as Profile from './Components/models/Profile.js';

import { block, set } from 'react-native-reanimated';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { UserContext, PreferenceContext, ProfileContext } from './context.js'


// Recommended method
// TODO: Reorganize the stacks into separate stack containers
// https://reactnavigation.org/docs/tab-based-navigation/
const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [preference, setPreference] = useState(null);
  const [profile, setProfile] = useState(null);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user)

    // if invalid user
    if (!user) {
      console.log("User is invalid/logged out")

      setPreference(null)
      setProfile(null)
      setUser()

    } else {
      console.log("Valid user.")
      // Get preference settings
      getSettingsCB(user)
    }
  }

  // NOTE: Using getUserCB instead of setUser causes 
  // issues with navigating payload and promises
  async function getSettingsCB(user) {
    let userInfo = await userModel.getUser(user.uid)
    let profileInfo = await Profile.getProfile(user.uid)

    if (userInfo) {
      setPreference(userInfo.preference)
      setProfile(profileInfo)
    } else {
      setPreference(false)
    }

    // if (initializing) setInitializing(false);

  }

  togglePreference = () => {
    setPreference(true)
  }

  function changeProfile(profile) {
    console.log("Changing the profile boss!")
    setProfile(profile)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  // if (initializing) return null;

  // logged in
  if (user) {
    if (preference != null || profile != null) {
      if (preference) {
        content = (
          <>
            {/* Connect Tabs */}
            <Stack.Screen
              name="Connect"
              component={ConnectContextWrapper}
              options={{ headerShown: false }}
            />
  
            <Stack.Screen
              name="EditProfileView"
              component={EditProfileContextWrapper}
              options={{ headerShown: false }}
            />
  
            <Stack.Screen
              name="EditComponentView"
              component={EditComponentContextWrapper}
              options={{ headerShown: false }}
            />
  
            <Stack.Screen
              name="EditAccountSettingsView"
              component={EditAccountSettingsContextWrapper}
              options={{ headerShown: false}}
            />
  
            {/* Settings View */}
            <Stack.Screen
              name="SettingsView"
              component={SettingsContextWrapper}
              options={{ headerShown: false }}
            />
  
  
            {/* MessagesView */}
            <Stack.Screen
              name="MessagesView"
              component={MessagesContextWrapper}
              options={{ headerShown: false }}
            />
  
            {/* MatchingProfile */}
            <Stack.Screen
              name="MatchingProfileView"
              component={MatchingProfileContextWrapper}
              options={{ headerShown: false }}
            />
  
            <Stack.Screen
              name="AddComponentView"
              component={AddComponentContextWrapper}
              options={{ headerShown: false }}
            />
  
            <Stack.Screen
              name="ChooseComponentView"
              component={ChooseComponentContextWrapper}
              options={{ headerShown: false }}
            />
  
            <Stack.Screen
              name="AccountSettingsView"
              component={AccountSettingsContextWrapper}
              options={{ headerShown: false }}
            />
  
            <Stack.Screen
              name="FilterPreferencesView"
              component={FilterPreferencesContextWrapper}
              options={{ headerShown: false }}
            />
  
            <Stack.Screen
              name="AboutView"
              component={AboutContextWrapper}
              options={{ headerShown: false }}
            />
  
            <Stack.Screen
              name="ImagePickerView"
              component={ImagePickerContextWrapper}
              options={{ headerShown: false }}
            />
  
            <Stack.Screen
              name="FavoritesListView"
              component={FavoritesListContextWrapper}
              options={{ headerShown: false }}
            />
          </>
        )
      } else {
        content = (
          <>
            <Stack.Screen
              name="PreferenceView"
              component={PreferenceContextWrapper}
              options={{ headerShown: false }}
            />
          </>
        )
      }
    } else {
      content = (
        <>
          <Stack.Screen
            name="LoadingView"
            component={LoadingView}
            options={{ headerShown: false }}
          />
        </>
      )
    }

    // Not logged in
  } else {
    content = (
      <>
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
      </>
    )
  }

  return (
    <NavigationContainer>
      <UserContext.Provider value={user}>
        <PreferenceContext.Provider value={{ preference: [preference, togglePreference] }}>
          <ProfileContext.Provider value={{ profile: [profile, changeProfile] }}>
            <Stack.Navigator
              screenOptions={{animationEnabled: false}}>
              {content}
            </Stack.Navigator>
          </ProfileContext.Provider>
        </PreferenceContext.Provider>
      </UserContext.Provider>
    </NavigationContainer>
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
      <Tab.Screen name="Inbox" component={InboxContextWrapper} />
      <Tab.Screen name="Profile" component={ProfileContextWrapper} />
    </Tab.Navigator>
  );
}

const AddComponentContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <PreferenceContext.Consumer>
        {(preference) => (
          <AddComponentView {...user}
            navigation={navigation}
            route={route}
            preference={preference}
          />
        )}
      </PreferenceContext.Consumer>
    )}
  </UserContext.Consumer>
)

const ChooseComponentContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <PreferenceContext.Consumer>
        {(preference) => (
          <ChooseComponentView {...user}
            navigation={navigation}
            route={route}
            preference={preference}
          />
        )}
      </PreferenceContext.Consumer>
    )}
  </UserContext.Consumer>
)

const EditAccountSettingsContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <PreferenceContext.Consumer>
        {(preference) => (
          <ProfileContext.Consumer>
            {(profile) => (
              <EditAccountSettingsView
                {...user}
                navigation={navigation}
                route={route}
                preference={preference}
                profile={profile}
              />
            )}
          </ProfileContext.Consumer>
        )}
      </PreferenceContext.Consumer>
    )}
  </UserContext.Consumer>
)

const EditProfileContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <PreferenceContext.Consumer>
        {(preference) => (
          <ProfileContext.Consumer>
            {(profile) => (
              <EditProfileView {...user}
                navigation={navigation}
                route={route}
                preference={preference}
                profile={profile}
              />
            )}
          </ProfileContext.Consumer>
        )}
      </PreferenceContext.Consumer>
    )}
  </UserContext.Consumer>
)

const EditComponentContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <PreferenceContext.Consumer>
        {(preference) => (
          <ProfileContext.Consumer>
            {(profile) => (
              <EditComponentView {...user}
                navigation={navigation}
                route={route}
                preference={preference}
                profile={profile}
              />
            )}

          </ProfileContext.Consumer>
        )}
      </PreferenceContext.Consumer>
    )}
  </UserContext.Consumer>
)

const AccountSettingsContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <PreferenceContext.Consumer>
        {(preference) => (
          <ProfileContext.Consumer>
            {(profile) => (
              <AccountSettingsView {...user}
                navigation={navigation}
                route={route}
                preference={preference}
                profile={profile}
              />
            )}
          </ProfileContext.Consumer>
        )}
      </PreferenceContext.Consumer>
    )}
  </UserContext.Consumer>
)

const ImagePickerContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <PreferenceContext.Consumer>
        {(preference) => (
          <ProfileContext.Consumer>
            {(profile) => (
               <ImagePickerView {...user}
               navigation={navigation}
               route={route}
               preference={preference}
               profile={profile}
             />
            )}
          </ProfileContext.Consumer>
        )}
      </PreferenceContext.Consumer>
    )}
  </UserContext.Consumer>
)

const AboutContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <PreferenceContext.Consumer>
        {(preference) => (
          <AboutView {...user}
            navigation={navigation}
            route={route}
            preference={preference}
          />
        )}
      </PreferenceContext.Consumer>
    )}
  </UserContext.Consumer>
)

const InboxContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <PreferenceContext.Consumer>
        {(preference) => (
          <ProfileContext.Consumer>
            {(profile) => (
              <InboxView {...user}
                navigation={navigation}
                route={route}
                preference={preference}
                profile={profile}
              />
            )}
          </ProfileContext.Consumer>

        )}
      </PreferenceContext.Consumer>
    )}
  </UserContext.Consumer>
)

const PreferenceContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <PreferenceContext.Consumer>
        {(preference) => (
          <ProfileContext.Consumer>
            {(profile) => (
              <PreferencesView {...user}
              navigation={navigation}
              route={route}
              preference={preference}
              profile={profile}
            />
            )}
          </ProfileContext.Consumer>
        )}
      </PreferenceContext.Consumer>
    )}
  </UserContext.Consumer>
)

const MessagesContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <PreferenceContext.Consumer>
        {preference => (
          <ProfileContext.Consumer>
            {(profile) => (
              <MessagesView {...user}
                navigation={navigation}
                route={route}
                preference={preference}
                profile={profile}
              />
            )}
          </ProfileContext.Consumer>
        )}
      </PreferenceContext.Consumer>
    )}
  </UserContext.Consumer>
)

const MatchingContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <PreferenceContext.Consumer>
        {preference => (
          <ProfileContext.Consumer>
            {(profile) => (
              <MatchingView {...user}
                navigation={navigation}
                route={route}
                preference={preference}
                profile={profile}
              />
            )}
          </ProfileContext.Consumer>
        )}
      </PreferenceContext.Consumer>
    )}
  </UserContext.Consumer>
)

const ProfileContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <ProfileContext.Consumer>
        {(profile) => (
          <ProfileView {...user}
            navigation={navigation}
            route={route}
            profile={profile}
          />
        )}
      </ProfileContext.Consumer>
    )}
  </UserContext.Consumer>
)

const MatchingProfileContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <ProfileContext.Consumer>
        {(profile) => (
          <MatchingProfileView {...user}
            navigation={navigation}
            route={route}
            profile={profile}
          />
        )}
      </ProfileContext.Consumer>
    )}
  </UserContext.Consumer>
)

const FilterPreferencesContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <FilterPreferencesView {...user}
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

const FavoritesListContextWrapper = ({ navigation, route }) => (
  <UserContext.Consumer>
    {(user) => (
      <FavoritesListView
        {...user}
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