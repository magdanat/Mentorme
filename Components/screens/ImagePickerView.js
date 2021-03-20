import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, FlatList, Modal } from 'react-native';

import auth from '@react-native-firebase/auth';


import { updateProfilePicture } from '../models/Profile.js';

import { EditAccountSettingsView } from './EditAccountSettingsView.js';
import {launchImageLibrary} from 'react-native-image-picker';

export class ImagePickerView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageSource: null
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true
        };
        launchImageLibrary(options, response => {
            console.log("response", response);
            if (response.uri) {
                console.log(response)
                this.setState({ imageSource: response});
            } else if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
        })
    }

    async updateProfilePictureCB() {
        if (this.state.imageSource) {
            updateProfilePicture(this.state.imageSource.uri, this.props._user.uid)
        } else {
            console.log('No photo to upload')
        }
    }

    render() {

        var imageContent

        if (this.state.imageSource === null) {
            imageContent = (
                <Image
                source={require("../../assets/favicon.png")}
                style={styles.imageBox}
                resizeMode='contain'
                />
            )
        } else {
            imageContent = (
                <Image
                source={{uri: this.state.imageSource.uri }}
                style={styles.imageBox}
                resizeMode='contain'
            />
            )
        }

        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    {imageContent}
                </View>


                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => this.handleChoosePhoto()}>
                        <Text>
                        Choose a photo from gallery 
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.updateProfilePictureCB()}>
                        <Text>
                            Upload
                        </Text>
                    </TouchableOpacity>
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
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    imageBox: {
        width: 256,
        height: 256,
        borderWidth: 3,
        borderColor: 'green'
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
    }
})