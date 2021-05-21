import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { Bios, BioContainer } from './MatchingView.js';

import { getUserList } from '../models/List.js';
import { getListOfProfiles } from '../models/Profile.js';

export class FavoritesListView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            loading: false,
        }
    }

    // Get users' list of favorites
    componentDidMount() {
        console.log(this.props)
        this.getUserList()
    }

    async getUserList() {
        let userFavorites = await getListOfProfiles(this.props._user.uid)

        this.setState({
            users: userFavorites
        })
    }

    render() { 
        return (
            <View style={styles.container}>
                {/* Header Context */}
                <View style={styles.titleContainer}>
                    <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Profile')}>
                        <Image source={require('../../assets/images/shape-51.png')} />
                    </TouchableOpacity>

                </View>

                <View>
                    <Bios
                        navigation={this.props.navigation}
                        users={this.state.users}/>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    }
}