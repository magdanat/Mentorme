import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { editProfileInfo } from '../models/Profile.js';

export class EditComponentView extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            currentDescription: this.props.route.params.description
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    setCurrentDescription(e) {
        this.setState((state) => {
            state.currentDescription = e
            return state
        })
    }

    async editProfileInfoCB() {
        editProfileInfo(this.props.route.params.id, this.state.currentDescription, this.props._user.uid)
    }

    render() {
        return (
            <View style={styles.container}>
                {/* Exit, title, save */}
                <View style={styles.titleContainer}>
                    {/* Exit */}
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        {/* <Image/> */}
                        <Image source={require('../../assets/images/path-2.png')} />
                    </TouchableOpacity>

                    {/* Title */}
                    <Text style={styles.titleText}>
                        {this.props.route.params.title}
                    </Text>

                    {/* Save */}
                    <TouchableOpacity
                        onPress={() => this.editProfileInfoCB()}>
                        <Text style={styles.saveButton}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.editContainer}>
                    {/* <Text style={styles.editContainerTitle}>
                        Description
                    </Text> */}
                    <TextInput
                    style={styles.textInputContainer}
                        multiline
                        placeholder="Write Description"
                        onChangeText={(e) => this.setCurrentDescription(e)}
                        value={this.state.currentDescription}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    titleContainer: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 30,
    },
    editContainer: {
        margin: 25,
        borderBottomWidth: 1,
        borderColor: "black" 
    },
    editContainerTitle: {
        fontSize: 25,
        fontWeight: "bold",
    },
    textInputContainer: {
        fontSize: 20,
    },
    saveButton: {
        fontWeight: "bold",
        fontSize: 20,
    }
})