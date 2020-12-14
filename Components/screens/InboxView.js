import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native"


export const InboxView = ({ navigation }) => {
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
					<Chats />
				</View>
			</View>
		</View>
	);
};

// Renders the list of all chats a user is in
// Should order messages by time received in descending order
// Should be  flatlist
class Chats extends Component {
	orderChats = () => {

	}

	render() {
		return (
			<View style={styles.chatsContainer}>
				<ChatContainer name="Jordan"/>
				<ChatContainer name="Jack Johnson the"/>
				<ChatContainer name="Bill"/>
				<ChatContainer name="John"/>
			</View>
		)
	}
}

// Renders a single chat, containing the most recent message and the user who sent it
class ChatContainer extends Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
		return (
			<View>
				<TouchableOpacity style={styles.chatContainer}>
				<Image 
					style={styles.chatProfilePicture}
					// Should render userProfile image as a prop
					source={require('../../assets/images/shape-17.png')} />
				<View style={styles.chatInfo}>
					<Text>
						{/* {this.props.name} */}
						{this.props.name}
					</Text>

					{/* Should only show a maximum amount of the characters (prefereably words)... */}
					<Text>
						{/* {this.props.message} */}
						Hey, this is Test Name! Thanks 
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