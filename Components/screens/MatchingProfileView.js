import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

import { getProfile, profileArray } from '../models/Profile.js';

import { toggleFavorite, checkProfileList } from '../models/List.js';

export class MatchingProfileView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: this.props.route.params,
            loading: false,
            favorited: false,
        }
    }

    // Check if profile is in list 
    componentDidMount() {
        console.log(this.props)
        this.checkProfileListCB()
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    componentWillUnmount() {
        console.log("Unmounting...")
    }

    async checkProfileListCB() {
        let favoritedProfile = await checkProfileList(this.props._user.uid, this.props.route.params.userID)

        this.setState({
            favorited: favoritedProfile
        })
    }

    async toggleFavoriteCB() {
        let favorite = await toggleFavorite(this.props._user.uid, this.props.route.params.userID, this.state.favorited)

        this.setState({
            favorited: favorite
        })
    }

    render() {
        var image

        if (this.props.route.params.uri) {
            image = (
                <Image
                resizeMode={'contain'}
                style={styles.profileImageContainer} 
                    source={{ uri: this.props.route.params.uri }} />
            )
        } else {
            image = (
                <Image
                resizeMode={'contain'}
                style={styles.profileImageContainer} 
                    source={require("../../assets/favicon.png")} />
            )
        }

        return (
            <View style={styles.container}>
                {/* Header Content
                Edit, Profile Name, Settings */}
                    <View 
                        style={styles.titleContainer}
                        >
                        {/* Edit */}
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../assets/images/path-2.png')} />
                        </TouchableOpacity>
                    </View>

                {/* Profile Picture + name and role */}
                <View 
                style={styles.profileTitleContainer}>

                    {/* Profile Picture */}
                    {image}

                    {/* Role  + Flavor Text */}
                    <View 
                        style={styles.profileTextContainer}
                        >
                        <Text style={styles.profileRole}>
                            {this.props.route.params.name}
                        </Text>
                        <Text style={styles.profileBio}>
                            {this.props.route.params.bio}
                        </Text>
                    </View>

                    {/* Favorite Button */}
                    <TouchableOpacity
                        onPress={() => this.toggleFavoriteCB()} 
                        style={styles.favoriteButton}>
                        <Image source={require('../../assets/favicon.png')}/>
                    </TouchableOpacity>
                </View>

                {/* Info */}
                <View 
                    style={styles.infoContainer}
                    >
                    <ProfileContainer
                        profile={this.state.profile}/>
                </View>

                {/* Chat Button */}
                <View 
                    style={styles.chatButtonContainer}
                    >
                    <TouchableOpacity style={styles.chatButton}
                        onPress={(e) => this.props.navigation.navigate("MessagesView", 
                            { 
                                uid : this.props.route.params.userID, 
                                // id : this.props.route.params.id, 
                                myUID: this.props._user.uid, 
                                name: this.props.route.params.name,
                            })}>
                        <Text style={styles.chatButtonText}>
                            Chat with {this.props.route.params.name}
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

        var content

        if (this.props.profile) {
            content = (
                <View>
                <FlatList
                    data={[
                        {
                            title: "Academics",
                            description: this.props.profile.academics,
                        },
                        {
                            title: "Career",
                            description: this.props.profile.career,
                        },
                        {
                            title: "Projects",
                            description: this.props.profile.projects,
                        },
                        {
                            title: "Research",
                            description: this.props.profile.research,
                        },
                        {
                            title: "What I can Help With",
                            description: this.props.profile.help,
                        },
                    ]}
                    renderItem={({ item }) =>
                        <ProfileContainerInfoContainer
                            title={item.title}
                            // id={item.id}
                            navigation={this.props.navigation}
                            description={item.description} 
                            />
                    }
                    keyExtractor={(item, index) => index.toString()}
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

    render() {
        return (
            <View 
                style={styles.specificInfoContainer}
                    >

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
    favoriteButton: {
        marginRight: 25,
    },
    titleContainer: {
        marginTop: 25,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-around",
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
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
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
    infoContainerTitle: {
        fontSize: 15,
        fontWeight: "bold",
    },
    chatButton: {
        height: 55,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        width: 325,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginBottom: 10,
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