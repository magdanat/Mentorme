import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const DATA = [
    {
       title: "Academics" 
    },
    {
        title: "Research"
    },
    {
        title: "Career"
    },
    {
        title: "Projects"
    },
    {
        title: "What I can Help With"
    }
]

export class ChooseComponentView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <InfoContainer/>
            </View>
        )
    }
}

class InfoContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <View>
                <FlatList
        
                />
            </View>
        )
    }
}

class InfoComponentContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Text>

                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}