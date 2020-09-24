import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { color } from 'react-native-reanimated';

export class LoginView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.container}>
                
                {/* Title */}
                <View style={styles.loginTitle}>
                    <Text style={styles.loginTitleText}>
                        Login to Mentorme
                    </Text>
                </View>

                {/* Input Container */}
                <View style={styles.loginInputContainer}>
                <TextInput
                    placeholder="Email"/>
                <TextInput
                    placeholder="Password"/>
                </View>

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
    }
})