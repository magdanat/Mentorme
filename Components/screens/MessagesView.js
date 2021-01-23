import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, FlatList, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Platform } from "react-native"

import { chatExists, createChat } from '../models/Chat.js';
import { sendMessage, retrieveMessages } from '../models/Message.js'



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
        console.log(this.props)
        // Get all messages if there are any
        // wait for user to send message
        // if user sends message put it in the chatbox

        // if new messa
        this.chatExistsCB(this.props._user.uid, this.props.route.params.uid)
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    async chatExistsCB(id1, id2) {
        let chatKey = await chatExists(id1, id2)

        // chat exists between users
        if (chatKey) {
            let chatMessages = await retrieveMessages(chatKey)

            console.log("Retrieving chat messages")
            console.log(chatMessages)
            // let chatArray = Array.from(chatMessages)

        // retrieve all messages and sort them by oldest to newest
            this.setState({
                chatExists: true,
                chatKey: chatKey,
                messages: chatMessages
            })
        // let user know that chat doesn't exist 
        } else {
            this.setState({
                chatExists: false
            })
        }
    }

    setMessage(event) {
        this.setState((state) => {
            state.currentInput = event
            return state
        })
    }

    // TODO: 

    async send(event) {
        event.preventDefault()
        if (this.state.chatExists) {
            this.sendMessageCB(this.props._user.uid, this.state.currentInput, this.state.chatKey)

            let messageArray = this.state.messages

            let messageObject = {
                senderID: this.props._user.uid,
                messageSentTime: Date.now(),
                messageContent: this.state.currentInput,
                chatID: this.state.chatKey,
            }

            messageArray.unshift(messageObject)

            this.setState({
                messages: messageArray
            })

        } else {

            // Creating chat
            let key = await createChat(this.props._user.uid, this.props.route.params.uid)

            // send message to chat
            this.sendMessageCB(this.props._user.uid, this.state.currentInput, key)

            let messageArray = this.state.messages
            
            let messageObject = {
                chatID: this.state.chatKey,
                messageContent: this.state.currentInput,
                messageSentTime: Date.now(),
                senderID: this.props._user.uid,
                senderName: "Test",
                receiverName: this.props.route.params.name,
            }

            messageArray.unshift(messageObject)

            this.setState({
                chatExists: true,
                chatKey: key,
                messages: messageArray
            })

        }
        this.textInput.clear()
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

                {/* Suggestions/Tooltips */}
                <View>

                </View>

                {/* TextInput */}
                <KeyboardAvoidingView 
                    behavior={Platform.OS == "ios" ? "padding": "height"}
                    style={styles.messageInputContainer}>
                        <TextInput
                            ref={input => { this.textInput = input}}
                            style={styles.textInputContainer}
                            multiline
                            onChangeText={(e) => this.setMessage(e)}
                            placeholder="Type a message"/>
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
                            message={item}/>
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
        // console.log("Loading message!")
        // console.log(this.props)
        // var dateTest = new Date(parseInt(this.props.message[1].messageSentTime, 10))
        // console.log(dateTest.toString('MM/dd/yy HH:mm:ss'))
        // console.log(this.props.message[1].messageContent)
    }

    isMyMessage = () => {
        return this.props.message.senderID === this.props.uid
    }

    render() {
        return (
            <View style={[styles.message, {
                backgroundColor: this.isMyMessage() ? '#fbc015' : 'light-grey',
                borderColor: this.isMyMessage() ? '#fbc015' : 'grey',
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
        flex: 6,
        // backgroundColor: "blue",
    },
    messageContainerTwo: {
        padding: 10,
        margin: 10,
    },  
    message: {
        borderWidth: 1,
        borderRadius: 15,
        // borderColor: 'grey',
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