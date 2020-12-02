import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

// Depending on user profile type, i.e mentor or mentee, display different
// component or just search a different database
export class MatchingView extends Component {
    render() {
        console.log(this.props)

        return (
            <View style={styles.container}>

                {/* Search Bar */}
                <TextInput
                    placeholder="Search"
                    style={styles.searchBar}/>


                <View style={{ flex: 1 }}>
                    <FlatList
                        contentContainerStyle={{ alignItems: "center" }}
                        numColumns={2}
                        
                        data={[
                            {
                                key: 'Nathan Magdalera',
                                position: 'Software Dev @ Mentorme',
                                profileText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat facilisis sem, eget sagittis velit sodales id. Curabitur ac mi rutrum quam laoreet bibendum viverra eu quam. Vestibulum tortor massa, consequat vel lorem a, varius molestie nisl. Aliquam augue ligula, fringilla sed volutpat sit amet, efficitur in urna. Donec fringilla dictum purus, quis consectetur dui venenatis ac. In hac habitasse platea dictumst. Nullam scelerisque augue vitae ex ultricies, vel iaculis odio condimentum. Ut vitae nisl bibendum, lobortis ipsum ut, viverra dui. Vestibulum vehicula suscipit velit nec gravida. Quisque nec elit ligula. Aenean ac lectus neque. Maecenas hendrerit fringilla purus, eget tincidunt nulla aliquam eget. Suspendisse ut risus at nunc ultrices dictum. Quisque laoreet eu lacus vel tincidunt. Cras pellentesque mauris posuere, fermentum mi nec, iaculis sapien. Morbi a augue vel nisl ultrices finibus sed non tellus.'
                            }
                        ]}
                        renderItem={({ item }) =>
                            <View>

                            <TouchableOpacity style={styles.profileContainer}>
                                {/* Image */}
                                <View>
                                    <Image/>
                                </View>

                                {/* Button profile content */}
                                <View>
                                    {/* Name */}
                                    <Text style={styles.profileTextName}>
                                        {item.key}
                                    </Text>

                                    {/* Profession */}
                                    <Text style={styles.profileTextProfession}>
                                        {item.position}
                                    </Text>

                                    {/* Biography */}
                                    <Text>
                                        {item.profileText}
                                    </Text>
                                </View>

                            </TouchableOpacity>
                            </View>
                        }
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileContainer: {
        backgroundColor: "white",
        borderColor: "#cccccc",
        borderWidth: 1,
        borderRadius: 30,
        width: '95%',
        height: 150,
        marginLeft: 10,
        marginTop: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 10,
        shadowRadius: 5,
        shadowOpacity: 0.5,
        shadowColor: "#cccccc"
    },
    profileTextName: {
        color: "#fbc015",
        fontWeight: "bold"
    },
    profileTextProfession: {
        color: 'grey'
    },
    searchBar: {
        width: '90%',
        marginTop: 10,
        backgroundColor: 'white',
        borderColor: '#cccccc',
        borderWidth: 1,
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 30,
    }
})