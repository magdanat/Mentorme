// Purpose of this file is to wrap all the components in a


import React, { Component, useState, useEffect } from 'react';

// Components
import { PreferencesView } from './Components/screens/PreferencesView';
import { HomeView } from './Components/screens/HomeView';
import { MatchingView } from './Components/screens/MatchingView';
import { LoginView } from './Components/screens/LoginView';
import { ProfileView } from './Components/screens/ProfileView';
import { InboxView } from './Components/screens/InboxView';

// export const UserContext = React.createContext({
//     user: "Guest",
//     updateUser: () => {}
// })

export const UserContext = React.createContext({
    name: 'Guest',
  })

export const PreferenceContext = React.createContext({
    preference: false,
})