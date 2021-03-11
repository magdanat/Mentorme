import 'react-native-gesture-handler';
import React, { Component, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default function SimpleImagePicker() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
        console.log("Test")
    };

    return (
        <View style={styles.pictureContainer}>
            <Image
                style={styles.profilePicture}
                source={require("../../assets/favicon.png")} />
            <TouchableOpacity style={styles.changePictureButton}
                onPress={pickImage}>
                <Text style={styles.changePictureText}>
                    Change Profile Picture
        </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    titleContainer: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 20,
    },
    infoContainer: {
        flex: 1,
        marginTop: 20,
    },
    infoSectionContainer: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
    },
    profilePicture: {
        height: 100,
        width: 100,
    },
    pictureContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: "#cccccc",
    },
    changePictureButton: {
        marginTop: 20,
    },
    changePictureText: {
        fontSize: 15,
    },
    logOut: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 50,
        alignItems: "center",
        marginLeft: '20%',
        marginRight: '20%',
        marginBottom: '5%',

    },
    logOutText: {
        fontWeight: "bold",
        fontSize: 20,
        color: '#fbc015',
    },
    label: {
        fontSize: 15,
        marginLeft: "5%",
        width: "40%",
    },
    description: {
        fontSize: 15,
        // marginLeft: "5%",
    },
    descriptionTouchable: {
        flexShrink: 1,
    }
})