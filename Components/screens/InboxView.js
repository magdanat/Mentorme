import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from "react-native"

import { getAllChats } from '../models/Chat.js';


// TODO: 
// Need to set up an active listener when component mounts, right now,
// only mounts once and never listens for updates because a listener isn't set up.
// Will only retrieve information when first mounts
export class InboxView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			chats: []
		}
	}

	componentDidMount() {
		console.log(this.props)
		this.getChatsCB()
		this.subscription = this.props.navigation.addListener(
			'focus',
			() => {
				this.getChatsCB()
			}
		)
	}

	componentDidUpdate() {
		console.log(this.state)
	}

	componentWillUnmount() {
		this.subscription()
	}

	async getChatsCB() {
		let chats = await getAllChats(this.props._user.uid)

		console.log("test")

		if (chats) {
			this.setState({
				chats: chats
			})
		} else {
			this.setState({
				chats: []
			})
		}
	}

	render() {
		return (
			<View style={styles.container}>
				{/* Header Content
					Edit, Profile Name, Settings */}
				<View>
					<View style={styles.titleContainer}>
						{/* Name */}
						<Text>Inbox</Text>
	
					</View>
				</View>
	
				{/* Messages */}
				{/* Shows all most recent messages sent from that user */}
				<View>
					<View style={styles.messagesContainer}>
						<Chats {...this.props}
							navigation={this.props.navigation}
							chats={this.state.chats}/>
					</View>
				</View>
			</View>
		);
	}
};

// Renders the list of all chats a user is in
// Should order messages by time received in descending order
// Should be  flatlist
class Chats extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log(this.props)
	}

	componentDidUpdate() {
		console.log(this.props)
	}

	render() {
		return (
			<View style={styles.chatsContainer}>
				<FlatList
					data={this.props.chats}
					renderItem={({ item }) => 
						<ChatContainer	{...this.props}
							navigation={this.props.navigation}
							chat={item}
							/>
					}
					/>
			</View>
		)
	}
}

// Renders a single chat, containing the most recent message and the user who sent it
class ChatContainer extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log("testcopnt")
		console.log(this.props)

		let uid = this.isMyID()

		// receiver is the other user
		if (uid) {
			this.setState({
				navigateID: this.props.chat.recentMessage.receiverID
			})
		// sender is the other user
		} else {
			this.setState({
				navigateID: this.props.chat.recentMessage.senderID
			})
		}
	}

	isMyID = () => {
		return this.props.chat.recentMessage.senderID === this.props.uid
	}

	render() {
		return (
			<View>
				<TouchableOpacity 
					onPress={(e) => this.props.navigation.navigate("MessagesView",
						{ uid : this.state.navigateID })}
					style={styles.chatContainer}>
				<Image 
					style={styles.chatProfilePicture}
					// Should render userProfile image as a prop
					source={require('../../assets/images/shape-17.png')} />
				<View style={styles.chatInfo}>
					<Text>
						Test
					</Text>

					{/* Should only show a maximum amount of the characters (prefereably words)... */}
					<Text>
						{this.props.chat.recentMessage.messageContent}
					</Text>
				</View>
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
	titleContainer: {
		marginTop: 25,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center"
	},
	// Container for entire list of recent messages
	messagesContainer: {
		flexDirection: "column",
		alignItems: "flex-start",
		// marginTop: 25,
		marginLeft: 45,
	},
	chatsContainer: {
		marginTop: 25,
	},
	chatProfilePicture: {
		height: 50,
		width: 50,
	},	
	chatInfo: {
		marginLeft: 25,
		marginTop: 5,
	},
	chatContainer: {
		
		flexDirection: 'row',
		paddingTop: 10,
		paddingBottom: 10,
	}
})