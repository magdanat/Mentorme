import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, FlatList, TouchableOpacityBase } from 'react-native';

import auth from '@react-native-firebase/auth';

import { getProfile, profileArray } from '../models/Profile.js';
import { getUser, getOppositeUserType, getUserType } from '../models/User.js';
import { editProfileInfo } from '../models/Profile.js';

export class EditAccountSettingsView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentDescription: this.props.description
        }

    }  

    componentDidMount() {
        console.log("EditAdcdcoutnSettingsView")
        console.log(this.props)
    }

    componentDidUpdate() {
        console.log("testtestser")
        console.log(this.state)
        console.log(this.props)
    }

    async editProfileInfoCB() {
        editProfileInfo(this.props.id, this.state.currentDescription, this.props.userID)
    }

    setCurrentDescription(e) {
        this.setState((state) => {
            state.currentDescription = e
            return state
        })
    }

    renderComponent() {
        switch (this.props.id) {
            case "name": 
                return (
                    <>
                        <TextInput
                            onChangeText={(e) => this.setCurrentDescription(e)}
                            value={this.state.currentDescription}
                            />
                    </>
                )
            case "email":
                return (
                    <>
                        <Text>
                            Test
                        </Text>
                    </>
                )
            case "phoneNumber": 
                return (
                    <>
                        <TextInput
                            onChangeText={(e) => this.setCurrentDescription(e)}
                            value={this.state.currentDescription}/>
                    </>
                )
            case "webSite": 
                return (
                    <>
                        <TextInput
                            onChangeText={(e) => this.setCurrentDescription(e)}
                            value={this.state.currentDescription}/>
                    </>
                )
            case "bio": 
                return (
                    <>
                        <TextInput
                            multiline
                            onChangeText={(e) => this.setCurrentDescription(e)}
                            value={this.state.currentDescription}
                            maxLength={100}
                            placeholder={"max character length 100"}/>
                    </>
                )
            default:
                content = (
                    <>
                    <Text>
                        Test
                    </Text>
                    </>
                )
        }
    }

    render() {
        // const content
        var content

        return (
            <View style={styles.container}>
                {/* Title */}
                <View style={styles.titleContainer}>
                <TouchableOpacity
                            onPress={this.props.exitEditMode}>
                            <Image source={require('../../assets/images/path-2.png')} />
                        </TouchableOpacity>

                            <Text>
                                {this.props.title}
                            </Text>

                        {/* Take back to profile menu */}
                        <TouchableOpacity
                            onPress={() => this.editProfileInfoCB()}>
                            <Text>
                                Save
                            </Text>
                        </TouchableOpacity>
                </View>

                {/* Input */}
                <View style={styles.textInput}>
                    {this.renderComponent()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 20,
    },
    textInput: {
        textAlignVertical: 'top',
        marginLeft: "5%",
        marginRight: "5%",
        borderBottomWidth: 1,
    }
})