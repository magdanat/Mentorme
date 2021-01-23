import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const DATA = [
    {
       title: "Academics" 
    },
    {
        title: "Research"
    },
    {
        title: "Career"
    },
    {
        title: "Projects"
    },
    {
        title: "What I can Help With"
    },
]

export class AddComponentView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>

                <View>
                    <View style={styles.titleContainer}>
                        {/* Edit */}
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../assets/images/path-2.png')} />
                        </TouchableOpacity>

                        {/* Name */}
                        <Text>
                            Add more info about yourself
                        </Text>

                        {/* Settings */}
                            <Text>
                                ⠀
                            </Text>

                    </View>
                </View>


                <InfoContainer
                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}

class InfoContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <View style={styles.infoContainer}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <InfoComponentContainer
                            navigation={this.props.navigation}
                            title={item.title}/>
                    }
                />
            </View>
        )
    }
}

class InfoComponentContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <View>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('EditComponentView',
                        {
                            description: "No description",
                            title: this.props.title
                        }
                    )}
                    style={styles.infoComponentContainer}>
                    <Text style={styles.titleText}>
                       + {this.props.title}
                    </Text>
                </TouchableOpacity>
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
        fontSize: 20
    },
    titleContainer: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    infoContainer: {
        margin: 25
    },
    infoComponentContainer: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fbc015',
        borderRadius: 10,
        padding: 10,
    }
})