// import firebase from 'firebase/app'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { getUser, getOppositeUserType, getUserType } from './User.js';
import { getProfile } from './Profile.js';



// Creates a new chat instance.
// Accepts two string values representing 
// two different user ids.
export async function createChat(uid1, uid2) {
    var newChatKey = database().ref().child('chats').push().key;

    var updates = {}

    // Retrieve users
    let user1 = await getUser(uid1)
    let user2 = await getUser(uid2)

    // Find user type
    let user1Type = getUserType(user1)
    let user2Type = getUserType(user2)

    updates['users/' + uid1 + '/chats/' + newChatKey] = true
    updates['users/' + uid2 + '/chats/' + newChatKey] = true
    updates['chats/' + newChatKey + "/members/" + uid1] = true
    updates['chats/' + newChatKey + "/members/" + uid2] = true
    updates['profiles/' + user2Type + '/' + uid2 + '/chats/' + newChatKey] = true
    updates['profiles/' + user1Type + '/' + uid1 + '/chats/' + newChatKey] = true

    database().ref().update(updates)

    return newChatKey
}

// Accepts two string values representing two different 
// user ids and checks whether a chat instance exists 
// between both users already. 
export async function chatExists(yourID, otherID) {
    // check current users' groups, if both have the same key already return true
    let user1 = await getUser(yourID)
    let user2 = await getUser(otherID)

    return new Promise((resolve, reject) => {


        // Check if both users have valid chats
        if (user1.chats && user2.chats) {

            let userOneKeys = Object.keys(user1.chats)
            let userTwoKeys = Object.keys(user2.chats)

            userOneKeys.forEach((key) => {
                userTwoKeys.forEach((key2) => {
                    if (key === key2) {
                        console.log(key)
                        resolve(key)
                    }
                })
            })

            resolve("false")

        }
    })
}


// Accepts a user ID and retrieves all chat instances associated with that user
// and returns it as a sorted array 
export async function getAllChats(id) {
    let user = await getUser(id)
    let userType = getUserType(user)

    let profile = await getProfile(id, userType)

    let chats = profile.chats

    let chatArray = []


    if (chats) {
    
        let chatKeys = Object.keys(chats)
       
        console.log(chats)
        console.log(chatKeys)

        // // For each key, find the most recent chat message
        for (const key of chatKeys) {
            let ref = database().ref('chats/' + key)
            let snapshot = await ref.once('value')

            let snapshotItem = snapshot.val()
            console.log(snapshotItem)
            chatArray.unshift(snapshotItem)

        }
        return chatArray
    }
    
    return null
}

// export async function openChatListener(key) {
//     console.log("Opening chat listener")

//     var infoArray = []

//     database()
//         .ref('chats/' + key + '/messages')
//         .on('value', snapshot => {
//             const messageObject = snapshot.val()

//             if (messageObject) {

//                 let messageKeys = Object.keys(messageObject)

//                 // For each key, add it to head of array.
//                 messageKeys.map((key) => {
//                 infoArray.push(messageObject[key])
//                 })

//                 // Sort array based on message sent time
//                 infoArray.sort((a, b) => (a.messageSentTime < b.messageSentTime) ? 1 : -1)

//                 // return infoArray
//             } else {
//                 console.log("Error.")
//             }
//         })

//     console.log(infoArray)

//     return infoArray
// }

export async function closeChatListener(key) {
    database()
        .ref('chats/' + key + '/messages')
        .off()

    console.log("Closing chat listener")
}