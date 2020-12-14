import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';


import database from '@react-native-firebase/database';

// Controllers
import { findMentors } from '../controllers/matching.js'

// Depending on user profile type, i.e mentor or mentee, display different
// component or just search a different database
export class MatchingView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        // Read list of mentors
        this.findMentorCB()
    }

    componentDidUpdate() {
    }

    // TODO: Currently forces search for mentors list,
    // need to make it so it switches between finding mentors or mentees
    // depending on user type 
    // Callback function waiting for database results
    async findMentorCB() {
        let mentors = await findMentors()
        let mentorsArray = Array.from(mentors)
        this.setState({
            users: mentorsArray
        })
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ flex: 1 }}>
                    {/* Search Bar */}
                    <TextInput
                        placeholder="Search"
                        style={styles.searchBar} />

                </View>
                {/* List of items */}
                <View style={{ flex: 9 }}>
                    <Bios
                        navigation={this.props.navigation}
                        mentors={this.state.users}
                    />
                </View>
            </View>
        )
    }
}

class Bios extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props.mentors)
    }

    componentDidUpdate() {
        console.log(this.props.mentors)
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.mentors
                    }
                    renderItem={({ item }) =>
                        <BioContainer
                            navigation={this.props.navigation}
                            item={item[0]}
                            career={item[1].info.career}
                            bio={item[1].info.bio}
                            name={item[1].fullName} />
                    }
                />
            </View>
        )
    }
}

// Renders a single biography instance, containing name, picture, role, and biography
class BioContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // console.log(this.props.item)
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
                <View>

                    {/* Profession */}
                    <Text style={styles.profileTextProfession}>
                        {this.props.career}
                    </Text>

                    {/* Biography */}
                    <Text>
                        {this.props.bio}
                    </Text>
                </View>

            </TouchableOpacity>
        )
    }
}

const width_proportion = '80%'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    profileContainer: {
        flex: 1,
        backgroundColor: "white",
        borderColor: "#d3d3d3",
        borderWidth: 1,
        borderRadius: 30,
        height: 150,
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
        height: 50,
        width: 50,
    },
    profileTextName: {
        color: "#fbc015",
        marginLeft: 40,
        fontWeight: "bold",
        fontSize: 20,
    },
    profileTextProfession: {
        color: 'grey'
    },
    searchBar: {
        width: '95%',
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: 'white',
        borderColor: '#d3d3d3',
        borderWidth: 1,
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 30,
    }
})