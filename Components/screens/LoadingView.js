import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';


export class LoadingView extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        console.log("Loading...")
    }

    render() {
        return (
            // <View>
            //     <Text>
            //         Loading!
            //     </Text>
            // </View>
            null
        )
    }
}