// import firebase from 'firebase/app'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { getUser } from './User.js';

// Creates a new chat instance.
// Accepts two string values representing 
// two different user ids.
export async function createChat(uid1, uid2) {
    var newChatKey = database().ref().child('chats').push().key;

    var updates = {}

    updates['users/' + uid1 + '/chats/' + newChatKey] = true
    updates['users/' + uid2 + '/chats/' + newChatKey] = true
    updates['chats/' + newChatKey + "/members/" + uid1] = true
    updates['chats/' + newChatKey + "/members/" + uid2] = true

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