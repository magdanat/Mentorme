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

    let user1Profile = await getProfile(uid1)
    let user2Profile = await getProfile(uid2)

    // Find user type
    let user1Type = getUserType(user1)
    let user2Type = getUserType(user2)

    console.log(user1)
    console.log(user2)

    console.log(user1Profile)
    console.log(user2Profile)

    let user1Object = {
        uri: user1Profile.uri,
        fullName: user1Profile.fullName
    }

    let user2Object = {
        uri: user2Profile.uri,
        fullName: user2Profile.fullName
    }


    updates['users/' + uid1 + '/chats/' + newChatKey] = true
    updates['users/' + uid2 + '/chats/' + newChatKey] = true

    updates['chats/' + newChatKey + "/members/" + user1Profile.id] = user1Object
    updates['chats/' + newChatKey + "/members/" + user2Profile.id] = user2Object

    updates['profiles/' + user2Type + '/' + uid2 + '/chats/' + newChatKey] = true
    updates['profiles/' + user1Type + '/' + uid1 + '/chats/' + newChatKey] = true

    database().ref().update(updates)

    return newChatKey
}

// Accepts two string values representing two different 
// user ids and checks whether a chat instance exists 
// between both users already. 
export async function chatExists(id1, id2) {
    // check current users' groups, if both have the same key already return true

    let user1 = await getProfile(id1)
    let user2 = await getProfile(id2)

    return new Promise((resolve, reject) => {


        // Check if both users have valid chats
        if (user1.chats && user2.chats) {

            let userOneKeys = Object.keys(user1.chats)
            let userTwoKeys = Object.keys(user2.chats)

            userOneKeys.forEach((key) => {
                userTwoKeys.forEach((key2) => {
                    if (key === key2) {
                        console.log(key)
                        console.log(key2)
                        resolve(key)
                    }
                })
            })

            resolve("false")

        }

        resolve("false")

    })
}


// Accepts a user ID and retrieves all chat instances associated with that user
// and returns it as a sorted array 
export async function getAllChats(id) {
    let user = await getUser(id)
    let userType = getUserType(user)
    let profile = await getProfile(id)
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

            console.log(key)



            let snapshotItem = snapshot.val()

            if (snapshotItem) {
                console.log(snapshotItem)
                chatArray.unshift(snapshotItem)
            }

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