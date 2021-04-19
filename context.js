// Purpose of this file is to wrap all the components in a


import React, { Component, useState, useEffect } from 'react';

// Components

export const UserContext = React.createContext({
    name: 'Guest',
  })

export const PreferenceContext = React.createContext({
    preference: false,
})

export const ProfileContext = React.createContext()