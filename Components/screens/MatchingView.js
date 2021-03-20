import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

// Controllers
import { findMentees, findMentors } from '../controllers/matching.js';
import { search } from '../controllers/search.js';

// Models
import { getUser, getOppositeUserType, getUserType } from '../models/User.js';

// Depending on user profile type, i.e mentor or mentee, display different
// component or just search a different database
export class MatchingView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            displaySearch: false
        }
    }

    componentDidMount() {
        this.findUsers()
    }

    componentDidUpdate() {
    }

    // TODO: Put more of this functionality in the findUsers model function as opposed to here.
    async findUsers() {
        let cUser = await getUser(this.props._user.uid)

        let cUserType = getOppositeUserType(cUser)

        if (cUserType === "mentees") {
            let mentees = await findMentees()
            let menteesArray = Array.from(mentees)
            this.setState({
                users: menteesArray
            })
        } else if (cUserType === "mentors") {
            let mentors = await findMentors()
            let mentorArray = Array.from(mentors)
            this.setState({
                users: mentorArray
            })
        } else {
            this.setState({
                users: []
            })
        }


    }

    test() {
        console.log("Test2222")
    }

    render() {
        return (
            <View style={styles.container}>
                {/* Top Header Content */}
                <View style={styles.headerContainer}>


                    {/* Search Bar */}
                    <TextInput
                        placeholder="Search"
                        style={styles.searchBar} />


                    <TouchableOpacity style={styles.filterButton}
                        onPress={() => this.props.navigation.navigate('FilterPreferencesView')}>
                        <Image
                            source={require("../../assets/images/shape-34.png")} />
                    </TouchableOpacity>

                </View>


                {/* List of items */}
                <View style={styles.bios}>
                    <Bios
                        navigation={this.props.navigation}
                        mentors={this.state.users}
                    />
                </View>

            </View>
        )
    }
}

// Represents the list of different user profiles
class Bios extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.mentors
                    }
                    renderItem={({ item }) =>
                        <BioContainer
                            item={item[0]}
                            academics={item[1].info.academics.description}
                            career={item[1].info.career.description}
                            projects={item[1].info.projects.description}
                            research={item[1].info.research.description}
                            name={item[1].fullName}
                            help={item[1].info.help.description}
                            navigation={this.props.navigation}
                        />
                    }
                />
            </View>
        )
    }
}

// Renders a single profile instance
class BioContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    loadProfile = (e) => {
        e.preventDefault()
        this.props.navigation.navigate('MatchingProfileView', {
            userID: this.props.item,
        })
    }

    render() {
        return (
            <TouchableOpacity
                onPress={(e) => this.loadProfile(e)}
                style={styles.profileContainer}>
                {/* Image */}
                <View style={styles.pictureRole}>
                    <Image
                        style={styles.profilePicture}
                        source={require("../../assets/favicon.png")} />

                    {/* Name */}
                    <Text style={styles.profileTextName}>
                        {this.props.name}
                    </Text>
                </View>

                {/* Button profile content */}
                <View
                    style={styles.buttonProfile}>
                    {/* Academics */}

                    <View>
                        <Text
                            style={styles.buttonTitle}>
                            Academics
                        </Text>
                        <Text 
                        style={styles.buttonProfileContent}
                            numberOfLines={2}
                            style={styles.profileTextProfession}>            
                            {this.props.academics}
                        </Text>
                    </View>
            
                    <View>
                        <Text 
                            style={styles.buttonTitle}>
                            Career
                        </Text>
                        <Text
                        style={styles.buttonProfileContent}
                            numberOfLines={2}>
                            {this.props.career}
                        </Text>
                    </View>

                    <View>
                        <Text
                            style={styles.buttonTitle}>
                            Projects
                        </Text>
                        <Text
                            style={styles.buttonProfileContent}
                            numberOfLines={2}>
                            {this.props.projects}
                        </Text>
                    </View>
                
                    <View>
                    <Text style={styles.buttonTitle}>
                        Research
                    </Text>
                    <Text
                    style={styles.buttonProfileContent}
                    numberOfLines={2}>
                        {this.props.research}
                    </Text>
                    </View>

                    <View>
                        <Text style={styles.buttonTitle}>
                        What I can Help With: &nbsp;
                        </Text>
                    <Text
                    style={styles.buttonProfileContent}
                    numberOfLines={2}>
                        
                        {this.props.help}
                    </Text>
                    </View>

                </View>

            </TouchableOpacity>
        )
    }
}

const width_proportion = '80%'

const styles = StyleSheet.create({
    bios: {
        // position: 'absolute',
        flex: 9,
    },
    buttonProfile: {
        marginBottom: 10,
    },
    buttonProfileContent: {
        marginBottom: 10,
    },
    buttonTitle: {
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    filterButton: {
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: '5%',
        marginTop: 10,
    },
    headerContainer: {
        flexDirection: "row",
    },
    profileContainer: {
        flex: 1,
        backgroundColor: "white",
        borderColor: "#d3d3d3",
        borderWidth: 1,
        borderRadius: 30,
        // height: 500,
        // See if you can find fix to issue
        // where no need for margin to fix clinging to left side
        marginLeft: 10,
        marginTop: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 10,
        shadowRadius: 5,
        shadowOpacity: 0.5,
        shadowColor: "#cccccc",
        width: '95%'
    },
    pictureRole: {
        flexDirection: "row",
        alignItems: "center",
    },
    profilePicture: {
        height: 65,
        width: 65,
    },
    profileTextName: {
        color: "#fbc015",
        marginLeft: 25,
        fontWeight: "bold",
        fontSize: 25,
    },
    profileTextProfession: {
        color: 'grey',
        marginTop: 5,
    },
    searchBar: {
        width: '75%',
        marginLeft: 10,
        // marginRight: 10,
        marginTop: 10,
        backgroundColor: 'white',
        borderColor: '#d3d3d3',
        borderWidth: 1,
        minHeight: 50,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 30,
    }
})