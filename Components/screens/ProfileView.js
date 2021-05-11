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

        // this.editMode = this.editMode.bind(this);
        // this.exitEditMode = this.exitEditMode.bind(this);

        this.state = {
            profile: this.props.profile.profile[0],
            // bio: "",
            profileAr: [],
            edit: false,
            loading: true,
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }
   
    componentDidUpdate() { 
        console.log("Updating state...")
        console.log(this.state)
    }

    refresh = (data) => {
        console.log(data)
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

        var uri = this.props.profile.profile[0].uri
        var bio = this.props.profile.profile[0].info.bio.description

        var image = (uri ? (
            <Image
            style={styles.profileImageContainer}
                source={{ uri: uri}} />
        ) : (
            <Image
            style={styles.profileImageContainer}
                source={require("../../assets/favicon.png")} />
        ))


        if (this.state.userType === "mentees") {
            userTitle = "Mentee"
        } else if (this.state.userType === "mentors") {
            userTitle = "Mentor"
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
                            {this.props.profile.profile[0].fullName}
                            </Text>
                            <Text style={styles.profileBio}>
                                    {bio}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Info */}
                <View style={styles.listContainer}>
                    <ProfileContainer
                        editMode={this.editMode}
                        edit={this.state.edit}
                        profile={this.state.profile}/>
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

        if (this.props.profile) {
                content = (
                    <View>
                    <FlatList
                        data={[
                            {
                                title: this.props.profile.info.academics.title,
                                id: this.props.profile.info.academics.key,
                                description: this.props.profile.info.academics.description
                            },
                            {
                                title: this.props.profile.info.career.title,
                                id: this.props.profile.info.career.key,
                                description: this.props.profile.info.career.description
                            },
                            {
                                title: this.props.profile.info.projects.title,
                                id: this.props.profile.info.projects.key,
                                description: this.props.profile.info.projects.description
                            },
                            {
                                title: this.props.profile.info.research.title,
                                id: this.props.profile.info.research.key,
                                description: this.props.profile.info.research.description
                            },
                            {
                                title: this.props.profile.info.help.title,
                                id: this.props.profile.info.help.key,
                                description: this.props.profile.info.help.description
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
        // console.log('In ProfileContainerInfoContainer')
        // console.log(this.props)
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
        width: 100,
        marginLeft: '5%',
        // borderColor: 'black',
        // borderWidth: 1,
        // flex: 2,
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