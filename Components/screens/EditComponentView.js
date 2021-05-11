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
            profile: this.props.profile.profile[0],
            currentDescription: this.props.route.params.description
        }
    }

    componentDidMount() {
        console.log("Edit ComponentView")
        console.log(this.props)
        console.log(this.state)
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    setCurrentDescription(e) {

        let profile = this.state.profile
        let currentParams = this.props.route.params.id
        profile.info[currentParams].description = e

        console.log(profile)

        this.setState((state) => {
            state.profile = profile
            state.currentDescription = e
            return state
        })
    }

    changeProfile(profile) {
        console.log(this.props.profile.profile[1])
        this.props.profile.profile[1](profile)
        console.log(this.props)
    }

    // TODO: Set profile info to this one 
    async editProfileInfoCB() {
        // Store changes locally & then on database
        this.changeProfile(this.state.profile)
        
        editProfileInfo(this.props.route.params.id, this.state.currentDescription, this.props._user.uid)
        .then(() => {
            this.props.navigation.navigate('EditProfileView', {
                prevScreen: true
            })
        })
        .catch
        ((e) => {
            console.log(e)
        })
    }

    render() {
        return (
            <View style={styles.container}>

                {/* Exit, title, save */}
                <View style={styles.titleContainer}>

                    {/* Exit */}
                    <TouchableOpacity
                        onPress={() => 
                            this.props.navigation.goBack()
                        }>

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