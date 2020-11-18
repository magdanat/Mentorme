import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';

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
                            <Image source={require('../../assets/images/shape-51.png')} />
                        </TouchableOpacity>

                        {/* Name */}
                        <Text>Nathan</Text>

                        {/* Settings */}
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("SettingsView")}>
                            <Image source={require('../../assets/images/shape-46.png')}
                            />
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Profile Picture + name and role */}
                <View>
                    <View style={styles.profileTitleContainer}>

                        {/* Profile Picture */}
                        <Image
                            style={styles.profileImageContainer} 
                            source={require('../../assets/images/oval-3.png')}/>

                        {/* Role  + Flavor Text */}
                        <View style={styles.profileTextContainer}>
                            <Text style={styles.profileRole}>Nathan</Text>
                            <Text style={styles.profileBio}>I really like coding!!!!!!! Besides that...</Text>
                        </View>

                        {/* Import Button */}
                        <TouchableOpacity style={styles.linkedInButton}>
                            <Text style={styles.linkedInContainer}>
                                Import from LinkedIn
                            </Text>
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

// Represents a module of information
// where each module has a title descriptive of its' content.
// Should be able to render whether its a list of elements
// or a description. Another option is just to read the format on linkedIn.
export class ProfileContainerInfoContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
        }
    }

    render() {
        return (
            <View>

                {/* Title */}
                <View>
                    <Text>
                        {this.props.title}
                    </Text>
                </View>

                {/* Description */}
                <View>
                    <Text>
                        {this.props.description}
                    </Text>
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
    profileTitleContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        flexWrap: "wrap",
    },
    profileImageContainer: {
        height: 75,
        width: 75,
        flex: 1,
    },
    profileTextContainer: {
        marginLeft: 20,
        flex: 2
    },
    profileRole: {
        fontSize: 20,
    },
    profileBio: {
        fontSize: 14,
    },
    linkedInButton: {
        flex: 1,
        borderColor: "black",
        borderWidth: 0.5,
        borderRadius: 10,
        justifyContent: "center",
        padding: 2.5,
    },
    linkedInContainer: {
        alignItems: "center",
        flexWrap: 'wrap',
    }
})