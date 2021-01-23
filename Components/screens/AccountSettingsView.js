import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';

import auth from '@react-native-firebase/auth';

export class AccountSettingsView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // retrieve current user information
    }

    logOut() {
        auth()
            .signOut()
            .then(() => console.log('User signed out'))
    }

    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.titleContainer}>
                    <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../assets/images/path-2.png')} />
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                            onPress={() => this.logOut()}
                            >
                            <Text>
                                Logout
                            </Text>
                        </TouchableOpacity> */}
                        <Text style={styles.titleText}>
                            Account
                        </Text>

                        {/* Take back to profile menu */}
                        <TouchableOpacity>
                        <Text>
                            Done
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.infoContainer}>

                        <TouchableOpacity
                            style={styles.optionButton}>
                            <Image style={styles.optionImage} 
                                   source={require('../../assets/images/shape-17.png')}/>
                            <Text style={styles.optionText}>
                            Manage account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}>
                        <Image 
                            style={styles.optionImage} 
                            source={require('../../assets/images/rectangle-2.png')}/>
                            <Text style={styles.optionText}>
                                About Passionfruit
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
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    titleContainer: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    infoContainer: {
        marginTop: 25,
    },
    optionImage: {
        height: 50,
        width: 50,
        marginLeft: 25,
        marginRight: 25,
        // borderWidth: 1,
        // borderColor: "black"
    },
    optionButton: {
        margin: 12.5,
        flexDirection: "row",
        alignItems: "center"
    },
    optionText: {
        fontSize: 20
    }
})