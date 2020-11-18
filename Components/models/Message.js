import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';


// Represents a message object.
export class Message {
    constructor(id, text, createdAt, user) {
        this.id = id,
        this.text = text,
        this.createdAt = createdAt,
        this.user = user
    }
}

// Represents a message to be used for rendering
// on the screen. 
export class ChatMessage extends Component {
    constructor(props) {
        super(props);

        // Receives a message object in state
        // and the users' currentID
    }

    //  Returns whether the message is a message made by the user
    isMyMessage = () => {
    }
}