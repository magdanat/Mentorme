import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, FlatList, Modal } from 'react-native';

import auth from '@react-native-firebase/auth';

import { getProfile, profileArray } from '../models/Profile.js';
import { getUser, getOppositeUserType, getUserType } from '../models/User.js';
import { EditAccountSettingsView } from './EditAccountSettingsView.js';
import {launchImageLibrary} from 'react-native-image-picker';


// import SimpleImagePicker from '../controllers/imagePicker';

export class AccountSettingsView extends Component {
    constructor(props) {
        super(props);

        this.editMode = this.editMode.bind(this);
        this.exitEditMode = this.exitEditMode.bind(this);
        this.handleChoosePhoto = this.handleChoosePhoto.bind(this)

        this.state = {
            photo: null,
            profile: {
                fullName: "",
                info: "",
            },
            modalVisible: false,
            currentTitle: "",
            profileAr: [],
            edit: false
        }

    }

    componentDidMount() {
        // retrieve current user information
        console.log(this.props)
        this.getProfileCB()
    }

    componentDidUpdate() {
        console.log("AccountSettingsView")
        console.log(this.props)
        console.log(this.state)
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true
        };
        launchImageLibrary(options, response => {
            console.log("response", response);
            if (response.uri) {
                this.setState({ photo: respose});
            }
        })
    }

    logOut() {
        this.setState({
            modalVisible: false,
        })


        auth()
            .signOut()
            .then(() => console.log('User signed out'))
    }

    editMode(id, title, description) {

        console.log("testtest1231231")
        console.log(title)

        this.setState((state) => {
            state.id = id
            state.title = title
            state.description = description
            state.edit = true
            return state
        })
    }

    exitEditMode() {
        this.setState((state) => {
            state.edit = false
            return state
        })
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }

    async getProfileCB() {
        let cUser = await getUser(this.props._user.uid)
        console.log(cUser)
        let cUserType = getUserType(cUser)
        console.log(cUserType)
        let retrievedProfile = await getProfile(this.props._user.uid, cUserType)
        let profileAr = Array.from(profileArray(retrievedProfile))


        console.log("Inside profileCB")
        console.log(retrievedProfile)
        console.log(profileAr)

        profileAr = Array.from(profileArray(profileAr[1][1]))

        console.log(profileAr)

        this.setState({
            profile: retrievedProfile,
            profileAr: profileAr
        })
    }

    render() {

        let content = null
        const { modalVisible } = this.state



        if (this.state.edit) {
            content = (
                <>
                    <EditAccountSettingsView
                        id={this.state.id}
                        title={this.state.title}
                        description={this.state.description}
                        exitEditMode={this.exitEditMode}
                        userID={this.props._user.uid}
                    />
                </>
            )
        } else {
            content = (
                <>

                    <View style={styles.titleContainer}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../assets/images/path-2.png')} />
                        </TouchableOpacity>
                        <Text style={styles.titleText}>
                            Account
                            </Text>

                        {/* Take back to profile menu */}
                        <TouchableOpacity>
                            <Text>
                                {/* Save */}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.infoContainer}>
                        <AccountInfo
                            handleChoosePhoto={this.handleChoosePhoto}
                            profile={this.state.profile}
                            photo={this.state.photo}
                            editMode={this.editMode}
                        />
                    </View>

                    <View style={styles.logOut}>
                        <TouchableOpacity
                            onPress={() => this.setModalVisible(true)}>
                            <Text style={styles.logOutText}>
                                Log Out
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <Modal
                        transparent={true}
                        animationType="fade"
                        visible={modalVisible}>
                            <View style={styles.modalContainer}>

                                <View style={styles.modalButtonContainer}>
                                    <Text>
                                        Log Out?
                                    </Text>
                                    <View style={styles.modalButtons}>
                                    <TouchableOpacity style={styles.yes}
                                        onPress={() => this.logOut()}>
                                        <Text>
                                            Yes
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.no}
                                        onPress={() => this.setModalVisible(false)}>
                                        <Text>
                                            No
                                        </Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                    </Modal>
                </>
            )
        }



        return (
            <View style={styles.container}>
                {content}
            </View>
        )
    }
}

export class AccountInfo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }

    componentDidUpdate() {
        console.log("AccountInfo")
        console.log(this.props)
    }

    renderBioDescription() {
        console.log(this.props.profile)

        console.log("redneringbiodescription")
        let description = "No description"

        if (this.props.profile.info) {
            description = this.props.profile.info.bio.description
        }

        return description
    }

    render() {
        let description = this.renderBioDescription()
        // const { photo } = this.props.photo

        return (
            <View>

                <View style={styles.pictureContainer}>
                    <Image
                            style={styles.profilePicture}
                            source={require("../../assets/favicon.png")} />
                <TouchableOpacity 
                    onPress={this.props.handleChoosePhoto}
                    style={styles.changePictureButton}>
                    <Text style={styles.changePictureText}>
                        Change Profile Picture
                    </Text>
                </TouchableOpacity>
                </View>

                {/* <SimpleImagePicker /> */}


                <FlatList
                    data={[
                        { key: 'name', label: 'Name', description: this.props.profile.fullName },
                        { key: 'email', label: 'Email', description: this.props.profile.email },
                        // { key: "phoneNumber", label: 'Phone Number' },
                        // { key: "webSite", label: 'Website' },
                        { key: "bio", label: "Bio", description: description },
                    ]}
                    renderItem={({ item }) => <AccountInfoSection
                        id={item.key}
                        label={item.label}
                        description={item.description}
                        editMode={this.props.editMode}
                    />}
                />
            </View>
        )
    }
}

export class AccountInfoSection extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        console.log("AccountInfoSection")
        console.log(this.props.label)
    }

    render() {
        return (
            <View style={styles.infoSectionContainer}>
                <Text style={styles.label}>
                    {this.props.label}
                </Text>
                <TouchableOpacity
                    style={styles.descriptionTouchable}
                    onPress={() => this.props.editMode(this.props.id, this.props.label, this.props.description)}>
                    <Text style={styles.description}>
                        {this.props.description}
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
    },
    modalContainer: {
        flex: 1,
        // width: "40%",
        // marginLeft: "20%",
        // marginRight: "20%",
        // marginTop: 250,
        // marginBottom: 250,
        backgroundColor: 'rgba(0,0,0,0.3)',
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    modalButtonContainer: {
        width: "60%",
        height: "20%",
        backgroundColor: "white",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
        borderRadius: 10,
    },
    modalButtons: {
        marginTop: 25,
        flexDirection: "row",
    },
    yes: {
        marginRight: "30%",
        opacity: 1,
    }
})