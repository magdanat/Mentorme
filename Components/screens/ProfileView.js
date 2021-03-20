import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

import { getProfile, profileArray } from '../models/Profile.js';
import { getUser, getOppositeUserType, getUserType } from '../models/User.js';

import { EditProfileView } from './EditProfileView.js';

export class ProfileView extends Component {
    constructor(props) {
        super(props)

        this.editMode = this.editMode.bind(this);
        this.exitEditMode = this.exitEditMode.bind(this);

        this.state = {
            profile: {
                fullName: "",
                info: "",
            },
            bio: "",
            profileAr: [],
            edit: false,
            loading: true,
        }
    }

    componentDidMount() {
        console.log("Loading props...")
        console.log(this.user)
        console.log(this.props)

        // Get profile information
        this.getProfileCB()

        this.subscription = this.props.navigation.addListener(
            'focus',
            () => {
                this.getProfileCB();
            }
        )
    }

    componentWillUnmount() {
        console.log("Unmounting this ish")
        this.subscription()
    }
   
    componentDidUpdate() { 
        console.log("Updating state...")
        console.log(this.state)
    }

    refresh = (data) => {
        console.log(data)
    }

    async getProfileCB() {
        let cUser = await getUser(this.props._user.uid)
        let cUserType = getUserType(cUser)
        let retrievedProfile = await getProfile(this.props._user.uid, cUserType)

        console.log("....test")
        console.log(retrievedProfile)

        let profileAr = Array.from(profileArray(retrievedProfile))

        console.log(profileAr)

        profileAr = Array.from(profileArray(profileAr[2][1]))

        console.log(profileAr)

        this.setState({
            profile: retrievedProfile,
            profileAr: profileAr,
            bio: profileAr[4][1].description,
            userType: cUserType,
            uri: retrievedProfile.uri,
            loading: false
        })
    }

    editMode() {
        console.log("Entering edit mode")

        this.setState((state) => {
            state.edit = true
            return state
        })
    }

    exitEditMode() {
        this.setState((state) => {
            state.edit = false
            return state
        })
    }

    render() {

        var content
        var userTitle 
        var image


            if (this.state.userType === "mentees") {
                userTitle = "Mentee"
            } else if (this.state.userType === "mentors") {
                userTitle = "Mentor"
            }

            if (this.state.uri) {
                image = (
                    <Image
                    style={styles.profileImageContainer}
                        source={{ uri: this.state.uri }} />
                )
            } else {
                image = (
                    <Image
                    style={styles.profileImageContainer}
                        source={require("../../assets/favicon.png")} />
                )
            }

            content = (
                <>
                        {/* Header Content
                Edit, Profile Name, Settings */}
                <View>
                    <View style={styles.titleContainer}>
                        {/* Edit */}
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('EditProfileView')}>

                            <Image source={require('../../assets/images/shape-51.png')} />
                        </TouchableOpacity>

                        {/* Name */}
                        <Text>
                            {userTitle}
                        </Text>

                        {/* Settings */}
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('SettingsView')}>
                            <Image source={require('../../assets/images/shape-46.png')}
                            />
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Profile Picture + name and role */}
                <View>
                    <View style={styles.profileTitleContainer}>

                        {/* Profile Picture */}
                        {image}

                        {/* Role  + Flavor Text */}
                        <View style={styles.profileTextContainer}>
                            <Text style={styles.profileRole}>
                            {this.state.profile.fullName}
                            </Text>
                            <Text style={styles.profileBio}>
                                    {this.state.bio}
                            </Text>
                        </View>

                        {/* Import Button
                        <TouchableOpacity style={styles.linkedInButton}>
                            <Text style={styles.linkedInContainer}>
                                Import from LinkedIn
                            </Text>
                        </TouchableOpacity> */}
                    </View>
                </View>

                {/* Info */}
                <View style={styles.listContainer}>
                    <ProfileContainer
                        editMode={this.editMode}
                        edit={this.state.edit}
                        profile={this.state.profileAr}/>
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

export class ProfileContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {

        var content 

        if (this.props.profile.length > 0) {
                content = (
                    <View>
                    <FlatList
                        data={[
                            {
                                title: this.props.profile[5][1].title,
                                id: this.props.profile[5][1].key,
                                description: this.props.profile[5][1].description
                            },
                            {
                                title: this.props.profile[3][1].title,
                                id: this.props.profile[3][1].key,
                                description: this.props.profile[3][1].description
                            },
                            {
                                title: this.props.profile[1][1].title,
                                id: this.props.profile[1][1].key,
                                description: this.props.profile[1][1].description
                            },
                            {
                                title: this.props.profile[0][1].title,
                                id: this.props.profile[0][1].key,
                                description: this.props.profile[0][1].description
                            },
                            {
                                title: this.props.profile[2][1].title,
                                id: this.props.profile[2][1].key,
                                description: this.props.profile[2][1].description
                            },
                        ]}
                        renderItem={({ item }) =>
                            <ProfileContainerInfoContainer
                                title={item.title}
                                id={item.id}
                                editMode={this.props.editMode}
                                navigation={this.props.navigation}
                                description={item.description} />
                        }
                    />
                </View>)
        }

        return (
            <View style={styles.infoContainer}>
                {content}
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
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <View style={styles.specificInfoContainer}>

                {/* Title */}
                <View>
                    <Text style={styles.infoContainerTitle}>
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
        alignItems: "center",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        flexWrap: "wrap",
    },
    profileImageContainer: {
        height: 100,
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 2,
    },
    profileTextContainer: {
        marginLeft: 20,
        flex: 4
    },
    profileRole: {
        fontSize: 20,
    },
    profileBio: {
        fontSize: 14,
    },
    linkedInButton: {
        flex: 2,
        borderColor: "black",
        borderWidth: 0.5,
        borderRadius: 10,
        justifyContent: "center",
        padding: 2.5,
    },
    linkedInContainer: {
        alignItems: "center",
        flexWrap: 'wrap',
    },
    listContainer: {
        marginBottom: 175,
    },
    specificInfoContainer: {
        minHeight: 150,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        marginBottom: 10,
    },
    infoContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    },
    infoContainerTitle: {
        fontSize: 15,
        fontWeight: "bold",
    },
})