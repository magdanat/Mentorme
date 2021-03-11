import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { color } from 'react-native-reanimated';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export class LoginView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    // If preferences haven't been filled out yet, send
    // user to preferences views
    signInUser() {
        console.log(this.state)
        auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                console.log(auth().currentUser.uid)
                console.log('User has signed in!')
            })
            .catch(error => {
                console.log(error)
            })
    }

    setEmail(event) {
        this.setState((state) => {
            state.email = event
            return state
        })
    }

    setPassword(event) {
        this.setState((state) => {
            state.password = event
            return state
        })
    }

    render() {
        return (
            <View style={styles.container}>

                {/* Title */}
                <View style={styles.loginTitle}>
                    <Text style={styles.loginTitleText}>
                        Login to Passionfruit
                    </Text>
                </View>

                {/* Input Container */}
                <View style={styles.loginInputContainer}>
                    <TextInput
                        onChangeText={(e) => this.setEmail(e)}
                        placeholder="Email" />
                    <TextInput
                        onChangeText={(e) => this.setPassword(e)}
                        placeholder="Password" />
                </View>

                <TouchableOpacity
                    onPress={() => this.signInUser()}>
                    <Text style={styles.signInButton}>
                        Log In
                    </Text>
                </TouchableOpacity>


                {/* SignUp Footer */}
                <View style={styles.loginFooter}>
                    <Text>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('HomeView')}>
                        <Text style={styles.loginFooterNav}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 6,
    },
    loginTitle: {
        marginTop: 100,
        marginBottom: 50,
    },
    loginTitleText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loginInputContainer: {
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 25,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        width: '70%',
    },
    loginFooter: {
        flexDirection: 'row',
        marginTop: 20,
    },
    loginFooterNav: {
        marginLeft: 10,
        color: 'blue',
    },
    signInButton: {
        marginTop: 25,
        backgroundColor: '#add8e6',
        color: 'white',
        padding: 10,
        textAlign: 'center',
        width: 300,
        borderRadius: 25,
    }
})