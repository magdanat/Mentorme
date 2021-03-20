import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, FlatList, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Platform } from "react-native"

import { chatExists, createChat, openChatListener, closeChatListener } from '../models/Chat.js';
import { sendMessage, retrieveMessages, updateMessages } from '../models/Message.js'

import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';

export class MessagesView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            currentInput: "",
        }
    }

    // Check for previous chat information,
    // load previous interaction exists
    componentDidMount() {
        this.chatExistsCB(this.props._user.uid, this.props.route.params.uid)

        // this.subscription = this.props.navigation.addListener(
        //     'focus',
        //     () => {
        //         this.chatExistsCB(this.props._user.uid, this.props.route.params.uid)
        //     }
        // )
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {

        // Unsubscribe if chatexists
        if (this.state.chatExists) {
            database()
            .ref('chats/' + this.state.chatKey + '/messages')
            .off()
        }

        // this.subscription()
    }

    async chatExistsCB(id1, id2) {
        let chatKey = await chatExists(id1, id2)

        // chat exists between users
        if (chatKey) {
            // Set up listener
            database()
                .ref('chats/' + chatKey + '/messages')
                .on('value', snapshot => {
                    const messageObject = snapshot.val()

                    var infoArray = []

                    if (messageObject) {



                        let messageKeys = Object.keys(messageObject)

                        // For each key, add it to head of array.
                        messageKeys.map((key) => {
                            infoArray.push(messageObject[key])
                        })

                        // Sort array based on message sent time
                        infoArray.sort((a, b) => (a.messageSentTime < b.messageSentTime) ? 1 : -1)
                                    // retrieve all messages and sort them by oldest to newest
                            this.setState({
                                chatExists: true,
                                chatKey: chatKey,
                                messages: infoArray
                            })
                    } else {
                        console.log("Error.")
                    }
                })
            // let user know that chat doesn't exist 
        } else {
            this.setState({
                chatExists: false
            })
        }
    }

    async send(event) {
        event.preventDefault()

        if (this.state.chatExists) {
            console.log("Chat exists")

            this.sendMessageCB(this.props._user.uid, this.state.currentInput, this.state.chatKey)

            // let messageArray = this.state.messages

            // // let messageObject = {
            // //     senderID: this.props._user.uid,
            // //     messageSentTime: Date.now(),
            // //     messageContent: this.state.currentInput,
            // //     chatID: this.state.chatKey,
            // // }

            // // messageArray.unshift(messageObject)

            // this.setState({
            //     messages: messageArray
            // })

        } else {
            console.log("Chat does not exist")

            // Creating chat
            let key = await createChat(this.props._user.uid, this.props.route.params.uid)

            // // Set up listener
            var infoArray = []

            database()
                .ref('chats/' + key + '/messages')
                .on('value', snapshot => {
                    const messageObject = snapshot.val()

                    if (messageObject) {

                        infoArray = []

                        let messageKeys = Object.keys(messageObject)

                        // For each key, add it to head of array.
                        messageKeys.map((key) => {
                            infoArray.push(messageObject[key])
                        })

                        // Sort array based on message sent time
                        infoArray.sort((a, b) => (a.messageSentTime < b.messageSentTime) ? 1 : -1)

                        // return infoArray
                    } else {
                        console.log("Error.")
                    }
                })

            // console.log("Above test")
            // console.log(test)

            // send message to chat
            this.sendMessageCB(this.props._user.uid, this.state.currentInput, key)

            let messageArray = this.state.messages

            let messageObject = {
                chatID: this.state.chatKey,
                messageContent: this.state.currentInput,
                messageSentTime: Date.now(),
                senderID: this.props._user.uid,
                // Get sender's name
                senderName: "Test",
                receiverName: this.props.route.params.name,
            }

            messageArray.unshift(messageObject)

            this.setState({
                chatExists: true,
                chatKey: key,
                messages: infoArray
            })

        }
        this.textInput.clear()
    }

    setMessage(event) {
        this.setState((state) => {
            state.currentInput = event
            return state
        })
    }

    // Send message callback for handling promises/async calls
    sendMessageCB(uid, message, chat) {
        sendMessage(uid, message, chat, this.props.route.params.uid)
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                {/* Header Content Edit, Profile Name, Settings */}
                <View>
                    <View style={styles.titleContainer}>
                        {/* Back */}
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../assets/images/path-2.png')} />
                        </TouchableOpacity>

                        {/* Name */}
                        <Text>
                            {this.props.route.params.name}
                        </Text>

                        {/* Settings */}
                        <TouchableOpacity>
                            <Text>

                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Messages */}
                <View style={styles.messagesContainer}>
                    <MessageContainer
                        uid={this.props._user.uid}
                        messages={this.state.messages}
                    />
                </View>

                {/* Suggestions/Tooltips
                <View>

                </View> */}

                {/* TextInput */}
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    style={styles.messageInputContainer}>
                    <TextInput
                        ref={input => { this.textInput = input }}
                        style={styles.textInputContainer}
                        multiline
                        onChangeText={(e) => this.setMessage(e)}
                        placeholder="Type a message" />
                    <TouchableOpacity
                        onPress={(e) => this.send(e)}
                        style={styles.sendMessageButton}>
                        <Text>
                            Send
                            </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </KeyboardAvoidingView>
        );
    }
};

class MessageContainer extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    componentDidUpdate() {
        console.log(this.props)
    }

    render() {
        return (
            <View>
                <FlatList
                    inverted
                    style={styles.messageContainerTwo}
                    data={this.props.messages}
                    renderItem={({ item }) =>
                        <Message
                            uid={this.props.uid}
                            message={item} />
                    }
                />
            </View>
        )
    }
}

class Message extends Component {
    constructor(props) {
        super(props)
    }   

    componentDidMount() {
    }

    isMyMessage = () => {
        return this.props.message.senderID === this.props.uid
    }

    render() {
        return (
            <View style={[styles.message, {
                // backgroundColor: this.isMyMessage() ? '#fbc015' : 'light-grey',
                borderColor: this.isMyMessage() ? '#fbc015' : 'grey',
                backgroundColor: this.isMyMessage() ? '#fbc015' : 'white',
                marginLeft: this.isMyMessage() ? 100 : 0,
                marginRight: this.isMyMessage() ? 0 : 100,
            }]}>
                <Text style={[styles.messageText,
                {
                    color: this.isMyMessage() ? 'white' : 'grey',
                }]}>
                    {this.props.message.messageContent}
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    titleContainer: {
        // alignSelf: "center",
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    messagesContainer: {
        flex: 1,
        // backgroundColor: "blue",
    },
    messageContainerTwo: {
        padding: 10,
        margin: 10,
    },
    message: {
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
    },
    messageText: {
        color: 'white'
    },
    textInputContainer: {
        borderWidth: 1,
        borderRadius: 10,
        textAlign: "left",
        width: "60%",
    },
    messageInputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 100,
        alignItems: "center",
        borderTopWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
    },
})