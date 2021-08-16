import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';

import auth from '@react-native-firebase/auth';

export class AboutView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.titleContainer}>
                    <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../assets/images/path-2.png')} />
                        </TouchableOpacity>
                        <Text style={styles.titleText}>
                            About Passionfruit
                        </Text>
                        <Text>

                        </Text>
                    </View>

                    <View style={styles.infoContainer}>

                        <View
                            style={styles.itemContainer}>
                            <Text style={styles.infoTitle}>
                            Our Story</Text>
                            <Text style={styles.infoText}>
                                Passionfruit is a platform to help students to connect with eachother to learn and inspire.
                            </Text>
                        </View>
                        <View style={styles.itemContainer}>
                            <Text style={styles.infoTitle}>
                                Contact Us
                            </Text>
                            <Text style={styles.infoText}>
                                passionfruit@passionfruit.com
                            </Text>
                        </View>
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
    itemContainer: {
        margin: 25,
    },
    infoTitle: {
        fontWeight: "bold",
        fontSize: 20
    },
    infoText: {
        fontSize: 17.5,
    }
})