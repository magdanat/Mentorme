import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export class EditComponentView extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <View style={styles.container}>
                {/* Exit, title, save */}
                <View>
                    {/* Exit */}
                    <TouchableOpacity>
                        {/* <Image/> */}
                        <Image source={require('../../assets/images/path-2.png')} />
                    </TouchableOpacity>

                    {/* Title */}
                    <Text>

                    </Text>

                    {/* Save */}
                    <TouchableOpacity>
                        <Text>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>
                        Summary
                    </Text>
                    <TextInput
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    }
})