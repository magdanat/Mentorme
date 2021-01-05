import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';

import auth from '@react-native-firebase/auth';

export class SettingsView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Settings view mounted")
    }

    logOut() {
        auth()
            .signOut()
            .then(() => console.log('User signed out'))
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.logOut()}
                    >
                    <Text>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}