import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

import { getProfile, profileArray } from '../models/Profile.js';
import { getUser, getOppositeUserType, getUserType} from '../models/User.js';

export class MatchingProfileView extends Component {
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
        console.log(this.props)
    }

    async getProfileCB() {
        let cUser = await getUser(this.props._user.uid)

        let cUserType = getOppositeUserType(cUser)

        let retrievedProfile = await getProfile(this.props.route.params.userID, cUserType)
        let profileAr = Array.from(profileArray(retrievedProfile))
        profileAr = Array.from(profileArray(profileAr[1][1]))

        this.setState({
            profile: retrievedProfile,
            profileAr: profileAr
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {/* Header Content
                Edit, Profile Name, Settings */}
                <View>
                    <View style={styles.titleContainer}>
                        {/* Edit */}
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../assets/images/path-2.png')} />
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
                            source={require('../../assets/images/oval-3.png')}/>

                        {/* Role  + Flavor Text */}
                        <View style={styles.profileTextContainer}>
                            <Text style={styles.profileRole}>
                                {this.state.profile.fullName}
                            </Text>
                            <Text style={styles.profileBio}>
                                Test
                            </Text>
                        </View>

            
                    </View>
                </View>

                {/* Info */}
                <View>
                    <ProfileContainer
                        profile={this.state.profileAr}/>
                </View>

                {/* Chat Button */}
                <View style={styles.chatButtonContainer}>
                    <TouchableOpacity style={styles.chatButton}
                        onPress={(e) => this.props.navigation.navigate("MessagesView", 
                            { 
                                uid : this.props.route.params.userID, 
                                name: this.state.profile.fullName,
                            })}>
                        <Text style={styles.chatButtonText}>
                            Chat with {this.state.profile.fullName}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export class ProfileContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.infoContainer}>
                <FlatList
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
                        {/* {this.props.description} */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum
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
        alignItems: "center",
        marginLeft: 60
    },
    profileTitleContainer: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 10,
        flexWrap: "wrap",
    },
    profileImageContainer: {
        height: 100,
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
    },
    profileTextContainer: {
        marginLeft: 20,
        flex: 3
    },
    profileRole: {
        fontSize: 20,
        fontWeight: "bold",
    },
    profileBio: {
        fontSize: 15,
    },
    linkedInContainer: {
        alignItems: "center",
        flexWrap: 'wrap',
    },
    infoContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
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
    infoContainerTitle: {
        fontSize: 15,
        fontWeight: "bold",
    },
    chatButton: {
        borderColor: '#d3d3d3',
        borderWidth: 1,
        width: 325,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    chatButtonText: {
        color: "#fbc015",
        fontSize: 20,
        fontWeight: 'bold'
    },
    chatButtonContainer: {
        justifyContent: "center",
        alignItems: "center",
    }
})