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

        console.log("MessagesView")
        console.log(this.props)

        this.chatExistsCB(this.props._user.uid, this.props.route.params.uid)
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

        console.log('Callback')

        // chat exists between users
        if (chatKey !== "false") {
            console.log("Chat exists")

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
                        this.setState({
                            chatExists: true,
                            chatKey: chatKey,
                            messages: infoArray
                        })
                    } else {
                        console.log("Error setting up chat.")
                    }
                })
            // let user know that chat doesn't exist 
        } else {
            console.log('Chat does not exist')
            this.setState({
                chatExists: false
            })
        }
    }

    async send(event) {
        event.preventDefault()

        if (this.state.chatExists) {
            console.log("Chat exists")
            this.sendMessageCB(this.state.currentInput, this.state.chatKey)

        } else {
            console.log("Sending chat. Chat does not exist")

            // Creating chat
            let key = await createChat(this.props._user.uid, this.props.route.params.uid)

            console.log(key)

            // Set up listener
            var infoArray = []

            database()
                .ref('chats/' + key + '/messages')
                .on('value', snapshot => {
                    const messageObject = snapshot.val()

                    console.log(key)

                    console.log(messageObject)

                    if (messageObject) {

                        infoArray = []

                        let messageKeys = Object.keys(messageObject)

                        // For each key, add it to head of array.
                        messageKeys.map((key) => {
                            infoArray.push(messageObject[key])
                        })

                        // Sort array based on message sent time
                        infoArray.sort((a, b) => (a.messageSentTime < b.messageSentTime) ? 1 : -1)

                        this.setState({
                            chatExists: true,
                            chatKey: key,
                            messages: infoArray
                        })

                        // return infoArray
                    } else {
                        console.log("Error.")
                    }
                })

            // send message to chat
            this.sendMessageCB(this.state.currentInput, key)

            console.log("ID:" + this.props._user.uid)
            console.log("Chat Key:" + key)


            let messageArray = this.state.messages

            let messageObject = {
                chatID: this.state.chatKey,
                messageContent: this.state.currentInput,
                messageSentTime: Date.now(),
                senderID: this.props.profile.uid,
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
    sendMessageCB(message, chat) {
        // sendMessage(id, message, chat, this.props.route.params.id, this.props.route.params.myUID, this.props.route.params.uid)
        sendMessage(message, chat, this.props.route.params.myUID, this.props.route.params.uid)
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
                        otherUID={this.props.route.params.uid}
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
                            otherUID={this.props.otherUID}
                            // id={this.props.id}
                            message={item} />
                    }
                    keyExtractor={(item, index) => index.toString()}
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
        console.log(this.props)
    }

    isMyMessage = () => {
        return this.props.message.senderUID === this.props.uid
    }

    render() {
        return (
            <View style={[styles.message, {
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