import React, { Component, useState, useEffect } from 'react';

export const UserContext = React.createContext({
    user: "Guest",
    updateUser: () => {}
})
