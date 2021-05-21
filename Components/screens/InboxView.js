import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from "react-native"

import { getAllChats } from '../models/Chat.js';
import { getProfilePicture } from '../models/Profile.js';


// TODO: 
// Need to set up an active listener when component mounts, right now,
// only mounts once and never listens for updates because a listener isn't set up.
// Will only retrieve information when first mounts
export class InboxView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			chats: [],
			loading: false,
		}
	}

	componentDidMount() {
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

		if (chats) {
			this.setState({
				chats: chats
			})
		} else {

			console.log("No chats...")

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
							chats={this.state.chats}
							user={this.props._user}/>
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
	}

	render() {
		return (
			<View style={styles.chatsContainer}>
				<FlatList
					data={this.props.chats}
					renderItem={({ item }) => 
						<ChatContainer
							profile={this.props.profile}
							navigation={this.props.navigation}
							chat={item}
							user={this.props.user}
							/>
					}
					keyExtractor={(item, index) => index.toString()}
					/>
			</View>
		)
	}
}

// Renders a single chat, containing the most recent message and the user who sent it
// Currently only supports two-person chat
class ChatContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			uri: false,
		}
	}

	componentDidMount() {

		console.log("In chat container")
		console.log(this.props)

		var navigateUID
		var navigateID

		let uid = this.isMyID()
		let myProfile = this.isMyProfile()

		// receiver is the other user
		if (uid) {
			navigateUID = this.props.chat.recentMessage.receiverUID
			navigateID = this.props.chat.recentMessage.receiverID
		// sender is the other user
		} else {
			navigateUID = this.props.chat.recentMessage.senderUID
			navigateID = this.props.chat.recentMessage.senderID
		}

		this.updateChatCB(navigateUID, navigateID, myProfile)
	}

	componentDidUpdate() {
		console.log("Chat container111")
		console.log(this.state)
	}

	async updateChatCB(uid, id, name) {
		let uri = await getProfilePicture(uid)


		console.log("this yo uri?")
		console.log(uri)

		this.setState({
			name: name,
			navigateUID: uid,
			navigateID: id,
			uri: uri
		})
	}

	isMyID = () => {
		return this.props.chat.recentMessage.senderUID === this.props.user.uid
	}

	isMyProfile = () => {
		let keys = Object.keys(this.props.chat.members)
		let key

		// Result is first one
		if (this.props.user.uid === keys[0]) {
			key = keys[1]
		} else {
			key = keys[0]
		}

		let name = this.props.chat.members[key].fullName

		return name
	}

	render() {

		var profileImage

		if (this.state.uri) {
			profileImage = (
				<Image
				style={styles.chatProfilePicture}
				source={{uri: this.state.uri}} />
			)
		} else {
			profileImage = (
				<Image
				style={styles.chatProfilePicture}
				source={require('../../assets/images/shape-17.png')} />
			)
		}

		return (
			<View>
				<TouchableOpacity 
					onPress={(e) => this.props.navigation.navigate("MessagesView",
						{ uid : this.state.navigateUID,
							id: this.state.navigateID,
							myUID: this.props.user.uid,
							name: this.state.name })}
					style={styles.chatContainer}>
				
				{profileImage}

				<View style={styles.chatInfo}>
					<Text>
						{this.state.name}
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