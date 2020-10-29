import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';
// import { styles } from '../App.js';

export class ProfileView extends Component {
    componentDidMount() {
        console.log(this.props)
        console.log("test")
    }

    render() {
        return (
            <View style={styles.container}>
                {/* Header Content
                    Edit, Profile Name, Settings */}
                <View>
                    <View style={styles.titleContainer}>
                        {/* Edit */}
                    <TouchableOpacity>
                        <Image source={require('../assets/favicon.png')}/>
                    </TouchableOpacity>
                    
                    {/* Name */}
                    <Text>Nathan</Text>

                    {/* Settings */}
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("SettingsView")}>
                        <Image source={require('../assets/favicon.png')}
                        />
                    </TouchableOpacity>

                    </View>
                </View>

                {/*  */}
                <View>

                </View>

            </View>
        )
    }
}

function ProfileMentorView() {

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    titleContainer: {
        // alignSelf: "center",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
})