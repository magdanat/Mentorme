// import firebase from 'firebase/app'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { getUser } from './User.js';

// Accepts two user ids representing the sender and receiver, along with the
// chatID and message being sent. 
export async function sendMessage(uid, message, chat, uidTwo) {
    var newMessageKey = database().ref().child('messages').push().key;

    var messageData = {
        chatID: chat,
        messageID: newMessageKey,
        messageContent: message,
        messageSentTime: Date.now(),
        senderID: uid,
        receiverID: uidTwo,
    }

    var updates = {}

    updates['chats/' + chat + '/messages/' + newMessageKey] = messageData
    updates['messages/' + newMessageKey] = messageData
    updates['chats/' + chat + '/recentMessage'] = messageData

    console.log("Sending message...")

    return database().ref().update(updates);
}

// Accepts a chat key and retrieves all messages associated with that chat key
// and returns it
export async function retrieveMessages(chat) {
    let ref = database().ref('chats/' + chat + '/messages')
        // .orderByChild('messageSendTime')

    let snapshot = await ref.once('value')
    let snapshotItem = snapshot.val()

    let infoKeys = Object.keys(snapshotItem)
    // let infoMap = new Map()

    var infoArray = []
    
    // For each key, add it to head of array.
    infoKeys.map((key) => {
        infoArray.push(snapshotItem[key])
    })

    // Sort array based on message sent time
    infoArray.sort((a, b) => (a.messageSentTime < b.messageSentTime) ? 1 : -1)

    return infoArray
}