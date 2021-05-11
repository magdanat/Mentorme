import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, FlatList, TouchableOpacityBase } from 'react-native';

import auth from '@react-native-firebase/auth';

import { getProfile, profileArray } from '../models/Profile.js';
import { updateFirebaseUserEmail, updateFirebaseUsername } from '../models/User.js';
import { editProfileInfo } from '../models/Profile.js';


export class EditAccountSettingsView extends Component {
    constructor(props) {
        super(props)

        var description = this.props.route.params.description
        var email = this.props._user.email

        this.state = {
            currentDescription: description,
            currentEmail: email,
            id: this.props.route.params.id
        }
    }

    componentDidMount() {

        console.log()

        switch(this.state.id) { 
            case "name":
                const name = this.props.route.params.description.split(" ")
                this.setState({
                    currentFirstName: name[0],
                    currentLastName: name[1]
                })    
        }
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    async editProfileInfoCB() {
        console.log("Current id: " + this.state.id)

        let profile = this.props.profile.profile[0]
        switch(this.state.id) {
            case "bio":
                console.log("Bio changes")
                await editProfileInfo(this.props.route.params.id, this.state.currentDescription, this.props._user.uid)
                profile.info.bio.description = this.state.currentDescription
                break;
            case "email":
                console.log("Email changes")
                await updateFirebaseUserEmail(this.state.currentEmail, this.state.id)
                profile.email = this.state.currentEmail
                break;
            case "name":
                console.log("Name changes...")
                await updateFirebaseUsername(this.state.currentFirstName, this.state.currentLastName)
                let fullName = this.state.currentFirstName + " "  + this.state.currentLastName
                profile.fullName = fullName
                break;
        }

        console.log(profile)

        this.props.profile.profile[1](profile)
    }

    setCurrentDescription(e) {
        this.setState((state) => {
            state.currentDescription = e
            return state
        })
    }

    updateFirstName(value) { 
        this.setState((state) => {
            state.currentFirstName = value
            return state
        })
    }

    updateLastName(value) {
        this.setState((state) => {
            state.currentLastName = value
            return state
        })
    }

    updateEmail(value) {
        this.setState((state) => {
            state.currentEmail = value
            return state
        })
    }

    renderComponent() {
        switch (this.state.id) {
            case "name":
                return (
                    <>
                        <Text>
                            First Name
                        </Text>
                        <TextInput
                            onChangeText={(e) => this.updateFirstName(e)}
                            value={this.state.currentFirstName}
                        
                        />
                        <Text>
                            Last Name
                        </Text>
                        <TextInput
                            onChangeText={(e) => this.updateLastName(e)}
                            value={this.state.currentLastName}/>
                    </>
                )
            case "email":
                return (
                    <>
                        <TextInput
                            onChangeText={(e) => this.updateEmail(e)}
                            value={this.state.currentEmail}
                        />
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
                            placeholder={"max character length 100"} />
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
        var title = this.props.route.params.label

        var content = (
            <>
                {/* Title */}
                <View style={styles.titleContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('AccountSettingsView')}>
                        <Image source={require('../../assets/images/path-2.png')} />
                    </TouchableOpacity>

                    <Text>
                        {title}
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
            </>
        )

        return (
            <View style={styles.container}>
                {content}
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
    }
})