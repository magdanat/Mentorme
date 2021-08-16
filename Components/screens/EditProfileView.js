import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

import { getProfile, profileArray } from '../models/Profile.js';
import { getUser, getOppositeUserType, getUserType } from '../models/User.js';

export class EditProfileView extends Component {
    constructor(props) {
        super(props)


        let profileAr = Array.from(profileArray(this.props.profile.profile[0]))
        profileAr = Array.from(profileArray(profileAr[1][1]))

        this.state = {
            profile: profileAr,
            profileAr: profileAr,
        }
    }

    componentDidMount() {
        this.subscription = this.props.navigation.addListener(
            'focus',
            (e) => {
                if (this.props.route.params && this.props.route.params.prevScreen) {
                    this.getProfileCB();
                }
            }
        )
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    componentWillUnMount() {
        this.subscription()
    }

    goBackCB() {
        this.props.navigation.goBack({
            test: 'test'
        })
    }

    async getProfileCB() {
        let retrievedProfile = await getProfile(this.props._user.uid)


        let profileAr = Array.from(profileArray(this.props.profile.profile[0]))
    }

    render() {
        return (
            <View style={styles.container}>

                {/* Header Content, Edit, Profile Name, Settings */}
                <View style={styles.titleContainer}>
                    {/* Edit */}
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Profile', 
                            {
                                prevScreen: true
                            })}>
                        <Image source={require('../../assets/images/path-2.png')} />
                    </TouchableOpacity>

                    {/* Name */}
                    <Text>
                        Editing Profile
                    </Text>

                    {/* Settings */}
                    <TouchableOpacity>
                        <Text>
                            ⠀
                        </Text>
                    </TouchableOpacity>

                </View>

                {/* Info */}
                <View style={styles.infoContainer}>
                    <ProfileContainer
                        navigation={this.props.navigation}
                        profile={this.state.profileAr} />
                </View>
            </View>
        )
    }
}

export class ProfileContainer extends Component {
    constructor(props) {
        super(props)

        var data

        if (this.props.profile.length > 0) {
            data = [
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
            ]
        }

        this.state = {
            profileData: []
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        console.log(this.state)
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
                                navigation={this.props.navigation}
                                description={item.description} />
                        }
                    />
                </View>)
        }

        return (
            <View>
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
        // console.log(this.props)
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('EditComponentView',
                    {
                        description: this.props.description,
                        title: this.props.title,
                        id: this.props.id,
                    }
                )}>
                <View style={styles.specificInfoContainer}>

                    {/* Title */}
                    <View>
                        <Text style={styles.infoContainerTitle}>
                            {this.props.title}
                        </Text>
                    </View>

                    {/* Description */}
                    <View>
                        <Text style={styles.infoContainerDesc}>
                            {this.props.description}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
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
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    },
    infoContainerTitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#767676"
    },
    infoContainerDesc: {
        color: 'grey',
    },
    addMoreButton: {
        height: 55,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 25,
        marginTop: 10,
        marginRight: 75,
        marginLeft: 75,
        marginBottom: 10,
        padding: 12.5,
        borderColor: '#d3d3d3',
        backgroundColor: '#fbc015',
    },
    addMoreButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    }
})