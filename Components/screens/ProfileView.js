import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

import { getProfile, profileArray } from '../models/Profile.js';
import { getUser, getOppositeUserType, getUserType } from '../models/User.js';

export class ProfileView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: {
                fullName: "",
                info: "",
            },
            profileAr: [],
        }
    }

    componentDidMount() {
            console.log(this.props)
        this.getProfileCB()
    }
   
    componentDidUpdate() { 
        console.log(this.state)
    }

    async getProfileCB() {
        let cUser = await getUser(this.props._user.uid)
        console.log(cUser)
        let cUserType = getUserType(cUser)
        console.log(cUserType)
        let retrievedProfile = await getProfile(this.props._user.uid, cUserType)
        let profileAr = Array.from(profileArray(retrievedProfile))


        console.log("Inside profileCB")
        console.log(retrievedProfile)
        console.log(profileAr)

        profileAr = Array.from(profileArray(profileAr[1][1]))

        console.log(profileAr)

        this.setState({
            profile: retrievedProfile,
            profileAr: profileAr
        })
    }

    _handleUpdate = user => {

    }

    render() {
        return (
            <View style={styles.container}>

                {/* <FetchUserData
                    userID={this.props.userID}
                    onUpdate={this.handleUpdate}
                /> */}


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
                            {this.state.profile.fullName}
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
                        <Image
                            resizeMode={'contain'}
                            style={styles.profileImageContainer}
                            source={require('../../assets/images/oval-3.png')} />

                        {/* Role  + Flavor Text */}
                        <View style={styles.profileTextContainer}>
                            <Text style={styles.profileRole}>
                            {this.state.profile.fullName}
                            </Text>
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

                {/* Info */}
                <View>
                    <ProfileContainer
                        profile={this.state.profileAr}/>
                </View>

            </View>
        )
    }
}

export class ProfileContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <View style={styles.infoContainer}>
                <FlatList
                    // data={Array.from(profileArray(this.props.profile[1]))}
                    data={this.props.profile}
                    renderItem={({ item } ) => 
                        <ProfileContainerInfoContainer
                            title={item[0]}
                            description={item[1]}/>
                    }
                />
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
    specificInfoContainer: {
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